---
layout: doc
title: Layout and Positioning - CSS Snippets
description: Learn to center elements, create sticky header, creating columns, and more.
head:
  - ['meta', {property: 'og:title', content:  'Layout and Positioning - CSS Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/css/layout-and-positioning/' }] 
  - ['meta', {name: 'twitter:title', content: 'Layout and Positioning - CSS Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/css/layout-and-positioning/'}]
---

# Layout and Positioning

In this collection of CSS code snippets, you'll find a range of solutions to common layout challenges. From centering elements both horizontally and vertically to creating fluid grids and sticky headers, these snippets will empower you to craft seamless and visually appealing layouts for your web projects.

## Centering an Element Horizontally and Vertically

This snippet is useful for perfectly centering an element both horizontally and vertically within its parent container. The `position: absolute` along with `top`, `left`, and `transform` properties ensure accurate centering.

```css
.centered-element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

## Creating a Sticky Header

This snippet is used to create a sticky header that remains at the top of the viewport as the user scrolls. It's particularly useful for navigation bars, ensuring easy access to navigation links at all times.

```css
.sticky-header {
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 100;
}
```

## Creating a Fixed Footer

This code creates a footer that stays fixed at the bottom of the viewport, regardless of scrolling. It's ideal for ensuring important information or navigation options are consistently accessible.

```css
.fixed-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
}
```

## Creating a Two-Column Layout

This snippet demonstrates how to create a basic two-column layout, commonly used for sidebars and content sections. It allows content to be displayed side by side.

```css
.two-column-layout {
  display: flex;
}
.column {
  flex: 1;
  padding: 20px;
}
```

## Creating a Three-Column Layout

Similar to the two-column layout, this snippet extends to a three-column layout, providing more flexibility in arranging content in a grid-like structure.

```css
.three-column-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

## Equal Height Columns with Flexbox

This code snippet uses flexbox to ensure that columns within a row have equal heights, regardless of the content. It's useful for maintaining a consistent layout.

```css
.equal-height-columns {
  display: flex;
}
.column {
  flex: 1;
  display: flex;
  flex-direction: column;
}
```

## Responsive Centering with Flexbox

This snippet showcases how to center content both horizontally and vertically within a container using flexbox, while ensuring the layout remains responsive.

```css
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Positioning a Sidebar

This code demonstrates positioning a sidebar using the `float` property. It's commonly used in responsive designs to create a compact navigation or additional content area.

```css
.sidebar {
  float: left;
  width: 25%;
  padding: 20px;
}
```

## Creating a Full-Page Hero Image

This snippet creates a hero image that covers the entire viewport. It's often used on landing pages to grab attention and set the tone.

```css
.hero-image {
  background-image: url('image.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}
```

## Creating a Fixed-Width Layout

This code snippet establishes a fixed-width layout for content, which can be useful when you want to maintain a consistent width across different screen sizes.

```css
.fixed-width-container {
  width: 960px;
  margin: 0 auto;
}
```

## Creating a Fluid Width Layout

This snippet showcases a fluid-width layout that adapts to the available screen space. It's great for creating responsive designs that adjust to various screen sizes.

```css
.fluid-width-container {
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
}
```

## Creating a Centered Max-Width Container

This code snippet helps you create a centered container with a maximum width, ensuring that content doesn't become too wide on larger screens.

```css
.centered-max-width {
  max-width: 1200px;
  margin: 0 auto;
}
```

## Creating a Masonry Grid Layout

This snippet demonstrates how to achieve a masonry-style grid layout using CSS Grid or column-count property, ideal for showcasing images with varying heights.

```css
.masonry-grid {
  column-count: 3;
  column-gap: 20px;
}
.grid-item {
  break-inside: avoid;
  margin-bottom: 20px;
}
```

## Creating a Horizontal Navigation Bar

This code creates a horizontal navigation bar with evenly spaced navigation links, which is a common pattern for website navigation menus.

```css
.horizontal-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav-link {
  text-decoration: none;
  color: #333;
}
```

## Creating a Vertical Navigation Bar

Similar to the horizontal navigation bar, this snippet sets up a vertical navigation bar, which can be used for side menus or navigational sidebars.

```css
.vertical-nav {
  display: flex;
  flex-direction: column;
}
.nav-link {
  text-decoration: none;
  color: #333;
  margin-bottom: 10px;
}
```

## Creating a Centered Content Block

This code snippet showcases how to center a content block both horizontally and vertically within its parent container using flexbox or grid.

```css
.centered-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Creating a Split Layout

This snippet helps create a split layout with two content sections, allowing you to display different types of content side by side.

```css
.split-layout {
  display: flex;
}
.split-content {
  flex: 1;
  padding: 20px;
}
```

## Positioning with Negative Margin

This code snippet demonstrates how negative margins can be used to adjust the position of elements, enabling creative layout adjustments.

```css
.negative-margin {
  margin: -10px;
}
.negative-margin-item {
  margin: 10px;
}
```

## Creating a Stacked Card Layout

This snippet creates a stacked card layout, often seen in mobile interfaces, where content is presented in a card-like format.

```css
.card {
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px 0;
  border-radius: 5px;
}
```

## Creating a Collapsible Sidebar Menu

This code snippet is useful for creating a collapsible sidebar menu often used in responsive designs to save space while providing navigation options.

```css
.sidebar {
  width: 250px;
  transition: width 0.3s ease;
}
.collapsed {
  width: 0;
}
```