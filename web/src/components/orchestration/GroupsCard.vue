<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  NButton,
  NCard,
  NCheckbox,
  NCheckboxGroup,
  NIcon,
  NInput,
  NInputGroup,
  NInputNumber,
  NModal,
  NPopconfirm,
  NSelect,
  NSpace,
  NTag,
  NText,
  NTooltip,
  useMessage,
} from 'naive-ui'
import { AddOutline, TrashOutline } from '@vicons/ionicons5'
import {
  addGroup,
  addGroupFilters,
  isValidTag,
  parseGroups,
  readSection,
  removeGroup,
  setGroupFilter,
  setGroupPolicy,
  type Group,
} from '../../utils/daeconf'

const content = defineModel<string>({ required: true })
const message = useMessage()

const groups = computed<Group[]>(() => parseGroups(content.value))
const groupNames = computed(() => new Set(groups.value.map((group) => group.name)))

const POLICY_OPTIONS = [
  { label: 'min_moving_avg · 移动平均延迟最小', value: 'min_moving_avg' },
  { label: 'min_avg10 · 最近 10 次平均延迟最小', value: 'min_avg10' },
  { label: 'min · 最近一次延迟最小', value: 'min' },
  { label: 'random · 每次连接随机', value: 'random' },
  { label: 'fixed(n) · 固定第 n 个节点', value: 'fixed' },
]

function parsePolicy(value?: string): { name: string; index: number } {
  const fixed = /^fixed\((\d+)\)$/.exec(value || '')
  if (fixed) return { name: 'fixed', index: Number(fixed[1]) }
  return { name: value || 'min_moving_avg', index: 0 }
}

function policyOptionsFor(group: Group) {
  const current = parsePolicy(group.policy?.value).name
  if (POLICY_OPTIONS.some((option) => option.value === current)) return POLICY_OPTIONS
  return [...POLICY_OPTIONS, { label: current, value: current }]
}

const newGroupName = ref('')
const newGroupPolicy = ref('min_moving_avg')

function createGroup() {
  const name = newGroupName.value.trim()
  if (!isValidTag(name)) {
    message.error('分组名只能使用字母、数字、下划线、点或横线，且以字母或下划线开头')
    return
  }
  if (groupNames.value.has(name)) {
    message.error(`分组 ${name} 已存在`)
    return
  }
  content.value = addGroup(content.value, name, newGroupPolicy.value === 'fixed' ? 'fixed(0)' : newGroupPolicy.value)
  newGroupName.value = ''
}

function changePolicy(group: Group, name: string) {
  const serialized = name === 'fixed' ? `fixed(${parsePolicy(group.policy?.value).index})` : name
  content.value = setGroupPolicy(content.value, group, serialized)
}

function changeFixedIndex(group: Group, index: number | null) {
  content.value = setGroupPolicy(content.value, group, `fixed(${index ?? 0})`)
}

const filterTarget = ref<{ group: Group; index: number } | null>(null)
const filterValue = ref('')
const allNodeNames = computed(() =>
  readSection(content.value, 'node').entries.map((e) => e.tag).filter((t): t is string => t !== null),
)

function openFilterEditor(group: Group, index: number) {
  filterTarget.value = { group, index }
  filterValue.value = group.filters[index]?.value || ''
}

function applyFilter() {
  const target = filterTarget.value
  if (!target) return
  content.value = setGroupFilter(content.value, target.group, target.index, filterValue.value.trim())
  filterTarget.value = null
}

const nodePickerVisible = ref(false)
const selectedNodeNames = ref<string[]>([])

function openNodePicker() {
  selectedNodeNames.value = []
  nodePickerVisible.value = true
}

function applyNodePicker() {
  const picked = selectedNodeNames.value.filter(Boolean)
  if (picked.length === 0) return
  const target = filterTarget.value
  if (!target) return
  content.value = addGroupFilters(content.value, target.group, picked.map((n) => `name(${n})`))
  filterTarget.value = null
  nodePickerVisible.value = false
}
</script>

<template>
  <NCard title="分组" class="panel-card">
    <template #header-extra>
      <NTag size="small" :bordered="false">{{ groups.length }} 个</NTag>
    </template>
    <div v-if="groups.length === 0" class="orchestrate-empty">
      <NText depth="3">还没有分组。分组是路由规则的出站目标，按策略从命中的节点中选择。</NText>
    </div>
    <div v-for="(group, groupIndex) in groups" :key="groupIndex" class="group-item">
      <div class="group-head">
        <code>{{ group.name }}</code>
        <NPopconfirm positive-text="删除" negative-text="取消" @positive-click="content = removeGroup(content, group)">
          <template #trigger>
            <NButton size="tiny" quaternary type="error" title="删除分组">
              <template #icon><NIcon><TrashOutline /></NIcon></template>
            </NButton>
          </template>
          删除分组后，引用它的路由规则会校验失败，确认删除？
        </NPopconfirm>
      </div>
      <div class="group-row">
        <NText depth="3">策略</NText>
        <NSelect
          size="small"
          :value="parsePolicy(group.policy?.value).name"
          :options="policyOptionsFor(group)"
          :disabled="group.policy !== null && !group.policy.editable"
          @update:value="(value: string) => changePolicy(group, value)"
        />
        <NInputNumber
          v-if="parsePolicy(group.policy?.value).name === 'fixed'"
          size="small"
          class="group-fixed-index"
          :min="0"
          :value="parsePolicy(group.policy?.value).index"
          @update:value="(value: number | null) => changeFixedIndex(group, value)"
        />
      </div>
      <div class="group-row filters">
        <NText depth="3">过滤</NText>
        <NSpace size="small" wrap>
          <NTooltip v-for="(filter, index) in group.filters" :key="index" :disabled="filter.editable">
            <template #trigger>
              <NTag
                size="small"
                class="filter-tag mono"
                :class="{ locked: !filter.editable }"
                :closable="filter.editable"
                @close="content = setGroupFilter(content, group, index, '')"
              >
                <span class="filter-value" @click="filter.editable && openFilterEditor(group, index)">{{ filter.value }}</span>
              </NTag>
            </template>
            该条件跨行或结构复杂，为避免改坏配置，请在配置管理页编辑原文。
          </NTooltip>
          <NButton size="tiny" dashed @click="openFilterEditor(group, group.filters.length)">
            <template #icon><NIcon><AddOutline /></NIcon></template>
            {{ group.filters.length === 0 ? '全部节点，添加过滤' : '添加' }}
          </NButton>
        </NSpace>
      </div>
    </div>
    <div class="orchestrate-add borderless">
      <NInputGroup>
        <NInput v-model:value="newGroupName" placeholder="新分组名，如 proxy" @keyup.enter="createGroup" />
        <NSelect v-model:value="newGroupPolicy" :options="POLICY_OPTIONS" class="group-policy-select" />
        <NButton type="primary" ghost @click="createGroup">
          <template #icon><NIcon><AddOutline /></NIcon></template>新建
        </NButton>
      </NInputGroup>
    </div>
  </NCard>

  <NModal :show="filterTarget !== null" preset="card" title="分组过滤条件" class="orchestrate-modal" @update:show="filterTarget = null">
    <NText depth="3">
      过滤函数可用 <code>&amp;&amp;</code> 连接、<code>!</code> 取反：<code>name(keyword: HK)</code>、
      <code>name(regex: '^US')</code>、<code>subtag(my_sub)</code>。多条过滤之间是“或”关系。
    </NText>
    <NInput
      v-model:value="filterValue"
      class="mono"
      placeholder="subtag(my_sub) && !name(keyword: '到期')"
      spellcheck="false"
      @keyup.enter="applyFilter()"
    />
    <div class="filter-actions">
      <NButton size="tiny" type="primary" ghost @click="openNodePicker">
        从现有节点中选择
      </NButton>
    </div>
    <template #footer>
      <NSpace justify="end">
        <NButton @click="filterTarget = null">取消</NButton>
        <NButton type="primary" @click="applyFilter()">确定</NButton>
      </NSpace>
    </template>
  </NModal>

  <NModal :show="nodePickerVisible" preset="card" title="选择节点" class="orchestrate-modal" @update:show="nodePickerVisible = false">
    <NCheckboxGroup v-model:value="selectedNodeNames">
      <NSpace vertical size="small">
      <NCheckbox v-for="name in allNodeNames" :key="name" :value="name" :label="name" />
      </NSpace>
    </NCheckboxGroup>
    <template #footer>
      <NSpace justify="end">
        <NButton @click="nodePickerVisible = false">取消</NButton>
        <NButton type="primary" @click="applyNodePicker()">添加</NButton>
      </NSpace>
    </template>
  </NModal>
</template>

<style scoped>
.filter-actions {
  margin-top: 8px;
}
</style>
