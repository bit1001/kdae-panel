package app

import (
	"context"
	"log/slog"
	"net/http"
	"strconv"
	"sync"
	"time"

	"github.com/tuoro/kdae-panel/internal/daeinstall"
	"github.com/tuoro/kdae-panel/internal/upstream"
)

// InstallService 是 dae 版本管理能力的消费者侧接口。
type InstallService interface {
	Status(ctx context.Context) daeinstall.Status
	Provision(ctx context.Context) daeinstall.Provision
	Versions(ctx context.Context, source upstream.Source, limit int) ([]upstream.Version, error)
	Download(ctx context.Context, source upstream.Source, ref string) (upstream.Bundle, error)
	Install(ctx context.Context, binary []byte, source upstream.Source, ref, label string) (daeinstall.Status, error)
	FirstInstall(ctx context.Context, bundle upstream.Bundle, source upstream.Source, ref, label string) (daeinstall.Status, error)
	Rollback(ctx context.Context) (daeinstall.Status, error)
}

type installRequest struct {
	Source string `json:"source"`
	Ref    string `json:"ref"`
	Label  string `json:"label,omitempty"`
}

// JobPhase 描述安装任务当前进行到哪一步。
type JobPhase string

const (
	PhaseIdle        JobPhase = "idle"
	PhaseDownloading JobPhase = "downloading"
	PhaseApplying    JobPhase = "applying"
	PhaseDone        JobPhase = "done"
	PhaseFailed      JobPhase = "failed"
)

// Job 是一次安装或回滚的进度。
// 安装要下载几十兆并重启服务，耗时以分钟计，远超 HTTP 写超时，
// 因此做成异步任务，由前端轮询，而不是把请求挂在那里。
// 时间字段用指针：omitempty 对 time.Time 无效，
// 否则空闲任务会向前端吐出 0001-01-01 并被当成真实时间渲染。
type Job struct {
	Phase     JobPhase   `json:"phase"`
	Source    string     `json:"source,omitempty"`
	Ref       string     `json:"ref,omitempty"`
	Label     string     `json:"label,omitempty"`
	StartedAt *time.Time `json:"startedAt,omitempty"`
	EndedAt   *time.Time `json:"endedAt,omitempty"`
	Error     string     `json:"error,omitempty"`
}

type installJobs struct {
	mu  sync.Mutex
	job Job
}

func (j *installJobs) snapshot() Job {
	j.mu.Lock()
	defer j.mu.Unlock()
	return j.job
}

func (j *installJobs) begin(phase JobPhase, source, ref, label string) bool {
	j.mu.Lock()
	defer j.mu.Unlock()
	if j.job.Phase == PhaseDownloading || j.job.Phase == PhaseApplying {
		return false
	}
	startedAt := time.Now().UTC()
	j.job = Job{Phase: phase, Source: source, Ref: ref, Label: label, StartedAt: &startedAt}
	return true
}

func (j *installJobs) advance(phase JobPhase) {
	j.mu.Lock()
	defer j.mu.Unlock()
	j.job.Phase = phase
}

func (j *installJobs) finish(err error) {
	j.mu.Lock()
	defer j.mu.Unlock()
	endedAt := time.Now().UTC()
	j.job.EndedAt = &endedAt
	if err != nil {
		j.job.Phase = PhaseFailed
		j.job.Error = err.Error()
		return
	}
	j.job.Phase = PhaseDone
	j.job.Error = ""
}

func registerUpstreamRoutes(router *http.ServeMux, service InstallService, operations *sync.Mutex, logger *slog.Logger) {
	if service == nil {
		// 功能可显式关闭；没有 Install 依赖时让端点明确告诉客户端，
		// 而不是静默缺路由。
		unavailable := func(writer http.ResponseWriter, _ *http.Request) {
			writeAPIError(writer, http.StatusServiceUnavailable, "dae_install_disabled",
				"dae 版本管理未启用，请设置 KDAE_PANEL_ENABLE_DAE_INSTALL=true；自定义安装路径还需加入服务单元的 ReadWritePaths")
		}
		for _, pattern := range []string{
			"GET /api/v1/dae/install", "POST /api/v1/dae/install",
			"GET /api/v1/dae/versions", "POST /api/v1/dae/rollback",
		} {
			router.HandleFunc(pattern, unavailable)
		}
		return
	}

	jobs := &installJobs{job: Job{Phase: PhaseIdle}}

	router.HandleFunc("GET /api/v1/dae/install", func(writer http.ResponseWriter, request *http.Request) {
		status := service.Status(request.Context())
		job := jobs.snapshot()
		payload := map[string]any{"status": status, "job": job}
		// 还没有 dae 时附上首次安装的可行性，让界面能直接说清缺什么。
		// 任务进行中不计算：这个查询会被界面每两秒轮询一次，而可行性探测要
		// 实际试写目标目录，其中之一是 systemd 正在监视的单元目录。
		if !status.Ready && job.Phase != PhaseDownloading && job.Phase != PhaseApplying {
			payload["provision"] = service.Provision(request.Context())
		}
		writeJSON(writer, http.StatusOK, payload)
	})

	router.HandleFunc("GET /api/v1/dae/versions", func(writer http.ResponseWriter, request *http.Request) {
		source, err := upstream.ParseSource(request.URL.Query().Get("source"))
		if err != nil {
			writeAPIError(writer, http.StatusBadRequest, "invalid_upstream_source", err.Error())
			return
		}
		limit := 30
		if raw := request.URL.Query().Get("limit"); raw != "" {
			parsed, err := strconv.Atoi(raw)
			if err != nil || parsed <= 0 || parsed > 100 {
				writeAPIError(writer, http.StatusBadRequest, "invalid_limit", "版本数量必须是 1 到 100 之间的整数")
				return
			}
			limit = parsed
		}
		versions, err := service.Versions(request.Context(), source, limit)
		if err != nil {
			writeAPIError(writer, http.StatusBadGateway, "upstream_unavailable", err.Error())
			return
		}
		writeJSON(writer, http.StatusOK, map[string]any{"versions": versions})
	})

	router.HandleFunc("POST /api/v1/dae/install", func(writer http.ResponseWriter, request *http.Request) {
		var payload installRequest
		if !decodeSmallJSONBody(writer, request, &payload) {
			return
		}
		source, err := upstream.ParseSource(payload.Source)
		if err != nil {
			writeAPIError(writer, http.StatusBadRequest, "invalid_upstream_source", err.Error())
			return
		}
		if payload.Ref == "" {
			writeAPIError(writer, http.StatusBadRequest, "invalid_version", "必须指定要安装的版本")
			return
		}
		if !jobs.begin(PhaseDownloading, payload.Source, payload.Ref, payload.Label) {
			writeAPIError(writer, http.StatusConflict, "install_in_progress", "已有安装任务正在执行")
			return
		}
		go runInstall(jobs, service, operations, logger, source, payload.Ref, payload.Label)
		writeJSON(writer, http.StatusAccepted, map[string]any{"job": jobs.snapshot()})
	})

	router.HandleFunc("POST /api/v1/dae/rollback", func(writer http.ResponseWriter, request *http.Request) {
		if !jobs.begin(PhaseApplying, "", "", "回滚") {
			writeAPIError(writer, http.StatusConflict, "install_in_progress", "已有安装任务正在执行")
			return
		}
		go runRollback(jobs, service, operations, logger)
		writeJSON(writer, http.StatusAccepted, map[string]any{"job": jobs.snapshot()})
	})
}

// installTimeout 覆盖下载与替换的总时长。任务在后台跑，不受 HTTP 写超时约束。
const installTimeout = 15 * time.Minute

func runInstall(jobs *installJobs, service InstallService, operations *sync.Mutex, logger *slog.Logger,
	source upstream.Source, ref, label string) {
	ctx, cancel := context.WithTimeout(context.Background(), installTimeout)
	defer cancel()

	logger.Info("开始安装 dae 版本", "source", source, "ref", ref)
	// 下载与校验不触碰任何共享状态，因此不占控制锁：
	// 几十兆的下载不该把配置保存和订阅定时刷新一起堵住。
	bundle, err := service.Download(ctx, source, ref)
	if err != nil {
		logger.Warn("下载 dae 版本失败", "source", source, "ref", ref, "error", err)
		jobs.finish(err)
		return
	}

	jobs.advance(PhaseApplying)
	operations.Lock()
	defer operations.Unlock()
	// 已有 dae 就替换二进制；还没有就连同单元、种子配置与 geo 数据一起装。
	install := service.Install
	if !service.Status(ctx).Ready {
		install = func(ctx context.Context, _ []byte, source upstream.Source, ref, label string) (daeinstall.Status, error) {
			return service.FirstInstall(ctx, bundle, source, ref, label)
		}
	}
	if _, err := install(ctx, bundle.Binary, source, ref, label); err != nil {
		logger.Warn("安装 dae 版本失败", "source", source, "ref", ref, "error", err)
		jobs.finish(err)
		return
	}
	logger.Info("已安装 dae 版本", "source", source, "ref", ref)
	jobs.finish(nil)
}

func runRollback(jobs *installJobs, service InstallService, operations *sync.Mutex, logger *slog.Logger) {
	ctx, cancel := context.WithTimeout(context.Background(), installTimeout)
	defer cancel()

	operations.Lock()
	defer operations.Unlock()
	if _, err := service.Rollback(ctx); err != nil {
		logger.Warn("回滚 dae 版本失败", "error", err)
		jobs.finish(err)
		return
	}
	logger.Info("已回滚 dae 版本")
	jobs.finish(nil)
}
