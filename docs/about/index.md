---
layout: doc
title: About
description: Web and Mobile Applications Testing and Developing.

head:
  - ['meta', {property: 'og:title', content:  'About' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/about/' }] 
  - ['meta', {name: 'twitter:title', content: 'About'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/about/'}]
---

# About Me

Hello, I'm Bruno, and I appreciate you taking the time to visit!

**Here are a few lines to introduce myself:**

- I was born, currently live, and work in Split. I began my journey as a freelancer and have now secured a position as a Software QA Tester, a role I am truly passionate about.
- One of my greatest joys lies in exploratory testing. I find that it contributes immense value to the development team, managers, stakeholders, and users alike.
- I take pleasure in engaging in outdoor workouts, such as uphill sprints, bodyweight exercises, and leisurely walks. These activities play a pivotal role in keeping any discomfort at bay.
- Additionally, I am dedicated to assisting individuals in maintaining their physical well-being. I educate others on exercises that can greatly enhance overall health and fitness.

## Knowledge

- HTML, CSS, and JavaScript
- Exploratory Testing for Web and Mobile Applications
- Essential Website Optimization
- Static Website Design
- Logo Design

## About Website

Developed using [VitePress](https://vitepress.dev/) and [StackBlitz](https://stackblitz.com/), the code is hosted on GitHub, using the MIT license and currently running on [Netlify](https://www.netlify.com).

## Contact

Email: qatidy@gmail.com

<VPTeamMembers size="small" :members="members" />

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/tidyqa.png',
    name: 'Bruno Vučica',
    title: 'Quality Assurance Tester',
    links: [
      { icon: 'github', link: 'https://github.com/tidyqa' },
      { icon: 'linkedin', link: 'https://hr.linkedin.com/in/bruno-vu%C4%8Dica-b9712892' }
    ]
  },

]
</script>
