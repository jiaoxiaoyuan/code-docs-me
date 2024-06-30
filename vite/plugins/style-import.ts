import {
    createStyleImportPlugin,
    AndDesignVueResolve,
    VantResolve,
    ElementPlusResolve,
    NutuiResolve,
    AntdResolve,
} from "vite-plugin-style-import";

/**
 * 创建自动导入函数
 *
 * @returns 返回自动导入组件的函数
 */
export default function createStyleImport() {
    return createStyleImportPlugin({
        resolves: [ElementPlusResolve()],
    });
}
