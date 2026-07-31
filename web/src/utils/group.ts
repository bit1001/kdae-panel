import { isQuotable, isValidTag, quote, unquote } from './daeconf'

export type GroupFilterKind = 'nodes' | 'subscriptions' | 'nameKeyword' | 'nameRegex' | 'raw'

export interface GroupFilterDraft {
  kind: GroupFilterKind
  value: string
  values: string[]
  exclude: boolean
}

export function createGroupFilter(kind: GroupFilterKind): GroupFilterDraft {
  return { kind, value: '', values: [], exclude: false }
}

/**
 * 解析 name()/subtag() 中不带命名参数的简单值列表。
 * regex: 等高级写法故意返回 null，交给高级表达式原样处理。
 */
function parseArguments(body: string): string[] | null {
  const values: string[] = []
  let start = 0
  let quoteChar = ''

  const push = (end: number): boolean => {
    const raw = body.slice(start, end).trim()
    if (raw === '') return false
    const first = raw[0]
    if (first === "'" || first === '"') {
      if (raw.length < 2 || raw[raw.length - 1] !== first) return false
      values.push(unquote(raw))
      return true
    }
    // 裸参数只接受 dae 标识符的安全子集；空格、冒号和括号意味着更复杂的表达式。
    if (!/^[A-Za-z_][A-Za-z0-9_.-]*$/.test(raw)) return false
    values.push(raw)
    return true
  }

  for (let index = 0; index < body.length; index += 1) {
    const char = body[index]
    if (quoteChar !== '') {
      if (char === '\\' && body[index + 1] === quoteChar) index += 1
      else if (char === quoteChar) quoteChar = ''
      continue
    }
    if (char === "'" || char === '"') quoteChar = char
    else if (char === ',') {
      if (!push(index)) return null
      start = index + 1
    } else if (char === ':' || char === '(' || char === ')') {
      return null
    }
  }
  if (quoteChar !== '' || !push(body.length)) return null
  return [...new Set(values)]
}

export function parseGroupFilter(value: string): GroupFilterDraft {
  const trimmed = value.trim()
  const exclude = trimmed.startsWith('!')
  const expression = exclude ? trimmed.slice(1).trim() : trimmed

  const subscription = /^subtag\((.*)\)$/.exec(expression)
  if (subscription) {
    const values = parseArguments(subscription[1])
    if (values && values.every(isValidTag)) {
      return { kind: 'subscriptions', value: '', values, exclude }
    }
  }

  const nameMatcher = /^name\((keyword|regex)\s*:\s*(['"])(.*)\2\)$/.exec(expression)
  if (nameMatcher) {
    return {
      kind: nameMatcher[1] === 'keyword' ? 'nameKeyword' : 'nameRegex',
      value: nameMatcher[3],
      values: [],
      exclude,
    }
  }

  const nodes = /^name\((.*)\)$/.exec(expression)
  if (nodes) {
    const values = parseArguments(nodes[1])
    if (values) return { kind: 'nodes', value: '', values, exclude }
  }

  return { kind: 'raw', value: trimmed, values: [], exclude: false }
}

function uniqueValues(values: string[]): string[] {
  return [...new Set(values.map((value) => value.trim()).filter(Boolean))]
}

export function serializeGroupFilter(filter: GroupFilterDraft): string | null {
  if (filter.kind === 'raw') return filter.value.trim() || null

  let expression: string
  if (filter.kind === 'nodes') {
    const values = uniqueValues(filter.values)
    if (values.length === 0 || values.some((value) => !isQuotable(value))) return null
    expression = `name(${values.map((value) => isValidTag(value) ? value : quote(value)).join(', ')})`
  } else if (filter.kind === 'subscriptions') {
    const values = uniqueValues(filter.values)
    if (values.length === 0 || values.some((value) => !isValidTag(value))) return null
    expression = `subtag(${values.join(', ')})`
  } else {
    const value = filter.value.trim()
    if (value === '' || !isQuotable(value)) return null
    expression = `name(${filter.kind === 'nameKeyword' ? 'keyword' : 'regex'}: ${quote(value)})`
  }
  return filter.exclude ? `!${expression}` : expression
}

export function describeGroupFilter(value: string): string {
  const parsed = parseGroupFilter(value)
  if (parsed.kind === 'nodes') return `${parsed.exclude ? '排除节点' : '节点'}：${parsed.values.join('、')}`
  if (parsed.kind === 'subscriptions') return `${parsed.exclude ? '排除订阅' : '订阅'}：${parsed.values.join('、')}`
  return value
}
