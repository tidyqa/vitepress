---
layout: doc
title: Introduction to CSS
description: Learn the art of styling web pages, from selectors to properties, and discover the power of separation of concerns.
head:
  - ['meta', {property: 'og:title', content:  'Introduction to CSS' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/css/' }] 
  - ['meta', {name: 'twitter:title', content: 'Introduction to CSS'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/css/'}]
---

# Introduction to CSS

## What is CSS?

Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of web documents written in HTML. It separates the content and structure of a webpage from its visual design.

## Why Use CSS?

- **Separation of Concerns:** CSS allows you to separate the structure and content of your web page from its design.

- **Consistency:** Apply consistent styles across multiple pages of your website.

- **Flexibility:** Easily change the appearance of your entire website by modifying a few CSS rules.

- **Maintainability:** Update styles more efficiently using centralized CSS files.

## How Does CSS Work?

CSS works by selecting HTML elements and applying styles to them. Selectors target elements based on their tag names, classes, or IDs, while styles are defined using properties and values.

## Adding CSS to HTML

You can include CSS in your HTML using three methods:

1. **Inline:** Apply styles directly within the HTML element's `style` attribute.

2. **Internal:** Embed CSS within a `<style>` tag in the HTML's `<head>` section.

3. **External:** Link an external CSS file using the `<link>` tag in the HTML's `<head>` section.

## CSS Syntax

A CSS rule consists of a selector and a declaration block. The declaration block contains one or more property-value pairs.

```css
selector {
  property: value;
  another-property: another-value;
}
```

## Basic Selectors

- **Element Selector:** Selects all instances of a particular HTML element.

  ```css
  p {
    color: blue;
  }
  ```

- **Class Selector:** Selects elements with a specific class attribute.

  ```css
  .button {
    background-color: green;
  }
  ```

- **ID Selector:** Selects a single element by its unique ID attribute.

  ```css
  #header {
    font-size: 24px;
  }
  ```

## Basic Properties and Values

- `color`: Sets the text color.
- `font-size`: Specifies the font size.
- `background-color`: Sets the background color.
- `margin`: Controls the outer space around an element.
- `padding`: Controls the inner space within an element.
- `border`: Defines the border of an element.

## Linking CSS Files

To link an external CSS file, use the `<link>` tag in the HTML `<head>` section.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <!-- Your HTML content here -->
</body>
</html>
```

## Practice: Styling a Simple Web Page

Apply the concepts you've learned by styling a basic HTML page using CSS. Create an HTML file with content, a CSS file to define styles, and link them together.

## Summary

In this section, you've gained a solid understanding of the fundamentals of CSS. You've learned what CSS is, its benefits, how it works, and how to apply styles using various selectors and properties. Additionally, you've learned how to link an external CSS file to your HTML document. In the next section, you'll delve deeper into different types of selectors, styling properties, and more advanced techniques.