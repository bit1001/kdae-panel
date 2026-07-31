import { h, type Component, type Ref } from 'vue'
import { NButton, NIcon, NSpace, NTooltip, type MessageApi } from 'naive-ui'
import { replaceLine, type Entry } from '../../utils/daeconf'

export interface EntryTarget {
  entry: Entry
  snapshot: string
}

/**
 * 弹窗会跨越用户的思考时间，其间配置可能被重新读取（例如保存失败后的重读）。
 * 行偏移一旦失效，按旧行号改写会切开无关的行，因此打开时记下原文快照，
 * 应用前逐字节比对，不一致就拒绝并提示重来。
 */
export function useEntryRewrite(content: Ref<string>, message: MessageApi) {
  function captureEntry(entry: Entry): EntryTarget {
    return { entry, snapshot: content.value.slice(entry.lineStart, entry.lineEnd) }
  }

  function rewriteEntry(target: EntryTarget, line: string): boolean {
    const { entry, snapshot } = target
    if (!entry.editable) return false
    if (content.value.slice(entry.lineStart, entry.lineEnd) !== snapshot) {
      message.error('配置在编辑期间发生了变化，请关闭后重新打开')
      return false
    }
    content.value = replaceLine(content.value, entry.lineStart, entry.lineEnd, line)
    return true
  }

  return { captureEntry, rewriteEntry }
}

export interface EntryAction {
  title: string
  icon: Component
  type?: 'error'
  onClick: () => void
}

/** 跨行条目无法按行安全改写，把操作禁用并说明原因。 */
export function entryActions(entry: Entry, actions: EntryAction[], labels = false) {
  const buttons = actions.map((action) => h(NButton, {
    size: 'tiny',
    quaternary: true,
    type: action.type,
    title: action.title,
    disabled: !entry.editable,
    onClick: action.onClick,
  }, labels
    ? {
        default: () => action.title,
        icon: () => h(NIcon, null, { default: () => h(action.icon) }),
      }
    : { icon: () => h(NIcon, null, { default: () => h(action.icon) }) }))
  const row = h(NSpace, { size: 'small', wrap: false }, { default: () => buttons })
  if (entry.editable) return row
  return h(NTooltip, null, {
    trigger: () => h('span', null, [row]),
    default: () => '该条目跨行书写，无法安全地按行改写，请使用卡片右上角的原文编辑。',
  })
}
