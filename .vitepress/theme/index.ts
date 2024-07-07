import { h, onMounted, watch, nextTick } from "vue";

import type { Theme } from "vitepress";
import { useRoute, useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import type { EnhanceAppContext } from "vitepress";
import "./styles/index.scss";

import MyLayout from "./MyLayout.vue";
import { useComponents } from "./useComponents";

import mediumZoom from "medium-zoom";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import giscusTalk from "vitepress-plugin-comment-with-giscus";


// 只需添加以下一行代码，引入时间线样式
import "vitepress-markdown-timeline/dist/theme/index.css";

export default {
    extends: DefaultTheme,
    NotFound: () => "custom 404",
    // Layout: () => h(MyLayout),
    Layout: MyLayout,

    async enhanceApp({ app, router, siteData }: EnhanceAppContext) {
        // DefaultTheme.enhanceApp({ app, router, siteData });
        app.use(ElementPlus);
        useComponents({ app, router, siteData });


    },

    setup() {
        const route = useRoute();
        const initZoom = () => {
            // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
            mediumZoom(".main img", { background: "var(--vp-c-bg)" }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
        };
        onMounted(() => {
            initZoom();
        });
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        );

        // giscus配置

        const { frontmatter } = useData();

        // console.log("frontmatter.value.layout", frontmatter.value.layoutClass);

        giscusTalk(
            {
                repo: "jiaoxiaoyuan/code-docs-me", //仓库
                repoId: "R_kgDOMPu5tw", //仓库ID
                category: "Announcements", // 讨论分类
                categoryId: "DIC_kwDOMPu5t84CgeGX", //讨论分类ID
                mapping: "pathname",
                inputPosition: "bottom",
                lang: "zh-CN",
            },
            {
                frontmatter,
                route,
            },
            //默认值为true，表示已启用，此参数可以忽略；
            //如果为false，则表示未启用
            //您可以使用“comment:true”序言在页面上单独启用它
            frontmatter.value.layoutClass === "m-nav-layout" ? false : true
        );
    },
} satisfies Theme;
