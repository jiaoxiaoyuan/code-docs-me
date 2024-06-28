import { h, watch } from "vue";
import { useData, EnhanceAppContext } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style/index.scss";

//
import MNavLinks from "./components/MNavLinks.vue";

export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }: EnhanceAppContext) {
        // console.log('enhanceApp', app, router, siteData)
        // app.component('homeMore', homeMore)

        app.component("MNavLinks", MNavLinks);
    },
};
