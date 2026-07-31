import { describe, expect, it } from 'vitest'
import { createGroupFilter, describeGroupFilter, parseGroupFilter, serializeGroupFilter } from './group'

describe('分组资源过滤', () => {
  it('解析精确节点与订阅多选', () => {
    expect(parseGroupFilter("name(node1, '香港 01')")).toMatchObject({
      kind: 'nodes', values: ['node1', '香港 01'], exclude: false,
    })
    expect(parseGroupFilter('!subtag(sub_a, sub-b)')).toMatchObject({
      kind: 'subscriptions', values: ['sub_a', 'sub-b'], exclude: true,
    })
  })

  it('关键词、正则和复杂表达式不会被误判为资源多选', () => {
    expect(parseGroupFilter("name(keyword: 'HK')")).toMatchObject({ kind: 'nameKeyword', value: 'HK' })
    expect(parseGroupFilter("name(regex: '^HK|SG$')")).toMatchObject({ kind: 'nameRegex', value: '^HK|SG$' })
    expect(parseGroupFilter("subtag(regex: '^my_') && !name(keyword: '过期')")).toMatchObject({ kind: 'raw' })
  })

  it('生成 dae 原生 name/subtag 表达式并去重', () => {
    expect(serializeGroupFilter({
      ...createGroupFilter('nodes'),
      values: ['node1', '香港 01', 'node1'],
    })).toBe("name(node1, '香港 01')")
    expect(serializeGroupFilter({
      ...createGroupFilter('subscriptions'),
      values: ['sub_a', 'sub-b'],
      exclude: true,
    })).toBe('!subtag(sub_a, sub-b)')
  })

  it('空选择和无法由 dae 字符串表示的名称会被拒绝', () => {
    expect(serializeGroupFilter(createGroupFilter('nodes'))).toBeNull()
    expect(serializeGroupFilter({
      ...createGroupFilter('nodes'),
      values: [`a'b"c`],
    })).toBeNull()
  })

  it('卡片摘要对资源过滤使用可读标签', () => {
    expect(describeGroupFilter('name(node1, node2)')).toBe('节点：node1、node2')
    expect(describeGroupFilter('subtag(sub_a)')).toBe('订阅：sub_a')
  })
})
