import { defineConfig } from "vitepress";
import timeline from "vitepress-markdown-timeline";
import { resolve } from "path";
import { head } from "./config/head";
import { metaData } from "./config/constants";
import { themeConfig } from "./config/theme";

export default defineConfig({
    srcDir: "docs",
    lang: metaData.lang,
    title: metaData.title,
    description: metaData.description,
    head, // <head>内标签配置

    // cleanUrls: true,
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
    sitemap: {
        hostname: "https://www.4rvi.cn",
        lastmodDateOnly: false,
    },
    vite: {
        // 配置别名

        resolve: {
            // alias,
            alias: {
                /** @ 符号指向 src 目录 */
                "@": resolve(__dirname, "./.vitepress"),
                "@/page": resolve(__dirname, "./page"),
            },
            extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
        },
    }
});
