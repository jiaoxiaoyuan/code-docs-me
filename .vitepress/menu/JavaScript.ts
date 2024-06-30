import path from "node:path";

import generateSidebarConfig from "./sidebar";
export default [
    {
        text: "基本语法",
        collapsed: true,
        items: [
            {
                text: "数据类型",
                collapsed: true,
                items: generateSidebarConfig(
                    path.resolve(
                        __dirname,
                        "../../docs/KnowledgeBase/FrontEnd/JavaScript/basic-concept/data-types"
                    ),
                    "KnowledgeBase/FrontEnd/JavaScript/basic-concept/data-types"
                ),
            },
            {
                text: "表达式",
                collapsed: true,
                items: generateSidebarConfig(
                    path.resolve(
                        __dirname,
                        "../../docs/KnowledgeBase/FrontEnd/JavaScript/basic-concept/expressions"
                    ),
                    "KnowledgeBase/FrontEnd/JavaScript/basic-concept/expressions"
                ),
            },
        ],
    },
    {
        text: "内置对象",
        collapsed: true,
        items: generateSidebarConfig(
            path.resolve(
                __dirname,
                "../../docs/KnowledgeBase/FrontEnd/JavaScript/standard-built-in-objects"
            ),
            "KnowledgeBase/FrontEnd/JavaScript/standard-built-in-objects"
        ),
    },
    {
        text: "核心模块",
        collapsed: true,
        items: generateSidebarConfig(
            path.resolve(
                __dirname,
                "../../docs/KnowledgeBase/FrontEnd/JavaScript/core-modules"
            ),
            "KnowledgeBase/FrontEnd/JavaScript/core-modules"
        ),
    },
    {
        text: "面向对象编程",
        collapsed: true,
        items: generateSidebarConfig(
            path.resolve(
                __dirname,
                "../../docs/KnowledgeBase/FrontEnd/JavaScript/object-oriented-programming"
            ),
            "KnowledgeBase/FrontEnd/JavaScript/object-oriented-programming"
        ),
    },
    {
        text: "BOM 浏览器对象模型",
        collapsed: true,
        items: generateSidebarConfig(
            path.resolve(
                __dirname,
                "../../docs/KnowledgeBase/FrontEnd/JavaScript/browser-object-model"
            ),
            "KnowledgeBase/FrontEnd/JavaScript/browser-object-model"
        ),
    },
    {
        text: "DOM 文档对象模型",
        collapsed: true,
        items: generateSidebarConfig(
            path.resolve(
                __dirname,
                "../../docs/KnowledgeBase/FrontEnd/JavaScript/document-object-model"
            ),
            "KnowledgeBase/FrontEnd/JavaScript/document-object-model"
        ),
    },
    {
        text: "计算机网络",
        collapsed: true,
        items: [
            {
                text: "计算机网络体系",
                collapsed: true,
                items: generateSidebarConfig(
                    path.resolve(
                        __dirname,
                        "../../docs/KnowledgeBase/FrontEnd/JavaScript/computer-networks/architecture"
                    ),
                    "KnowledgeBase/FrontEnd/JavaScript/computer-networks/architecture"
                ),
            },
            {
                text: "HTTP",
                collapsed: true,
                items: generateSidebarConfig(
                    path.resolve(
                        __dirname,
                        "../../docs/KnowledgeBase/FrontEnd/JavaScript/computer-networks/http"
                    ),
                    "KnowledgeBase/FrontEnd/JavaScript/computer-networks/http"
                ),
            },
            {
                text: "Web 安全",
                collapsed: true,
                items: generateSidebarConfig(
                    path.resolve(
                        __dirname,
                        "../../docs/KnowledgeBase/FrontEnd/JavaScript/computer-networks/web-security"
                    ),
                    "KnowledgeBase/FrontEnd/JavaScript/computer-networks/web-security"
                ),
            },
        ],
    },
    {
        text: "设计模式",
        collapsed: true,
        items: [
            {
                text: "创建型",
                collapsed: true,
                items: generateSidebarConfig(
                    path.resolve(
                        __dirname,
                        "../../docs/KnowledgeBase/FrontEnd/JavaScript/design-patterns/creational"
                    ),
                    "KnowledgeBase/FrontEnd/JavaScript/design-patterns/creational"
                ),
            },
            {
                text: "结构型",
                collapsed: true,
                items: generateSidebarConfig(
                    path.resolve(
                        __dirname,
                        "../../docs/KnowledgeBase/FrontEnd/JavaScript/design-patterns/structual"
                    ),
                    "KnowledgeBase/FrontEnd/JavaScript/design-patterns/structual"
                ),
            },
            {
                text: "行为型",
                collapsed: true,
                items: generateSidebarConfig(
                    path.resolve(
                        __dirname,
                        "../../docs/KnowledgeBase/FrontEnd/JavaScript/design-patterns/behavioral"
                    ),
                    "KnowledgeBase/FrontEnd/JavaScript/design-patterns/behavioral"
                ),
            },
        ],
    },
];
