<script setup lang="ts">
import { computed, ref } from 'vue'
import { NButton, NIcon, useDialog, useMessage } from 'naive-ui'
import { CloudDownloadOutline } from '@vicons/ionicons5'
import { getJSON, postJSON, putJSON } from '../api/client'
import type { PanelUpdatePayload, PanelUpdateStatus } from '../types/api'

const props = withDefaults(defineProps<{
  payload: PanelUpdatePayload
  label?: string
  size?: 'tiny' | 'small' | 'medium' | 'large'
  disabled?: boolean
}>(), {
  label: '',
  size: 'small',
  disabled: false,
})

const emit = defineEmits<{
  statusChange: [status: PanelUpdateStatus]
}>()

const dialog = useDialog()
const message = useMessage()
const upgrading = ref(false)
const preferenceSaving = ref(false)
const latest = computed(() => props.payload.check.latest)
const canSelfUpdate = computed(() => props.payload.status?.enabled === true && props.payload.status.updatable)
const canEnableSelfUpdate = computed(() => props.payload.status !== undefined && !props.payload.status.enabled)
const upgradeLabel = computed(() => props.label || (latest.value ? `升级到 ${latest.value}` : '立即升级'))

function publishStatus(status: PanelUpdateStatus) {
  emit('statusChange', status)
  window.dispatchEvent(new CustomEvent('kdae-panel:self-update-changed', { detail: status }))
}

function confirmUpgrade() {
  dialog.warning({
    title: `升级面板到 ${latest.value || '最新版本'}`,
    content: '面板会下载发布包、比对 sha256，并用新版本自证能在本机运行，'
      + `然后替换 ${props.payload.status?.binaryPath} 并重启自身。`
      + '重启期间面板会短暂无法访问（通常几秒），dae 与代理流量不受影响。'
      + '上一版会保留一份副本，万一新版本起不来可以手工换回。',
    positiveText: '下载并升级',
    negativeText: '取消',
    onPositiveClick: startUpgrade,
  })
}

async function startUpgrade() {
  upgrading.value = true
  try {
    await postJSON('/api/v1/panel/update', latest.value ? { version: latest.value } : {})
    message.info('已开始升级，面板重启后页面会自动刷新')
    void waitForRestart(latest.value)
  } catch (error) {
    upgrading.value = false
    message.error(error instanceof Error ? error.message : '启动升级失败')
  }
}

function confirmEnableAndUpgrade() {
  dialog.warning({
    title: `启用并升级到 ${latest.value || '最新版本'}`,
    content: '启用状态会保存在面板数据目录，以后有新版本即可直接在界面升级。'
      + '本次会下载并校验发布包、备份当前二进制，然后重启面板；dae 与代理流量不受影响。',
    positiveText: '启用并升级',
    negativeText: '取消',
    onPositiveClick: enableAndUpgrade,
  })
}

async function enableAndUpgrade() {
  preferenceSaving.value = true
  try {
    const payload = await putJSON<{ status: PanelUpdateStatus }>('/api/v1/panel/update/preference', { enabled: true })
    publishStatus(payload.status)
    if (!payload.status.updatable) {
      message.warning(payload.status.problem || '当前部署无法完成一键升级')
      return
    }
    await startUpgrade()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '启用面板一键升级失败')
  } finally {
    preferenceSaving.value = false
  }
}

// 重启期间请求失败是正常现象；只把健康接口报告目标版本视为成功。
async function waitForRestart(expected?: string) {
  const deadline = Date.now() + 120_000
  while (Date.now() < deadline) {
    await new Promise((resolve) => window.setTimeout(resolve, 2000))
    try {
      const health = await getJSON<{ version: string }>('/api/v1/health')
      if (!expected || health.version === expected) {
        window.location.reload()
        return
      }
    } catch {
      // 面板仍在重启，继续等待。
    }
  }
  upgrading.value = false
  message.warning('等待面板重启超时，请手动刷新页面确认升级结果')
}
</script>

<template>
  <NButton
    v-if="canSelfUpdate"
    type="primary"
    :size="size"
    :loading="upgrading"
    :disabled="disabled || upgrading"
    data-testid="panel-upgrade"
    @click="confirmUpgrade"
  >
    <template #icon><NIcon><CloudDownloadOutline /></NIcon></template>
    {{ upgrading ? '升级中…' : upgradeLabel }}
  </NButton>
  <NButton
    v-else-if="canEnableSelfUpdate"
    type="primary"
    :size="size"
    :loading="preferenceSaving || upgrading"
    :disabled="disabled || preferenceSaving || upgrading"
    data-testid="panel-enable-upgrade"
    @click="confirmEnableAndUpgrade"
  >
    <template #icon><NIcon><CloudDownloadOutline /></NIcon></template>
    启用并升级
  </NButton>
</template>
