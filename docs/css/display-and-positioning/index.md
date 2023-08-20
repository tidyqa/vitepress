---
layout: doc
title: Display and Positioning - Crafting Layouts with Precision | CSS Tutorial
description: Craft layouts with precision, control element placement, layer elements in 3D space, and use modern layout systems like Flexbox and Grid. 
head:
  - ['meta', {property: 'og:title', content:  'Display and Positioning - Crafting Layouts with Precision | CSS Tutorial' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/css/display-and-positioning/' }] 
  - ['meta', {name: 'twitter:title', content: 'Borders - Defining Element Boundaries with Style | CSS Tutorial'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/css/display-and-positioning/'}]
---

# Display and Positioning

By understanding how elements are positioned and displayed on the web, you'll gain the power to craft responsive and visually appealing designs.

## Introduction to Display and Positioning

Display and positioning properties are at the heart of web layout design. By mastering these properties, you can control how elements interact and flow within your design, ensuring a visually cohesive and organized layout.

## Display Property

The `display` property determines how an element is treated in the layout. It influences how elements flow, stack, and interact with each other:

```css
.inline-element {
  display: inline; /* Inline-level behavior */
}

.block-element {
  display: block; /* Block-level behavior */
}
```

## Position Property

The `position` property controls the positioning of an element within its containing element. The values of `position` include `static`, `relative`, `absolute`, and `fixed`:

```css
.relative-box {
  position: relative; /* Positioned relative to its normal position */
}

.absolute-box {
  position: absolute; /* Positioned relative to its closest positioned ancestor */
}
```

## Z-index

The `z-index` property controls the stacking order of positioned elements that overlap. Higher values place elements on top of lower values:

```css
.layer1 {
  z-index: 2; /* Above layer2 */
}

.layer2 {
  z-index: 1; /* Below layer1 */
}
```

## Float

The `float` property was traditionally used for layout before the advent of modern layout techniques. It allows elements to float to the left or right, enabling text to wrap around them:

```css
.float-left {
  float: left; /* Floats the element to the left */
}

.float-right {
  float: right; /* Floats the element to the right */
}
```

## Clear

The `clear` property prevents elements from floating beside preceding floated elements. This ensures proper layout organization:

```css
.clear-float {
  clear: both; /* Clears both left and right floated elements */
}
```

## Flexbox

Flexbox is a powerful layout system that simplifies responsive design. It allows you to create flexible layouts with alignment and distribution control:

```css
.flex-container {
  display: flex; /* Enables flex layout */
  justify-content: space-between; /* Distributes items along the main axis */
  align-items: center; /* Aligns items along the cross axis */
}
```

## Grid

CSS Grid is another layout system that allows you to create complex grid-based layouts. It offers precise control over rows, columns, and alignment:

```css
.grid-container {
  display: grid; /* Enables grid layout */
  grid-template-columns: 1fr 2fr 1fr; /* Defines grid columns */
  grid-gap: 20px; /* Gap between grid items */
}
```

## Mastering Layout Control

By mastering display properties, positioning techniques, floating elements, and modern layout systems like Flexbox and Grid, you have the tools to create versatile, responsive, and visually appealing web layouts. Continue to experiment with different techniques to refine your design skills.