import {
  appendToSection,
  isQuotable,
  quote,
  readSection,
  removeLine,
  replaceLine,
  type Entry,
} from './daeconf'
import type { DaeOutline, OutlineElement } from '../types/api'

export type GlobalFieldKind = 'boolean' | 'number' | 'select' | 'text' | 'list' | 'interface'
export type GlobalDraftValue = string | number | null

export interface GlobalField {
  key: string
  label: string
  description: string
  kind: GlobalFieldKind
  defaultValue?: string | number
  options?: Array<{ label: string; value: string }>
  min?: number
  max?: number
  quote?: boolean
  pattern?: RegExp
  patternMessage?: string
  deprecated?: boolean
}

export interface GlobalFieldGroup {
  key: string
  label: string
  fields: GlobalField[]
}

const booleanOptions = [
  { label: '启用 · true', value: 'true' },
  { label: '关闭 · false', value: 'false' },
]

const durationPattern = /^(?:0|(?:\d+(?:\.\d+)?(?:ns|us|µs|ms|s|m|h))+)$/
const bareValuePattern = /^[A-Za-z0-9_/\\^*.+=@$!%-]+$/

export const GLOBAL_FIELD_GROUPS: GlobalFieldGroup[] = [
  {
    key: 'software',
    label: '进程与透明代理',
    fields: [
      { key: 'tproxy_port', label: '透明代理端口', description: 'eBPF 与 dae 内部使用的 TProxy 端口，不是 HTTP/SOCKS 代理端口。', kind: 'number', defaultValue: 12345, min: 0, max: 65535 },
      { key: 'tproxy_port_protect', label: '保护透明代理端口', description: '阻止未经 dae 规则引导的流量直接访问 TProxy 端口。', kind: 'boolean', defaultValue: 'true', options: booleanOptions },
      { key: 'so_mark_from_dae', label: 'dae 出站 Socket Mark', description: '用于识别 dae 自身发出的连接；0 保留内部防回环标记。', kind: 'number', defaultValue: 0, min: 0, max: 4_294_967_295 },
      { key: 'log_level', label: '日志级别', description: '控制 dae 输出日志的详细程度。', kind: 'select', defaultValue: 'info', options: ['error', 'warn', 'info', 'debug', 'trace'].map((value) => ({ label: value, value })) },
      { key: 'disable_waiting_network', label: '跳过网络就绪等待', description: '启动后不等待网络连通，立即拉取订阅。', kind: 'boolean', defaultValue: 'false', options: booleanOptions },
      { key: 'enable_local_tcp_fast_redirect', label: '本机 TCP 快速重定向', description: '兼容旧版 dae 配置；当前 dae 已不再使用。', kind: 'boolean', defaultValue: 'false', options: booleanOptions, deprecated: true },
      { key: 'mptcp', label: '启用 MPTCP', description: '节点支持时尝试使用多路径 TCP。', kind: 'boolean', defaultValue: 'false', options: booleanOptions },
      { key: 'pprof_port', label: 'pprof 端口', description: '非零时开放性能分析端口，仅建议排障时启用。', kind: 'number', defaultValue: 0, min: 0, max: 65535 },
      { key: 'bpf_conn_state_map_size', label: 'eBPF 连接表容量', description: '连接状态表最大条目数，降低它可减少锁定内存，但会降低并发容量。', kind: 'number', defaultValue: 262144, min: 1, max: 4_294_967_295 },
      { key: 'disable_thp', label: '禁用透明大页', description: '让 dae 进程退出透明大页，适用于 THP=always 下内存膨胀的环境。不同 dae 版本的默认值可能不同。', kind: 'boolean', defaultValue: '由当前版本决定', options: booleanOptions },
    ],
  },
  {
    key: 'interfaces',
    label: '接口与内核',
    fields: [
      { key: 'lan_interface', label: '局域网接口', description: '选择需要代理局域网设备的接口；也可输入尚未创建的接口名。', kind: 'interface', quote: true },
      { key: 'wan_interface', label: '广域网接口', description: '选择需要代理本机流量的接口，或使用 auto 自动探测。', kind: 'interface', quote: true },
      { key: 'auto_config_kernel_parameter', label: '自动配置内核参数', description: '自动设置转发与重定向所需的 Linux 内核参数。', kind: 'boolean', defaultValue: 'false', options: booleanOptions },
    ],
  },
  {
    key: 'connectivity',
    label: '节点连通性检查',
    fields: [
      { key: 'tcp_check_url', label: 'TCP 检查地址', description: '首项为 URL，后续可附 IPv4/IPv6 地址，使用逗号分隔。', kind: 'list', defaultValue: 'http://cp.cloudflare.com,1.1.1.1,2606:4700:4700::1111', quote: true },
      { key: 'tcp_check_http_method', label: 'TCP 检查方法', description: '向检查地址发送的 HTTP 请求方法。', kind: 'select', defaultValue: 'HEAD', options: ['HEAD', 'GET'].map((value) => ({ label: value, value })) },
      { key: 'udp_check_dns', label: 'UDP 检查 DNS', description: '首项为 DNS 主机与端口，后续可附 IP 地址，使用逗号分隔。', kind: 'list', defaultValue: 'dns.google:53,8.8.8.8,2001:4860:4860::8888', quote: true },
      { key: 'bootstrap_resolver', label: '引导 DNS', description: '在 dae DNS 路由可用前解析节点与上游域名；留空使用内置顺序。', kind: 'text', quote: true },
      { key: 'fallback_resolver', label: '后备 DNS', description: '系统 resolv.conf 解析失败时使用的 DNS。', kind: 'text', defaultValue: '8.8.8.8:53', quote: true },
      { key: 'check_interval', label: '检查周期', description: '节点连通性检查间隔，使用 Go duration 格式。', kind: 'text', defaultValue: '30s', pattern: durationPattern, patternMessage: '请输入 30s、500ms、1m30s 这类时间' },
      { key: 'check_tolerance', label: '切换容差', description: '新节点延迟至少低于当前节点该数值时才切换。', kind: 'text', defaultValue: '0', pattern: durationPattern, patternMessage: '请输入 50ms、1s 或 0 这类时间' },
    ],
  },
  {
    key: 'connection',
    label: '连接与 TLS',
    fields: [
      { key: 'dial_mode', label: '拨号模式', description: '决定代理连接使用 DNS 结果还是嗅探出的域名。', kind: 'select', defaultValue: 'domain', options: ['ip', 'domain', 'domain+', 'domain++'].map((value) => ({ label: value, value })) },
      { key: 'allow_insecure', label: '允许不安全证书', description: '跳过节点 TLS 证书校验，仅在确有需要时启用。', kind: 'boolean', defaultValue: 'false', options: booleanOptions },
      { key: 'sniffing_timeout', label: '嗅探等待时间', description: '等待连接首段数据以识别域名的最长时间。', kind: 'text', defaultValue: '30ms', pattern: durationPattern, patternMessage: '请输入 30ms、1s 或 0 这类时间' },
      { key: 'tls_implementation', label: 'TLS 实现', description: 'tls 使用 Go 标准库；utls 可模拟浏览器 Client Hello。', kind: 'select', defaultValue: 'tls', options: ['tls', 'utls'].map((value) => ({ label: value, value })) },
      { key: 'utls_imitate', label: 'uTLS 指纹', description: 'tls_implementation 为 utls 时使用的 Client Hello ID。', kind: 'text', defaultValue: 'chrome_auto' },
      { key: 'tls_fragment', label: 'TLS Client Hello 分片', description: '分片发送 Client Hello 以应对基于 SNI 的阻断。', kind: 'boolean', defaultValue: 'false', options: booleanOptions },
      { key: 'tls_fragment_length', label: 'TLS 分片长度', description: '每个分片的随机字节范围。', kind: 'text', defaultValue: '50-100', quote: true },
      { key: 'tls_fragment_interval', label: 'TLS 分片间隔', description: '相邻分片之间的随机毫秒范围。', kind: 'text', defaultValue: '10-20', quote: true },
      { key: 'bandwidth_max_tx', label: '最大上行带宽', description: '供 Hysteria2 等协议估算链路，例如 200 mbps。', kind: 'text', defaultValue: '0', quote: true },
      { key: 'bandwidth_max_rx', label: '最大下行带宽', description: '供 Hysteria2 等协议估算链路，例如 1 gbps。', kind: 'text', defaultValue: '0', quote: true },
      { key: 'udphop_interval', label: 'UDP 跳端口周期', description: '支持端口跳跃的协议切换 UDP 端口的间隔。', kind: 'text', defaultValue: '30s', pattern: durationPattern, patternMessage: '请输入 30s、1m 或 0 这类时间' },
    ],
  },
]

export const GLOBAL_FIELDS = GLOBAL_FIELD_GROUPS.flatMap((group) => group.fields)
export const GLOBAL_FIELD_BY_KEY = new Map(GLOBAL_FIELDS.map((field) => [field.key, field]))

/** 在界面多选值与 dae 使用的逗号分隔接口列表之间转换。 */
export function splitInterfaceValue(value: GlobalDraftValue): string[] {
  if (typeof value !== 'string') return []
  return [...new Set(value.split(',').map((item) => item.trim()).filter(Boolean))]
}

export function joinInterfaceValues(values: Array<string | number> | null): string | null {
  if (!values) return null
  const normalized = [...new Set(values
    .flatMap((value) => String(value).split(','))
    .map((value) => value.trim())
    .filter(Boolean))]
  return normalized.length > 0 ? normalized.join(',') : null
}

/** WAN 的 auto 与具体接口互斥；选择后加入的那一类覆盖原有选择。 */
export function resolveInterfaceSelection(
  key: string,
  previousValue: GlobalDraftValue,
  values: Array<string | number> | null,
): string | null {
  const previous = splitInterfaceValue(previousValue)
  let next = splitInterfaceValue(joinInterfaceValues(values))
  if (key === 'wan_interface' && next.includes('auto') && next.length > 1) {
    next = previous.includes('auto') ? next.filter((value) => value !== 'auto') : ['auto']
  }
  return joinInterfaceValues(next)
}

export interface GlobalCapabilities {
  version: string
  supported: Set<string>
  defaults: Map<string, string>
}

function findGlobalOutline(nodes: OutlineElement[]): OutlineElement | null {
  for (const node of nodes) {
    if (node.mapping === 'global') return node
    const nested = findGlobalOutline(node.structure || [])
    if (nested) return nested
  }
  return null
}

/** 从当前二进制导出的 outline 提取 global 字段；结构不完整时返回 null，避免把全部字段误判为不支持。 */
export function readGlobalCapabilities(outline: DaeOutline): GlobalCapabilities | null {
  const global = findGlobalOutline(outline.structure)
  if (!global?.structure?.length) return null
  const fields = global.structure.filter((field) => field.mapping)
  if (fields.length === 0) return null
  return {
    version: outline.version,
    supported: new Set(fields.map((field) => field.mapping!)),
    defaults: new Map(fields
      .filter((field) => field.defaultValue !== undefined && field.defaultValue !== '')
      .map((field) => [field.mapping!, field.defaultValue!])),
  }
}

export interface GlobalState {
  values: Record<string, GlobalDraftValue>
  entries: Entry[]
  duplicateKeys: Set<string>
  invalidKeys: Set<string>
  unparsedLines: number
}

export function readGlobalState(text: string): GlobalState {
  const section = readSection(text, 'global')
  const byKey = new Map<string, Entry[]>()
  for (const entry of section.entries) {
    if (entry.tag === null) continue
    const group = byKey.get(entry.tag) || []
    group.push(entry)
    byKey.set(entry.tag, group)
  }
  const values: Record<string, GlobalDraftValue> = {}
  const duplicateKeys = new Set<string>()
  const invalidKeys = new Set<string>()
  for (const field of GLOBAL_FIELDS) {
    const entries = byKey.get(field.key) || []
    values[field.key] = null
    if (entries.length > 1) {
      duplicateKeys.add(field.key)
      continue
    }
    const entry = entries[0]
    if (!entry) continue
    if (!entry.editable) {
      invalidKeys.add(field.key)
      continue
    }
    if (field.kind === 'number') {
      const parsed = Number(entry.value)
      if (!Number.isInteger(parsed) || !Number.isFinite(parsed)) {
        invalidKeys.add(field.key)
        continue
      }
      values[field.key] = parsed
    } else {
      values[field.key] = entry.value
    }
  }
  return { values, entries: section.entries, duplicateKeys, invalidKeys, unparsedLines: section.unparsedLines }
}

export function globalValueLabel(value: GlobalDraftValue, field: GlobalField): string {
  if (value !== null && value !== '') return String(value)
  if (field.defaultValue !== undefined) return `${field.defaultValue}（默认）`
  return '未设置'
}

function serializeGlobalValue(field: GlobalField, value: GlobalDraftValue): string {
  if (value === null || value === '') throw new Error(`${field.label}不能为空`)
  if (field.kind === 'number') {
    if (typeof value !== 'number' || !Number.isInteger(value)) throw new Error(`${field.label}必须是整数`)
    if (field.min !== undefined && value < field.min) throw new Error(`${field.label}不能小于 ${field.min}`)
    if (field.max !== undefined && value > field.max) throw new Error(`${field.label}不能大于 ${field.max}`)
    return String(value)
  }
  const text = String(value).trim()
  if (text === '' || /[\r\n]/.test(text)) throw new Error(`${field.label}不能为空或跨行`)
  if (field.options && !field.options.some((option) => option.value === text)) {
    throw new Error(`${field.label}不是支持的选项`)
  }
  if (field.pattern && !field.pattern.test(text)) throw new Error(field.patternMessage || `${field.label}格式不正确`)
  if (!field.quote) {
    if (!bareValuePattern.test(text)) throw new Error(`${field.label}包含不安全的配置字符`)
    return text
  }
  if (!isQuotable(text)) throw new Error(`${field.label}同时包含单双引号，dae 配置无法无损表示`)
  return quote(text)
}

export interface GlobalChange {
  key: string
  value: GlobalDraftValue
}

/**
 * 只改写用户实际变动的 global 声明；未知字段、注释和字段顺序保持原样。
 * 操作按偏移倒序执行，避免前一处增删让后一处行号失效。
 */
export function applyGlobalChanges(text: string, changes: GlobalChange[]): string {
  const entries = readSection(text, 'global').entries
  const indentation = entries
    .map((entry) => /^[ \t]*/.exec(text.slice(entry.lineStart, entry.lineEnd))?.[0] || '')
    .find((value) => value !== '') || '  '
  const operations: Array<{ entry: Entry; line: string | null }> = []
  const additions: string[] = []
  for (const change of changes) {
    const field = GLOBAL_FIELD_BY_KEY.get(change.key)
    if (!field) throw new Error(`未知的 global 字段：${change.key}`)
    const matches = entries.filter((entry) => entry.tag === change.key)
    if (matches.length > 1) throw new Error(`${field.label}存在重复声明，请使用原文编辑处理`)
    const entry = matches[0]
    if (change.value === null || change.value === '') {
      if (entry) operations.push({ entry, line: null })
      continue
    }
    const line = `${change.key}: ${serializeGlobalValue(field, change.value)}`
    if (entry) {
      if (!entry.editable) throw new Error(`${field.label}采用跨行写法，请使用原文编辑处理`)
      operations.push({ entry, line })
    } else {
      additions.push(line)
    }
  }
  operations.sort((left, right) => right.entry.lineStart - left.entry.lineStart)
  let next = text
  for (const operation of operations) {
    next = operation.line === null
      ? removeLine(next, operation.entry.lineStart, operation.entry.lineEnd)
      : replaceLine(next, operation.entry.lineStart, operation.entry.lineEnd, operation.line)
  }
  return additions.length > 0 ? appendToSection(next, 'global', additions, indentation) : next
}
