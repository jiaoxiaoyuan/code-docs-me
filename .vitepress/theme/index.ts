// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'

import MNavLinks from "./components/MNavLinks.vue";


import './styles/index.scss'

export default {
    extends: DefaultTheme,
    
    NotFound: () => 'custom 404',
     
    Layout: MyLayout,
    
    enhanceApp({ app, router, siteData }) {
        // ...
        app.component("MNavLinks", MNavLinks);
    },

    setup() {
        // this function will be executed inside VitePressApp's
        // setup hook. all composition APIs are available here.
    }
} satisfies Theme
