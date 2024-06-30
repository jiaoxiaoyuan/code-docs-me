import compression from "vite-plugin-compression";
/**
 * 创建压缩插件
 *
 * @param env 环境变量对象
 * @returns 压缩插件数组
 */

export default function createCompression(env: any) {
    const { VITE_BUILD_COMPRESS } = env;
    const plugin: any = [];
    if (VITE_BUILD_COMPRESS) {
        const compressList = VITE_BUILD_COMPRESS.split(",");
        if (compressList.includes("gzip")) {
            // http://doc.ruoyi.vip/ruoyi-vue/other/faq.html#使用gzip解压缩静态文件
            plugin.push(
                compression({
                    ext: ".gz",
                    deleteOriginFile: false,
                })
            );
        }
        if (compressList.includes("brotli")) {
            plugin.push(
                compression({
                    ext: ".br",
                    algorithm: "brotliCompress",
                    deleteOriginFile: false,
                })
            );
        }
    }
    return plugin;
}
