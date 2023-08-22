//import { defineConfig } from 'vitepress';
import { defineConfig, type DefaultTheme } from 'vitepress'

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lastUpdated: true,
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

    editLink: {
      pattern: 'https://github.com/tidyqa/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

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
            {
              text: 'Images',
              link: '/html/images/',
            },
            {
              text: 'Basic Styling with CSS',
              link: '/html/basic-styling-with-css/',
            },
            {
              text: 'Forms and Input Elements',
              link: '/html/forms-and-input-elements/',
            },
            {
              text: 'HTML Semantics',
              link: '/html/semantics/',
            },
            {
              text: 'Creating a Simple Webpage',
              link: '/html/creating-simple-webpage/',
            },
            {
              text: 'Advanced HTML Features',
              link: '/html/advanced-features/',
            },
            {
              text: 'Continuing Your Web Development Journey',
              link: '/html/next-steps/',
            },
          ],
        },
      ],

      '/css/': [
        {
          text: 'CSS Tutorial',
          link: '/css/',
          //collapsed: false,
          items: [
            {
              text: 'Introduction to CSS',
              link: '/css/introduction/',
            },
            {
              text: 'CSS Syntax',
              link: '/css/syntax/',
            },
            {
              text: 'Selectors',
              link: '/css/selectors/',
            },
            {
              text: 'Properties and Values',
              link: '/css/properties-and-values/',
            },
            {
              text: 'Basic Styling',
              link: '/css/basic-styling/',
            },
            {
              text: 'Fonts and Text Styling',
              link: '/css/fonts-and-text-styling/',
            },
            {
              text: 'Box Model',
              link: '/css/box-model/',
            },
            {
              text: 'Margins and Padding',
              link: '/css/margins-and-paddings/',
            },
            {
              text: 'Backgrounds',
              link: '/css/backgrounds/',
            },
            {
              text: 'Borders',
              link: '/css/borders/',
            },
            {
              text: 'Display and Positioning',
              link: '/css/display-and-positioning/',
            },
            {
              text: 'Flexbox',
              link: '/css/flexbox/',
            },
            {
              text: 'CSS Grid',
              link: '/css/grid/',
            },
            {
              text: 'Responsive Design',
              link: '/css/responsive-design/',
            },
            {
              text: 'Media Queries',
              link: '/css/media-queries/',
            },
          ],
        },
      ],

      '/javascript/': [
        {
          text: 'JavaScript Tutorial',
          link: '/javascript/',
          //collapsed: false,
          items: [
            {
              text: 'Introduction to JavaScript',
              link: '/javascript/introduction/',
            },
            {
              text: 'Development Environment',
              link: '/javascript/development-environment/',
            },
            {
              text: 'Basic Syntax',
              link: '/javascript/basic-syntax/',
            },
            {
              text: 'Variables and Data Types',
              link: '/javascript/variables-and-data-types/',
            },
            {
              text: 'Operators',
              link: '/javascript/operators/',
            },
            {
              text: 'Conditional Statements',
              link: '/javascript/conditional-statements/',
            },
            {
              text: 'Loops',
              link: '/javascript/loops/',
            },
            {
              text: 'Functions',
              link: '/javascript/functions/',
            },
            {
              text: 'Events and Event Handling',
              link: '/javascript/events-and-event-handling/',
            },
            {
              text: 'DOM Manipulation',
              link: '/javascript/dom-manipulation/',
            },
            {
              text: 'Handling User Input',
              link: '/javascript/handling-user-input/',
            },
            {
              text: 'Asynchronous Programming',
              link: '/javascript/asynchronous-programming/',
            },
            {
              text: 'Fetch API',
              link: '/javascript/fetch-api/',
            },
          ],
        },
      ],

      '/snippets/javascript/': [
        {
          text: 'JavaScript Snippets',
          //link: '/javascript/',
          //collapsed: false,
          items: [
            {
              text: 'Math and Numbers',
              link: '/snippets/javascript/math-and-numbers/',
            },
            {
              text: 'String Manipulation',
              link: '/snippets/javascript/string-manipulation/',
            },
          ],
        },
      ],

    },
  },



  
});