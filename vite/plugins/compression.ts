import compression from "vite-plugin-compression";
/**
 * 创建压缩插件
 *
 * @param env 环境变量对象
 * @returns 压缩插件数组
 */

export default function createCompression(env: any) {
    // const { VITE_BUILD_COMPRESS } = env;
    const plugin: any = [];
    // if (VITE_BUILD_COMPRESS) {
    //     const compressList = VITE_BUILD_COMPRESS.split(",");
    //     if (compressList.includes("gzip")) {
    //         plugin.push(
    //             compression({
    //                 ext: ".gz",
    //                 deleteOriginFile: false,
    //             })
    //         );
    //     }
    //     if (compressList.includes("brotli")) {
    //         plugin.push(
    //             compression({
    //                 verbose: true,
    //                 disable: false, // 不禁用压缩
    //                 deleteOriginFile: false, // 压缩后是否删除原文件
    //                 threshold: 10240, // 压缩前最小文件大小
    //                 algorithm: "gzip", // 压缩算法
    //                 ext: ".gz", // 文件类型
    //             })
    //         );
    //     }
    // }

    return plugin.push(
        compression({
            verbose: true,
            disable: false, // 不禁用压缩
            deleteOriginFile: false, // 压缩后是否删除原文件
            threshold: 10240, // 压缩前最小文件大小
            algorithm: "gzip", // 压缩算法
            ext: ".gz", // 文件类型
        })
    );
}
