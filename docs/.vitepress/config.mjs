import { defineConfig } from 'vitepress'
import defaultConfig from 'vitepress-theme-open17/config'
import markdownItFootnote from 'markdown-it-footnote'
import { genFeed } from 'vitepress-theme-open17/genFeed'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';



export default defineConfig({
  extends: defaultConfig,
  vite: {
    plugins: [
      AutoSidebar({
        ignoreList: ['page', 'posts', 'public'],
        titleFromFile: true,
        beforeCreateSideBarItems: (data) => {
          const indexIndex = data.indexOf("index.md");
          if (indexIndex !== -1) {
            const indexValue = data[indexIndex];
            data.splice(indexIndex, 1);
            data.unshift(indexValue);
          }
          return data;
        }
      })
    ]
  },
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
    blog: {
      avatar: "https://avatars.githubusercontent.com/u/125687556?v=4",
      ornateStyle: true,
      bgImg: "https://cdn.jsdelivr.net/gh/open17/Pic/img/202404020238396.png",
      bgImgDark: "https://cdn.jsdelivr.net/gh/open17/Pic/img/202404061333172.jpeg",
      title: "open17",
      desc: "Life is not about waiting for the storm to pass, but learning to dance in the rain.",
      pageSize: 3,
      tagPageLink: '/page/tags',
      maxTags: 5
    },
    feed: {
      baseUrl: "https://www.open17.vip", // 你的部署的域名,必须
      copyright: "Copyright © 2023-present open17", //版权声明,可选
      image: "https://www.open17.vip/logo.png", // RSS图片,可选
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
      { text: 'Home', link: '/' },
      {
        text: 'Note',
        items: [
          {
            text: 'Computer Basic',
            items: [
              { text: 'OS', link: '/computer-basic/OS/' },
              { text: 'DCN', link: '/computer-basic/DCN/' },
              { text: 'DS', link: '/computer-basic/distcrete-structures/' }]
          },
          {
            text: 'MIT Course',
            items: [
              { text: 'MIT 6.S081', link: '/mit/6.S081/0.md' },
            ]
          }
        ]
      },
      {
        text: "More",
        items: [
          { text: 'Tags', link: '/page/tags' },
          { text: 'Archive', link: ' /page/archive' },
          { text: 'Friends', link: '/page/friends' },
          {
            text: "Portfolio",
            link: "/page/portfolio"
          },
        ]
      },
      { text: 'Alg', link: 'https://alg.open17.vip' },
    ],
    // sidebar: {
    //   '/computer-basic/': [
    //     {
    //       text: '操作系统',
    //       items: [
    //         { text: '0.基本概念速览', link: '/computer-basic/OS/' },
    //         { text: 'x.附录', link: '/computer-basic/OS/append' }
    //       ]
    //     },
    //     {
    //       text: '计算机网络原理',
    //       items: [
    //         { text: 'Lec 0 引入', link: '/computer-basic/DCN/' },
    //         { text: 'Lec 1', link: '/computer-basic/DCN/Lec1' },
    //       ]
    //     },
    //     {
    //       text: '离散数学',
    //       items: [
    //         { text: '0.Intro & Logic', link: '/computer-basic/distcrete-structures/' },
    //         { text: '1.SFSS', link: '/computer-basic/distcrete-structures/SFSS' },
    //         { text: '2.Counting', link: '/computer-basic/distcrete-structures/Counting' },
    //         { text: '3.Relations', link: '/computer-basic/distcrete-structures/Relations' },
    //         { text: '4.Graph', link: '/computer-basic/distcrete-structures/Graph' },
    //         { text: '5.Tree', link: '/computer-basic/distcrete-structures/Tree' }
    //       ]
    //     }
    //   ],
    // },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/open17' }
    ]
  }
})
