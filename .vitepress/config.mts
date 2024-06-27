import { defineConfig } from 'vitepress'
import nav from './nav'
import sidebar from './sidebar'
import footer from './footer'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Mr焦',
    description: '90后码农，爱研究瞎折腾，爱文学烂笔头',
    srcDir: 'docs',
    themeConfig: {
        nav: nav,
        sidebar: sidebar,
        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
        // 底部信息
        footer: footer,
        // 显示H2-H6标题
        outline: 'deep',
        // 显示目录
        outlineTitle: '目录',
        // 搜索框
        search: {
            provider: 'local'
        }
    },
    lastUpdated: true
})
