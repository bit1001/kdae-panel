import type { UpstreamSource } from '../../types/api'

// 两个来源的"版本"含义不同，必须分开呈现，不能排进同一个序列。
export const SOURCES: { value: UpstreamSource; label: string; hint: string }[] = [
  {
    value: 'official',
    label: '官方 dae',
    hint: '来自 daeuniverse/dae 的正式发布，可安装任意历史版本，校验和取自发布附带的 .dgst 文件。',
  },
  {
    value: 'kdae',
    label: 'kdae 分支',
    hint: 'olicesx/dae 的 kdae 分支没有正式发布，这里列出的是每一次成功的 CI 构建。'
      + '构建产物保留 90 天；已下载的本地版本不受过期影响，校验和取自 GitHub Actions 接口。',
  },
]

export function sourceName(value?: UpstreamSource): string {
  return SOURCES.find((item) => item.value === value)?.label || '未知来源'
}
