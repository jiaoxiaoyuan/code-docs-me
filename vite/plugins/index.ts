import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { visualizer } from "rollup-plugin-visualizer";
import VueSetupExtend from "vite-plugin-vue-setup-extend";

import createAutoImport from "./auto-import";
import createCompression from "./compression";
import createStyleImport from "./style-import";
import createVueCompression from "./vue-components";

export default function createVitePlugins(viteEnv: any, isBuild = false) {
    console.log("viteEnv", viteEnv);

    const vitePlugins = [vue(), visualizer(), VueSetupExtend()];

    vitePlugins.push(vueJsx({}));
    vitePlugins.push(createVueCompression());
    vitePlugins.push(createStyleImport());
    vitePlugins.push(createAutoImport());
    isBuild && vitePlugins.push(...createCompression(viteEnv));
    return vitePlugins;
}
