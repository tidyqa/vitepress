import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'TidyQA',
  description: 'Enhance software quality and ensure flawless performance for your applications',
  sitemap: {
    hostname: 'https://tidyqa.com',
  },

  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: '/files/favicon.svg' },
    ],
    ['link', { rel: 'icon', type: 'image/png', href: '/files/favicon.png' }],
  ],
  //cleanUrls: true,
  themeConfig: {
      search: {
      provider: 'local',
    },
    logo: { src: '/files/tidyqa-logo-mini.svg', width: 24, height: 24 },

    footer: {
      message:
        'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2023-present <a href="https://tidyqa.com">TidyQA</a>',
    },
    nav: [
      //{ text: 'About', link: '/about/' },
      { text: 'Tutorials', link: '/tutorials/' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    // sidebar: [
    //   //{ text: 'Guide', link: '/guide/' },
    //   {

    //     text: 'Simple Bug Tracker',
    //     link: '/simple-bug-tracker/',
    //     collapsed: false,
    //     items: [
    //       {
    //         text: 'Manifest file',
    //         link: '/simple-bug-tracker/manifest-file/',
    //       },
    //       {
    //         text: 'HTML file',
    //         link: '/simple-bug-tracker/html-file/',
    //       },
    //       {
    //         text: 'CSS file',
    //         link: '/simple-bug-tracker/css-file/',
    //       },
    //       {
    //         text: 'JavaScript File',
    //         link: '/simple-bug-tracker/javascript-file/',
    //       },
    //       {
    //         text: 'Icons',
    //         link: '/simple-bug-tracker/icons/',
    //       },
    //     ],
    //   },
    //   // {
    //   //   text: 'Netlify Platform',
    //   //   collapsed: false,
    //   //   items: [
    //   //     {
    //   //       text: 'Form Validation',
    //   //       link: '/netlify-platform/form-validation/',
    //   //     },
    //   //   ],
    //   // },
    // ],

    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/simple-bug-tracker/': [
        {
          text: 'Simple Bug Tracker',
          link: '/simple-bug-tracker/',
          //collapsed: false,
          items: [
            {
              text: 'Manifest file',
              link: '/simple-bug-tracker/manifest-file/',
            },
            {
              text: 'HTML file',
              link: '/simple-bug-tracker/html-file/',
            },
            {
              text: 'CSS file',
              link: '/simple-bug-tracker/css-file/',
            },
            {
              text: 'JavaScript file',
              link: '/simple-bug-tracker/javascript-file/',
            },
            {
              text: 'Extension icons',
              link: '/simple-bug-tracker/extension-icons/',
            },
            {
              text: 'Installation',
              link: '/simple-bug-tracker/installation/',
            },
          ],
        },
      ],

      // This sidebar gets displayed when a user
      // is on `config` directory.
      // '/config/': [
      //   {
      //     text: 'Config',
      //     items: [
      //       { text: 'Index', link: '/config/' },
      //       { text: 'Three', link: '/config/three' },
      //       { text: 'Four', link: '/config/four' },
      //     ],
      //   },
      // ],
    },
  },
});
