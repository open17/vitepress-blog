---
layout: home
lastUpdated: false

bgImg: "https://cdn.jsdelivr.net/gh/open17/Pic/img/202404020238396.png"
bgImgDark: 'https://cdn.jsdelivr.net/gh/open17/Pic/img/202403302340940.png'

hero:
  name: "Hi there, I'm open17"
  text: "这里是open17的个人博客"
  tagline:  下面是一些常用的跳转按钮~
  image:
    src: "https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082225465.png"
    alt: open17
  actions:
    - theme: brand  
      text: 代办事项
      link: "#"
    - theme: alt
      text: 我的小项目
      link: "#我的小项目"
    - theme: alt
      text: 我的工具箱
      link: "#我的工具箱"
    - theme: alt
      text: 主题配置文档
      link: "https://vitepress.open17.vip"
      
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

import {data as posts} from '../../node_modules/vitepress-theme-open17/libs/posts.data.js'
const webSvg=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>
`;
const projects = [
  {
    avatar: 'https://camo.githubusercontent.com/a39422b1f8c7b28c67af50d4216b618b220946624ce7558461b2396ced787fa5/68747470733a2f2f7777772e6f70656e31372e7669702f6c6f676f2e706e67',
    name: 'vitepress-theme-open17',
    title: 'A blog theme for vitpress',
    links: [
      { icon: 'github', link: 'https://github.com/open17/vitepress-theme-open17/' },
      {icon:{svg: webSvg},link: 'https://vitepress.open17.vip'}
    ]
  },
   {
    avatar: 'https://github.com/open17/vuepress-theme-qbook/raw/master/docs/.vuepress/public/icon/android-chrome-512x512.png',
    name: 'vuepress-theme-qbook',
    title: '一个基于 VuePress 的博客&文档主题',
    links: [
      { icon: 'github', link: 'https://github.com/open17/vuepress-theme-qbook' },
      {icon:{svg: webSvg},link: 'https://qbook.open17.vip'}
    ]
  },
   {
    avatar: 'https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082230252.png',
    name: 'Resume Maker',
    title: '一款极简风格的markdown简历生成器',
    links: [
      { icon: 'github', link: 'https://github.com/open17/resume-maker' },
      {icon:{svg: webSvg},link: 'https://resume-maker.open17.vip'}
    ]
  },
   {
    avatar: 'https://cdn.jsdelivr.net/gh/open17/Pic/img/202404020439621.png',
    name: 'Python-for-CP',
    title: '我的算法竞赛模板',
    links: [
      { icon: 'github', link: 'https://github.com/open17/Python-for-CP' },
    ]
  },
   {
    avatar: 'https://cdn.jsdelivr.net/gh/open17/Pic/img/202404020436808.png',
    name: 'Bilibili Downloader Cli',
    title: '轻量级b站下载器',
    links: [
      { icon: 'github', link: 'https://github.com/open17/Bilibili_Downloader_Cli' },
    ]
  },
   {
    avatar: 'https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082225465.png',
    name: '更多内容',
    title: 'to be continue...',
    links: [
      { icon: 'github', link: 'https://github.com/open17' },
    ]
  },
]

const tools = [
  {
    avatar: 'https://cdn.jsdelivr.net/gh/open17/Pic/img/202404021320204.jpeg',
    name: 'chatgpt',
    title: 'An AI-powered language model',
    desc:"<a href='https://chat.openai.com/' target='_blank'>View more</a>",
  },
    {
    avatar: 'https://cdn.jsdelivr.net/gh/open17/Pic/img/202404021321844.svg',
    name: 'poe',
    title: 'Fast, Helpful AI Chat',
    desc:"<a href='https://poe.com/' target='_blank'>View more</a>",
  },
  {
    avatar: 'https://cdn.jsdelivr.net/gh/open17/Pic/img/202404021323057.png',
    name: 'vercel',
    title: 'Vercel is the Frontend Cloud.',
    desc:"<a href='https://vercel.com/' target='_blank'>View more</a>",
  },
  {
    avatar: 'https://cdn.jsdelivr.net/gh/open17/Pic/img/202404021328214.png',
    name: 'cloudflare',
    title: 'The Cloudflare dashboard is loading',
    desc:"<a href='https://dash.cloudflare.com' target='_blank'>View more</a>",
  },
  {
    avatar: 'https://cdn.jsdelivr.net/gh/open17/Pic/img/202404021338107.png',
    name: 'npm',
    title: 'Build amazing things',
    desc:"<a href='https://www.npmjs.com/' target='_blank'>View more</a>",
  },
  {
    avatar: 'https://vitepress.dev/vitepress-logo-large.webp',
    name: 'vitepress',
    title: 'Markdown to Beautiful Docs in Minutes',
    desc:"<a href='https://vitepress.dev/' target='_blank'>View more</a>",
  },
  
]
</script>

---

# 统计

从{{posts[posts.length-1].frontmatter.date.substring(0,10)}}开始,写下了第一篇博客: {{posts[posts.length-1].frontmatter.title}}  

到{{posts[0].frontmatter.date.substring(0,10)}},写下了最近一次的博客: {{posts[0].frontmatter.title}}  

总计已经写下了篇{{posts.length}}博客,平均下来{{Math.ceil(((Math.abs((new Date(posts[posts.length-1].frontmatter.date)).getTime()-(new Date(posts[0].frontmatter.date)).getTime()))/ (1000 * 3600 * 24))/posts.length)}}天写一篇博客

![](https://github-readme-stats.vercel.app/api?username=open17&show_icons=true&layout=compact&theme=vue)

---
# 我的小项目

<VPTeamMembers size="medium" :members="projects" />


---

# 我的工具箱

<VPTeamMembers size="medium" :members="tools" />

