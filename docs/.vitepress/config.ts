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
    externalLinkIcon:true,
    footer: {
      message:
        '<a href="/about/">About</a><br>Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2023-present <a href="https://tidyqa.com">TidyQA</a>',
    },
    nav: [
      //{ text: 'About', link: '/about/' },
      //{ text: 'Tutorials', link: '/tutorials/' },
      
      {
        text: 'Testing',
        items: [
          { text: 'Registration Page', link: '/testing/registration-page/' },
        ],
      },
      
      {
        text: 'Tutorials',
        items: [
          { text: 'HTML Tutorial', link: '/html/' },
          { text: 'CSS Tutorial', link: '/css/' },
          { text: 'JavaScript Tutorial', link: '/javascript/' },
        ],
      },

      {
        text: 'Snippets',
        items: [
          { text: 'CSS Snippets', link: '/snippets/css/' },
          { text: 'JavaScript Snippets', link: '/snippets/javascript/' },
        ],
      },


      // ...
    ],

    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.


      '/snippets/css/': [
        {
          text: 'CSS Snippets',
          //link: '/testing/',
          //collapsed: false,
          items: [
            {
              text: 'Layout and Positioning',
              link: '/snippets/css/layout-and-positioning/',
            },
            {
              text: 'Typography',
              link: '/snippets/css/typography/',
            },
            {
              text: 'Color and Backgrounds',
              link: '/snippets/css/color-and-backgrounds/',
            },
            // {
            //   text: 'Buttons and Links',
            //   link: '/snippets/css/buttons-and-links/',
            // },
            // {
            //   text: 'Navigation',
            //   link: '/snippets/css/navigation/',
            // },
            // {
            //   text: 'Forms',
            //   link: '/snippets/css/forms/',
            // },
            // {
            //   text: 'Images and Icons',
            //   link: '/snippets/css/images-and-icons/',
            // },
            // {
            //   text: 'Animations and Transitions',
            //   link: '/snippets/css/animations-and-transitions/',
            // },
            // {
            //   text: 'Responsive Design',
            //   link: '/snippets/css/responsive-design/',
            // },
            // {
            //   text: 'Flexbox',
            //   link: '/snippets/css/flexbox/',
            // },
            // {
            //   text: 'Grid',
            //   link: '/snippets/css/grid/',
            // },
            // {
            //   text: 'Background Effects',
            //   link: '/snippets/css/background-effects/',
            // },
            // {
            //   text: 'Shadows and Effects',
            //   link: '/snippets/css/shadows-and-effects/',
            // },
            // {
            //   text: 'Transitions and Transformations',
            //   link: '/snippets/css/transitions-and-transformations/',
            // },
            // {
            //   text: 'Tables',
            //   link: '/snippets/css/tables/',
            // },
            // {
            //   text: 'Cards and Panels',
            //   link: '/snippets/css/cards-and-panels/',
            // },
            // {
            //   text: 'Hover Effects',
            //   link: '/snippets/css/hover-effects/',
            // },
            // {
            //   text: 'Pagination and Loaders',
            //   link: '/snippets/css/pagination-and-loaders/',
            // },
            // {
            //   text: 'Custom Cursors',
            //   link: '/snippets/css/custom-cursors/',
            // },
            // {
            //   text: 'Print Styles',
            //   link: '/snippets/css/print-styles/',
            // },
          ],
        },
      ],

      '/testing/': [
        {
          text: 'Testing',
          //link: '/testing/',
          //collapsed: false,
          items: [
            {
              text: 'Registration Page',
              link: '/testing/registration-page/',
            },
            // {
            //   text: 'Login Page',
            //   link: '/testing/login-page/',
            // },
          ],
        },
      ],




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
            {
              text: 'Array Operations',
              link: '/snippets/javascript/array-operations/',
            },
            {
              text: 'Object Manipulation',
              link: '/snippets/javascript/object-manipulation/',
            },
            {
              text: 'Conversion and Calculation',
              link: '/snippets/javascript/conversion-and-calculation/',
            },
            {
              text: 'Conditional Statements',
              link: '/snippets/javascript/conditional-statements/',
            },
            {
              text: 'Loops and Iteration',
              link: '/snippets/javascript/loops-and-iteration/',
            },
            {
              text: 'Functions',
              link: '/snippets/javascript/functions/',
            },
            {
              text: 'Promises and Async/Await',
              link: '/snippets/javascript/promises-async-await/',
            },
            {
              text: 'Error Handling',
              link: '/snippets/javascript/error-handling/',
            },
            {
              text: 'DOM Manipulation',
              link: '/snippets/javascript/dom-manipulation/',
            },
            {
              text: 'Event Handling',
              link: '/snippets/javascript/event-handling/',
            },
            {
              text: 'AJAX and Fetch',
              link: '/snippets/javascript/ajax-and-fetch/',
            },
            {
              text: 'LocalStorage and SessionStorage',
              link: '/snippets/javascript/localstorage-and-sessionstorage/',
            },
            {
              text: 'ES6 Features',
              link: '/snippets/javascript/es6-features/',
            },
            {
              text: 'Functional Programming',
              link: '/snippets/javascript/functional-programming/',
            },
            {
              text: 'Sorting and Searching',
              link: '/snippets/javascript/sorting-and-searching/',
            },
            {
              text: 'Recursion',
              link: '/snippets/javascript/recursion/',
            },
            {
              text: 'Map and Set',
              link: '/snippets/javascript/map-and-set/',
            },
            {
              text: 'JSON Manipulation',
              link: '/snippets/javascript/json-manipulation/',
            },
          ],
        },
      ],

    },
  },



  
});