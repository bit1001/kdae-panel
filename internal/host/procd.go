package host

import (
	"bufio"
	"context"
	"errors"
	"fmt"
	"math"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"

	"github.com/tuoro/kdae-panel/internal/command"
)

// procdManager 通过 procd (/etc/init.d) 管理服务，适用于 OpenWrt/ImmortalWrt。
type procdManager struct {
	serviceName string
	runner      command.Runner
	timeout     time.Duration
}

const initDir = "/etc/init.d"

func newProcdManager(serviceName string, runner command.Runner, timeout time.Duration) (Manager, error) {
	if runner == nil {
		return nil, errors.New("命令执行器不能为空")
	}
	if timeout <= 0 {
		timeout = defaultTimeout
	}
	return &procdManager{
		serviceName: serviceName,
		runner:      runner,
		timeout:     timeout,
	}, nil
}

func (m *procdManager) Status(ctx context.Context) (Status, error) {
	pid, err := m.findPID(ctx)
	if err != nil {
		return Status{
			Name:        m.serviceName,
			ActiveState: "inactive",
			SubState:    "dead",
		}, nil
	}
	status := Status{
		Name:        m.serviceName,
		ActiveState: "active",
		SubState:    "running",
		MainPID:     pid,
	}
	if mem := readProcField(pid, "VmRSS:"); mem != "" {
		status.MemoryBytes = parseMemoryKB(mem)
	}
	if cmdline := readProcCmdline(pid); cmdline != "" {
		status.ExecStartPath = cmdline
	}
	if cpuTime := readProcCPUTime(pid); cpuTime > 0 {
		status.CPUUsageNanoseconds = cpuTime
	}
	return status, nil
}

func (m *procdManager) Action(ctx context.Context, action Action) error {
	switch action {
	case ActionStart, ActionStop, ActionRestart:
	case ActionDaemonReload:
		return nil
	default:
		return fmt.Errorf("不支持的服务动作 %q", action)
	}
	initScript := filepath.Join(initDir, m.serviceName)
	result, err := m.runFor(ctx, actionTimeout, initScript, string(action))
	if err != nil {
		return fmt.Errorf("执行 procd %s: %s", action, command.Describe(err, result))
	}
	return nil
}

func (m *procdManager) RestartSelf(ctx context.Context) error {
	initScript := filepath.Join(initDir, "kdae-panel")
	result, err := m.runFor(ctx, actionTimeout, initScript, "restart")
	if err != nil {
		return fmt.Errorf("请求重启面板: %s", command.Describe(err, result))
	}
	return nil
}

const daeLogFile = "/var/log/dae/dae.log"

func (m *procdManager) Logs(ctx context.Context, limit int) ([]LogEntry, error) {
	if limit <= 0 {
		limit = 200
	}
	if limit > maxLogLines {
		limit = maxLogLines
	}
	// dae 通常写文件日志而非 syslog，优先读取日志文件。
	if m.serviceName == "dae" {
		if entries := readDaeLogFile(daeLogFile, limit); len(entries) > 0 {
			return entries, nil
		}
	}
	result, err := m.run(ctx, "logread", "-l", strconv.Itoa(limit))
	if err != nil {
		return nil, fmt.Errorf("读取 logread 日志: %s", command.Describe(err, result))
	}
	return parseLogread(result.Stdout, m.serviceName), nil
}

// readDaeLogFile 从 dae 日志文件读取最新的 N 行。
// dae 日志格式为 key=value 风格，例如：
//
//	level=info msg="10.0.0.2:54321 <-> example.com:443" dialer=node1 ...
func readDaeLogFile(path string, limit int) []LogEntry {
	f, err := os.Open(path)
	if err != nil {
		return nil
	}
	defer f.Close()

	var lines []string
	scanner := bufio.NewScanner(f)
	buf := make([]byte, 0, 64*1024)
	scanner.Buffer(buf, 1024*1024)
	for scanner.Scan() {
		lines = append(lines, scanner.Text())
	}
	if len(lines) == 0 {
		return nil
	}
	if len(lines) > limit {
		lines = lines[len(lines)-limit:]
	}

	entries := make([]LogEntry, 0, len(lines))
	for _, line := range lines {
		entries = append(entries, parseDaeLogLine(line))
	}
	return entries
}

// parseDaeLogLine 解析单行 dae 日志。
func parseDaeLogLine(line string) LogEntry {
	entry := LogEntry{
		Timestamp: time.Now().UTC(),
		Level:     "info",
		Priority:  6,
		Unit:      "dae",
	}
	rest := line
	for rest != "" {
		rest = strings.TrimSpace(rest)
		if rest == "" {
			break
		}
		eq := strings.IndexByte(rest, '=')
		if eq < 0 {
			break
		}
		key := rest[:eq]
		rest = rest[eq+1:]
		if rest == "" {
			break
		}
		var value string
		if rest[0] == '"' {
			end := strings.IndexByte(rest[1:], '"')
			if end < 0 {
				value = rest[1:]
				rest = ""
			} else {
				value = rest[1 : end+1]
				rest = rest[end+2:]
			}
		} else {
			space := strings.IndexByte(rest, ' ')
			if space < 0 {
				value = rest
				rest = ""
			} else {
				value = rest[:space]
				rest = rest[space+1:]
			}
		}
		switch key {
		case "level":
			entry.Level = value
		case "msg":
			entry.Message = value
		case "time":
			if ts, err := time.Parse(time.RFC3339Nano, value); err == nil {
				entry.Timestamp = ts.UTC()
			}
		}
	}
	switch entry.Level {
	case "error", "err":
		entry.Priority = 3
	case "warning", "warn":
		entry.Priority = 4
	case "info":
		entry.Priority = 6
	case "debug":
		entry.Priority = 7
	case "fatal":
		entry.Priority = 2
	}
	return entry
}

func (m *procdManager) findPID(ctx context.Context) (int, error) {
	result, err := m.run(ctx, "pidof", m.serviceName)
	if err != nil {
		return 0, err
	}
	pidStr := strings.TrimSpace(result.Stdout)
	if pidStr == "" {
		return 0, fmt.Errorf("未找到进程")
	}
	pidStr = strings.Fields(pidStr)[0]
	pid, err := strconv.Atoi(pidStr)
	if err != nil {
		return 0, fmt.Errorf("解析 PID %q: %w", pidStr, err)
	}
	return pid, nil
}

func (m *procdManager) run(ctx context.Context, name string, args ...string) (command.Result, error) {
	return m.runFor(ctx, m.timeout, name, args...)
}

func (m *procdManager) runFor(ctx context.Context, timeout time.Duration, name string, args ...string) (command.Result, error) {
	commandCtx, cancel := context.WithTimeout(ctx, timeout)
	defer cancel()
	return m.runner.Run(commandCtx, name, args...)
}

func readProcField(pid int, field string) string {
	content, err := os.ReadFile(filepath.Join("/proc", strconv.Itoa(pid), "status"))
	if err != nil {
		return ""
	}
	for _, line := range strings.Split(string(content), "\n") {
		if strings.HasPrefix(line, field) {
			return strings.TrimSpace(strings.TrimPrefix(line, field))
		}
	}
	return ""
}

func readProcCmdline(pid int) string {
	content, err := os.ReadFile(filepath.Join("/proc", strconv.Itoa(pid), "cmdline"))
	if err != nil {
		return ""
	}
	parts := strings.SplitN(string(content), "\x00", 2)
	if len(parts) == 0 || parts[0] == "" {
		return ""
	}
	return parts[0]
}

func readProcCPUTime(pid int) uint64 {
	content, err := os.ReadFile(filepath.Join("/proc", strconv.Itoa(pid), "stat"))
	if err != nil {
		return 0
	}
	fields := strings.Fields(string(content))
	if len(fields) < 15 {
		return 0
	}
	utime, err := strconv.ParseUint(fields[13], 10, 64)
	if err != nil {
		return 0
	}
	stime, err := strconv.ParseUint(fields[14], 10, 64)
	if err != nil {
		return 0
	}
	jiffyNsec := uint64(10_000_000)
	return (utime + stime) * jiffyNsec
}

func parseMemoryKB(value string) uint64 {
	value = strings.TrimSpace(value)
	value = strings.TrimSuffix(value, "kB")
	value = strings.TrimSuffix(value, "KB")
	value = strings.TrimSpace(value)
	kb, err := strconv.ParseUint(value, 10, 64)
	if err != nil {
		return 0
	}
	if kb > math.MaxUint64/1024 {
		return 0
	}
	return kb * 1024
}

// parseLogread 解析 logread 输出，过滤出指定服务的日志。
//
// logread 输出格式示例：
//
//	2025-01-15 10:30:45 host dae.info dae[1234]: message
//	Jan 15 10:30:45 host dae[1234]: message
func parseLogread(output, serviceName string) []LogEntry {
	entries := make([]LogEntry, 0)
	scanner := bufio.NewScanner(strings.NewReader(output))
	for scanner.Scan() {
		line := strings.TrimSpace(scanner.Text())
		if line == "" {
			continue
		}
		if entry := parseLogreadLine(line, serviceName); entry != nil {
			entries = append(entries, *entry)
		}
	}
	return entries
}

func parseLogreadLine(line, serviceName string) *LogEntry {
	tag := serviceName + "["
	idx := strings.Index(line, tag)
	if idx < 0 {
		return nil
	}
	entry := &LogEntry{Unit: serviceName}
	entry.Timestamp = extractLogreadTimestamp(line[:idx])
	rest := line[idx+len(tag):]
	pidEnd := strings.IndexByte(rest, ']')
	if pidEnd < 0 {
		return entry
	}
	entry.PID = rest[:pidEnd]
	afterPID := rest[pidEnd+1:]
	if len(afterPID) > 0 && afterPID[0] == ':' {
		afterPID = afterPID[1:]
	}
	afterPID = strings.TrimSpace(afterPID)
	entry.Message = afterPID
	entry.Level = extractDaeLogLevel(afterPID)
	return entry
}

// extractLogreadTimestamp 从 logread 行前缀中提取时间戳。
func extractLogreadTimestamp(prefix string) time.Time {
	prefix = strings.TrimSpace(prefix)
	parts := strings.Fields(prefix)
	if len(parts) < 2 {
		return time.Now().UTC()
	}
	lastTwo := parts[len(parts)-2] + " " + parts[len(parts)-1]
	for _, fmt := range []string{"2006-01-02 15:04:05", "Jan 2 15:04:05", "Jan _2 15:04:05"} {
		if ts, err := time.Parse(fmt, lastTwo); err == nil {
			return ts.UTC()
		}
	}
	return time.Now().UTC()
}

func extractDaeLogLevel(msg string) string {
	// dae 日志格式：level=warning msg="..."
	prefix := "level="
	idx := strings.Index(msg, prefix)
	if idx < 0 {
		return "info"
	}
	rest := msg[idx+len(prefix):]
	space := strings.IndexByte(rest, ' ')
	if space < 0 {
		space = len(rest)
	}
	level := rest[:space]
	switch level {
	case "error", "err":
		return "err"
	case "warning", "warn":
		return "warning"
	case "info":
		return "info"
	case "debug":
		return "debug"
	case "fatal":
		return "err"
	}
	return "info"
}

var _ Manager = (*procdManager)(nil)
