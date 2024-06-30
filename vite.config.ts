import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

import createVitePlugins from "./vite/plugins";

const viteConfig = defineConfig(({ mode, command }) => {
    const env = loadEnv(mode, process.cwd());
    console.log("vite 开始构建---->", mode, command, env);
    return {
        // root: process.cwd(),
        resolve: {
            // alias,
            alias: {
                /** @ 符号指向 src 目录 */
                "@": resolve(__dirname, "./.vitepress"),
                "@/page": resolve(__dirname, "./page"),
            },
            extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
        },
        // plugins: [vue()],
        plugins: [...createVitePlugins(env), vue()],
        // 设置打包路径
    };
});

export default viteConfig;
