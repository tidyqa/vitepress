---
title: Manifest File - Simple Bug Tracker
description: Roadmap for Chrome to understand how the extension should function and interact with the browser.
head:
  - ['meta', {property: 'og:title', content:  'Manifest File - Simple Bug Tracker' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/simple-bug-tracker/manifest-file/' }] 
  - ['meta', {name: 'twitter:title', content: 'Manifest File - Simple Bug Tracker'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/simple-bug-tracker/manifest-file/'}]
---

# Manifest File

The `manifest.json` file is a crucial configuration file that defines the behavior, appearance, and permissions of the Chrome extension. It acts as a roadmap for Chrome to understand how the extension should function and interact with the browser. Let's break down the contents of the `manifest.json` file for the TidyQA Simple Bug Tracker extension:

## Manifest Version

Indicates the version of the manifest format being used. In this case, version 3 is specified.

```json
"manifest_version": 3,
```

## Extension Information

- `"name"`: Specifies the name of the extension.
- `"version"`: Specifies the version number of the extension.
- `"description"`: Provides a brief description of the extension's purpose.

```json
"name": "TidyQA Simple Bug Tracker",
"version": "1.0",
"description": "A simple Chrome extension to track bugs based on website URL.",
```

## Extension Action

Defines the default action that the extension takes when clicked by the user.

- `"default_popup"`: Specifies the HTML file to be displayed as a popup when the extension icon is clicked. In this case, it points to `popup.html`.

```json
"action": {
  "default_popup": "popup.html"
},
```

## Permissions

Lists the permissions that the extension requires to function properly. In this case, the extension requests permission to access and interact with tabs.

```json
"permissions": ["tabs"],
```

## Extension Icons

Specifies a set of icons with different sizes to represent the extension in various contexts (e.g., browser toolbar, extensions page).

- The sizes (16, 32, 48, 128) refer to the dimensions of the icons.
- The corresponding image files (`icon16.png`, `icon32.png`, etc.) provide the visual representation of the extension.

```json
"icons": {
  "16": "icon16.png",
  "32": "icon32.png",
  "48": "icon48.png",
  "128": "icon128.png"
}
```
