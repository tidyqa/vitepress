---
layout: doc
title: Team
description: People.

head:
  - ['meta', {property: 'og:title', content:  'Team' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/team/' }] 
  - ['meta', {name: 'twitter:title', content: 'Team'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/team/'}]
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
{
    avatar: 'https://www.github.com/tidyqa.png',
    name: 'Bruno Vučica',
    title: 'Tester',
    links: [
      { icon: 'github', link: 'https://github.com/tidyqa' },
      { icon: 'linkedin', link: 'https://hr.linkedin.com/in/bruno-vu%C4%8Dica-b9712892' }
    ]
  },

]
const partners = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
    {
    avatar: 'https://www.github.com/kiaking.png',
    name: 'Kia King Ishii',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/kiaking' },
      { icon: 'twitter', link: 'https://twitter.com/KiaKing85' }
    ]
  },

]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Team</template>
    <template #lead>...</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  <VPTeamPageSection>
    <template #title>Big Thanks To</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
