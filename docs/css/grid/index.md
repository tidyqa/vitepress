---
layout: doc
title: CSS Grid - Building Grid-Based Layouts | CSS Tutorial
description: Learn to create organized and responsive designs using columns, rows, alignment, and justification with CSS Grid.
head:
  - ['meta', {property: 'og:title', content:  'CSS Grid - Building Grid-Based Layouts | CSS Tutorial' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/css/grid/' }] 
  - ['meta', {name: 'twitter:title', content: 'CSS Grid - Building Grid-Based Layouts | CSS Tutorial'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/css/grid/'}]
---

# CSS Grid

A layout system that enables you to create complex grid-based layouts with ease. With CSS Grid, you can align and position elements in rows and columns, creating responsive and dynamic designs.

## Introduction to CSS Grid

CSS Grid is a versatile layout system that allows you to create grid-based layouts with precision and flexibility. By using rows and columns, you can arrange elements in a structured manner and achieve intricate designs.

## Grid Container

To create a grid layout, set the `display` property of the container to `grid`:

```css
.grid-container {
  display: grid; /* Enables grid layout */
}
```

## Grid Columns and Rows

Use the `grid-template-columns` and `grid-template-rows` properties to define the number and size of columns and rows:

```css
.grid-container {
  grid-template-columns: repeat(3, 1fr); /* Three columns with equal width */
  grid-template-rows: 100px auto 200px; /* Fixed, flexible, and fixed height rows */
}
```

## Grid Item Placement

Use `grid-row` and `grid-column` properties to place items within the grid:

```css
.grid-item {
  grid-row: 2 / 4; /* Item spans rows 2 to 4 */
  grid-column: 1 / span 2; /* Item starts in column 1 and spans 2 columns */
}
```

## Grid Gaps

Add spacing between grid cells using the `grid-gap` property:

```css
.grid-container {
  grid-gap: 20px; /* 20px gap between grid cells */
}
```

## Grid Lines and Areas

Define named grid areas and lines for better organization:

```css
.grid-container {
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}
```

## Alignment and Justification

Use alignment and justification properties to control how items are aligned within cells:

```css
.grid-item {
  justify-self: center; /* Centers item horizontally within the cell */
  align-self: end; /* Aligns item to the bottom of the cell */
}
```

## Responsive Grids

Create responsive grids by using media queries to adapt layout based on screen size:

```css
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr; /* Single column layout on smaller screens */
  }
}
```

## CSS Grid vs. Flexbox

### When to Choose Grid?

Choose CSS Grid for two-dimensional layouts that require precise control over rows and columns. Use Flexbox for one-dimensional layouts with alignment needs.

## Mastering Grid Layouts

Congratulations! You've mastered the art of CSS Grid. By understanding grid containers, columns, rows, item placement, gaps, lines, alignment, and responsiveness, you can create intricate and responsive grid-based layouts that adapt seamlessly to various screen sizes and orientations.