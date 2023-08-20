---
layout: doc
title: Flexbox - Creating Flexible and Responsive Layouts | CSS Tutorial
description: Master the art of flexible layouts with the Flexbox layout system. Learn to align, distribute, and control elements along the main and cross axes, and create responsive designs with ease.
head:
  - ['meta', {property: 'og:title', content:  'Flexbox - Creating Flexible and Responsive Layouts | CSS Tutorial' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/css/flexbox/' }] 
  - ['meta', {name: 'twitter:title', content: 'Flexbox - Creating Flexible and Responsive Layouts | CSS Tutorial'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/css/flexbox/'}]
---

# Flexbox

Flexbox empowers you to create flexible and responsive layouts with ease, allowing you to align and distribute elements along both the main and cross axes.

## Introduction to Flexbox

Flexbox is a modern layout system that simplifies the creation of flexible and responsive layouts. It works by distributing space within a container and aligning items along both the main and cross axes.

## Flex Container

To enable Flexbox, set the `display` property of the container to `flex`:

```css
.flex-container {
  display: flex; /* Enables flex layout */
}
```

## Flex Direction

The `flex-direction` property determines the direction of the main axis. Use it to align elements horizontally or vertically:

```css
.row {
  flex-direction: row; /* Horizontally aligns elements */
}

.column {
  flex-direction: column; /* Vertically aligns elements */
}
```

## Justify Content

The `justify-content` property controls how items are distributed along the main axis. Experiment with values like `flex-start`, `center`, `flex-end`, and more:

```css
.spaceBetween {
  justify-content: space-between; /* Distributes items with space between them */
}

.centerItems {
  justify-content: center; /* Centers items along the main axis */
}
```

## Align Items

The `align-items` property aligns items along the cross axis. It's useful for adjusting vertical alignment within a horizontal row or vice versa:

```css
.centerCrossAxis {
  align-items: center; /* Centers items along the cross axis */
}

.flexEndCrossAxis {
  align-items: flex-end; /* Aligns items to the end of the cross axis */
}
```

## Flex Items

Flex items inherit properties from the flex container. You can control individual items using various properties:

```css
.flex-item {
  flex: 1; /* Each item takes equal space */
}

.growShrink {
  flex-grow: 2; /* Item grows twice as much as others */
  flex-shrink: 1; /* Item shrinks normally */
}
```

## Align Self

The `align-self` property allows you to override the `align-items` property for individual flex items:

```css
.selfCenter {
  align-self: center; /* Centers the item along the cross axis */
}

.selfFlexEnd {
  align-self: flex-end; /* Aligns the item to the end of the cross axis */
}
```

## Flex Wrap

By default, Flexbox tries to fit all items within the container. Use `flex-wrap` to control whether items wrap to the next line when they overflow:

```css
.flex-wrap-container {
  flex-wrap: wrap; /* Wraps items to the next line if needed */
}
```

## Flexbox vs. Other Layouts

### When to Use Flexbox?

Flexbox is great for one-dimensional layouts where items are aligned along a single axis. Use it when you need to distribute space, align items, or control the order of elements within a container.

## Mastering Flexible Layouts

Congratulations! You've conquered the realm of Flexbox. By mastering the concepts of flex containers, directions, alignment, individual item control, and wrapping, you have the tools to create versatile and responsive layouts that adapt gracefully to different screen sizes and orientations.