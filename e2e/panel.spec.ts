import { expect, test } from '@playwright/test'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const configPath = join(here, '.work', 'config.dae')

const PASSWORD = 'e2e-Password-2026'
const NODE_LINK = 'trojan://demo@e2e-node.example.com:443?sni=e2e-node.example.com#E2E-01'

async function expectCardsAligned(locator: import('@playwright/test').Locator) {
  await expect.poll(async () => {
    const boxes = await locator.evaluateAll((cards) => cards.map((card) => {
      const box = card.getBoundingClientRect()
      return { top: Math.round(box.top), height: box.height }
    }))
    const rows = Map.groupBy(boxes, ({ top }) => top)
    const sharedRows = [...rows.values()].filter((row) => row.length > 1)
    if (!sharedRows.length) return Number.POSITIVE_INFINITY
    return Math.max(...sharedRows.map((row) => {
      const heights = row.map(({ height }) => height)
      return Math.max(...heights) - Math.min(...heights)
    }))
  }).toBeLessThanOrEqual(1)
}

async function expectColumnsAligned(locator: import('@playwright/test').Locator) {
  await expect.poll(async () => {
    const bottoms = await locator.evaluateAll((columns) => columns.map((column) => column.getBoundingClientRect().bottom))
    if (bottoms.length < 2) return Number.POSITIVE_INFINITY
    return Math.max(...bottoms) - Math.min(...bottoms)
  }).toBeLessThanOrEqual(1)
}

// 一条链路走完初始化 → 概览 → 编排保存 → 退出重登：
// 这是唯一同时压到路由守卫、CSRF、配置事务与 dae 校验桩的测试，
// 步骤之间共享账号与磁盘状态，因此收在一个用例里按序执行。
test('首次初始化到编排保存的完整链路', async ({ page }) => {
  await test.step('通过一次性链接初始化管理员', async () => {
    await page.goto('/setup#bootstrap=e2e-bootstrap')
    await expect(page.getByRole('heading', { name: '创建管理员' })).toBeVisible()
    await page.getByPlaceholder('至少 12 个字符').fill(PASSWORD)
    await page.locator('.n-form-item', { hasText: '确认密码' }).locator('input').fill(PASSWORD)
    await page.getByRole('button', { name: '完成初始化' }).click()
    // 初始化成功即已登录，落在运行概览
    await expect(page.getByRole('heading', { name: '运行状态' })).toBeVisible()
  })

  await test.step('概览呈现 systemd 桩给出的健康状态', async () => {
    await expect(page.locator('.metric-card').first()).toContainText('运行中')
    await expect(page.getByText('dae version v1.0.6')).toBeVisible()
    await expectCardsAligned(page.locator('.equal-height-grid .panel-card'))
  })

  await test.step('导入节点并保存重载，改动落到磁盘', async () => {
    await page.goto('/proxy')
    await expectCardsAligned(page.locator('.equal-height-grid .panel-card'))
    await page.getByRole('button', { name: '导入节点' }).click()
    await page.getByPlaceholder(/vmess/).fill(NODE_LINK)
    await page.getByRole('button', { name: '加入编排' }).click()
    await expect(page.getByText('e2e-node.example.com').first()).toBeVisible()

    await page.locator('.page-toolbar').getByRole('button', { name: '保存并重载' }).click()
    await page.locator('.n-dialog').getByRole('button', { name: '保存并重载' }).click()
    await expect(page.getByText('编排结果已保存并完成无损重载').first()).toBeVisible()

    // 面板宣称保存成功，磁盘上必须真的有这一行——这是配置事务的最终断言
    expect(readFileSync(configPath, 'utf8')).toContain(NODE_LINK)
  })

  await test.step('设置页左右列保持同一底边', async () => {
    await page.goto('/settings')
    await expect(page.getByRole('heading', { name: '账户与诊断' })).toBeVisible()
    await expectColumnsAligned(page.locator('.settings-page .equal-height-grid > *'))
  })

  await test.step('移动端单列布局没有横向溢出', async () => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')
    await expect(page.getByRole('heading', { name: '运行状态' })).toBeVisible()
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    expect(overflow).toBeLessThanOrEqual(1)
  })

  await test.step('退出后凭密码重新登录', async () => {
    await page.getByRole('button', { name: '退出登录' }).click()
    await expect(page.getByRole('heading', { name: '管理员登录' })).toBeVisible()
    await page.getByPlaceholder('admin').fill('admin')
    await page.getByPlaceholder('输入管理员密码').fill(PASSWORD)
    await page.getByRole('button', { name: '登录', exact: true }).click()
    await expect(page.getByRole('heading', { name: '运行状态' })).toBeVisible()
  })
})
