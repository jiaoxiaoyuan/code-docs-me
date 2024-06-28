import { defineConfig } from "vitepress";
import nav from "./nav";
import sidebar from "./sidebar";
// import footer from './footer'

// https://vitepress.dev/reference/site-config

export default defineConfig({
    title: "Mr焦",
    description: "90后码农，爱研究瞎折腾，爱文学烂笔头",
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "https://img.mtsws.cn/LightPicture/2023/08/8b794e021120837b.png",
            },
        ],
    ],
    srcDir: "docs",
    themeConfig: {
        siteTitle: "Mr焦",
        logo: "https://img.mtsws.cn/LightPicture/2023/08/8b794e021120837b.png",
        nav: nav,
        sidebar: sidebar,
        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],
        // 底部信息
        footer: {
            message:
                '<div style="display: flex;flex-direction: column;align-items: center;"><a href="https://beian.miit.gov.cn/#/Integrated/index"> 蜀ICP备17037090号-4</a> <a style="display: flex;align-items: center;" href="https://beian.mps.gov.cn/#/query/webSearch"><img src="https://beian.mps.gov.cn/web/assets/logo01.6189a29f.png" style="width: 18px; height: 18px;" alt="" /> 渝公网安备50010702505709号</a></div>',
            copyright: "Copyright © 2024 我的编程日志 版权所有",
        },
        // 显示H2-H6标题
        // outline: 'deep',
        outline: {
            level: [2, 6],
            label: "当前页大纲",
        },
        // 显示目录
        outlineTitle: "目录",
        // 搜索框
        search: {
            provider: "local",
        },
        docFooter: {
            prev: "上一页",
            next: "下一页",
        },
        returnToTopLabel: "返回顶部",
        lastUpdated: {
            text: "最后更新于",
            formatOptions: {
                dateStyle: "short",
                timeStyle: "medium",
            },
        },
    },

    markdown: {
        // 代码块风格
        theme: "material-theme-palenight",
        // theme:'github-light',
        // 代码块显示行数
        lineNumbers: true,
    },
    base: "/", //网站部署的路径，默认根目录
});
