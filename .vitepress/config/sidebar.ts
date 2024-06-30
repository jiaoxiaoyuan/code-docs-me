import type { DefaultTheme } from "vitepress";
import { HTMLMD, CSSMD, JavaScriptMD } from "../menu";

import path from "node:path";
import generateSidebarConfig from "../menu/sidebar";

export const sidebar: DefaultTheme.Config["sidebar"] = {
    // 前端知识库
    "/KnowledgeBase/FrontEnd/HTML": HTMLMD,
    "/KnowledgeBase/FrontEnd/CSS": CSSMD,
    "/KnowledgeBase/FrontEnd/JavaScript": JavaScriptMD,
    "/KnowledgeBase/FrontEnd/TypeScript": [
        {
            text: "基础",
            collapsed: true,
            items: [
                {
                    text: "index1",
                    link: "/KnowledgeBase/FrontEnd/TypeScript/index1",
                },
                {
                    text: "index2",
                    link: "/KnowledgeBase/FrontEnd/TypeScript/index2",
                },
                {
                    text: "index3",
                    link: "/KnowledgeBase/FrontEnd/TypeScript/index3",
                },
            ],
        },
    ],
    "/KnowledgeBase/FrontEnd/Vue": [
        {
            text: "基础",
            collapsed: true,
            items: [
                { text: "index1", link: "/KnowledgeBase/FrontEnd/Vue/index1" },
                { text: "index2", link: "/KnowledgeBase/FrontEnd/Vue/index2" },
                { text: "index3", link: "/KnowledgeBase/FrontEnd/Vue/index3" },
            ],
        },
    ],
    "/KnowledgeBase/FrontEnd/React": [
        {
            text: "基础",
            collapsed: true,
            items: [
                {
                    text: "index1",
                    link: "/KnowledgeBase/FrontEnd/React/index1",
                },
                {
                    text: "index2",
                    link: "/KnowledgeBase/FrontEnd/React/index2",
                },
                {
                    text: "index3",
                    link: "/KnowledgeBase/FrontEnd/React/index3",
                },
            ],
        },
    ],
    // 移动端知识库
    "/KnowledgeBase/Move/Android": [
        {
            text: "基础",
            collapsed: true,
            items: [
                { text: "index1", link: "/KnowledgeBase/Node/index1" },
                { text: "index2", link: "/KnowledgeBase/Node/index2" },
                { text: "index3", link: "/KnowledgeBase/Node/index3" },
            ],
        },
    ],
    "/KnowledgeBase/Move/iOS": [
        {
            text: "基础",
            collapsed: true,
            items: [
                { text: "index1", link: "/KnowledgeBase/Node/index1" },
                { text: "index2", link: "/KnowledgeBase/Node/index2" },
                { text: "index3", link: "/KnowledgeBase/Node/index3" },
            ],
        },
    ],
    "/KnowledgeBase/Move/Flutter": [
        {
            text: "基础",
            collapsed: true,
            items: [
                { text: "index1", link: "/KnowledgeBase/Node/index1" },
                { text: "index2", link: "/KnowledgeBase/Node/index2" },
                { text: "index3", link: "/KnowledgeBase/Node/index3" },
            ],
        },
    ],
    "/KnowledgeBase/Move/ReactNative": [
        {
            text: "基础",
            collapsed: true,
            items: [
                { text: "index1", link: "/KnowledgeBase/Node/index1" },
                { text: "index2", link: "/KnowledgeBase/Node/index2" },
                { text: "index3", link: "/KnowledgeBase/Node/index3" },
            ],
        },
    ],
    // 后端知识库，
    "/KnowledgeBase/BackEnd/Node": [
        {
            text: "基础",
            collapsed: true,
            items: [
                { text: "index1", link: "/KnowledgeBase/BackEnd/Node/index1" },
                { text: "index2", link: "/KnowledgeBase/BackEnd/Node/index2" },
                { text: "index3", link: "/KnowledgeBase/BackEnd/Node/index3" },
            ],
        },
    ],
    "/KnowledgeBase/BackEnd/Java": [
        {
            text: "基础",
            collapsed: true,
            items: [
                { text: "index1", link: "/KnowledgeBase/BackEnd/Java/index1" },
                { text: "index2", link: "/KnowledgeBase/BackEnd/Java/index2" },
                { text: "index3", link: "/KnowledgeBase/BackEnd/Java/index3" },
            ],
        },
    ],
    "/KnowledgeBase/BackEnd/Python": [
        {
            text: "基础",
            collapsed: true,
            items: [
                {
                    text: "index1",
                    link: "/KnowledgeBase/BackEnd/Python/index1",
                },
                {
                    text: "index2",
                    link: "/KnowledgeBase/BackEnd/Python/index2",
                },
                {
                    text: "index3",
                    link: "/KnowledgeBase/BackEnd/Python/index3",
                },
            ],
        },
        {
            text: "进阶",
            collapsed: true,
            items: [
                {
                    text: "index1",
                    link: "/KnowledgeBase/BackEnd/Python/index1",
                },
                {
                    text: "index2",
                    link: "/KnowledgeBase/BackEnd/Python/index2",
                },
                {
                    text: "index3",
                    link: "/KnowledgeBase/BackEnd/Python/index3",
                },
            ],
        },
    ],
    // 技术杂文
    "/Essay": generateSidebarConfig(
        path.resolve(__dirname, "../../docs/Essay"),
        "Essay"
    ),

    //博客
    "/Blog": [
        {
            text: "index",
            link: "/Blog/index.md",
        },
        {
            text: "index1",
            link: "/Blog/index1.md",
        },
        {
            text: "index2",
            link: "/Blog/index2.md",
        },
    ],
};
