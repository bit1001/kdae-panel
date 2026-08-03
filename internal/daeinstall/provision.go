package daeinstall

import (
	"bytes"
	"context"
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/tuoro/kdae-panel/internal/atomicfile"
	"github.com/tuoro/kdae-panel/internal/host"
	"github.com/tuoro/kdae-panel/internal/upstream"
)

// SeedConfig 是首次安装时写入的种子配置。
//
// 它带一套可直接编辑的默认 DNS，但不声明任何网卡，因此 dae 起来后不劫持任何
// 流量。这一点对首次安装至关重要：
// dae 是透明代理，在一台你正通过 SSH 或反向代理访问的机器上，配置不当地启动
// 会直接切断你自己的连接。装好之后由用户在配置页写真正的规则，再手动启动。
const SeedConfig = `global {}

dns {
  upstream {
    alidns: 'udp://223.5.5.5:53'
    googledns: 'tcp+udp://8.8.8.8:53'
  }
  routing {
    request {
      qname(geosite:cn) -> alidns
      fallback: googledns
    }
    response {
      upstream(googledns) -> accept
      fallback: accept
    }
  }
}

routing {}`

const (
	defaultUnitDirectory = "/etc/systemd/system"
	// 与面板自己写配置时的权限一致（SECURITY.md 也是这么承诺的）：
	// dae 以 root 运行，配置里可能含订阅地址与节点凭据，不该让同组可读。
	configMode = 0o600
	geoMode    = 0o644
	unitMode   = 0o644
)

// unitDirectory 返回 systemd 单元的落地目录，测试会覆盖它。
func (i *Installer) unitDirectory() string {
	if i.unitDir != "" {
		return i.unitDir
	}
	return defaultUnitDirectory
}

// Provision 描述首次安装的可行性与将要落地的文件。
type Provision struct {
	// Possible 为假表示还不能首次安装，Blockers 说明原因。
	Possible bool `json:"possible"`
	// Installed 为真表示已经有 dae 服务，应当走升级而不是首次安装。
	Installed  bool     `json:"installed"`
	BinaryPath string   `json:"binaryPath"`
	ConfigPath string   `json:"configPath"`
	UnitPath   string   `json:"unitPath"`
	Blockers   []string `json:"blockers,omitempty"`
	Notes      []string `json:"notes,omitempty"`
}

// Provision 检查首次安装的前置条件。
//
// 面板运行在 ProtectSystem=strict 的单元里，写不了没列进 ReadWritePaths 的目录。
// 与其在事务中途 EROFS，不如提前把缺哪个路径说清楚。
func (i *Installer) Provision(ctx context.Context) Provision {
	result := Provision{
		BinaryPath: i.binaryPath,
		ConfigPath: i.configPath,
		UnitPath:   filepath.Join(i.unitDirectory(), i.serviceUnit()),
	}
	// 状态查不出来，就不能断言"这台机器上没有 dae"。把查询失败当成绿灯，
	// 会让一次 systemctl 抽风变成一次无备份的覆盖安装。
	status, err := i.service.Status(ctx)
	if err != nil {
		result.Blockers = append(result.Blockers, fmt.Sprintf(
			"无法读取 %s 的状态，因而不能确认这台机器上是否已有 dae，已拒绝首次安装：%v",
			i.serviceUnit(), err))
		return result
	}
	if status.ExecStartPath != "" {
		if _, err := os.Stat(status.ExecStartPath); err == nil {
			result.Installed = true
			result.Blockers = append(result.Blockers,
				fmt.Sprintf("已存在 dae 服务（启动 %s），请使用版本切换而不是首次安装", status.ExecStartPath))
			return result
		}
		// 单元在、可执行文件不在。升级路径会说"目标不存在"，首次安装若也以
		// "已有服务"为由拒绝，面板就再没有任何办法修好这台机器。只要单元指向的
		// 正是面板要写的位置，就按首次安装把它补齐。
		if filepath.Clean(status.ExecStartPath) != i.binaryPath {
			result.Installed = true
			result.Blockers = append(result.Blockers, fmt.Sprintf(
				"服务单元指向的 %s 不存在，而面板配置的 dae 路径是 %s；"+
					"请把 KDAE_PANEL_DAE_BINARY 改成前者后重试",
				status.ExecStartPath, i.binaryPath))
			return result
		}
		result.Notes = append(result.Notes, fmt.Sprintf(
			"服务单元已存在，但它启动的 %s 不见了，本次安装会补齐这个文件", i.binaryPath))
	}
	if _, err := upstream.DetectPlatform(); err != nil {
		result.Blockers = append(result.Blockers, err.Error())
		return result
	}

	for _, directory := range []string{filepath.Dir(i.binaryPath), filepath.Dir(i.configPath), i.unitDirectory()} {
		if err := atomicfile.Writable(directory); err != nil {
			result.Blockers = append(result.Blockers, fmt.Sprintf(
				"面板无法写入 %s：%v；请在 kdae-panel.service 的 ReadWritePaths 中加入该目录",
				directory, err))
		}
	}
	if _, err := os.Stat(i.configPath); err == nil {
		result.Notes = append(result.Notes, fmt.Sprintf("%s 已存在，将保留不动", i.configPath))
	} else {
		result.Notes = append(result.Notes, fmt.Sprintf(
			"将写入不劫持任何流量的种子配置 %s，安装后需自行编写规则再启动", i.configPath))
	}
	// systemd 里没有 dae 服务，不代表这条路径上没有 dae。
	if _, err := os.Stat(i.binaryPath); err == nil {
		result.Notes = append(result.Notes, fmt.Sprintf(
			"%s 已存在但 systemd 里没有对应的服务；安装会先备份它再替换", i.binaryPath))
	}
	result.Notes = append(result.Notes, "安装完成后不会自动启动 dae：透明代理配置不当会切断你当前的连接")
	result.Possible = len(result.Blockers) == 0
	return result
}

func (i *Installer) serviceUnit() string {
	name := i.serviceName
	if name == "" {
		name = "dae"
	}
	if !strings.HasSuffix(name, ".service") {
		name += ".service"
	}
	return name
}

// FirstInstall 在还没有 dae 的机器上完成安装：
// 落地可执行文件、geo 数据、种子配置与 systemd 单元，然后重新加载 systemd。
//
// 刻意不启动服务。dae 是透明代理，用一份还没写规则的配置把它拉起来意义不大，
// 而万一配置有误又会切断管理员自己的连接；启动交给用户在服务控制页显式执行。
func (i *Installer) FirstInstall(ctx context.Context, bundle upstream.Bundle, source upstream.Source, ref, label string) (Status, error) {
	provision := i.Provision(ctx)
	if !provision.Possible {
		return Status{}, errors.New(strings.Join(provision.Blockers, "；"))
	}
	// 可执行文件是按条目名从 zip 里挑的；确认它真是 ELF，
	// 免得上游改了打包方式后装上一个文本文件，直到启动才发现。
	if err := assertELF(bundle.Binary); err != nil {
		return Status{}, err
	}
	// 单元冲突必须在动任何文件之前查出来。放到最后才查的话，二进制早已换掉，
	// 而报出来的错只谈单元——留下一台"装了一半、错误信息还答非所问"的机器。
	unit, unitInPlace, err := i.planUnit(bundle, provision.UnitPath)
	if err != nil {
		return Status{}, err
	}

	// 先放数据文件与配置，最后才放单元：单元一旦就位，服务就可被启动，
	// 此时它依赖的东西必须都已到位。
	if err := i.writeGeoAssets(bundle); err != nil {
		return Status{}, err
	}
	if err := i.writeSeedConfig(); err != nil {
		return Status{}, err
	}
	staged, cleanup, err := i.stage(bundle.Binary, i.binaryPath, binaryMode)
	if err != nil {
		return Status{}, err
	}
	committed := false
	defer func() {
		if !committed {
			cleanup()
		}
	}()
	if err := i.backupExistingBinary(bundle.Binary); err != nil {
		return Status{}, err
	}
	if err := atomicfile.Replace(staged, i.binaryPath); err != nil {
		return Status{}, fmt.Errorf("安装 dae 可执行文件: %w", err)
	}
	committed = true

	if !unitInPlace {
		if err := writeFileSynced(provision.UnitPath, []byte(unit), unitMode); err != nil {
			return Status{}, fmt.Errorf("写入服务单元: %w", err)
		}
	}
	if err := i.service.Action(ctx, host.ActionDaemonReload); err != nil {
		return Status{}, fmt.Errorf("重新加载 systemd 配置: %w", err)
	}

	state := &State{
		Source: source, Ref: ref, Label: label, Platform: bundle.Platform,
		SHA256: digestBytes(bundle.Binary),
	}
	state.InstalledAt = nowUTC()
	if report := i.newProbe(i.binaryPath).Inspect(ctx); report.Available {
		state.Version = report.Version
	}
	if err := i.writeState(state); err != nil {
		i.logger.Warn("记录 dae 安装状态失败", "error", err)
	}
	i.logger.Info("已完成 dae 首次安装", "source", source, "ref", ref, "binary", i.binaryPath)
	return i.Status(ctx), nil
}

// writeGeoAssets 把发布包自带的 geo 数据写进配置目录。
//
// dae 搜索 geo 文件时，配置文件所在目录的优先级最高，而该目录本来就在面板的
// ReadWritePaths 里，因此不必为此放宽沙箱，也不必另找下载源——这两个文件就在
// 已经通过 sha256 校验的同一个包里。
func (i *Installer) writeGeoAssets(bundle upstream.Bundle) error {
	directory := filepath.Dir(i.configPath)
	for name, content := range map[string][]byte{
		"geoip.dat":   bundle.GeoIP,
		"geosite.dat": bundle.GeoSite,
	} {
		if len(content) == 0 {
			continue
		}
		path := filepath.Join(directory, name)
		// 已存在就不动：用户可能自己维护着一份裁剪过或更新更勤的 geo 数据，
		// 悄悄用发布包里的版本盖掉它，会在下一次 dae 重启时才显形。
		if _, err := os.Stat(path); err == nil {
			continue
		} else if !os.IsNotExist(err) {
			return err
		}
		if err := writeFileSynced(path, content, geoMode); err != nil {
			return fmt.Errorf("写入 %s: %w", name, err)
		}
	}
	return nil
}

func (i *Installer) writeSeedConfig() error {
	if _, err := os.Stat(i.configPath); err == nil {
		return nil // 已有配置，绝不覆盖
	} else if !os.IsNotExist(err) {
		return err
	}
	seed := []byte(SeedConfig + "\n")
	if err := writeFileSynced(i.configPath, seed, configMode); err != nil {
		return fmt.Errorf("写入种子配置: %w", err)
	}
	return nil
}

// planUnit 渲染出最终要落盘的 systemd 单元，并判定它是否已经就位——但不写盘。
//
// 拆成"先算后写"是为了让冲突在事务的最前面暴露：这是唯一一处可能因为机器上
// 已有用户自建单元而中止的检查，必须赶在二进制被替换之前完成。
//
// 已存在的单元一律不覆盖，除非它与本次将要写入的内容逐字节相同——那说明它正是
// 上一轮安装留下的。少了这个例外，一旦 daemon-reload 失败，重试就会被自己写下
// 的单元永久挡住：systemd 还不认识它，所以预检仍认为没装，而写入又拒绝覆盖。
func (i *Installer) planUnit(bundle upstream.Bundle, path string) (string, bool, error) {
	if len(bundle.Unit) == 0 {
		return "", false, errors.New("发布包内没有 dae.service，无法创建服务单元")
	}
	rendered, err := i.render(string(bundle.Unit))
	if err != nil {
		return "", false, err
	}

	switch existing, err := os.ReadFile(path); {
	case err == nil && string(existing) == rendered:
		return rendered, true, nil // 上一轮已经写好，继续往下走
	case err == nil:
		// 内容不同，但它启动的已经是面板要装的那个文件——官方安装器写的单元、
		// 用户自己调过的单元都属于这种。它能把新装的二进制起起来，就没有理由
		// 为了统一格式去覆盖别人的文件。
		if execStartBinary(unitExecStart(string(existing))) == i.binaryPath {
			return string(existing), true, nil
		}
		return "", false, fmt.Errorf("%s 已存在且启动的不是 %s，面板不覆盖既有服务单元",
			path, i.binaryPath)
	case !os.IsNotExist(err):
		return "", false, err
	}
	return rendered, false, nil
}

// execStartBinary 取出 ExecStart 命令行里的可执行文件路径。
// systemd 允许在路径前加 -、@、+、! 之类的修饰前缀，要先剥掉。
func execStartBinary(execStart string) string {
	command, _, _ := strings.Cut(execStart, " ")
	command = strings.TrimLeft(command, "-@+!:")
	if command == "" {
		return ""
	}
	return filepath.Clean(command)
}

// backupExistingBinary 在目标位置已有文件时先留一份可回滚的副本。
//
// 走到这里说明 systemd 里查不到 dae 服务，但那条路径上完全可能已经躺着一个
// dae——上一轮失败留下的，或是用户用别的方式装的。无备份地覆盖它，等于在没有
// 任何退路的前提下毁掉一个可能正被使用的程序。
func (i *Installer) backupExistingBinary(replacement []byte) error {
	info, err := os.Stat(i.binaryPath)
	if err != nil {
		if os.IsNotExist(err) {
			return nil
		}
		return err
	}
	if !info.Mode().IsRegular() {
		return fmt.Errorf("%s 已存在且不是普通文件，面板拒绝替换它", i.binaryPath)
	}
	current, err := os.ReadFile(i.binaryPath)
	if err != nil {
		return err
	}
	// 与本次将要写入的完全相同，说明是上一轮安装的残留（daemon-reload 失败后重试）。
	// 备份它毫无意义，反而会把"上一版"记成新版本自己。
	if bytes.Equal(current, replacement) {
		return nil
	}
	if err := assertELF(current); err != nil {
		return fmt.Errorf("%s 已存在且不是 ELF 可执行文件，面板拒绝覆盖它：%w", i.binaryPath, err)
	}
	if err := writeFileSynced(i.backupPath, current, binaryMode); err != nil {
		return fmt.Errorf("备份 %s: %w", i.binaryPath, err)
	}
	// 被顶掉的那一版不是面板装的，没有账本；留着更旧的那份只会张冠李戴。
	_ = os.Remove(i.previousStatePath())
	return nil
}

// render 生成最终落盘的单元内容，并确认改写确实生效。
//
// 替换靠的是上游单元里那两个字面量默认值。上游若换了默认路径，替换会悄无声息
// 地不生效，写出一个指向别处的单元——那样 dae 起不来，而错误现场离真正的原因
// 很远。宁可在这里直接拒绝，把原因说清楚。
func (i *Installer) render(unit string) (string, error) {
	rendered := retargetUnit(unit, i.binaryPath, i.configPath)
	execStart := unitExecStart(rendered)
	if execStart == "" {
		return "", errors.New("发布包内的 dae.service 没有 ExecStart，无法安装")
	}
	if !strings.HasPrefix(execStart, i.binaryPath+" ") && execStart != i.binaryPath {
		return "", fmt.Errorf(
			"发布包内的 dae.service 启动的是 %q，面板无法把它改写为 %s；"+
				"上游可能变更了默认路径，请手动创建服务单元", execStart, i.binaryPath)
	}
	return rendered, nil
}

// unitExecStart 取出单元里 ExecStart= 的值（忽略 ExecStartPre）。
func unitExecStart(unit string) string {
	for _, line := range strings.Split(unit, "\n") {
		trimmed := strings.TrimSpace(line)
		value, found := strings.CutPrefix(trimmed, "ExecStart=")
		if !found {
			continue
		}
		return strings.TrimSpace(value)
	}
	return ""
}

// retargetUnit 把单元里默认的 /usr/bin/dae 与 /etc/dae/config.dae
// 换成面板实际使用的路径。上游单元用的正是这两个默认值。
func retargetUnit(unit, binaryPath, configPath string) string {
	replacer := strings.NewReplacer(
		"/usr/bin/dae", binaryPath,
		"/etc/dae/config.dae", configPath,
	)
	return replacer.Replace(unit)
}
