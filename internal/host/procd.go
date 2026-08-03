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
		UnitPath:    filepath.Join(initDir, m.serviceName),
	}
	// 优先读 cgroup：语义与 systemd 版一致（memory.current 含 page cache，
	// cpu.stat 的 usage_usec 覆盖全部线程/进程）。memory 控制器在 ImmortalWrt
	// 上默认未启用，读不到时回退到 /proc 的 VmRSS / utime+stime。
	if mem := cgroupMemoryBytes(pid); mem > 0 {
		status.MemoryBytes = mem
	} else if mem := readProcField(pid, "VmRSS:"); mem != "" {
		status.MemoryBytes = parseMemoryKB(mem)
	}
	if tasks := readProcField(pid, "Threads:"); tasks != "" {
		if t, err := strconv.ParseUint(strings.TrimSpace(tasks), 10, 64); err == nil {
			status.Tasks = t
		}
	}
	if cmdline := readProcCmdline(pid); cmdline != "" {
		status.ExecStartPath = cmdline
	}
	if cpuTime := cgroupCPUTime(pid); cpuTime > 0 {
		status.CPUUsageNanoseconds = cpuTime
	} else if cpuTime := readProcCPUTime(pid); cpuTime > 0 {
		status.CPUUsageNanoseconds = cpuTime
	}
	return status, nil
}

func (m *procdManager) Action(ctx context.Context, action Action) error {
	switch action {
	case ActionStart, ActionStop, ActionRestart, ActionEnable, ActionDisable:
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

func (m *procdManager) Interfaces(ctx context.Context) ([]NetworkInterface, error) {
	return queryInterfaces(ctx)
}

func (m *procdManager) Logs(ctx context.Context, limit int) ([]LogEntry, error) {
	if limit <= 0 {
		limit = 200
	}
	if limit > MaxLogLines {
		limit = MaxLogLines
	}
	result, err := m.run(ctx, "logread", "-l", strconv.Itoa(limit))
	if err != nil {
		return nil, fmt.Errorf("读取 logread 日志: %s", command.Describe(err, result))
	}
	return parseLogread(result.Stdout, m.serviceName), nil
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
	return m.selectPID(strings.Fields(pidStr))
}

// selectPID 从 pidof 返回的候选 PID 中选出 procd 管理的服务主进程。
//
// pidof 可能同时返回面板自身为探测而临时启动的同名子进程（如 "dae --version"），
// 它们只是瞬时存在，不是 procd 管理的服务主进程。procd 管理的实例其父进程是
// PID 1，优先选择它；都不满足时回退到第一个合法候选。
func (m *procdManager) selectPID(fields []string) (int, error) {
	readComm := func(pid int) string {
		content, err := os.ReadFile(filepath.Join("/proc", strconv.Itoa(pid), "comm"))
		if err != nil {
			return ""
		}
		return strings.TrimSuffix(strings.TrimSpace(string(content)), "\n")
	}
	readPPid := func(pid int) string {
		return readProcField(pid, "PPid:")
	}
	return selectProcdPID(fields, m.serviceName, readComm, readPPid)
}

// selectProcdPID 为 selectPID 的纯函数实现，便于单测。
func selectProcdPID(fields []string, serviceName string, readComm func(int) string, readPPid func(int) string) (int, error) {
	var fallback int
	for _, field := range fields {
		pid, err := strconv.Atoi(field)
		if err != nil {
			return 0, fmt.Errorf("解析 PID %q: %w", field, err)
		}
		// 校验进程名是否匹配，避免 pidof 误匹配（如 busybox pidof 可能因可执行文件路径含关键字而返回无关进程）。
		if name := readComm(pid); name != "" && name != serviceName {
			continue
		}
		if fallback == 0 {
			fallback = pid
		}
		if readPPid(pid) == "1" {
			return pid, nil
		}
	}
	if fallback == 0 {
		return 0, fmt.Errorf("PID %q 进程名与期望 %q 不匹配", strings.Join(fields, " "), serviceName)
	}
	return fallback, nil
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
	raw := string(content)
	// /proc/pid/stat 格式: pid (comm) state ...  comm 可能含空格/括号，
	// 用 strings.Fields 会错位。找到最后一个 ')' 跳过 comm。
	rp := strings.LastIndex(raw, ") ")
	if rp < 0 {
		return 0
	}
	after := raw[rp+2:]
	fields := strings.Fields(after)
	// field 0=state, 1=ppid, 2=pgrp, ... 11=utime, 12=stime
	if len(fields) < 13 {
		return 0
	}
	utime, err := strconv.ParseUint(fields[11], 10, 64)
	if err != nil {
		return 0
	}
	stime, err := strconv.ParseUint(fields[12], 10, 64)
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

// cgroupCPUTime 读取进程所属 cgroup 的累计 CPU 使用时间（纳秒）。
//
// 语义与 systemd 版的 CPUUsageNSec 一致：cpu.stat 的 usage_usec 覆盖 cgroup
// 内全部线程/进程，而 /proc/PID/stat 只含主线程，多线程进程会少算。读不到
// cgroup（内存控制器未启用只影响 memory，cpu 控制器默认开启）时返回 0。
func cgroupCPUTime(pid int) uint64 {
	usage, ok := cgroupField(pid, "cpu.stat", "usage_usec")
	if !ok {
		return 0
	}
	if usage > math.MaxUint64/1000 {
		return 0
	}
	return usage * 1000
}

// cgroupMemoryBytes 读取进程所属 cgroup 的当前内存占用（字节）。
//
// 语义与 systemd 版的 MemoryCurrent 一致：memory.current 含 page cache 与
// 内核内存。ImmortalWrt 默认未启用 memory 控制器，此时读不到、返回 0，
// 由调用方回退到 VmRSS。
func cgroupMemoryBytes(pid int) uint64 {
	value, ok := cgroupField(pid, "memory.current", "")
	if !ok {
		return 0
	}
	return value
}

// cgroupField 在进程所属 cgroup 的指定文件里查找键值对；key 为空时把文件
// 内容当作单个数值返回（如 memory.current）。
//
// 路径来自 /proc/PID/cgroup 的 "0::/services/dae/instance1" 形式，
// 对应 /sys/fs/cgroup/services/dae/instance1。无法解析时返回 ok=false，
// 调用方必须回退到 /proc 统计。
func cgroupField(pid int, fileName, key string) (uint64, bool) {
	content, err := os.ReadFile(filepath.Join("/proc", strconv.Itoa(pid), "cgroup"))
	if err != nil {
		return 0, false
	}
	dir := parseCgroupDir(string(content))
	if dir == "" {
		return 0, false
	}
	data, err := os.ReadFile(filepath.Join("/sys/fs/cgroup", dir, fileName))
	if err != nil {
		return 0, false
	}
	if key == "" {
		value, err := strconv.ParseUint(strings.TrimSpace(string(data)), 10, 64)
		if err != nil {
			return 0, false
		}
		return value, true
	}
	return parseCgroupField(string(data), key)
}

// parseCgroupDir 从 /proc/PID/cgroup 内容里提取 cgroup v2 绝对路径。
// 形如 "0::/services/dae/instance1"；可能有多行，取第一个 v2 路径。
func parseCgroupDir(content string) string {
	for _, line := range strings.Split(content, "\n") {
		line = strings.TrimSpace(line)
		if !strings.HasPrefix(line, "0::") {
			continue
		}
		dir := strings.TrimSpace(strings.TrimPrefix(line, "0::"))
		if dir != "" && dir != "/" {
			return dir
		}
	}
	return ""
}

// parseCgroupField 从 cgroup 文件的键值对内容里取出指定键的数值。
// 形如 "usage_usec 123456\nuser_usec 654321"。
func parseCgroupField(content, key string) (uint64, bool) {
	for _, line := range strings.Split(content, "\n") {
		fields := strings.Fields(line)
		if len(fields) == 2 && fields[0] == key {
			value, err := strconv.ParseUint(fields[1], 10, 64)
			if err != nil {
				return 0, false
			}
			return value, true
		}
	}
	return 0, false
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
