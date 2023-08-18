---
layout: doc
last Updated: true
title: Basic Styling with CSS - HTML Tutorial
description: Learn inline and internal styling techniques, and explore the power of external stylesheets for organized and efficient design management. 
head:
  - ['meta', {property: 'og:title', content:  'Basic Styling with CSS - HTML Tutorial' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/html/basic-styling-with-css/' }] 
  - ['meta', {name: 'twitter:title', content: 'Basic Styling with CSS - HTML Tutorial'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/html/basic-styling-with-css/'}]
---

# Basic Styling with CSS

Welcome to the world of design and aesthetics! In this section, we'll introduce you to Cascading Style Sheets (CSS), a powerful tool for adding style, layout, and visual appeal to your HTML content.

## What is CSS?

CSS is a styling language that works in tandem with HTML to control the presentation of web content. By applying CSS rules, you can control colors, fonts, spacing, layout, and more, transforming a plain HTML structure into an eye-catching and visually pleasing webpage.

## Inline Styles

You can apply CSS styles directly within an HTML document using the `<style>` element. This method is known as inline styling and is useful for making quick changes to specific elements.

### Example

```html
<p style="color: blue; font-size: 16px;">This is a styled paragraph.</p>
```

## Internal Styles

For more extensive styling, you can use the `<style>` element within the `<head>` section of your HTML document. This approach allows you to apply styles to multiple elements throughout the document.

### Example:

```html
<head>
  <style>
    p {
      color: blue;
      font-size: 16px;
    }
  </style>
</head>
```

## External Stylesheets: Linking to a CSS File

For even greater control and organization, it's common to use external CSS files. This approach separates your HTML structure from your styling, making your code more maintainable and modular.

### Example:

```html
<head>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
```

## Elevating Visual Appeal

CSS empowers you to transform your webpage's appearance, ensuring it resonates with your brand or design vision. By incorporating colors, typography, and layout adjustments, you can create a unique and visually engaging experience for your users.

In the upcoming section, we'll delve into forms and input elements, exploring how to gather user input and create interactive elements.