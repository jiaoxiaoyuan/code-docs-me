import type { NavLink } from "../../../../types";
type NavData = {
    title: string;
    items: NavLink[];
};

export const NAV_DATA: NavData[] = [
    {
        title: '政企门户官网',
        items: [
            {
                icon: "https://www.gov.cn/images/trs_favicon.ico",
                title: "中国政府网",
                desc: "中国政府网_中央人民政府门户网站",
                link: "https://www.gov.cn",
            },
            {
                icon: "https://www.stats.gov.cn/favicon.ico",
                title: "国家统计局",
                desc: "国家统计局门户网站",
                link: "https://www.stats.gov.cn/",
            },
            {
                icon: "https://zwfw.samr.gov.cn/icon.png",
                title: "国家市场监督管理总局",
                desc: "国家统计局门户网站",
                link: "https://zwfw.samr.gov.cn/server",
            },
            {
                icon: "https://beian.mps.gov.cn/favicon.ico",
                title: "全国互联网安全管理服务平台",
                desc: "全国互联网安全管理平台",
                link: "https://beian.mps.gov.cn",
            },
            {
                icon: "https://auth.cq.gov.cn:81/static/img/icon/favicon.ico",
                title: "重庆政务服务网",
                desc: "重庆政务服务网、愉快办,“渝快办”统一身份认证系统",
                link: "https://beian.mps.gov.cn",
            },
            {
                icon: "https://t1.chei.com.cn/chsi/favicon.ico",
                title: "学信网",
                desc: "中国高等教育学生信息网（学信网）",
                link: "https://www.chsi.com.cn",
            },
            {
                icon: "https://www.neea.edu.cn/favicon.ico",
                title: "中国教育考试网",
                desc: "全国英语、计算机等级考试、教师资格证等考试报名、考试查询",
                link: "https://www.neea.edu.cn/",
            },
            {
                icon: "http://www.cpta.com.cn/favicon.ico",
                title: "中国人事考试网",
                desc: "人事考试，考试报名，资格考试，公务员考试",
                link: "http://www.cpta.com.cn",
            },
            {
                icon: "https://www.ruankao.org.cn/asset/image/logo/logo.png",
                title: "软考网",
                desc: "中国计算机技术职业资格网",
                link: "https://www.ruankao.org.cn",
            },
            {
                icon: "https://www.ruankao.org.cn/asset/image/logo/logo.png",
                title: "工信教考网",
                desc: "工业和信息化部教育与考试中心",
                link: "https://www.miiteec.org.cn/",
            },
            {
                icon: "https://www.miitec.cn/home/images/home_logo.png",
                title: "人才交流中心",
                desc: "工业和信息化部人才交流中心",
                link: "https://www.miiteec.org.cn/",
            },
            {
                icon: "https://i.zpimg.cn/public_read/user_logo/17088765atf2p534.png",
                title: "工信学习网",
                desc: "工信和信息化技术技能人才网",
                link: "https://www.miiteec.org.cn/",
            },
            {
                icon: "https://www.nlc.cn/template_resource/20186/img/favicon.ico",
                title: "国家图书馆",
                desc: "中国国家图书馆.数字图书馆.国家典籍博物馆",
                link: "https://www.nlc.cn/",
            },
            {
                icon: "https://le.ouchn.cn/assets/logo.8894ec3b.ico",
                title: "终身教育平台",
                desc: "教育部直属终身教育平台",
                link: "https://le.ouchn.cn/",
            },
            {
                icon: "https://cont.12315.cn/favicon.ico",
                title: "合同示范文本库",
                desc: "国家市场监督管理总局.合同示范文本库",
                link: "https://cont.12315.cn/",
            },
            {
                icon: "https://wenshu.court.gov.cn/website/wenshu/images/favicon.ico",
                title: "中国裁判文书网",
                desc: "中国裁判文书网 - 最高人民法院",
                link: "https://wenshu.court.gov.cn",
            },
            {
                icon: "https://jishi.cctv.com/favicon.ico",
                title: "央视网纪实频道",
                desc: "纪实-中国纪录片第一频道,最新、高清正版海量纪录片_央视网",
                link: "https://jishi.cctv.com",
            },
            {
                icon: "https://www.gov.cn/images/trs_favicon.ico",
                title: "国家企业信用信息公示系统",
                desc: "国家企业信用信息公示系统",
                link: "https://www.gsxt.gov.cn",
            },
            {
                icon: "https://www.nmpa.gov.cn/wbppimages/favicon.ico",
                title: "国家药品监督管理局",
                desc: "国家药品监督管理局",
                link: "https://www.nmpa.gov.cn",
            },
            {
                icon: "https://sswz.spb.gov.cn/img/icon/logo.ico",
                title: "邮政局投诉",
                desc: "国家邮政局投诉网站",
                link: "https://sswz.spb.gov.cn",
            },
            {
                icon: "https://i.zpimg.cn/public_read/user_logo/17088765atf2p534.png",
                title: "工信部电信用户申诉受理中心",
                desc: "工信部电信用户申诉受理中心",
                link: "https://yhssglxt.miit.gov.cn/web/",
            },
            {
                icon: "https://tsgs.12315.cn/favicon.ico",
                title: "全国12315互联网平台",
                desc: "全国12315互联网平台",
                link: "https://tsgs.12315.cn",
            },
            {
                icon: "https://gab.122.gov.cn/favicon.ico",
                title: "交通安全综合服务管理平台",
                desc: "公安部互联网交通安全综合服务管理平台",
                link: "https://gab.122.gov.cn",
            },
            {
                icon: "https://news.ceic.ac.cn/images/logo.gif",
                title: "中国地震台网",
                desc: "中国地震台网",
                link: "https://news.ceic.ac.cn",
            },
            {
                icon: "http://bzdt.ch.mnr.gov.cn/image/sbsm.ico",
                title: "标准地图服务系统",
                desc: "标准地图依据中国和世界各国国界线画法标准编制而成，可用于新闻宣传用图、书刊报纸插图、广告展示背景图、工艺品设计底图等",
                link: "http://bzdt.ch.mnr.gov.cn",
            },
            {
                icon: "https://www.12348.gov.cn/resources/images/favicon.png",
                title: "中国法律服务网",
                desc: "中国法律服务网",
                link: "https://www.12348.gov.cn",
            },
            {
                icon: "http://www.cneb.gov.cn/favicon.ico",
                title: "国家应急广播",
                desc: "国家应急广播",
                link: "http://www.cneb.gov.cn/",
            },
            {
                icon: "http://open.nlc.cn/onlineedu/client_res/files/logo.png",
                title: "国图公开课",
                desc: "国图公开课",
                link: "http://open.nlc.cn",
            },
            {
                icon: "",
                title: "中国知网",
                desc: "中国知网知识发现网络平台—面向海内外读者提供中国学术文献、外文文献、学位论文、报纸、会议、年鉴、工具书等各类资源统一检索、统一导航、在线阅读和下载服务",
                link: "https://www.cnki.net/",
            },
        ]
    },
    {
        title: '常用网站',
        items: [
            {
                icon: "https://www.google.com.hk/favicon.ico",
                title: "谷歌",
                desc: "谷歌搜索",
                link: "https://www.google.com.hk/",
            },
            {
                icon: "https://www.baidu.com/favicon.ico",
                title: "百度",
                desc: "百度搜索",
                link: "https://www.baidu.com",
            },
            {
                icon: "https://metaso.cn/apple-touch-icon.png",
                title: "秘塔AI搜索",
                desc: "秘塔AI搜索，没有广告，直达结果",
                link: "https://metaso.cn/",
            },
            {
                icon: "https://inews.gtimg.com/newsapp_bt/0/15822141895/0",
                title: "QQ邮箱",
                desc: "腾讯QQ邮箱，让你的生活更轻松",
                link: "https://mail.qq.com",
            },
            {
                icon: "https://gitee.com/favicon.ico",
                title: "码云-gitee",
                desc: "Gitee.com（码云） 是 OSCHINA.NET 推出的代码托管平台",
                link: "https://gitee.com",
            },
            {
                icon: "https://github.githubassets.com/assets/apple-touch-icon-144x144-b882e354c005.png",
                title: "github",
                desc: "github代码仓库",
                link: "https://github.com",
            },
            {
                icon: "https://npm.nodejs.cn/favicon-32x32.png",
                title: "npm",
                desc: "npm市场",
                link: "https://www.npmjs.com/",
            },
            {
                icon: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/static/favicons/favicon-32x32.png",
                title: "掘金",
                desc: "掘金是面向全球中文开发者的技术内容分享与交流平台",
                link: "https://juejin.cn",
            },
            {
                icon: "https://lf3-static.bytednsdoc.com/obj/eden-cn/pipieh7nupabozups/toutiao_web_pc/tt-icon.png",
                title: "今日头条",
                desc: "今日头条是一个通用信息平台，致力于连接人与信息，让优质丰富的信息得到高效精准的分发，促使信息创造价值。",
                link: "https://www.toutiao.com/",
            },
            {
                icon: "https://static.zhihu.com/heifetz/favicon.ico",
                title: "知乎",
                desc: "知乎，中文互联网高质量的问答社区和创作者聚集的原创内容平台",
                link: "https://www.zhihu.com/",
            },
            {
                icon: "https://g.csdnimg.cn/static/logo/favicon32.ico",
                title: "CSDN",
                desc: "CSDN是全球知名中文IT技术交流平台",
                link: "https://www.bilibili.com",
            },
            {
                icon: "https://i0.hdslb.com/bfs/static/jinkela/long/images/512.png",
                title: "哔哩哔哩",
                desc: "哔哩哔哩（bilibili.com)是国内知名的视频弹幕网站，",
                link: "https://www.bilibili.com",
            },

            {
                icon: "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico",
                title: "抖音",
                desc: "抖音-记录美好生活",
                link: "https://www.douyin.com",
            },
            {
                icon: "https://www.jd.com/favicon.ico",
                title: "京东",
                desc: "京东JD.COM-专业的综合网上购物商城",
                link: "https://www.jd.com",
            },
            {
                icon: "",
                title: "程序员做饭指南",
                desc: "程序员做饭指南",
                link: "https://cook.aiursoft.cn/",
            },
            {
                icon: "",
                title: "javascript高级程序设计(第四版)",
                desc: "javascript高级程序设计(第四版)电子书",
                link: "https://img.mtsws.cn/LightPicture/2024/07/2d19b7f02346ef19.pdf",
            },
        ]
    },
    {
        title: "技术文档(前端)",
        items: [
            {
                icon: "https://developer.mozilla.org/favicon-192x192.png",
                title: "MDN",
                desc: "Web 开发者指南",
                link: "https://developer.mozilla.org/zh-CN/docs/Web",
            },

            {
                icon: "https://www.typescriptlang.org/icons/icon-144x144.png",
                title: "TypeScript官网",
                desc: "TypeScript官网",
                link: "https://www.typescriptlang.org/",
            },

            {
                icon: "https://nodejs.org/static/images/favicons/favicon.png",
                title: "nodejs官网",
                desc: "nodejs官网",
                link: "https://nodejs.org",
            },
            {
                icon: "https://vuejs.org/images/logo.png",
                title: "vuejs官网",
                desc: "vuejs官网",
                link: "https://cn.vuejs.org/",
            },
            {
                icon: "https://www.nuxtjs.cn/favicon.ico",
                title: "nuxtjs官网",
                desc: "nuxtjs官网, 用于构建Vue.js应用程序(SSR框架)",
                link: "https://www.nuxtjs.cn/",
            },
            {
                icon: "https://cn.vuejs.org/logo.svg",
                title: "Vue Router",
                desc: "Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由",
                link: "https://router.vuejs.org/zh",
            },
            {
                icon: "https://pinia.vuejs.org/logo.svg",
                title: "Pinia",
                desc: "符合直觉的 Vue.js 状态管理库",
                link: "https://pinia.vuejs.org/zh",
            },
            {
                icon: "https://nuxt.com/icon.png",
                title: "Nuxt.js",
                desc: "一个基于 Vue.js 的通用应用框架",
                link: "https://nuxt.com",
            },
            {
                icon: "https://vueuse.org/favicon.svg",
                title: "VueUse",
                desc: "Vue Composition API 的常用工具集",
                link: "https://vueuse.org",
            },
            {
                icon: "https://vueuse.org/favicon.svg",
                title: "VueUse中文网",
                desc: "Vue Composition API 的常用工具集",
                link: "https://vueuse.nodejs.cn/",
            },
            {
                icon: "https://svelte.dev/svelte-logo-horizontal.svg",
                title: "Svelte",
                desc: "将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码",
                link: "https://svelte.dev",
            },
            {
                icon: "https://zh-hans.react.dev/favicon-32x32.png",
                title: "React官网",
                desc: "React官网",
                link: "https://zh-hans.react.dev",
            },
            {
                icon: "https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg",
                title: "UmiJS",
                desc: "插件化的企业级前端应用框架",
                link: "https://umijs.org",
            },
            {
                icon: "https://nextjs.frontendx.cn/static/favicon/favicon.ico",
                title: "Next.js",
                desc: "Next.js 是一个轻量级的 React 服务端渲染应用框架。",
                link: "https://nextjs.frontendx.cn/",
            },
            {
                icon: "https://reactrouter.com/favicon-light.png",
                title: "React Router",
                desc: "React 的声明式路由",
                link: "https://reactrouter.com",
            },
            {
                icon: "https://www.electronjs.org/zh/assets/img/logo.svg",
                title: "Electron",
                desc: "Electron是一个使用 JavaScript、HTML 和 CSS 构建桌面应用程序的框架。",
                link: "https://www.electronjs.org",
            },
            {
                icon: "https://reactnative.dev/img/favicon.ico",
                title: "React native官网",
                desc: "使用 React 来创建 Android 和 iOS 的原生应用",
                link: "https://reactnative.dev",
            },
            {
                icon: "https://reactnative.dev/img/favicon.ico",
                title: "React native中文网",
                desc: "使用 React 来创建 Android 和 iOS 的原生应用",
                link: "https://www.reactnative.cn",
            },
            {
                icon: "https://reactnavigation.org/img/favicon.ico",
                title: "React Navigation",
                desc: "Expo 和 React Native 应用程序的路由和导航",
                link: "https://reactnavigation.org/",
            },
            {
                icon: "https://docs.pmnd.rs/apple-touch-icon.png",
                title: "Zustand",
                desc: "一个小型、快速、可扩展的 React 状态管理解决方案",
                link: "https://docs.pmnd.rs/zustand/getting-started/introduction",
            },
            {
                icon: "https://valtio.pmnd.rs/favicon.ico",
                title: "Valtio",
                desc: "makes proxy-state simple for React and Vanilla",
                link: "https://valtio.pmnd.rs",
            },
            {
                icon: "https://jotai.org/favicon.svg",
                title: "Jotai",
                desc: "primitive and flexible state management for React",
                link: "https://jotai.org",
            },
            {
                icon: "https://cn.redux.js.org/img/redux.svg",
                title: "Redux",
                desc: "JavaScript 应用的状态容器，提供可预测的状态管理",
                link: "https://cn.redux.js.org",
            },
            {
                icon: "https://zh.mobx.js.org/assets/mobx.png",
                title: "MobX",
                desc: "一个小型、快速、可扩展的 React 状态管理解决方案",
                link: "https://zh.mobx.js.org",
            },
            {
                icon: "https://ahooks.js.org/simple-logo.svg",
                title: "ahooks",
                desc: "一套高质量可靠的 React Hooks 库",
                link: "https://ahooks.js.org/zh-CN",
            },
            {
                icon: "https://cn.vitejs.dev/logo.svg",
                title: "Vite官网",
                desc: "下一代前端工具链",
                link: "https://cn.vitejs.dev",
            },
            {
                icon: "https://webpack.docschina.org/icon_144x144.png",
                title: "webpack官网",
                desc: "webpack 是一个模块打包器。",
                link: "https://webpack.docschina.org",
            },
            {
                icon: "https://www.rollupjs.com/img/favicon.png",
                title: "rollupjs官网",
                desc: "Rollup 是一个用于 JavaScript 的模块打包工具，它将小的代码片段编译成更大、更复杂的代码，例如库或应用程序",
                link: "https://www.rollupjs.com/",
            },
            {
                icon: "https://turbo.build/images/favicon-dark/apple-touch-icon.png",
                title: "Turbo",
                desc: "Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust",
                link: "https://turbo.build",
            },
            {
                icon: "https://www.babeljs.cn/img/favicon.png",
                title: "Babel",
                desc: "Babel 是一个 JavaScript 编译器",
                link: "https://www.babeljs.cn",
            },
            {
                icon: "https://esbuild.github.io/favicon.svg",
                title: "esbuild",
                desc: "An extremely fast bundler for the web",
                link: "https://esbuild.github.io",
            },
            {
                icon: "https://swc.rs/favicon/apple-touch-icon.png",
                title: "SWC",
                desc: "Rust-based platform for the Web",
                link: "https://swc.rs",
            },
            {
                icon: "https://www.lodashjs.com/img/favicon.ico",
                title: "Lodash",
                desc: "Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。",
                link: "https://www.lodashjs.com/",
            },
            {
                icon: "https://www.purgecss.cn/img/favicon.ico",
                title: "PurgeCSS",
                desc: "PurgeCSS 是一个用来删除未使用的 CSS 代码的工具",
                link: "https://www.purgecss.cn/",
            },
            {
                icon: "https://postcss.org/assets/logo-3e39b0aa.svg",
                title: "PostCSS",
                desc: "一个用 JavaScript 转换 CSS 的工具",
                link: "https://postcss.org",
            },
            {
                icon: "https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
                title: "Sass",
                desc: "一个成熟，稳定，功能强大的专业级 CSS 扩展语言",
                link: "https://sass-lang.com",
            },
            {
                icon: "https://www.tailwindcss.cn/apple-touch-icon.png",
                title: "TailwindCSS 中文网",
                desc: "一个功能类优先的 CSS 框架",
                link: "https://www.tailwindcss.cn",
            },
            {
                icon: "https://pnpm.io/zh/img/favicon.png",
                title: "PNPM",
                desc: "快速的，节省磁盘空间的包管理工具",
                link: "https://pnpm.io/zh/",
            },
            {
                icon: "https://www.yarnpkg.cn/icons/icon-144x144.png",
                title: "Yarn",
                desc: "Yarn 是一个软件包管理器，还可以作为项目管理工具。",
                link: "https://www.yarnpkg.cn/",
            },
            {
                icon: "https://npm.nodejs.cn/favicon-32x32.png",
                title: "npm 中文文档网",
                desc: "npm 注册表、网站、以及命令行接口的文档。",
                link: "https://npm.nodejs.cn/",
            },
            {
                icon: "http://www.axios-js.com/icon/apple-touch-icon-152x152.png",
                title: "axios中文文档",
                desc: "Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。",
                link: "https://axios-http.com/zh/",
            },
        ]
    },
    {
        title: "APP文档(跨平台)",
        items: [
            {
                icon: "https://www.gstatic.cn/devrel-devsite/prod/vc3f2c9e1a38bbf17d13dba368cd3cbb8fa1d62d936b55c84ca4c54c7df2da66a/android/images/touchicon-180.png",
                title: "Android 官网",
                desc: "Android 设备开发者的最新应用开发工具、平台更新、培训和文档",
                link: "https://developer.android.google.cn/?hl=zh-cn",
            },
            {
                icon: "https://legacy.kotlincn.net/assets/images/apple-touch-icon-144x144.png",
                title: "Kotlin 中文网",
                desc: "Android 跨平台开发语言",
                link: "https://developer.android.google.cn/?hl=zh-cn",
            },
            {
                icon: "https://legacy.kotlincn.net/assets/images/apple-touch-icon-144x144.png",
                title: "Kotlin 多平台开发",
                desc: "Android 跨平台开发语言",
                link: "https://book.kotlincn.net/",
            },
            {
                icon: "https://legacy.kotlincn.net/assets/images/apple-touch-icon-144x144.png",
                title: "Kotlin Multiplatform",
                desc: "Android 跨平台开发语言",
                link: "https://blog.namichong.com/translation-docs/kotlin-docs/translator-says.html",
            },
            {
                icon: "https://developer.apple.com/apple-logo.svg",
                title: "IOS开发者中心",
                desc: "IOS开发者中心中文网",
                link: "https://developer.apple.com/cn/",
            },
            {
                icon: "https://developer.apple.com/apple-logo.svg",
                title: "Swift",
                desc: "Swift 是一种强大直观的编程语言，适用于所有 Apple 平台。",
                link: "https://developer.apple.com/cn/swift",
            },
            // {
            //     icon: "https://developer.apple.com/apple-logo.svg",
            //     title: "Objective-C电子书",
            //     desc: "Objective-C 开发经典教程",
            //     link: "http://www.tup.tsinghua.edu.cn/upload/books/yz/054094-01.pdf",
            // },
            {
                icon: "https://developer.huawei.com/dev_index/favicon.ico",
                title: "HarmonyOS",
                desc: '华为鸿蒙HarmonyOS系统是面向万物互联的全场景分布式操作系统，支持手机、平板、智能穿戴、智慧屏等多种终端设备运行',
                link: "https://developer.huawei.com/consumer/cn/doc/",
            },
            {
                icon: "https://ohpm.openharmony.cn/favicon.ico",
                title: "OpenHarmony三方库中心仓",
                desc: '华为鸿蒙HarmonyOS系统是面向万物互联的全场景分布式操作系统，支持手机、平板、智能穿戴、智慧屏等多种终端设备运行',
                link: "https://ohpm.openharmony.cn/#/cn/home",
            },
            {
                icon: "https://docs.flutter.dev/assets/images/branding/flutter/icon/64.png",
                title: "Flutter官网",
                desc: "Flutter官网（英文）",
                link: "https://docs.flutter.dev/",
            },
            {
                icon: "https://docs.flutter.dev/assets/images/branding/flutter/icon/64.png",
                title: "Flutter中文社区",
                desc: "Flutter 是 Google 开源的应用开发框架，仅通过一套代码库，就能构建精美的、原生平台编译的多平台应用。",
                link: "https://flutter-io.cn/",
            },
            {
                icon: "https://www.dartcn.com/assets/shared/dart/icon/64.png",
                title: "Dart中文网",
                desc: "Google及全球的其他开发者，使用 Dart 开发了一系列高质量、 关键的 iOS、Android 和 web 应用。 Dart 非常适合移动和 web 应用的开发。",
                link: "https://www.dartcn.com/",
            },
            {
                icon: "https://www.dartcn.com/assets/shared/dart/icon/64.png",
                title: "Flutter-Dart资源依赖包",
                desc: "Flutter-Dart资源依赖包",
                link: "https://pub-web.flutter-io.cn/",
            },
            {
                icon: "https://reactnative.dev/img/favicon.ico",
                title: "React native官网",
                desc: "使用 React 来创建 Android 和 iOS 的原生应用",
                link: "https://reactnative.dev",
            },
            {
                icon: "https://reactnative.dev/img/favicon.ico",
                title: "React native中文网",
                desc: "使用 React 来创建 Android 和 iOS 的原生应用",
                link: "https://www.reactnative.cn",
            },
            {
                icon: "https://reactnative.dev/img/favicon.ico",
                title: "React native 资源依赖包",
                desc: "React native 资源依赖包",
                link: "https://reactnative.directory/",
            },
            {
                icon: "https://ionic.nodejs.cn/img/meta/favicon-96x96.png",
                title: "Ionic官网",
                desc: "Ionic 是用于跨平台应用程序开发的增长最快且领先的开源框架。",
                link: "https://ionicframework.com",
            },
            {
                icon: "https://ionic.nodejs.cn/img/meta/favicon-96x96.png",
                title: "Ionic中文网",
                desc: "Ionic 是用于跨平台应用程序开发的增长最快且领先的开源框架。",
                link: "https://ionic.nodejs.cn",
            },
            {
                icon: "https://cordova.apache.org/static/img/cordova_bot.png",
                title: "Cordova官网",
                desc: "Apache Cordova 是一个著名的跨平台应用程序开发框架",
                link: "https://cordova.apache.org",
            },
            {
                icon: "https://cordova.apache.org/static/img/cordova_bot.png",
                title: "Cordova中文网",
                desc: "Apache Cordova 是一个著名的跨平台应用程序开发框架",
                link: "https://cordova.yoqi.me",
            },
            {
                icon: "https://learn.microsoft.com/favicon.ico",
                title: "Xamarin",
                desc: "Xamarin 允许你使用 .NET 代码和特定于平台的用户界面生成适用于 Android、iOS 和 macOS 的本机应用。",
                link: "https://learn.microsoft.com/zh-cn/previous-versions/xamarin/",
            },
            {
                icon: "https://nativescript.org/favicon-32x32.png",
                title: "nativescript官网",
                desc: "NativeScript 是具有活跃的开发人员社区的开源框架。开源框架用于使用 Angular 和 Vue 构建跨平台应用程序，以加快应用程序开发速度。",
                link: "https://nativescript.org",
            },
            {
                icon: "https://framework7.io/i/logo.svg",
                title: "framework7",
                desc: "Framework7或者叫F7是构建功能齐全的 iOS、Android 和桌面应用程序",
                link: "https://framework7.io/",
            },
            {
                icon: "https://qualified-production.s3.us-east-1.amazonaws.com/uploads/7U7YD6q1wB4dvr7PosdJe6j2kMwSjr19NT6Pi/15cd82e84483cdedcd9a113cee89ebbd8e20bf3263d07fce9d5221d0b3934c0a.png",
                title: "Qt",
                desc: "Qt 拥有一整套全面的高度直观和模块化的 C++库类和 API，可简化应用程序开发。",
                link: "https://www.qt.io/zh-cn/",
            },
            {
                icon: "https://qualified-production.s3.us-east-1.amazonaws.com/uploads/7U7YD6q1wB4dvr7PosdJe6j2kMwSjr19NT6Pi/15cd82e84483cdedcd9a113cee89ebbd8e20bf3263d07fce9d5221d0b3934c0a.png",
                title: "Qt编程指南",
                desc: "Qt 拥有一整套全面的高度直观和模块化的 C++库类和 API，可简化应用程序开发。",
                link: "https://qtguide.ustclug.org",
            },
            {
                icon: "https://tauri.app/meta/favicon-144x144.png",
                title: "Tauri",
                desc: "构建跨平台的快速、安全、前端隔离应用,支持 Windows、macOS、Linux、Android、iOS 等平台。",
                link: "https://tauri.app/zh-cn/",
            },
            {
                icon: "https://www.electronjs.org/zh/assets/img/logo.svg",
                title: "Electron",
                desc: "Electron是一个使用 JavaScript、HTML 和 CSS 构建桌面应用程序的框架。",
                link: "https://www.electronjs.org",
            },
            {
                icon: "",
                title: "Nw.js",
                desc: "Nw.js 可以在 Windows、Mac OS X 和 Linux 等操作系统上运行",
                link: "https://github.com/nwjs/nw.js",
            },
            {
                icon: "https://gw.alicdn.com/tps/TB1XNqxPXXXXXcSXVXXXXXXXXXX-64-63.png",
                title: "Weex",
                desc: "Weex 是一个由阿里巴巴开源的跨平台移动开发工具，一次编写，多平台运行（iOS、Android），保证界面一致性",
                link: "https://weexapp.com/zh/",
            },
            {
                icon: "https://hippyjs.org/assets/img/hippy-logo.ico",
                title: "Hippy",
                desc: "Hippy 可以理解为一个精简版的浏览器，从底层做了大量工作，抹平了 iOS 和 Android 双端差异，提供了接近 Web 的开发体验，目前上层支持了 React 和 Vue 两套界面框架",
                link: "https://hippyjs.org",
            },
            {
                icon: "https://storage.360buyimg.com/pubfree-bucket/taro-docs/f1fdc1a4a18/img/logo-taro.png",
                title: "Taro",
                desc: "Taro 是京东开源的一个开放式跨端跨框架解决方案",
                link: "https://taro-docs.jd.com/docs",
            },
            {
                icon: "https://gw.alicdn.com/tfs/TB11oXVXRGE3KVjSZFhXXckaFXa-149-148.png",
                title: "Rax",
                desc: "Rax 是由阿里巴巴淘系技术部提供的超轻量、高性能、易上手的前端解决方案。支持开发者通过类 React DSL 编写 Web、小程序、Flutter 等不同容器的跨端应用",
                link: "https://rax.js.org/",
            },
            {
                icon: "http://mpvue.com/assets/img/logo.0aaccdfd.png",
                title: "mpvue",
                desc: "mpvue是一个使用 Vue.js 开发小程序的前端框架。框架基于 Vue.js 核心，mpvue 修改了 Vue.js 的 runtime 和 compiler 实现，使其可以运行在小程序环境中，从而为小程序开发引入了整套 Vue.js 开发体验。",
                link: "http://mpvue.com/",
            },
            {
                icon: "https://mpxjs.cn/favicon.ico",
                title: "MPX",
                desc: "完整的原生兼容，一份源码跨端输出所有小程序平台及Web",
                link: "https://mpxjs.cn",
            },
            {
                icon: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/icon.png",
                title: "uni-app",
                desc: "uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。",
                link: "https://uniapp.dcloud.net.cn/",
            },
            {
                icon: "https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png",
                title: "微信小程序文档",
                desc: "微信小程序官方开发者文档",
                link: "https://developers.weixin.qq.com/miniprogram/dev/framework/",
            },
        ]
    },
    {
        title: "技术文档(服务端)",
        items: [
            {
                icon: "https://nodejs.org/static/images/favicons/favicon.png",
                title: "nodejs官网",
                desc: "nodejs官网",
                link: "https://nodejs.org",
            },
            {
                icon: "https://docs.nestjs.com/favicon.ico",
                title: "nestjs官网",
                desc: "Nest (NestJS) 是一个用于构建高效、可扩展的 Node.js 服务器端应用的框架。",
                link: "https://docs.nestjs.com/",
            },
            {
                icon: "https://docs.nestjs.com/favicon.ico",
                title: "nestjs中文网",
                desc: "Nest (NestJS) 是一个用于构建高效、可扩展的 Node.js 服务器端应用的框架。",
                link: "https://nest.nodejs.cn/",
            },
            {
                icon: "https://expressjs.com/images/favicon.png",
                title: "Express",
                desc: "Express 是一种保持最低程度规模的灵活 Node.js Web 应用程序框架，为 Web 和移动应用程序提供一组强大的功能",
                link: "https://expressjs.com/zh-cn/",
            },
            {
                icon: "https://koa.nodejs.cn/public/favicon.png",
                title: "Koa",
                desc: "Koa 是由 Express 背后的团队设计的一个新的 Web 框架，旨在成为 Web 应用和 API 的更小、更具表现力和更强大的基础。",
                link: "https://koa.nodejs.cn/",
            },
            {
                icon: "https://www.midwayjs.org/img/logo.svg",
                title: "Midway",
                desc: "Midway 是阿里巴巴 - 淘宝前端架构团队，基于渐进式理念研发的 Node.js 框架，通过自研的依赖注入容器，搭配各种上层模块，组合出适用于不同场景的解决方案。",
                link: "https://www.midwayjs.org/",
            },
            {
                icon: "https://www.eggjs.org/favicon.png",
                title: "Egg",
                desc: "Egg.js 为企业级框架和应用而生。",
                link: "https://www.eggjs.org/zh-CN",
            }
        ]
    },
    {
        title: "UI框架",
        items: [
            {
                icon: "https://element.eleme.cn/favicon.ico",
                title: "Element Plus",
                desc: "基于 Vue 3，面向设计师和开发者的组件库",
                link: "https://element-plus.org/zh-CN/#/zh-CN",
            },
            {
                icon: "https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png",
                title: "Ant Design",
                desc: "antd 为 Web 应用提供了丰富的基础 UI 组件，我们还将持续探索企业级应用的最佳 UI 实践。",
                link: "https://ant-design.antgroup.com/index-cn",
            },
            {
                icon: "https://static.tdesign.tencent.com/favicon.ico",
                title: "TDesign",
                desc: "TDesign 是腾讯开源的企业级设计体系，提供了统一价值观，一致的设计语言和视觉风格，和开箱即用的 UI 组件库。",
                link: "https://tdesign.tencent.com",
            },
            {
                icon: "https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico",
                title: "arco design",
                desc: "字节跳动出品的企业级设计系统",
                link: "https://arco.design/",
            },
            {
                icon: "https://lf9-static.semi.design/obj/semi-tos/images/favicon.ico",
                title: "Semi design",
                desc: "由抖音前端与 UED 团队维护，易于定制的现代化设计系统，帮助设计师与开发者打造高质量产品。",
                link: "https://semi.design/zh-CN/",
            },
            {
                icon: "https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",
                title: "Vant",
                desc: "轻量、可定制的移动端 Vue 组件库",
                link: "https://vant-ui.github.io/vant",
            },
            {
                icon: "https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico",
                title: "Cube UI",
                desc: "基于 Vue.js 实现的精致移动端组件库",
                link: "https://didi.github.io/cube-ui",
            },
            {
                icon: "https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png",
                title: "NutUI",
                desc: "京东风格的轻量级移动端组件库",
                link: "https://nutui.jd.com",
            },
        ]
    },
    {
        title: "开发库",
        items: [
            {
                icon: "https://www.attojs.com/logo@32px.png",
                title: "VueRequest",
                desc: "一个 Vue 请求库",
                link: "https://www.attojs.com/",
            },
            {
                icon: "https://malagu.cellbang.com/favicon.ico",
                title: "Malagu",
                desc: "Malagu 是基于 TypeScript 的 Serverless First、组件化、平台无关的渐进式应用框架。",
                link: "https://malagu.cellbang.com",
            }
        ]
    },
    {
        title: "常用工具",
        items: [
            {
                icon: "https://caniuse.com/img/favicon-128.png",
                title: "Can I use",
                desc: "前端 API 兼容性查询",
                link: "https://caniuse.com",
            },
            {
                icon: "https://tinypng.com/images/apple-touch-icon.png",
                title: "TinyPNG",
                desc: "在线图片压缩工具",
                link: "https://tinypng.com",
            },
            {
                icon: "https://devtool.tech/logo.svg",
                title: "开发者武器库",
                desc: "开发者武器库，做开发者最专业最好用的专业工具箱",
                link: "https://devtool.tech",
            },
            {
                icon: "https://tool.lu/favicon.ico",
                title: "在线工具",
                desc: "开发人员的工具箱",
                link: "https://tool.lu",
            },
            {
                icon: "/icons/json-cn.ico",
                title: "Json 中文网",
                desc: "JSON 在线解析及格式化验证",
                link: "https://www.json.cn",
            },
        ],
    },
    {
        title: "AI 导航",
        items: [
            {
                icon: "/icons/chatgpt.png",
                title: "ChatGPT（最强）",
                link: "https://chat.openai.com/chat",
            },
            {
                icon: "https://www.notion.so/images/logo-ios.png",
                title: "Notion AI（笔记）",
                link: "https://www.notion.so",
            },
            {
                icon: "https://www.midjourney.com/apple-touch-icon.png",
                title: "Midjourney（绘画）",
                link: "https://www.midjourney.com",
            },
            {
                icon: "https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d4891e0e260e3c1bc37b100_beautiful%20ai%20favicon%20%20blue%20square.png",
                title: "Beautiful.ai（PPT）",
                link: "https://www.beautiful.ai",
            },
        ],
    },

    {
        title: "可视化",
        items: [
            {
                icon: "https://echarts.apache.org/zh/images/favicon.png",
                title: "ECharts",
                desc: "一个基于 JavaScript 的开源可视化图表库",
                link: "https://echarts.apache.org/zh/index.html",
            },
            {
                icon: "https://antv.vision/icons/icon-72x72.png",
                title: "AntV",
                desc: "蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。",
                link: "https://antv.vision/zh/",
            },
            {
                icon: "https://d3js.org/favicon.png",
                title: "D3.js",
                desc: "一个遵循 Web 标准用于可视化数据的 JavaScript 库",
                link: "https://d3js.org",
            },
            {
                icon: "https://www.chartjs.org/favicon.ico",
                title: "Chart.js",
                desc: "一个简单而灵活的 JavaScript 图表库",
                link: "https://www.chartjs.org",
            },
            {
                icon: "https://threejs.org/files/favicon.ico",
                // icon: 'https://threejs.org/files/favicon_white.ico',
                title: "Three.js",
                desc: "JavaScript 3d 库",
                link: "https://threejs.org",
            },
        ],
    },
    {
        title: "站点生成器",
        items: [
            {
                icon: "https://astro.build/favicon.svg",
                title: "Astro",
                desc: "一个现代化的轻量级静态站点生成器",
                link: "https://astro.build",
            },
            {
                icon: "https://cn.vuejs.org/logo.svg",
                title: "VitePress",
                desc: "由 Vite 和 Vue 驱动的静态网站生成器",
                link: "https://vitepress.dev",
            },
            {
                icon: "https://cn.vuejs.org/logo.svg",
                title: "VuePress",
                desc: "Vue 驱动的静态网站生成器",
                link: "https://vuepress.vuejs.org/zh",
            },
            {
                icon: "https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png",
                title: "dumi",
                desc: "基于 Umi 为组件研发而生的静态站点框架",
                link: "https://d.umijs.org",
            },
            {
                icon: "https://docusaurus.io/zh-CN/img/docusaurus.ico",
                title: "Docusaurus",
                desc: "基于 React 的静态网站生成器",
                link: "https://docusaurus.io/zh-CN",
            },
        ],
    },
    {
        title: "图标库",
        items: [
            {
                icon: "https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg",
                title: "iconfont",
                desc: "国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能",
                link: "https://www.iconfont.cn",
            },
            {
                icon: "https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg",
                title: "IconPark 图标库",
                desc: "IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标",
                link: "https://iconpark.oceanengine.com/official",
            },
            {
                icon: "https://emoji.muan.co/appicon.png",
                title: "Emoji searcher",
                desc: "Emoji 表情大全",
                link: "",
            },
        ],
    },
    {
        title: "学习资料",
        items: [
            {
                icon: "https://developer.mozilla.org/apple-touch-icon.6803c6f0.png",
                title: "MDN | Web 开发者指南",
                desc: "Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资",
                link: "https://developer.mozilla.org/zh-CN",
            },
            {
                icon: "https://static.runoob.com/images/favicon.ico",
                title: "菜鸟教程",
                desc: "学的不仅是技术，更是梦想！",
                link: "https://www.runoob.com",
            },
            {
                icon: "/icons/es6.svg",
                title: "ES6 入门教程",
                desc: "阮一峰的网络日志",
                link: "http://es6.ruanyifeng.com",
            },
        ],
    },
    {
        title: "社区",
        items: [
            {
                title: "Github",
                icon: {
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
                },
                desc: "一个面向开源及私有软件项目的托管平台",
                link: "https://github.com",
            },
            {
                icon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",
                title: "Stack Overflow",
                desc: "全球最大的技术问答网站",
                link: "https://stackoverflow.com",
            },
            {
                title: "稀土掘金",
                icon: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png",
                desc: "面向全球中文开发者的技术内容分享与交流平台",
                link: "https://juejin.cn",
            },
            {
                title: "V2EX",
                icon: "https://www.v2ex.com/static/icon-192.png",
                desc: "一个关于分享和探索的地方",
                link: "https://www.v2ex.com",
            },
            {
                title: "SegmentFault 思否",
                icon: "https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png",
                desc: "技术问答开发者社区",
                link: "https://segmentfault.com",
            },
            {
                title: "博客园",
                // icon: 'https://common.cnblogs.com/favicon.ico',
                icon: "/icons/cnblogs.svg",
                desc: "博客园是一个面向开发者的知识分享社区",
                link: "https://www.cnblogs.com",
            },
            {
                title: "知乎",
                icon: "https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png",
                desc: "中文互联网高质量的问答社区和创作者聚集的原创内容平台",
                link: "https://juejin.cn",
            },
        ],
    },
    {
        title: "摸鱼专用",
        items: [
            {
                icon: "https://momoyu.cc/icon-192.png",
                title: "摸摸鱼热榜",
                // desc: '聚合每日热门、搞笑、有趣、适合摸鱼的资讯',
                link: "https://momoyu.cc",
            },
            {
                icon: "https://v.qq.com/favicon.ico",
                title: "腾讯视频",
                // desc: '中国领先的在线视频媒体平台，海量高清视频在线观看',
                link: "https://v.qq.com",
            },
            {
                icon: "https://static.hdslb.com/mobile/img/512.png",
                title: "哔哩哔哩",
                // desc: '',
                link: "https://www.bilibili.com",
            },
            {
                icon: "https://www.youtube.com/s/desktop/014dbbed/img/favicon_48x48.png",
                title: "YouTube",
                // desc: '',
                link: "https://www.youtube.com",
            },
            {
                icon: "/icons/twitter.svg",
                title: "Twitter",
                // desc: '',
                link: "https://twitter.com",
            },
            {
                icon: "/icons/pixiv.png",
                title: "Pixiv",
                // desc: '',
                link: "https://www.pixiv.net",
            },
        ],
    },
    {
        title: "其他",
        items: [
            {
                icon: "https://github.githubassets.com/assets/apple-touch-icon-144x144-b882e354c005.png",
                title: "山月行",
                link: "https://shanyue.tech/",
            },
            {
                icon: "https://github.githubassets.com/assets/apple-touch-icon-144x144-b882e354c005.png",
                title: "冴羽的博客",
                link: "https://github.com/mqyqingfeng/Blog",
            },
            {
                icon: "https://github.githubassets.com/assets/apple-touch-icon-144x144-b882e354c005.png",
                title: "JavaScript开发者应懂的33个概念",
                link: "https://github.com/stephentian/33-js-concepts",
            },
        ]
    }
];
