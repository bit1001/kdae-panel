package app

import (
	"context"
	"fmt"

	"github.com/tuoro/kdae-panel/internal/configstore"
)

type pidReloader interface {
	ReloadPID(ctx context.Context, pid int) error
}

type configValidator interface {
	Validate(ctx context.Context, configPath string) error
}

// systemdDaeService 让所有面板入口都用 systemd MainPID 重载 dae。
// 原始 DaeService 仍负责探测、校验、暂停与诊断，只有 Reload 被这里覆盖。
type systemdDaeService struct {
	DaeService
	reloader  pidReloader
	validator configValidator
	host      HostService
}

func newSystemdDaeService(
	service DaeService,
	reloader pidReloader,
	validator configValidator,
	host HostService,
) *systemdDaeService {
	return &systemdDaeService{
		DaeService: service,
		reloader:   reloader,
		validator:  validator,
		host:       host,
	}
}

func (s *systemdDaeService) Validate(ctx context.Context, configPath string) error {
	return s.validator.Validate(ctx, configPath)
}

func (s *systemdDaeService) Reload(ctx context.Context) error {
	status, err := s.host.Status(ctx)
	if err != nil {
		return fmt.Errorf("读取 dae 服务状态后再重载: %w", err)
	}
	if status.ActiveState == "inactive" || status.ActiveState == "failed" {
		return configstore.ErrReloadDeferred
	}
	if status.ActiveState != "active" {
		return fmt.Errorf("dae 服务状态为 %s/%s，暂时不能重载", status.ActiveState, status.SubState)
	}
	if status.MainPID <= 0 {
		return fmt.Errorf("dae 正在运行但 systemd MainPID 无效: %d", status.MainPID)
	}
	return s.reloader.ReloadPID(ctx, status.MainPID)
}
