---
layout: doc
title: Grid - CSS Snippets
description: Enhance your web layout skills with these 20 educational CSS Grid snippets. Learn to create versatile grids, responsive galleries, and dynamic hybrid layouts.
head:
  - ['meta', {property: 'og:title', content:  'Grid - CSS Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/css/grid/' }] 
  - ['meta', {name: 'twitter:title', content: 'Grid - CSS Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/css/grid/'}]
---

# Grid

Wide range of Grid layout concepts, from basic grid structures to responsive designs and complex layouts. Use them as a resource to deepen your understanding of the CSS Grid layout and its applications in modern web design.

## Basic Grid Layout

This snippet sets up a basic grid layout using the `.grid-container` class. It defines three rows and three columns, creating a simple 3x3 grid.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
</style>
</head>
<body>
<div class="grid-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
  <div>Item 7</div>
  <div>Item 8</div>
  <div>Item 9</div>
</div>
</body>
</html>
```

## Grid Rows and Columns

Grid layout with varying rows and columns using the `grid-template-rows` and `grid-template-columns` properties.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-rows: 100px 150px 200px;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
}
</style>
</head>
<body>
<div class="grid-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>
</body>
</html>
```

## Grid Column Span

How to span an item across multiple columns using the `grid-column` property.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.span-item {
  grid-column: span 2;
}
</style>
</head>
<body>
<div class="grid-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div class="span-item">Spanned Item</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>
</body>
</html>
```

## Grid Row Span

This snippet showcases spanning an item across multiple rows using the `grid-row` property.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.span-item {
  grid-row: span 2;
}
</style>
</head>
<body>
<div class="grid-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div class="span-item">Spanned Item</div>
</div>
</body>
</html>
```

## Grid Area Names

Assigns grid area names using the `grid-area` property for easy placement of items.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-rows: repeat(2, 150px);
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-template-areas:
    "header header header"
    "main main sidebar";
}
.header {
  grid-area: header;
}
.main {
  grid-area: main;
}
.sidebar {
  grid-area: sidebar;
}
</style>
</head>
<body>
<div class="grid-container">
  <div class="header">Header</div>
  <div class="main">Main Content</div>
  <div class="sidebar">Sidebar</div>
</div>
</body>
</html>
```

## Grid Auto Flow

This snippet shows the use of `grid-auto-flow` to control the placement of items when they exceed available columns.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
  gap: 10px;
}
</style>
</head>
<body>
<div class="grid-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
</div>
</body>
</html>
```

## Grid Alignment

This example aligns items using `justify-items` and `align-items` properties for horizontal and vertical alignment.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
  justify-items: center;
  align-items: center;
}
</style>
</head>
<body>
<div class="grid-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>
</body>
</html>
```

## Grid Item Alignment

This snippet individually aligns items using the `justify-self` and `align-self` properties.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
}
.center-item {
  justify-self: center;
  align-self: center;
}
</style>
</head>
<body>
<div class="grid-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div class="center-item">Centered Item</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>
</body>
</html>
```

## Grid Column Gap

This example sets different column gaps using the `grid-column-gap` property.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  gap: 10px;
}
</style>
</head>
<body>
<div class="grid-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>
</body>
</html>
```

## Grid Row Gap

This snippet sets different row gaps using the `grid-row-gap` property.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 20px;
  gap: 10px;
}
</style>
</head>
<body>
<div class="grid-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>
</body>
</html>
```

## Grid Auto Sizing

This example showcases auto sizing of columns and rows using the `auto` keyword.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: 100px auto 100px;
  grid-template-rows: auto 150px auto;
  gap: 10px;
}
</style>
</head>
<body>
<div class="grid-container">
  <div>Item 1</div>
  <div>Auto Sized Content</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>
</body>
</html>
```

## Grid Minmax

This snippet uses the `minmax` function to set a range for column width.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 10px;
}
</style>
</head>
<body>
<div class="grid-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>
</body>
</html>
```

## Grid Explicit Placement

This example explicitly places items within the grid using line numbers.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
}
.explicit-item {
  grid-column: 2 / span 2;
  grid-row: 2 / 4;
}
</style>
</head>
<body>
<div class="grid-container">
  <div>Item 1</div>
  <div class="explicit-item">Explicitly Placed</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
  <div>Item 7</div>
  <div>Item 8</div>
</div>
</body>
</html>
```

## Grid Line Names

This snippet assigns names to grid lines and uses them for placement.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: [start] 100px [middle] 1fr [end];
  grid-template-rows: [top] 100px [middle] 1fr [bottom];
  gap: 10px;
}
.named-item {
  grid-column: start / end;
  grid-row: top / bottom;
}
</style>
</head>
<body>
<div class="grid-container">
  <div>Item 1</div>
  <div class="named-item">Named Item</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>
</body>
</html>
```

## Grid Auto Placement

This snippet automatically places items using the `grid-auto-flow` property.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-flow: column;
}
</style>
</head>
<body>
<div class="grid-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
</div>
</body>
</html>
```

## Responsive Grid Layout

This example uses media queries to adjust the grid layout for different screen sizes.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
</head>
<body>
<div class="grid-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>
</body>
</html>
```

## Nesting Grids

This snippet demonstrates nesting grids to create complex layouts.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.outer-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.inner-grid {
  display: grid;
 

 grid-template-columns: repeat(3, 1fr);
  gap: 5px;
}
</style>
</head>
<body>
<div class="outer-grid">
  <div>Item 1</div>
  <div>Item 2</div>
  <div class="inner-grid">
    <div>Inner 1</div>
    <div>Inner 2</div>
    <div>Inner 3</div>
  </div>
</div>
</body>
</html>
```

## Grid and Flex Together

This example combines CSS Grid and Flexbox to create a hybrid layout.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
</head>
<body>
<div class="grid-container">
  <div>Item 1</div>
  <div class="flex-container">
    <p>Flexbox Centered</p>
  </div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
</div>
</body>
</html>
```

## Grid for Gallery

This snippet uses a grid layout to create a responsive image gallery.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}
.image {
  width: 100%;
  height: auto;
}
</style>
</head>
<body>
<div class="gallery">
  <img class="image" src="image1.jpg" alt="Image 1">
  <img class="image" src="image2.jpg" alt="Image 2">
  <img class="image" src="image3.jpg" alt="Image 3">
  <img class="image" src="image4.jpg" alt="Image 4">
  <img class="image" src="image5.jpg" alt="Image 5">
</div>
</body>
</html>
```

## Grid with Responsive Header

This example combines a header and content layout using a grid.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main";
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
}
.header {
  grid-area: header;
  background-color: #333;
  color: white;
  padding: 10px;
}
.sidebar {
  grid-area: sidebar;
}
.main {
  grid-area: main;
}
</style>
</head>
<body>
<div class="grid-container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main Content</div>
</div>
</body>
</html>
```