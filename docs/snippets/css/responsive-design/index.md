---
layout: doc
title: Responsive Design - CSS Snippets
description: Learn how to create fluid grids, adapt typography, manage images, design navigation bars, and more.
head:
  - ['meta', {property: 'og:title', content:  'Responsive Design - CSS Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/css/responsive-design/' }] 
  - ['meta', {name: 'twitter:title', content: 'Responsive Design - CSS Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/css/responsive-design/'}]
---

# Responsive Design

From fluid grids and adaptable typography to mobile-friendly menus and flexible images, these examples empower you to craft web layouts that seamlessly adjust to diverse screen sizes. 

## Fluid Grid Layout

The `.grid-container` is set to `display: grid`, creating a grid container. The `grid-template-columns` property uses `repeat(auto-fit, minmax(200px, 1fr))` to create columns that automatically adjust based on available space. The `gap` property sets the spacing between grid items.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
.grid-item {
  background-color: #ddd;
  padding: 20px;
}
</style>
</head>
<body>
<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
</div>
</body>
</html>
```

## Mobile-First Flexbox Navbar

The `.navbar` class is styled with `display: flex` and `flex-direction: column`. Inside a media query, the flex direction changes to `row` at a breakpoint of `768px`, making the navigation items align horizontally.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.navbar {
  display: flex;
  flex-direction: column;
}
@media (min-width: 768px) {
  .navbar {
    flex-direction: row;
  }
}
</style>
</head>
<body>
<div class="navbar">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Contact</a>
</div>
</body>
</html>
```

## Responsive Images

This snippet ensures images are responsive by setting a maximum width of `100%`. This prevents images from exceeding their parent container's width while maintaining their aspect ratio.

```html
<!DOCTYPE html>
<html>
<head>
<style>
img {
  max-width: 100%;
  height: auto;
}
</style>
</head>
<body>
<img src="image.jpg" alt="Responsive Image">
</body>
</html>
```

## Media Queries for Typography

This example showcases media queries adjusting typography for different screen sizes. At smaller screen widths, the font size and line height change for improved readability.

```html
<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-size: 16px;
  line-height: 1.5;
}
@media (max-width: 768px) {
  body {
    font-size: 14px;
    line-height: 1.4;
  }
}
</style>
</head>
<body>
<p>This is some text.</p>
</body>
</html>
```

## Fluid Typography

Fluid typography adjusts font size based on viewport width, ensuring optimal readability on various devices. The `vw` unit sizes the text relative to the viewport width.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.fluid-text {
  font-size: calc(16px + 0.5vw);
}
</style>
</head>
<body>
<p class="fluid-text">Fluid Text</p>
</body>
</html>
```

## Flexible Video Embeds

This snippet maintains the aspect ratio of embedded videos using the `padding-top` trick. The `padding-top` percentage is calculated based on the aspect ratio, ensuring the video retains its proportions.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.video-container {
  position: relative;
  padding-top: 56.25%; /* 16:9 aspect ratio */
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
</head>
<body>
<div class="video-container">
  <iframe class="video" src="https://www.youtube.com/embed/your-video-id" frameborder="0" allowfullscreen></iframe>
</div>
</body>
</html>
```

## Collapsible Mobile Menu

This example implements a collapsible mobile menu using CSS transitions for smooth animation. The `max-height` property changes with the `menu-open` class, providing a smooth slide-down effect.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.mobile-menu {
  display: none;
}
.menu-open .mobile-menu {
  display: block;
  max-height: 200px; /* Adjust as needed */
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}
</style>
</head>
<body>
<div class="mobile-menu">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Contact</a>
</div>
<button onclick="document.body.classList.toggle('menu-open')">Toggle Menu</button>
</body>
</html>
```

## CSS Grid with Media Queries

This snippet combines CSS Grid with media queries to create a responsive grid layout that adapts to screen size changes. The media query adjusts the column sizes for smaller screens.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
.grid-item {
  background-color: #ddd;
  padding: 20px;
}
</style>
</head>
<body>
<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
</div>
</body>
</html>
```

## CSS Flexbox for Equal Height Columns

The `.flex-container` is set to `display: flex`, and the `flex` property ensures all columns have equal height regardless of content.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
}
.column {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
}
</style>
</head>
<body>
<div class="flex-container">
  <div class="column">Column 1</div>
  <div class="column">Column 2</div>
  <div class="column">Column 3</div>
</div>
</body>
</html>
```

## Fluid Images with Breakpoints

At smaller screen sizes, images become smaller while maintaining their aspect ratio, ensuring they fit well on various devices.

```html
<!DOCTYPE html>
<html>
<head>
<style>
img {
  max-width: 100%;
  height: auto;
}
@media (max-width: 768px) {
  img {
    max-width: 80%; /* Adjust as needed */
  }
}
</style>
</head>
<body>
<img src="image.jpg" alt="Responsive Image">
</body>
</html>
```

## Centered Text Block

This snippet centers a text block both horizontally and vertically using flexbox. The `.center-container` is set to `display: flex` with alignment properties.

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
  background-color: #f2f2f2;
}
</style>
</head>
<body>
<div class="center-container">
  <p>This text is centered.</p>
</div>
</body>
</html>
```

## Fluid Navigation Bar

This example creates a fluid navigation bar that expands to a dropdown menu on small screens. The `.navbar` is styled with a mobile-first approach and adapts its appearance using media queries.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: #fff;
}
.nav-links {
  display: none;
}
@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }
}
</style>
</head>
<body>
<div class="navbar">
  <h1>Logo</h1>
  <div class="nav-links">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
  </div>
</div>
</body>
</html>
```

## CSS Breakpoints with Custom Values

This snippet uses custom breakpoints to adjust layout. The layout changes at `600px` and `1200px` screen widths, modifying the number of columns and font size.

```html
<!DOCTYPE html>
<html>
<head>
<style>
@media (min-width: 600px) and (max-width: 1199px) {
  /* Adjust styles for medium screens */
}
@media (min-width: 1200px) {
  /* Adjust styles for large screens */
}
</style>
</head>
<body>
<p>Responsive content</p>
</body>
</html>
```

## Hide Elements on Small Screens

The `.hide-on-small` class ensures the element is hidden when the screen width is `600px` or less.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.hide-on-small {
  display: block;
}
@media (max-width: 600px) {
  .hide-on-small {
    display: none;
  }
}
</style>
</head>
<body>
<p class="hide-on-small">Hidden on small screens</p>
<p>Visible everywhere</p>
</body>
</html>
```

## Equal Padding and Margin on All Sides

This snippet maintains equal padding and margin on all sides of an element using a combination of `calc()` and relative units. It ensures consistent spacing across devices.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  padding: 1em;
  margin: 1em;
}
</style>
</head>
<body>
<div class="box">Content</div>
</body>
</html>
```

## Fluid Images with Caption

This example showcases fluid images with captions. The `.image-container` class ensures the image scales fluidly, and the `.caption` class styles the caption.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.image-container {
  max-width: 100%;
  height: auto;
}
.caption {
  text-align: center;
  font-style: italic;
  color: #888;
}
</style>
</head>
<body>
<div class="image-container">
  <img src="image.jpg" alt="Responsive Image">
</div>
<p class="caption">A beautiful landscape.</p>
</body>
</html>
```

## Mobile-Friendly Tables

It hides horizontal scrollbars and stacks table cells on small screens, ensuring readability.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.table-container {
  overflow-x: auto;
}
table {
  border-collapse: collapse;
  width: 100%;
}
th, td {
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
}
@media (max-width: 600px) {
  table {
    display: block;
  }
  th, td {
    display: block;
  }
}
</style>
</head>
<body>
<div class="table-container">
  <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
    <tr>
      <td>John Doe</td>
      <td>28</td>
      <td>New York</td>
    </tr>
    <!-- More rows... -->
  </table>
</div>
</body>
</html>
```

## Custom Font Size for Small Screens

The `.small-text` class ensures a smaller font size at screen widths below `600px`.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.small-text {
  font-size: 14px;
}
@media (max-width: 600px) {
  .small-text {
    font-size: 12px;
  }
}
</style>
</head>
<body>
<p>This is regular text.</p>
<p class="small-text

">This is smaller text.</p>
</body>
</html>
```

## Changing Layout with Flex Direction

At smaller screens, the `.flex-container` switches to a column layout for better mobile viewing.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  flex-direction: row;
}
@media (max-width: 600px) {
  .flex-container {
    flex-direction: column;
  }
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

## Progressive Enhancement for Background Images

This snippet uses media queries to add background images progressively. The background image is only applied for screens wider than `768px`, enhancing the experience for larger devices.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.section {
  background-color: #f2f2f2;
}
@media (min-width: 768px) {
  .section {
    background-image: url("bg-image.jpg");
    background-size: cover;
  }
}
</style>
</head>
<body>
<div class="section">
  <h2>Enhanced Background</h2>
  <p>Content goes here.</p>
</div>
</body>
</html>
```

Feel free to experiment with these snippets to better understand how responsive design works in CSS. Each example demonstrates different techniques to create adaptable and user-friendly layouts for various screen sizes.