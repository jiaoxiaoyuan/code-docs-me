// https://vitepress.dev/reference/default-theme-config
export default [
    { text: "首页", link: "/" },
    {
        text: "知识库",
        items: [
            {
                text: "前端",
                items: [
                    { text: "HTML", link: "/KnowledgeBase/FrontEnd/HTML" },
                    { text: "CSS", link: "/KnowledgeBase/FrontEnd/CSS" },
                    {
                        text: "JavaScript",
                        link: "/KnowledgeBase/FrontEnd/JavaScript",
                    },
                    {
                        text: "TypeScript",
                        link: "/KnowledgeBase/FrontEnd/TypeScript",
                    },
                    { text: "Vue", link: "/KnowledgeBase/FrontEnd/Vue" },
                    { text: "React", link: "/KnowledgeBase/FrontEnd/React" },
                ],
            },
            {
                text: "移动端",
                items: [
                    { text: "Android", link: "/KnowledgeBase/Move/Android" },
                    { text: "iOS", link: "/KnowledgeBase/Move/iOS" },
                    { text: "Flutter", link: "/KnowledgeBase/Move/Flutter" },
                    {
                        text: "ReactNative",
                        link: "/KnowledgeBase/Move/ReactNative",
                    },
                    { text: "小程序", link: "/KnowledgeBase/Move/MiniProgram" },
                    { text: "桌面端", link: "/KnowledgeBase/Move/Desktop" },
                    { text: "鸿蒙", link: "/KnowledgeBase/Move/Harmony" },
                ],
            },
            {
                text: "后端",
                items: [
                    { text: "Node", link: "/KnowledgeBase/BackEnd/Node" },
                    { text: "Java", link: "/KnowledgeBase/BackEnd/Java" },
                    { text: "Python", link: "/KnowledgeBase/BackEnd/Python" },
                    { text: "Go", link: "/KnowledgeBase/BackEnd/Go" },
                ],
            },
            {
                text: "数据库",
                items: [
                    { text: "MySQL", link: "/KnowledgeBase/Database/MySQL" },
                    { text: "Redis", link: "/KnowledgeBase/Database/Redis" },
                    {
                        text: "MongoDB",
                        link: "/KnowledgeBase/Database/MongoDB",
                    },
                    {
                        text: "postgresql",
                        link: "/KnowledgeBase/Database/ElasticSearch",
                    },
                ],
            },
            {
                text: "数据结构与算法",
                items: [
                    {
                        text: "数据结构",
                        link: "/KnowledgeBase/Algorithm/DataStructure",
                    },
                    {
                        text: "算法",
                        link: "/KnowledgeBase/Algorithm/Algorithm",
                    },
                ],
            },
        ],
    },
    {
        text: "工具",
        items: [
            {
                text: "编程软件",
                items: [
                    { text: "VSCode", link: "/Tools/VSCode" },
                    { text: "Vim", link: "/Tools/Vim" },
                    { text: "Dbeaver", link: "/Tools/Dbeaver" },
                    { text: "Git", link: "/Tools/Git" },
                    { text: "Docker", link: "/Tools/Docker" },
                    { text: "Jenkins", link: "/Tools/Jenkins" },
                ],
            },
            {
                text: "效率提升",
                items: [
                    { text: "brew", link: "/Tools/brew" },
                    { text: "zsh", link: "/Tools/zsh" },
                    { text: "Yarn", link: "/Tools/Yarn" },
                    { text: "npm", link: "/Tools/npm" },
                    { text: "pnpm", link: "/Tools/pnpm" },
                    { text: "nrm", link: "/Tools/nrm" },
                    { text: "nodemon", link: "/Tools/nodemon" },
                    { text: "nvm", link: "/Tools/nvm" },
                    { text: "frp", link: "/Tools/frp" },
                ],
            },
            {
                text: "插件扩展",
                link: "/Tools/plug",
            },
            {
                text: "开发环境",
                items: [
                    { text: "Linux", link: "/Tools/Linux" },
                    { text: "json-server", link: "/Tools/Typora" },
                ],
            },
        ],
    },
    {
        text: "项目",
        items: [
            {
                text: "开源库",
                items: [
                    { text: "func-package", link: "/Resource/navigation" },
                    { text: "v-bigscreen", link: "/Resource/vue-plugin" },
                    { text: "@front-base/cli", link: "/Resource/plug" },
                    { text: "@front-base/snpm", link: "/Resource/utils" },
                    {
                        text: "@front-base/rnkits",
                        link: "/Resource/vite-plugin",
                    },
                ],
            },
            {
                text: "软件",
                items: [
                    { text: "XXXAPP", link: "/Resource/vue" },
                    { text: "react", link: "/Resource/react" },
                ],
            },
            {
                text: "实例",
                items: [
                    { text: "func-package", link: "/Resource/navigation" },
                    { text: "func-package", link: "/Resource/navigation" },
                ],
            },
        ],
    },
    { text: "资源导航", link: "Navigation" },
    { text: "技术杂文", link: "/Essay" },
    { text: "博客", link: "/Blog" },
    { text: "关于", link: "/About" },
];
