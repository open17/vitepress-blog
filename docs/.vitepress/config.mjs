import { defineConfig } from 'vitepress'
import defaultConfig from 'vitepress-theme-open17/config'
import markdownItFootnote from 'markdown-it-footnote'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: defaultConfig,
  title: "Open17's Blog",
  description: "My VitePress Blog Site",
  markdown: {
    math: true,
    config: (md) => {
      // 使用更多的 Markdown-it 插件！
      md.use(markdownItFootnote)
    }
  },
  sitemap: {
    hostname: 'https://www.open17.vip',
  },
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/open17/personal-blog/edit/main/docs/:path',
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
      {text:'tags',link:'/page/tags'},
      {text:'archive',link:' /page/archive'},
      {
        text: 'Computer Basic',
        items: [
          { text: 'Intro', link: '/computer-basic/' },
          { text: 'OS', link: '/computer-basic/OS/' },
          { text: 'DCN', link: '/computer-basic/DCN/' },
        ]
      },
      { text: 'friends', link: '/page/friends' }
    ],
    sidebar: {
      '/computer-basic/': [
        {
          text: '操作系统',
          items: [
            { text: '0.基本概念速览', link: '/computer-basic/OS/' },
            // { text: 'Lec 1', link: '/computer-basic/OS/Lec1' },
            // { text: 'Lec 2', link: '/computer-basic/OS/Lec1' },
            // { text: 'Lec 3', link: '/computer-basic/OS/Lec1' },
            // { text: 'Lec 4', link: '/computer-basic/OS/Lec1' },
            // { text: 'Lec 5', link: '/computer-basic/OS/Lec1' }
          ]
        },
        {
          text: '计算机网络原理',
          items: [
            { text: 'Lec 0 引入', link: '/computer-basic/DCN/' },
            { text: 'Lec 1', link: '/computer-basic/DCN/Lec1' },
            // { text: 'Lec 2', link: '/computer-basic/DCN/Lec1' },
            // { text: 'Lec 3', link: '/computer-basic/DCN/Lec1' },
            // { text: 'Lec 4', link: '/computer-basic/DCN/Lec1' },
            // { text: 'Lec 5', link: '/computer-basic/DCN/Lec1' }
          ]
        },
        {
          text: '离散数学',
          items: [
            { text: '0.Intro & Logic', link: '/computer-basic/distcrete-structures/' },
             {text: '1.SFSS', link: '/computer-basic/distcrete-structures/SFSS' },
            { text: '2.Counting', link: '/computer-basic/distcrete-structures/Counting' },
            { text: '3.Relations', link: '/computer-basic/distcrete-structures/Relations' },
            { text: '4.Graph', link: '/computer-basic/distcrete-structures/Graph' },
            { text: '5.Tree', link: '/computer-basic/distcrete-structures/Tree' }
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/open17' }
    ]
  }
})
