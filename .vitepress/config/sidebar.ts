import type { DefaultTheme } from "vitepress";
import { HTMLMD } from "../menu";
export const sidebar: DefaultTheme.Config["sidebar"] = {
    // 前端知识库
    "/KnowledgeBase/FrontEnd/HTML": HTMLMD,
    "/KnowledgeBase/FrontEnd/CSS": [
        {
            text: "基础",
            collapsed: true,
            items: [
                { text: "index1", link: "/KnowledgeBase/FrontEnd/CSS/index1" },
                { text: "index2", link: "/KnowledgeBase/FrontEnd/CSS/index2" },
                { text: "index3", link: "/KnowledgeBase/FrontEnd/CSS/index3" },
            ],
        },
    ],
    "/KnowledgeBase/FrontEnd/JavaScript": [
        {
            text: "基础",
            collapsed: true,
            items: [
                {
                    text: "index1",
                    link: "/KnowledgeBase/FrontEnd/JavaScript/index1",
                },
                {
                    text: "index2",
                    link: "/KnowledgeBase/FrontEnd/JavaScript/index2",
                },
                {
                    text: "index3",
                    link: "/KnowledgeBase/FrontEnd/JavaScript/index3",
                },
            ],
        },
    ],
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
    "/KnowledgeBase/FrontEnd/Flutter": [
        {
            text: "基础",
            collapsed: true,
            items: [
                { text: "index1", link: "/KnowledgeBase/FrontEnd/Node/index1" },
                { text: "index2", link: "/KnowledgeBase/FrontEnd/Node/index2" },
                { text: "index3", link: "/KnowledgeBase/FrontEnd/Node/index3" },
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
    "/Essay": [
        {
            text: "index",
            link: "/Essay/index.md",
        },
        {
            text: "index1",
            link: "/Essay/index1.md",
        },
        {
            text: "index2",
            link: "/Essay/index2.md",
        },
    ],
};
