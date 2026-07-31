import { describe, expect, it } from 'vitest'
import { buildSimpleRouting, detectSimpleRouting } from './routing'

describe('常用路由模板', () => {
  it.each([
    ['gfw', 'domain(geosite:gfw) -> proxy\n  fallback: direct'],
    ['nonCn', 'domain(geosite:cn) -> direct\n  fallback: proxy'],
    ['cnOnly', 'domain(geosite:cn) -> proxy\n  fallback: direct'],
    ['global', 'dip(geoip:private) -> direct\n  fallback: proxy'],
    ['direct', 'dip(geoip:private) -> direct\n  fallback: direct'],
  ] as const)('%s 模式生成预期规则', (mode, expected) => {
    expect(buildSimpleRouting(mode, 'proxy')).toContain(expected)
  })

  it('模板生成与识别可以往返', () => {
    for (const mode of ['gfw', 'nonCn', 'cnOnly', 'global'] as const) {
      const body = buildSimpleRouting(mode, 'proxy', ['AA:BB:CC:DD:EE:FF'], 'direct')
      expect(detectSimpleRouting(body, ['proxy'])).toEqual({
        mode,
        group: 'proxy',
        macs: ['AA:BB:CC:DD:EE:FF'],
        action: 'direct',
      })
    }
  })

  it('全直连也能识别 MAC 代理覆盖', () => {
    const body = buildSimpleRouting('direct', 'proxy', ['AA:BB:CC:DD:EE:FF'], 'proxy')
    expect(detectSimpleRouting(body, ['proxy'])).toMatchObject({ mode: 'direct', group: 'proxy', action: 'proxy' })
  })

  it('仅指定设备代理必须真的包含 MAC 规则', () => {
    expect(detectSimpleRouting(buildSimpleRouting('macOnly', 'proxy'), ['proxy'])).toBeNull()
    const body = buildSimpleRouting('macOnly', 'proxy', ['AA:BB:CC:DD:EE:FF'])
    expect(detectSimpleRouting(body, ['proxy'])).toMatchObject({ mode: 'macOnly', group: 'proxy' })
  })

  it('含注释、额外规则或未知分组时降级到高级模式', () => {
    const body = buildSimpleRouting('gfw', 'proxy')
    expect(detectSimpleRouting(`# 保留说明\n${body}`, ['proxy'])).toBeNull()
    expect(detectSimpleRouting(`${body}\n  dport(443) -> block`, ['proxy'])).toBeNull()
    expect(detectSimpleRouting(body, ['other'])).toBeNull()
  })
})
