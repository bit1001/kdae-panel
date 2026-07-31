import { describe, expect, it } from 'vitest'
import {
  applyGlobalChanges,
  globalValueLabel,
  GLOBAL_FIELD_BY_KEY,
  joinInterfaceValues,
  readGlobalCapabilities,
  readGlobalState,
  resolveInterfaceSelection,
  splitInterfaceValue,
} from './global'

const SAMPLE = `global {
    log_level: info # 保留日志注释
    tproxy_port: 12345
    wan_interface: 'auto'
    extension_from_kdae: enabled
}

routing {
  fallback: direct
}
`

describe('global 结构化编辑', () => {
  it('从当前 dae outline 精确识别字段和实际默认值', () => {
    const capabilities = readGlobalCapabilities({
      version: 'v1.2.3',
      leaves: ['string'],
      structure: [{
        name: 'Global',
        mapping: 'global',
        structure: [
          { name: 'LogLevel', mapping: 'log_level', defaultValue: 'warn' },
          { name: 'DialMode', mapping: 'dial_mode', defaultValue: 'domain' },
        ],
      }],
    })
    expect(capabilities?.version).toBe('v1.2.3')
    expect(capabilities?.supported.has('log_level')).toBe(true)
    expect(capabilities?.supported.has('tls_fragment')).toBe(false)
    expect(capabilities?.defaults.get('log_level')).toBe('warn')
    expect(readGlobalCapabilities({ version: 'old', leaves: [], structure: [{}] })).toBeNull()
  })

  it('包含 dae 当前公开的 global 设置', () => {
    for (const key of [
      'log_level', 'tproxy_port', 'allow_insecure', 'check_interval', 'check_tolerance',
      'sniffing_timeout', 'lan_interface', 'wan_interface', 'udp_check_dns', 'tcp_check_url',
      'dial_mode', 'tcp_check_http_method', 'disable_waiting_network',
      'auto_config_kernel_parameter', 'tls_implementation', 'utls_imitate',
      'tproxy_port_protect', 'so_mark_from_dae', 'mptcp', 'enable_local_tcp_fast_redirect',
      'bandwidth_max_tx', 'bandwidth_max_rx', 'bootstrap_resolver', 'fallback_resolver',
      'pprof_port', 'bpf_conn_state_map_size', 'disable_thp',
      'tls_fragment', 'tls_fragment_length', 'tls_fragment_interval', 'udphop_interval',
    ]) {
      expect(GLOBAL_FIELD_BY_KEY.has(key), key).toBe(true)
    }
  })

  it('读取显式值并为省略项展示 dae 默认值', () => {
    const state = readGlobalState(SAMPLE)
    expect(state.values).toMatchObject({ log_level: 'info', tproxy_port: 12345, wan_interface: 'auto' })
    expect(globalValueLabel(state.values.log_level, GLOBAL_FIELD_BY_KEY.get('log_level')!)).toBe('info')
    expect(globalValueLabel(state.values.dial_mode, GLOBAL_FIELD_BY_KEY.get('dial_mode')!)).toBe('domain（默认）')
  })

  it('在接口多选值和 dae 逗号列表之间无损转换', () => {
    expect(splitInterfaceValue(' ens2, br-lan,ens2 ')).toEqual(['ens2', 'br-lan'])
    expect(splitInterfaceValue(null)).toEqual([])
    expect(joinInterfaceValues(['ens2', ' br-lan ', 'ens2'])).toBe('ens2,br-lan')
    expect(joinInterfaceValues(['ens2,br-lan'])).toBe('ens2,br-lan')
    expect(joinInterfaceValues([])).toBeNull()
  })

  it('广域网自动识别与具体接口互斥', () => {
    expect(resolveInterfaceSelection('wan_interface', 'ens2', ['ens2', 'auto'])).toBe('auto')
    expect(resolveInterfaceSelection('wan_interface', 'auto', ['auto', 'ens2'])).toBe('ens2')
    expect(resolveInterfaceSelection('lan_interface', 'dae0', ['dae0', 'ens2'])).toBe('dae0,ens2')
  })

  it('多字段倒序改写保留缩进、注释、未知字段和其他节', () => {
    const next = applyGlobalChanges(SAMPLE, [
      { key: 'log_level', value: 'debug' },
      { key: 'tproxy_port', value: 23456 },
      { key: 'wan_interface', value: null },
      { key: 'lan_interface', value: 'br-lan,docker0' },
    ])
    expect(next).toContain('    log_level: debug # 保留日志注释')
    expect(next).toContain('    tproxy_port: 23456')
    expect(next).not.toContain('wan_interface:')
    expect(next).toContain("    lan_interface: 'br-lan,docker0'")
    expect(next).toContain('    extension_from_kdae: enabled')
    expect(next).toContain('routing {\n  fallback: direct\n}')
  })

  it('配置为空时创建 global 节且只写用户修改的字段', () => {
    const next = applyGlobalChanges('', [
      { key: 'log_level', value: 'warn' },
      { key: 'auto_config_kernel_parameter', value: 'true' },
    ])
    expect(next).toBe('global {\n  log_level: warn\n  auto_config_kernel_parameter: true\n}\n')
    expect(next).not.toContain('tproxy_port')
  })

  it('拒绝重复声明和会打断 DSL 的裸值', () => {
    const duplicated = 'global {\n  log_level: info\n  log_level: debug\n}\n'
    expect(() => applyGlobalChanges(duplicated, [{ key: 'log_level', value: 'warn' }]))
      .toThrow('存在重复声明')
    expect(() => applyGlobalChanges(SAMPLE, [{ key: 'utls_imitate', value: 'chrome } routing {' }]))
      .toThrow('包含不安全的配置字符')
  })

  it('CRLF 文件改写后不混入 LF', () => {
    const text = 'global {\r\n    log_level: info\r\n}\r\n'
    const next = applyGlobalChanges(text, [
      { key: 'log_level', value: 'trace' },
      { key: 'dial_mode', value: 'domain+' },
    ])
    expect(next).toBe('global {\r\n    log_level: trace\r\n    dial_mode: domain+\r\n}\r\n')
    expect(next).not.toMatch(/[^\r]\n/)
  })
})
