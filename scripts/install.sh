#!/usr/bin/env bash
set -euo pipefail

if [[ ${EUID} -ne 0 ]]; then
  echo "请使用 root 权限运行安装脚本" >&2
  exit 1
fi

script_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

# 布局判定必须原子：三个文件要么全部来自发布包，要么全部来自源码仓库，
# 绝不允许"新二进制配旧 unit/env"的混装——发布包被解压进旧源码检出里时，
# 逐文件回退会让这种混装静默发生。判据：包内脚本与 kdae-panel 二进制同目录
# （build-release.sh 保证的布局），源码仓库的 scripts/ 下永远没有该二进制。
#
# 探测用 -f 而不是 -x：安装时 install -Dm0755 会重设权限，源文件的执行位
# 与结果无关；而 tar 解包后的权限位取决于打包环境，靠它探测会静默落空。
if [[ -f ${script_dir}/kdae-panel ]]; then
  # 发布包布局：全部取包内文件
  default_binary="${script_dir}/kdae-panel"
  service_file="${script_dir}/kdae-panel.service"
  environment_file="${script_dir}/kdae-panel.env"
  uninstall_file="${script_dir}/uninstall.sh"
else
  # 源码仓库布局：全部取仓库文件
  repo_root=$(cd "${script_dir}/.." && pwd)
  default_binary="${repo_root}/bin/kdae-panel"
  service_file="${repo_root}/packaging/kdae-panel.service"
  environment_file="${repo_root}/packaging/kdae-panel.env"
  uninstall_file="${script_dir}/uninstall.sh"
fi
binary=${1:-"${default_binary}"}

for required in "${service_file}" "${environment_file}"; do
  if [[ ! -f ${required} ]]; then
    echo "未找到安装所需文件：${required}" >&2
    echo "发布包不完整或目录布局异常，请重新解压完整的发布包后重试" >&2
    exit 1
  fi
done

if [[ ! -f ${binary} ]]; then
  echo "未找到可执行文件：${binary}" >&2
  echo "请先运行 make build，或将二进制路径作为第一个参数传入" >&2
  exit 1
fi

install -Dm0755 "${binary}" /usr/bin/kdae-panel
install -d -m0700 /var/lib/kdae-panel /var/lib/kdae-panel/backups
install -d -m0750 /etc/kdae-panel

# /etc/dae 必须先于服务单元存在：单元的 ReadWritePaths 里这条路径没有 "-" 前缀，
# 缺失时 systemd 搭建挂载命名空间会直接失败（226/NAMESPACE），面板连启动都做不到，
# 而"机器上还没有 dae"恰恰是首次安装要面对的常态。
# 只加 "-" 前缀解决不了：单元虽能起来，但 ProtectSystem=strict 下 /etc 只读，
# 写种子配置与 geo 数据照样 EROFS。
# 已存在就一概不动——它可能是 dae 自己装出来的，重设权限等于改动 dae 的配置目录。
if [[ ! -d /etc/dae ]]; then
  install -d -m0755 /etc/dae
fi

if [[ ! -f /etc/kdae-panel/kdae-panel.env ]]; then
  install -Dm0600 "${environment_file}" /etc/kdae-panel/kdae-panel.env
fi

# 卸载脚本一并落盘：一键安装的临时目录用完即删，不留这份的话，
# 用户想卸载时手里连脚本都没有。
if [[ -f ${uninstall_file} ]]; then
  install -Dm0755 "${uninstall_file}" /usr/share/kdae-panel/uninstall.sh
fi

install -Dm0644 "${service_file}" /etc/systemd/system/kdae-panel.service
systemctl daemon-reload
setup_url_file=/run/kdae-panel/setup-url
# systemctl restart 通常会重建 RuntimeDirectory；这里仍先删精确路径，避免异常退出留下的
# 旧链接被当成本次结果。新进程会在尚未初始化时原子写回。
rm -f "${setup_url_file}"
# 升级场景必须重启：enable --now 对已在运行的服务是空操作，
# 旧二进制会继续跑，升级看似成功实则没有生效。
if systemctl is-active --quiet kdae-panel.service; then
  systemctl restart kdae-panel.service
else
  systemctl enable --now kdae-panel.service
fi

setup_urls=""
for ((attempt = 0; attempt < 40; attempt++)); do
  if [[ -s ${setup_url_file} ]]; then
    setup_urls=$(awk 'NF && !seen[$0]++' "${setup_url_file}")
    break
  fi
  sleep 0.25
done

echo "kdae-panel 已启动，默认监听 0.0.0.0:2023（本机和局域网均可访问）。"
if [[ -n ${setup_urls} ]]; then
  echo "首次访问地址："
  while IFS= read -r setup_url; do
    echo "  ${setup_url}"
  done <<<"${setup_urls}"
else
  echo "面板已经初始化；请通过这台机器的内网地址访问 2023 端口。"
fi
echo "卸载：sudo bash /usr/share/kdae-panel/uninstall.sh"
