---
title: Extension Icons - Simple Bug Tracker
description: Set of icons in different sizes to visually represent the TidyQA Simple Bug Tracker.

head:
  - ['meta', {property: 'og:title', content:  'Extension Icons - Simple Bug Tracker' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/simple-bug-tracker/extension-icons/' }] 
  - ['meta', {name: 'twitter:title', content: 'Extension Icons - Simple Bug Tracker'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/simple-bug-tracker/extension-icons/'}]
---

# Extension Icons

The `"icons"` section within the `manifest.json` file specifies a set of icons in different sizes to visually represent the TidyQA Simple Bug Tracker Chrome extension in various contexts. 

## Sizes

Icons play a crucial role in conveying the extension's identity and functionality to users. Each icon size serves a specific purpose within the browser interface.

```json
"icons": {
  "16": "icon16.png",
  "32": "icon32.png",
  "48": "icon48.png",
  "128": "icon128.png"
}
```

## Icons

- ![Icon16](/files/icon16.png) `"16": "icon16.png"`: This icon is used in places where a smaller representation is needed, such as within the browser's address bar and when viewing extensions in the "Extensions" page.

- ![Icon32](/files/icon32.png) `"32": "icon32.png"`: This slightly larger icon is utilized in contexts like the extensions management page and notifications.

- ![Icon48](/files/icon48.png) `"48": "icon48.png"`: This size of the icon is commonly displayed in the extensions menu, accessible via the browser toolbar.

- ![Icon128](/files/icon128.png) `"128": "icon128.png"`: The largest icon size is often seen in the extensions overview page and the Chrome Web Store listing for the extension.
