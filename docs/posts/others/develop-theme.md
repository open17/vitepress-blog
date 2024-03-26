---
tags:
    - theme
title: vitepress主题开发踩坑日记
date: 2024-03-25
---

简单记录我在开发vitepress主题时的踩坑记录

---

:::info 
应该会持续更新...
:::

## 分离为npm包

在分离主题内容为npm包后,一个很奇怪的现象发生了:

npm link这个包的时候vitepress可以正常build,但是如果发布之后npm install这个包,vitepress build的时候会报出识别不了.vue和.css的错误

我尝试在网上搜索但是相关问题均没有有效解决这个错误

我尝试使用相对路径来引入,又可以直接build了

所有我感觉应该是vite未识别到相关信息,导致无法正确解析文件

在我将主题配置由js改为ts,并加入类型声明之后这个问题就解决了

## 新建布局

最开始因为主要官方文档看自定义主题和继承两块,我以为只能通过新建layout来引入新的布局,实际上vitepress支持直接创建新的布局,[指路](https://vitepress.dev/reference/default-theme-layout#custom-layout)

