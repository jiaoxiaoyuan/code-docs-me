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
                desc: "中国高等教育学生信息网（学信网",
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
                link: "https://www.cpta.com.cn",
            },
            {
                icon: "https://www.ruankao.org.cn/asset/image/logo/logo.png",
                title: "软考网",
                desc: "中国计算机技术职业资格网",
                link: "hhttps://www.ruankao.org.cn",
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
                title: "标准地图服务系统",
                desc: "标准地图依据中国和世界各国国界线画法标准编制而成，可用于新闻宣传用图、书刊报纸插图、广告展示背景图、工艺品设计底图等",
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
        title: "茂茂的站点导航",
        items: [
            {
                icon: "/logo.png",
                title: "前端日常笔记",
                desc: "日常笔记记录（零零散散啥都记系列）",
                link: "https://github.com/maomao1996/daily-notes",
            },
            {
                icon: "/logo.png",
                title: "前端思维导图",
                desc: "用思维导图的方式总结个人所学知识",
                link: "https://mindmap.fe-mm.com",
            },
            {
                icon: "https://qwerty.fe-mm.com/apple-touch-icon.png",
                title: "Qwerty Learner",
                desc: "为键盘工作者设计的单词记忆与英语肌肉记忆锻炼软件",
                link: "https://qwerty.fe-mm.com",
            },
            {
                icon: "/logo.png",
                title: "mmPlayer",
                desc: "mmPlayer 在线音乐播放器",
                link: "https://netease-music.fe-mm.com",
            },
        ],
    },
    {
        title: "React 生态",
        items: [
            {
                icon: "https://zh-hans.reactjs.org/favicon.ico",
                title: "React",
                desc: "用于构建用户界面的 JavaScript 库",
                link: "https://zh-hans.reactjs.org",
            },
            {
                icon: "https://reactrouter.com/favicon-light.png",
                title: "React Router",
                desc: "React 的声明式路由",
                link: "https://reactrouter.com",
            },
            {
                icon: "https://nextjs.org/static/favicon/safari-pinned-tab.svg",
                title: "Next.js",
                desc: "一个用于 Web 的 React 框架",
                link: "https://nextjs.org",
            },
            {
                icon: "https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg",
                title: "UmiJS",
                desc: "插件化的企业级前端应用框架",
                link: "https://umijs.org",
            },
            {
                icon: "https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png",
                title: "Ant Design",
                desc: "一套企业级 UI 设计语言和 React 组件库",
                link: "https://ant.design",
            },
            {
                icon: "https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg",
                title: "Ant Design Mobile",
                desc: "构建移动 WEB 应用程序的 React 组件库",
                link: "https://mobile.ant.design",
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
        ],
    },
    {
        title: "Vue 生态",
        items: [
            {
                icon: "https://cn.vuejs.org/logo.svg",
                title: "Vue 3",
                desc: "渐进式 JavaScript 框架",
                link: "https://cn.vuejs.org",
            },
            {
                icon: "https://cn.vuejs.org/logo.svg",
                title: "Vue 2",
                desc: "渐进式 JavaScript 框架",
                link: "https://v2.cn.vuejs.org",
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
                icon: "https://element-plus.org/images/element-plus-logo-small.svg",
                title: "Element Plus",
                desc: "基于 Vue 3，面向设计师和开发者的组件库",
                link: "https://element-plus.org",
            },
            {
                icon: "https://www.antdv.com/assets/logo.1ef800a8.svg",
                title: "Ant Design Vue",
                desc: "Ant Design 的 Vue 实现，开发和服务于企业级后台产品",
                link: "https://antdv.com",
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
        ],
    },
    {
        title: "JavaScript 框架类库",
        items: [
            {
                icon: "https://svelte.dev/svelte-logo-horizontal.svg",
                title: "Svelte",
                desc: "将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码",
                link: "https://svelte.dev",
            },
            {
                // icon: 'https://simpleicons.org/icons/jquery.svg',
                icon: "/icons/jquery.svg",
                title: "jQuery API 中文文档",
                desc: "一个兼容多浏览器的 JavaScript 框架",
                link: "https://jquery.cuishifeng.cn",
            },
        ],
    },
    {
        title: "CSS 相关",
        items: [
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
        ],
    },
    {
        title: "小程序相关",
        items: [
            {
                icon: "https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png",
                title: "微信小程序文档",
                desc: "微信小程序官方开发者文档",
                link: "https://developers.weixin.qq.com/miniprogram/dev/framework/",
            },
            {
                icon: "/icons/taro.svg",
                title: "Taro",
                desc: "多端统一开发解决方案",
                link: "https://taro.jd.com",
            },
            {
                icon: "https://web-assets.dcloud.net.cn/unidoc/zh/icon.png",
                title: "uni-app",
                desc: "一个使用 Vue.js 开发所有前端应用的框架",
                link: "https://uniapp.dcloud.net.cn",
            },
            {
                icon: "https://mpxjs.cn/favicon.ico",
                title: "Mpx",
                desc: "增强型跨端小程序框架",
                link: "https://mpxjs.cn",
            },

        ],
    },
    {
        title: "Node 相关",
        items: [
            {
                icon: "/icons/nodejs.svg",
                title: "Node.js",
                desc: "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境",
                link: "https://nodejs.org/zh-cn",
            },
            {
                icon: "https://expressjs.com/images/favicon.png",
                title: "Express",
                desc: "基于 Node.js 平台，快速、开放、极简的 Web 开发框架",
                link: "https://expressjs.com",
            },
            {
                icon: "/icons/koa.svg",
                title: "Koa",
                desc: "基于 Node.js 平台的下一代 web 开发框架",
                link: "https://koajs.com",
            },
            {
                icon: "https://www.eggjs.org/favicon.png",
                title: "Egg",
                desc: "为企业级框架和应用而生",
                link: "https://www.eggjs.org/zh-CN",
            },
            {
                icon: "https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg",
                title: "Nest.js 中文文档",
                desc: "用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架",
                link: "https://docs.nestjs.cn",
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
        title: "编译&构建&打包",
        items: [
            {
                icon: "https://www.webpackjs.com/icon_180x180.png",
                title: "Webpack 中文网",
                desc: "一个用于现代 JavaScript 应用程序的静态模块打包工具",
                link: "https://www.webpackjs.com",
            },
            {
                icon: "https://cn.vitejs.dev/logo.svg",
                title: "Vite 中文文档",
                desc: "下一代前端工具链",
                link: "https://cn.vitejs.dev",
            },
            {
                icon: "https://www.rollupjs.com/img/favicon.png",
                title: "Rollup",
                desc: "Rollup 是一个 JavaScript 模块打包器",
                link: "https://www.rollupjs.com",
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
        title: "前端学习资料",
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
];
