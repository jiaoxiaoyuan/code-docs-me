import type { HeadConfig } from "vitepress";
import { metaData } from "./constants";

export const head: HeadConfig[] = [
    [
        "meta",
        {
            name: "keywords",
            content:
                "知识库, 个人博客,个人网站,个人主页,IT博客,技术博客,程序员博客个人博客,个人网站,个人主页,IT博客,技术博客,程序员博客",
        },
    ],
    ["meta", { name: "author", content: "Jixiaoyuan" }],
    ["link", { rel: "icon", href: metaData.image }],
    [
        "link",
        {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
        },
    ],

    [
        "meta",
        {
            name: "baidu-site-verification",
            content: "codeva-YylYjOSjF2",
        },
    ],
    [
        "meta",
        {
            name: "google-site-verification",
            content: "9PfpWj_9VHtKGmyidDyvMGWZT3DujZ6Re0QoaaDkrD8",
        },
    ],

    // ["meta", { name: "HandheldFriendly", content: "True" }],
    // ["meta", { name: "MobileOptimized", content: "320" }],
    // ["meta", { name: "theme-color", content: "#3c8772" }],

    // ["meta", { property: "og:type", content: "website" }],
    // ["meta", { property: "og:locale", content: metaData.locale }],
    // ["meta", { property: "og:title", content: metaData.title }],
    // ["meta", { property: "og:description", content: metaData.description }],
    // ["meta", { property: "og:site", content: metaData.site }],
    // ["meta", { property: "og:site_name", content: metaData.title }],
    // ["meta", { property: "og:image", content: metaData.image }],

    // [
    //     "script",
    //     {
    //         src: "https://cdn.bootcdn.net/ajax/libs/jquery/1.10.0/jquery.min.js",
    //     },
    // ],
    // [
    //     "script",
    //     {
    //         src: "https://myhkw.cn/player/js/player.js",
    //     },
    // ],

    // 百度统计代码：https://tongji.baidu.com
    [
        "script",
        {},
        `var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?2dff25399b2114fbc4f60b9edb1c28aa";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();`,
    ],
    // 页面访问量统计
    // ['script', {}, `
    // window.addEventListener('load', function() {
    //   let oldHref = document.location.href, bodyDOM = document.querySelector('body');
    //   const observer = new MutationObserver(function(mutations) {
    //     if (oldHref != document.location.href) {
    //       oldHref = document.location.href;
    //       getPv()
    //       window.requestAnimationFrame(function() {
    //         let tmp = document.querySelector('body');
    //         if(tmp != bodyDOM) {
    //           bodyDOM = tmp;
    //           observer.observe(bodyDOM, config);
    //         }
    //       })
    //     }
    //   });
    //   const config = {
    //     childList: true,
    //     subtree: true
    //   };
    //   observer.observe(bodyDOM, config);
    //   getPv()
    // }, true);

    // function getPv() {
    //   xhr = new XMLHttpRequest();
    //   xhr.open('GET', 'https://api.charles7c.top/blog/pv?pageUrl=' + location.href);
    //   xhr.send();
    // }`]
];
