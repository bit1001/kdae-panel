package host

import (
	"context"
	"os"
)

// Manager 是主机服务管理器的接口，支持 systemd 和 procd 两种实现。
type Manager interface {
	Status(ctx context.Context) (Status, error)
	Action(ctx context.Context, action Action) error
	RestartSelf(ctx context.Context) error
	Logs(ctx context.Context, limit int) ([]LogEntry, error)
}

// hasProcd 检测当前系统是否使用 procd（OpenWrt/ImmortalWrt 等）。
// procd 是 OpenWrt 的进程管理守护进程，其二进制位于 /sbin/procd。
func hasProcd() bool {
	_, err := os.Stat("/sbin/procd")
	return err == nil
}
