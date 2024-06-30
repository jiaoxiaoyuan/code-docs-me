import path from "node:path";

import generateSidebarConfig from "./sidebar";

export default [
    {
        text: "基础",
        collapsed: true,
        items: [
            {
                text: "概念",
                collapsed: true,
                items: generateSidebarConfig(
                    path.resolve(
                        __dirname,
                        "../../docs/KnowledgeBase/FrontEnd/CSS/concept/concept"
                    ),
                    "/KnowledgeBase/FrontEnd/CSS/concept/concept"
                ),
            },
            {
                text: "属性",
                collapsed: true,
                items: generateSidebarConfig(
                    path.resolve(
                        __dirname,
                        "../../docs/KnowledgeBase/FrontEnd/CSS/concept/attribute"
                    ),
                    "/KnowledgeBase/FrontEnd/CSS/concept/attribute"
                ),
            },
            {
                text: "规则",
                collapsed: true,
                items: generateSidebarConfig(
                    path.resolve(
                        __dirname,
                        "../../docs/KnowledgeBase/FrontEnd/HTML/Rule"
                    ),
                    "/KnowledgeBase/FrontEnd/HTML/Rule"
                ),
            },
            {
                text: "资源",
                collapsed: true,
                items: generateSidebarConfig(
                    path.resolve(
                        __dirname,
                        "../../docs/KnowledgeBase/FrontEnd/HTML/Resources"
                    ),
                    "/KnowledgeBase/FrontEnd/HTML/Resources"
                ),
            },
        ],
    },
    {
        text: "布局",
        collapsed: true,
        items: [
            {
                text: "概念",
                collapsed: true,
                items: generateSidebarConfig(
                    path.resolve(
                        __dirname,
                        "../../docs/KnowledgeBase/FrontEnd/HTML/Concept"
                    ),
                    "/KnowledgeBase/FrontEnd/HTML/Concept"
                ),
            },
            {
                text: "属性",
                collapsed: true,
                items: generateSidebarConfig(
                    path.resolve(
                        __dirname,
                        "../../docs/KnowledgeBase/FrontEnd/HTML/Attribute"
                    ),
                    "/KnowledgeBase/FrontEnd/HTML/Attribute"
                ),
            },
            {
                text: "规则",
                collapsed: true,
                items: generateSidebarConfig(
                    path.resolve(
                        __dirname,
                        "../../docs/KnowledgeBase/FrontEnd/HTML/Rule"
                    ),
                    "/KnowledgeBase/FrontEnd/HTML/Rule"
                ),
            },
            {
                text: "资源",
                collapsed: true,
                items: generateSidebarConfig(
                    path.resolve(
                        __dirname,
                        "../../docs/KnowledgeBase/FrontEnd/HTML/Resources"
                    ),
                    "/KnowledgeBase/FrontEnd/HTML/Resources"
                ),
            },
        ],
    },
    {
        text: "工程化",
        collapsed: true,
        items: [
            {
                text: "概念",
                collapsed: true,
                items: generateSidebarConfig(
                    path.resolve(
                        __dirname,
                        "../../docs/KnowledgeBase/FrontEnd/HTML/Concept"
                    ),
                    "/KnowledgeBase/FrontEnd/HTML/Concept"
                ),
            },
            {
                text: "属性",
                collapsed: true,
                items: generateSidebarConfig(
                    path.resolve(
                        __dirname,
                        "../../docs/KnowledgeBase/FrontEnd/HTML/Attribute"
                    ),
                    "/KnowledgeBase/FrontEnd/HTML/Attribute"
                ),
            },
            {
                text: "规则",
                collapsed: true,
                items: generateSidebarConfig(
                    path.resolve(
                        __dirname,
                        "../../docs/KnowledgeBase/FrontEnd/HTML/Rule"
                    ),
                    "/KnowledgeBase/FrontEnd/HTML/Rule"
                ),
            },
            {
                text: "资源",
                collapsed: true,
                items: generateSidebarConfig(
                    path.resolve(
                        __dirname,
                        "../../docs/KnowledgeBase/FrontEnd/HTML/Resources"
                    ),
                    "/KnowledgeBase/FrontEnd/HTML/Resources"
                ),
            },
        ],
    },
    {
        text: "应用",
        collapsed: true,
        items: generateSidebarConfig(
            path.resolve(
                __dirname,
                "../../docs/KnowledgeBase/FrontEnd/CSS/application"
            ),
            "/KnowledgeBase/FrontEnd/CSS/application"
        ),
    },
];
