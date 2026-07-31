<script setup lang="ts">
import { ref, watch } from 'vue'
import { NButton, NInput, NModal, NSpace, NText } from 'naive-ui'
import { readSectionBody, setSectionBody } from '../../utils/daeconf'

const show = defineModel<boolean>('show', { required: true })
const content = defineModel<string>('content', { required: true })
const props = defineProps<{
  section: string
  title: string
  description: string
}>()

const draft = ref('')

watch(show, (visible) => {
  if (visible) draft.value = readSectionBody(content.value, props.section)
})

function apply() {
  content.value = setSectionBody(content.value, props.section, draft.value)
  show.value = false
}
</script>

<template>
  <NModal v-model:show="show" preset="card" :title="title" class="orchestrate-source-modal" :mask-closable="false">
    <NText depth="3">{{ description }}</NText>
    <NInput
      v-model:value="draft"
      type="textarea"
      class="mono section-source-input"
      :rows="18"
      spellcheck="false"
    />
    <template #footer>
      <NSpace justify="end">
        <NButton @click="show = false">取消</NButton>
        <NButton type="primary" @click="apply">应用到编排</NButton>
      </NSpace>
    </template>
  </NModal>
</template>
