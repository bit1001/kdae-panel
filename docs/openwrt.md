# OpenWrt / ImmortalWrt 适配说明

kdae-panel 原生支持 **OpenWrt** 及基于 OpenWrt 的衍生系统（如 ImmortalWrt、LEDE），
无需 systemd 和 journalctl。

## 工作原理

OpenWrt 使用 **procd** 作为进程管理和初始化系统，而非 systemd。本分支的 kdae-panel 在启动时自动检测当前系统：

- 检测到 `/sbin/procd` → 使用 **procd 后端**（OpenWrt/ImmortalWrt）
- 其他系统 → 使用 **systemd 后端**（原版）

也可以通过 `KDAE_PANEL_SYSTEMCTL` 环境变量显式指定使用 systemd 后端。

## procd 后端与 systemd 后端的差异

| 功能         | systemd 后端                           | procd 后端                              |
| ------------ | -------------------------------------- | --------------------------------------- |
| 服务控制     | `systemctl start/stop/restart`        | `/etc/init.d/dae start/stop/restart`    |
| 状态查询     | `systemctl show`                      | `pidof` + `/proc/<pid>/status`         |
| 日志读取     | `journalctl --output json`            | `logread -l <N>`                       |
| daemon-reload| 重新加载 systemd 单元文件              | 无操作（procd 自动读取脚本）            |
| 面板重启     | `systemctl restart kdae-panel.service` | `/etc/init.d/kdae-panel restart`        |
| CPU/内存监控 | 通过 systemd 属性                       | 直接读 `/proc/<pid>/stat` 和 `status`   |

## 安装

### 前提

安装 dae（推荐使用官方安装器或手动下载）并确保 `/etc/dae/config.dae` 配置正确。

### 步骤

1. 从 [Releases](https://github.com/bit1001/kdae-panel/releases) 下载对应架构的二进制：
   - aarch64/arm64 → `kdae-panel_linux_arm64`
   - x86_64/amd64 → `kdae-panel_linux_amd64`
   - riscv64 → `kdae-panel_linux_riscv64`

2. 部署：
   ```sh
   # 放到 /usr/bin
   mv kdae-panel_linux_arm64 /usr/bin/kdae-panel
   chmod 0755 /usr/bin/kdae-panel

   # 创建 procd 初始化脚本
   cat > /etc/init.d/kdae-panel << 'EOF'
   #!/bin/sh /etc/rc.common
   USE_PROCD=1
   START=99
   STOP=10

   start_service() {
       procd_open_instance
       procd_set_param command /usr/bin/kdae-panel
       procd_append_param command --listen 0.0.0.0:2024
       procd_append_param command --dae-config /etc/dae/config.dae
       procd_append_param command --enable-dae-install
       procd_append_param command --enable-geo-update
       procd_set_param respawn
       procd_set_param stdout 1
       procd_set_param stderr 1
       procd_close_instance
   }

   stop_service() {
       killall kdae-panel 2>/dev/null || true
   }
   EOF
   chmod 0755 /etc/init.d/kdae-panel

   # 启用并启动
   /etc/init.d/kdae-panel enable
   /etc/init.d/kdae-panel start
   ```

3. 打开浏览器访问 `http://<路由器IP>:2024` 完成初始化。

### 升级

替换 `/usr/bin/kdae-panel` 并重启面板即可：

```sh
/etc/init.d/kdae-panel restart
```

## 日志查看

面板管理页面的日志功能直接读取系统日志缓冲区：

```sh
logread -l 100 | grep kdae-panel
```

## 注意事项

- procd 后端不支持 `daemon-reload` 操作（无操作，不报错）
- 进程重启计数（NRestarts）始终为 0，因为 procd 不暴露该计数器
- 面板自升级功能需要 `/usr/bin/` 可写，注意权限设置
- 首次访问的 bootstrap URL 可见于面板日志：`logread -l 20 | grep kdae-panel`
