---
title: "友链"
layout: home

hero:
  text: "友链"
  tagline: My friends

---

<script setup>
import {
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/121916671?v=4',
    name: 'AllenYGY',
    title: '坐看苍苔色，欲上人衣来。',
    desc:"<a href='https://www.allenygy.vip/' target='_blank'>点击跳转</a>",
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/103395523?v=4',
    name: 'Harkerbest',
    title: 'Try your best,do your best',
    desc:"<a href='https://www.harkerbest.cn/' target='_blank'>点击跳转</a>",
  },
]
</script>

  <VPTeamMembers
    :members="members"
  />