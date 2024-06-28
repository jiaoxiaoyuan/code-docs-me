import fs from 'node:fs'
import path from 'node:path'

// 递归获取目录下的所有 .md 文件
function getMarkdownFiles(dir, baseDir = dir) {
    let files = []
    const items = fs.readdirSync(dir, { withFileTypes: true })

    for (const item of items) {
        const fullPath = path.join(dir, item.name)
        if (item.isDirectory()) {
            files = files.concat(getMarkdownFiles(fullPath, baseDir))
        } else if (item.isFile() && item.name.endsWith('.md')) {
            files.push(path.relative(baseDir, fullPath))
        }
    }

    return files
}

// 生成侧边栏配置
function generateSidebarConfig(folderPath, prefix) {
    const markdownFiles = getMarkdownFiles(folderPath)
    const sidebarItems = markdownFiles.map(file => {
        const text = path.basename(file, '.md')
        const link = `/${file.replace(/\\/g, '/')}`.replace('.md', '')
        return {
            text,
            link: prefix + link
        }
    })

    return {
        text: '概念',
        collapsed: true,
        items: sidebarItems
    }
}

// const folderPath = '../../docs/KnowledgeBase/FrontEnd/HTML'
const folderPath = path.resolve(__dirname, '../../docs/KnowledgeBase/FrontEnd/HTML') // 替换为你的文件夹路径

console.log(folderPath)

const sidebarConfig = generateSidebarConfig(folderPath, '/KnowledgeBase/FrontEnd/HTML')

console.log(sidebarConfig)

export default [
    {
        text: '基础',
        collapsed: true,
        items: [
            sidebarConfig,
            {
                text: '属性',
                collapsed: true,
                items: [
                    { text: 'index1', link: '/KnowledgeBase/FrontEnd/HTML/index1' },
                    { text: 'index2', link: '/KnowledgeBase/FrontEnd/HTML/index2' },
                    { text: 'index3', link: '/KnowledgeBase/FrontEnd/HTML/index3' }
                ]
            },
            {
                text: '规则',
                collapsed: true,
                items: [
                    { text: 'index1', link: '/KnowledgeBase/FrontEnd/HTML/index1' },
                    { text: 'index2', link: '/KnowledgeBase/FrontEnd/HTML/index2' },
                    { text: 'index3', link: '/KnowledgeBase/FrontEnd/HTML/index3' }
                ]
            },
            {
                text: '资源',
                collapsed: true,
                items: [
                    { text: 'index1', link: '/KnowledgeBase/FrontEnd/HTML/index1' },
                    { text: 'index2', link: '/KnowledgeBase/FrontEnd/HTML/index2' },
                    { text: 'index3', link: '/KnowledgeBase/FrontEnd/HTML/index3' }
                ]
            }
        ]
    },
    { text: '布局', items: [] },
    { text: '工程化', items: [] },
    { text: '杂项', items: [] }
]
