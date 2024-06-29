import type { DefaultTheme } from "vitepress";
import { nav } from "./nav";
import { sidebar } from "./sidebar";
import { localSearchOptions } from "./local-search";
import { metaData } from "./constants";

export const themeConfig: DefaultTheme.Config = {
    // 导航栏配置
    nav,
    // 侧边栏配置
    sidebar,
    // 搜索框
    logo: metaData.image,
    // 搜索
    search: {
        provider: "local",
        options: localSearchOptions,
    },
    returnToTopLabel: "返回顶部",
    lastUpdated: {
        text: "最后更新于",
        formatOptions: {
            dateStyle: "short",
            timeStyle: "medium",
        },
    },
    outline: {
        level: [2, 6],
        label: "当前页大纲",
    },
    // 显示目录
    outlineTitle: "目录",
};
