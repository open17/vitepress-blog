import { defineConfig } from 'vitepress'
import defaultConfig from 'vitepress-theme-open17/config'
import markdownItFootnote from 'markdown-it-footnote'
import markdownItTaskLists from 'markdown-it-task-lists'
import { figure } from '@mdit/plugin-figure'
import { genFeed } from 'vitepress-theme-open17/genFeed'

import { generateSidebar } from 'vitepress-sidebar';

const vitepressSidebarOptions = [{
  documentRootPath: 'docs',
  scanStartPath: 'Computer',
  resolvePath: '/Computer/',
  collapsed: true,
  rootGroupCollapsed: true,
  useTitleFromFileHeading: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: true,
  hyphenToSpace: true
}];

export default defineConfig({
  extends: defaultConfig,
  title: "Open17's Blog",
  description: "My VitePress Blog Site",
  buildEnd: genFeed,
  markdown: {
    math: true,
    container: {
      tipLabel: ' 提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '📢 信息',
      detailsLabel: '详细信息'
    },
    config: (md) => {
      md.use(markdownItFootnote);
      md.use(markdownItTaskLists);
      md.block.ruler.disable(['lheading']);
      md.use(figure, {
        figcaption: 'alt',
        copyAttrs: '^class$',
        lazy: true
      });
    }
  },
  sitemap: {
    hostname: 'https://www.open17.vip',
  },
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    sidebar: generateSidebar(vitepressSidebarOptions),
    blog: {
      avatar: "/ava.jpg",
      ornateStyle: true,
      title: "Open17",
      desc: "Life is not about waiting for the storm to pass, but learning to dance in the rain.",
      tagPageLink: '/page/tags',
      maxTags: 5,
      bgImgDark: '/bg_dark.jpg',
      direct: "lft",
    },
    feed: {
      baseUrl: "https://www.open17.vip", // 你的部署的域名,必须
      copyright: "Copyright © 2023-present open17", //版权声明,可选
    },
    footer: {
      message: 'All blogs and docs are licensed under <a href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC 4.0</a>',
      copyright: 'Copyright © 2023-present <a href="https://github.com/open17">open17</a>'
    },
    editLink: {
      pattern: 'https://github.com/open17/vitepress-blog/edit/template/docs/:path',
      text: 'Edit this page on GitHub'
    },
    logo: {
      dark: '/logo.png',
      light: '/logo_light.png'
    },
    search: {
      provider: 'local'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    comment: {
      use: true,
      repo: "open17/vitepress-blog",
      repo_id: "R_kgDOLkwtlg",
      category: "Announcements",
      category_id: "DIC_kwDOLkwtls4CeTek", 
      mapping: "pathname", 
      strict: "0", 
      reactions_enabled: "1",
      emit_metadata: "0", 
      input_position: "top",
      lang:"zh-CN"
    },
    nav: [
      { text: '博客', link: '/' },
      {
        text: '笔记',
        items: [
          {
            text: '计算机基础',
            items: [
              { text: '操作系统', link: '/Computer/OS-CN/' },
              { text: 'DCN', link: '/Computer/DCN/' },
              { text: 'DS', link: '/Computer/Distcrete/' }
            ]
          },
          {
            text: 'MIT Course',
            items: [
              { text: '6.S081', link: '/MIT-Course/6.S081/' },
            ]
          }
        ]
      },
      {
        text: "更多",
        items: [
          {
            text: 'Blog Part',
            items: [
              { text: 'Tags', link: '/page/tags' },
              { text: 'Archive', link: ' /page/archive' },
            ]
          },
          {
            text: 'Others',
            items: [
              { text: 'Guide', link: '/page/guide' },
              { text: 'Friends', link: '/page/friends' },
            ]
          }
        ]

      },
      
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/open17' }
    ]
  }
})
