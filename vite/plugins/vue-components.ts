import Components from "unplugin-vue-components/vite";
import {
    ElementPlusResolver,
    // AntDesignVueResolver,
    // VantResolver
    // HeadlessUiResolver,
    // ElementUiResolver
} from "unplugin-vue-components/resolvers";

/**
 * 创建自动导入函数
 *
 * @returns 返回自动导入组件的函数
 */
export default function createAutoImport() {
    return Components({
        // dirs: ["src/components"], // 目标文件夹
        dirs: ["./.vitepress/theme/components", "page"], // 目标文件夹
        extensions: ["vue", "jsx", "tsx"], // 文件类型
        dts: "types/components.d.ts", // 输出文件，里面都是一些import的组件键值对
        // ui库解析器，也可以自定义，需要安装相关UI库
        resolvers: [
            // VantResolver()
            ElementPlusResolver(),
            // AntDesignVueResolver(),
            // HeadlessUiResolver(),
            // ElementUiResolver()
        ],
    });
}
