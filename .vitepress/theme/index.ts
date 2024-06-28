import { h, watch } from "vue";
import { useData, EnhanceAppContext } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style/index.scss";

//
import MNavLinks from "./components/MNavLinks.vue";

// 自定义模版
import CustomHomeLayout from "./layouts/CustomIndex.vue";

export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }: EnhanceAppContext) {
        // console.log('enhanceApp', app, router, siteData)
        // app.component('homeMore', homeMore)

        app.component("MNavLinks", MNavLinks);
        app.component("CustomHomeLayout", CustomHomeLayout);
    },
    // layouts: {
    //     CustomHomeLayout: CustomHomeLayout,
    // },
};
