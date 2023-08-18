import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'TidyQA',
  description:
    'Enhance software quality and ensure flawless performance for your applications',
  sitemap: {
    hostname: 'https://tidyqa.com',
  },

  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: '/files/favicon.svg' },
    ],
    ['link', { rel: 'icon', type: 'image/png', href: '/files/favicon.png' }],
    //['link', { rel: 'prefetch', href: '/files/urlModalWidget.js' }],
    //['script', { src: '/urlModalWidget.js' }],
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

      '/html/': [
        {
          text: 'HTML Tutorial',
          link: '/html/',
          //collapsed: false,
          items: [
            {
              text: 'Introduction to HTML',
              link: '/html/introduction/',
            },
            {
              text: 'Setting Up Your HTML Document',
              link: '/html/setting-up-html-document/',
            },
            {
              text: 'HTML Document Structure',
              link: '/html/document-structure/',
            },
            {
              text: 'Headings and Paragraphs',
              link: '/html/headings-and-paragraphs/',
            },
            {
              text: 'Links and Anchors',
              link: '/html/links-and-anchors/',
            },
            {
              text: 'Lists',
              link: '/html/lists/',
            },
          ],
        },
      ],

      // '/url-modal-widget/': [
      //   {
      //     text: 'URL Modal Widget',
      //     link: '/url-modal-widget/',
      //     //collapsed: false,
      //     items: [
      //       {
      //         text: 'Installation',
      //         link: '/url-modal-widget/installation/',
      //       },
      //       {
      //         text: 'Demo',
      //         link: '/url-modal-widget/demo/',
      //       },
      //     ],
      //   },
      // ],
    },
  },
});
