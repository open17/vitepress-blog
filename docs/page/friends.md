---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/121916671?v=4',
    name: 'AllenYGY',
    title: '坐看苍苔色，欲上人衣来。',
    desc:"<a href='https://allenygy.github.io/' target='_blank'>View more</a>",
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/103395523?v=4',
    name: 'Harkerbest',
    title: 'Try your best,do your best',
    desc:"<a href='https://www.harkerbest.cn/' target='_blank'>View more</a>",
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Friends
    </template>
    <template #lead>
Here are the blog or site links of some of my wonderful friends. Explore the enriching content they've curated, with each link serving as a gateway to their unique perspectives and passions.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>