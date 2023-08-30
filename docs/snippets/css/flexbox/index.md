---
layout: doc
title: Flexbox - CSS Snippets
description: Discover the art of creating flexible layouts, aligning content, and building responsive navigation bars. Explore practical examples to master the power of Flexbox in modern web design.
head:
  - ['meta', {property: 'og:title', content:  'Flexbox - CSS Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/css/flexbox/' }] 
  - ['meta', {name: 'twitter:title', content: 'Flexbox - CSS Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/css/flexbox/'}]
---

# Flexbox

These CSS snippets provide practical examples of how to use Flexbox to create various layouts and alignment techniques. They can serve as a valuable resource for learning and applying Flexbox concepts in your web design projects.

## Basic Flexbox Container

This snippet creates a basic flex container using the `.flex-container` class. The `display: flex` property establishes a flex context, and child elements become flex items by default, arranging horizontally.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
}
</style>
</head>
<body>
<div class="flex-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
</body>
</html>
```

## Flex Direction

This snippet adjusts the direction of flex items within a container using the `flex-direction` property. Change the value to `column` to stack items vertically.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  flex-direction: column;
}
</style>
</head>
<body>
<div class="flex-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
</body>
</html>
```

## Flex Justify Content

This example aligns flex items horizontally using the `justify-content` property. Experiment with values like `flex-start`, `center`, `flex-end`, and `space-between`.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  justify-content: space-between;
}
</style>
</head>
<body>
<div class="flex-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
</body>
</html>
```

## Flex Align Items

This snippet aligns flex items vertically within a container using the `align-items` property. Try values like `flex-start`, `center`, `flex-end`, and `stretch`.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  align-items: center;
}
</style>
</head>
<body>
<div class="flex-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
</body>
</html>
```

## Flex Align Self

This example overrides the alignment of a specific flex item within the container using the `align-self` property.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
}
.align-center {
  align-self: center;
}
</style>
</head>
<body>
<div class="flex-container">
  <div>Item 1</div>
  <div class="align-center">Item 2</div>
  <div>Item 3</div>
</div>
</body>
</html>
```

## Flex Wrap

This snippet enables flex items to wrap to the next line if they exceed the container's width using the `flex-wrap` property.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
</head>
<body>
<div class="flex-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
</body>
</html>
```

## Flex Grow

This example showcases the `flex-grow` property, allowing specific flex items to expand and occupy available space.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
}
.expanded-item {
  flex-grow: 1;
}
</style>
</head>
<body>
<div class="flex-container">
  <div>Item 1</div>
  <div class="expanded-item">Item 2</div>
  <div>Item 3</div>
</div>
</body>
</html>
```

## Flex Shrink

This snippet demonstrates the `flex-shrink` property, controlling how flex items shrink when the container's width is insufficient.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
}
.shrink-item {
  flex-shrink: 0;
}
</style>
</head>
<body>
<div class="flex-container">
  <div>Item 1</div>
  <div class="shrink-item">Item 2</div>
  <div>Item 3</div>
</div>
</body>
</html>
```

## Flex Basis

This example sets the initial size of flex items using the `flex-basis` property.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
}
.item {
  flex-basis: 200px;
}
</style>
</head>
<body>
<div class="flex-container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
</body>
</html>
```

## Flex Order

This snippet changes the order of flex items within the container using the `order` property.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
}
.reversed-order {
  order: -1;
}
</style>
</head>
<body>
<div class="flex-container">
  <div>Item 1</div>
  <div class="reversed-order">Item 2</div>
  <div>Item 3</div>
</div>
</body>
</html>
```

## Nested Flex Containers

This example shows how to nest flex containers to achieve complex layouts.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.outer-container {
  display: flex;
}
.inner-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
</head>
<body>
<div class="outer-container">
  <div>Item 1</div>
  <div class="inner-container">
    <div>Item 2</div>
    <div>Item 3</div>
  </div>
</div>
</body>
</html>
```

## Aligning Along the Main Axis

This snippet aligns flex items along the main axis using `justify-content` property values.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
}
.justify-center {
  justify-content: center;
}
</style>
</head>
<body>
<div class="flex-container justify-center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
</body>
</html>
```

## Aligning Along the Cross Axis

This snippet aligns flex items along the cross axis using `align-items` property values.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  height: 200px;
}
.align-center {
  align-items: center;
}
</style>
</head>
<body>
<div class="flex-container align-center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
</body>
</html>
```

## Aligning Individual Items

This example aligns individual flex items differently along the cross axis using `align-self`.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  height: 200px;
}
.align-top {
  align-self: flex-start;
}
</style>
</head>
<body>
<div class="flex-container">
  <div>Item 1</div>
  <div class="align-top">Item 2</div>
  <div>Item 3</div>
</div>
</body>
</html>
```

## Reversing Flex Items

This snippet reverses the order of flex items using the `flex-direction` property.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  flex-direction: row-reverse;
}
</style>
</head>
<body>
<div class="flex-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
</body>
</html>
```

## Centering with Flexbox

This example demonstrates how to center both horizontally and vertically using flexbox.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}
</style>
</head>
<body>
<div class="center-container">
  <p>Centered content.</p>
</div>
</body>
</html>
```

## Flexbox Card Layout

This snippet creates a card layout using flexbox. Each card has equal height, and content is vertically centered.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.card-container {
  display: flex;
}
.card {
  flex: 1;
  padding: 20px;
  border: 1px solid #ddd;
  text-align: center;
}
</style>
</head>
<body>
<div class="card-container">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
</body>
</html>
```

## Sticky Footer with Flexbox

This example demonstrates a sticky footer layout using flexbox. The `.content` flex item grows to fill available space, pushing the footer to the bottom.

```html
<!DOCTYPE html>
<html>
<head>
<style>
body, html {
  height: 100%;
  margin: 0;
}
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex: 1;
  padding: 20px;
}
.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
}
</style>
</head>
<body>
<div class="container">
  <div class="content">
    <p>Your content here.</p>
  </div>
  <div class="footer">Sticky Footer</div>
</div>
</body>
</html>
```

## Flexbox Navigation Bar

This snippet creates a responsive navigation bar using flexbox. The menu items distribute space evenly using `flex: 1`.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.navbar {
  display: flex;
  background-color: #333;
  color: white;
}
.nav-item {
  flex: 1;
  padding: 10px;
  text-align: center;
}
</style>
</head>
<body>
<div class="navbar">
  <div class="nav-item">Home</div>
  <div class="nav-item">About</div>
  <div class="nav-item">Services</div>
  <div class="nav-item">Contact</div>
</div>
</body>
</html>
```

## Equal Height Columns with Flexbox

This snippet uses flexbox to create equal height columns, adjusting automatically to the tallest column.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: flex;
}
.column {
  flex: 1;
  padding: 20px;
  border: 1px solid #ddd;
}
</style>
</head>
<body>
<div class="container">
  <div class="column">Column 1</div>
  <div class="column">Column 2</div>
  <div class="column">Column 3</div>
</div>
</body>
</html>
```