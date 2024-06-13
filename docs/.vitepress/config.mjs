import { defineConfig } from 'vitepress'
import defaultConfig from 'vitepress-theme-open17/config'
import markdownItFootnote from 'markdown-it-footnote'
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
    config: (md) => {
      md.use(markdownItFootnote)
    }
  },
  sitemap: {
    hostname: 'https://www.open17.vip',
  },
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    sidebar: generateSidebar(vitepressSidebarOptions),
    blog: {
      avatar: "https://avatars.githubusercontent.com/u/125687556?v=4",
      ornateStyle: true,
      title: "Open17",
      desc: "Life is not about waiting for the storm to pass, but learning to dance in the rain.",
      tagPageLink: '/page/tags',
      maxTags: 5,
      widgets: [
        {
          name: "🎨广告时间", // 自定义链接名称
          link: 'https://vitepress.open17.vip/blog-docs/0-intro/',  //可以为空,非空会显示对应的链接
          html: `想快速搭建同款博客?使用开源vitepress博客主题吧!<br>点击<a class=" underline text-orange-300 hover:bg-red-400  hover:bg-opacity-15 dark:hover:bg-opacity-45" href="https://vitepress.open17.vip/blog-docs/0-intro/" target="_blank">这里</a>
          或者右上方即可跳转到主题文档~<img class="object-cover w-full" src="https://cdn.jsdelivr.net/gh/open17/Pic/img/202405071712279.png"/>`, //内容html,支持tailwindcss
        },
      ]
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
    logo: '/logo.png',
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
    nav: [
      { text: '博客', link: '/' },
      {
        text: '笔记',
        items: [
          {
            text: '计算机基础',
            items: [
              { text: 'OS', link: '/Computer/OS/' },
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
              { text: 'Friends', link: '/page/friends' },
              // {
              //   text: "About",
              //   link: "/page/portfolio"
              // },
              {
                text: "Slides",
                link: "https://slides.open17.vip"
              },
              {
                text:"Theme",
                link:"https://vitepress.open17.vip/"
              },
              { text: 'Alg', link: 'https://alg.open17.vip' },
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
