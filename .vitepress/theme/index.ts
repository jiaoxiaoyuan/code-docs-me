import DefaultTheme from 'vitepress/theme'
// import homeMore from './components/homeMore.vue'

import './custom.css'

// export default DefaultTheme

export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        console.log('enhanceApp', app, router, siteData)
        // app.component('homeMore', homeMore)
    }
}
