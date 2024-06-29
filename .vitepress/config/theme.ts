import type { DefaultTheme } from 'vitepress'
import { nav } from './nav'
import { sidebar } from './sidebar'

export const themeConfig: DefaultTheme.Config = {
    // 导航栏配置
    nav,
    // 侧边栏配置
    sidebar,
    // 搜索框
    logo: 'https://img.mtsws.cn/LightPicture/2023/08/8b794e021120837b.png',
    // 搜索
    search: {
        provider: 'local'
    },
    returnToTopLabel: '返回顶部',
    lastUpdated: {
        text: '最后更新于',
        formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
        }
    },
    outline: {
        level: [2, 6],
        label: '当前页大纲'
    },
    // 显示目录
    outlineTitle: '目录'
}
