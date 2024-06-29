import { defineConfig } from "vitepress";
import timeline from "vitepress-markdown-timeline";

import { head } from "./config/head";
import { metaData } from "./config/constants";
import { themeConfig } from "./config/theme";

export default defineConfig({
    srcDir: "docs",
    lang: metaData.lang,
    title: metaData.title,
    description: metaData.description,
    head, // <head>内标签配置

    cleanUrls: true,
    lastUpdated: true, // 显示最后更新时间

    themeConfig, // 主题配置

    //markdown配置
    markdown: {
        lineNumbers: true, // 代码块显示行号
        //时间线
        config: (md) => {
            md.use(timeline);
        },
        // 开启图片懒加载
        image: {
            lazyLoading: true,
        },
    },
});
