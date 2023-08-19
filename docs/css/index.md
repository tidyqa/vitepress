---
layout: doc
title: CSS Tutorial
description: Learn how to style your web pages with Cascading Style Sheets (CSS) through easy-to-follow tutorials.
editLink: true
head:
  - ['meta', {property: 'og:title', content:  'CSS Tutorial' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/css/' }] 
  - ['meta', {name: 'twitter:title', content: 'CSS Tutorial'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/css/'}]
---

# CSS Tutorial

## Introduction to CSS
CSS stands for Cascading Style Sheets. It's a language used to describe the presentation of web pages, including colors, fonts, spacing, and layout. CSS helps separate content from design.

## CSS Syntax
CSS consists of rulesets that define how elements should be styled. A ruleset includes a selector and a set of properties and values.

## Selectors
Selectors target HTML elements to apply styles. Examples: `element`, `.class`, `#id`.

## Properties and Values
Properties define the aspect you want to style (e.g., `color`, `font-size`), and values specify how to style it (e.g., `blue`, `16px`).

## Basic Styling

```css
/* Target an HTML element */
p {
  color: blue;
  font-size: 16px;
}
```

## Fonts and Text Styling

```css
/* Font styling */
h1 {
  font-family: "Arial", sans-serif;
  font-weight: bold;
}

/* Text styling */
p {
  text-align: center;
  line-height: 1.5;
}
```

## Box Model

Each element is a box with content, padding, borders, and margins.

## Margins and Padding

```css
/* Margin and Padding */
.box {
  margin: 10px;
  padding: 20px;
}
```

## Backgrounds

```css
/* Background */
.header {
  background-color: #f2f2f2;
  background-image: url("bg.jpg");
  background-size: cover;
}
```

## Borders
```css
/* Border */
.button {
  border: 1px solid #333;
  border-radius: 5px;
}
```

## Display and Positioning

```css
/* Display and Positioning */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.positioned {
  position: relative;
  top: 20px;
  left: 30px;
}
```

## Flexbox
Flexbox is a layout model for creating flexible and efficient layouts.

## CSS Grid
CSS Grid is a powerful layout system to create grid-based layouts.

## Responsive Design

```css
/* Responsive Design */
@media (max-width: 768px) {
  .column {
    width: 100%;
  }
}
```

## Media Queries
Media queries adjust styles based on the device's characteristics.

Remember to link your CSS file to your HTML file using the `<link>` tag in the `<head>` section:

```html
<link rel="stylesheet" href="styles.css">
```

This tutorial covers the basics of CSS, but there's much more to explore! As you become more comfortable with these concepts, you can delve into more advanced topics like animations, transitions, preprocessors, and more.