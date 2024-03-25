import { defineConfig } from 'vitepress'
import defaultConfig from 'vitepress-theme-open17/config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: defaultConfig,
  title: "Open17's Blog",
  description: "My VitePress Blog Site",
  markdown: {
    math: true
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
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/open17' }
    ]
  }
})
