import fs from "node:fs";
import path from "node:path";

// import { useData } from "vitepress";

interface SidebarMulti {
    [path: string]: SidebarItem[] | { items: SidebarItem[]; base: string };
}

interface SidebarItem {
    text?: string;
    link?: string;
    // [key: string]: any
}

interface SidebarConfig {
    text: string;
    collapsed: boolean;
    items: SidebarItem[] | SidebarMulti;
}

// 递归获取目录下的所有 .md 文件
function getMarkdownFiles(dir: string, baseDir: string = dir): string[] {
    // const { frontmatter } = useData();

    // console.log(frontmatter);

    let files: string[] = [];
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
            files = files.concat(getMarkdownFiles(fullPath, baseDir));
        } else if (item.isFile() && item.name.endsWith(".md")) {
            files.push(path.relative(baseDir, fullPath));
        }
    }

    return files;
}
// 获取侧边栏配置
export default function generateSidebarConfig(
    folderPath: string,
    prefix: string
): SidebarItem[] {
    const markdownFiles = getMarkdownFiles(folderPath);
    const Items: SidebarItem[] | SidebarMulti = markdownFiles.map((file) => {
        const text = path.basename(file, ".md");
        const link = `/${file.replace(/\\/g, "/")}`.replace(".md", "");
        return {
            text,
            link: prefix + link,
        };
    });

    // return {
    //     text: '概念',
    //     collapsed: true,
    //     items: sidebarItems
    // }

    return Items;
}
