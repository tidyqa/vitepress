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

This snippet shows how to center an element both horizontally and vertically within its parent container using CSS. It utilizes absolute positioning and the `transform` property.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
</head>
<body>

<div class="center">
  <p>This is centered.</p>
</div>

</body>
</html>
```

## Sticky Header

Learn how to create a sticky header that remains fixed at the top of the viewport as the user scrolls. This effect is achieved using the `position: sticky;` property in CSS.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .header {
    position: sticky;
    top: 0;
    background-color: #f1f1f1;
  }
</style>
</head>
<body>

<div class="header">
  <h1>Sticky Header</h1>
</div>

<p>Scroll down...</p>

</body>
</html>
```

## Equal Height Columns with Flexbox

Discover how to create equal height columns using the flexbox layout model. This snippet uses the `display: flex;` property on the container and assigns a `flex` value to each column, resulting in columns of equal height.

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
    padding: 10px;
  }
</style>
</head>
<body>

<div class="container">
  <div class="column" style="background-color:#aaa;">
    <h2>Column 1</h2>
    <p>Some content...</p>
  </div>
  <div class="column" style="background-color:#bbb;">
    <h2>Column 2</h2>
    <p>Some content...</p>
  </div>
  <div class="column" style="background-color:#ccc;">
    <h2>Column 3</h2>
    <p>Some content...</p>
  </div>
</div>

</body>
</html>
```

## Two-Column Layout

Learn how to create a simple two-column layout using the CSS grid layout. This snippet sets up a grid container with two equally sized columns.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
</head>
<body>

<div class="container">
  <div>
    <h2>Column 1</h2>
    <p>Some content...</p>
  </div>
  <div>
    <h2>Column 2</h2>
    <p>Some content...</p>
  </div>
</div>

</body>
</html>
```

## Floating Elements for Text Wrapping

This snippet demonstrates how to use the `float` property to make text wrap around floated images. It's commonly used for creating magazine-style layouts.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .float-left {
    float: left;
    margin-right: 20px;
  }
  .float-right {
    float: right;
    margin-left: 20px;
  }
</style>
</head>
<body>

<img src="image.jpg" alt="Floating Image" class="float-left">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod...</p>

<img src="image.jpg" alt="Floating Image" class="float-right">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod...</p>

</body>
</html>
```

## Horizontal Navigation Menu

Discover how to create a horizontal navigation menu using an unordered list and CSS. This snippet uses the `float` property to position the menu items side by side.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .nav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }
  .nav li {
    float: left;
  }
  .nav li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
</style>
</head>
<body>

<ul class="nav">
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Services</a></li>
  <li><a href="#">Contact</a></li>
</ul>

</body>
</html>
```

## Vertical Navigation Menu

Learn how to create a vertical navigation menu using an unordered list and CSS. This snippet styles the menu items to stack vertically.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .nav {
    list-style-type: none;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
  }
  .nav li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
  }
  .nav li a:hover {
    background-color: #ddd;
  }
</style>
</head>
<body>

<ul class="nav">
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Services</a></li>
  <li><a href="#">Contact</a></li>
</ul>

</body>
</html>
```

## Full-Height Sidebar

Explore how to create a full-height sidebar that remains fixed while the content scrolls. This snippet uses the `position: fixed;` property to achieve the effect.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .sidebar {
    height: 100vh;
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #111;
    color: #fff;
    padding-top: 20px;
  }
</style>
</head>
<body>

<div class="sidebar">
  <h1>Sidebar</h1>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>

<div class="content">
  <h2>Main Content</h2>
  <p>Lorem ipsum dolor sit amet...</p>
</div>

</body>
</html>
```

## Footer at the Bottom of the Page

Learn how to create a footer that sticks to the bottom of the page, even if the content is short. This snippet uses flexbox to ensure the footer stays at the bottom.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    margin: 0;
    padding: 0;
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
    color: #fff;
    text-align: center;
    padding: 10px 0;
  }
</style>
</head>
<body>

<div class="content">
  <h1>Main Content</h1>
  <p>Lorem ipsum dolor sit amet...</p>
</div>

<div class="footer">
  <p>&copy; 2023 My Website. All rights reserved.</p>
</div>

</body>
</html>
```

## Split Screen Layout

Discover how to create a split screen layout with two panes using CSS. This snippet sets up a flex container and evenly divides it into left and right panes.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .split-container {
    display: flex;
    height: 100vh;
  }
  .left-pane, .right-pane {
    flex: 1;
    padding: 20px;
    box-sizing: border-box;
  }
  .left-pane {
    background-color: #f1f1f1;
  }
  .right-pane {
    background-color: #ddd;
  }
</style>
</head>
<body>

<div class="split-container">
  <div class="left-pane">
    <h2>Left Pane</h2>
    <p>Lorem ipsum dolor sit amet...</p>
  </div>
  <div class="right-pane">
    <h2>Right Pane</h2>
    <p>Lorem ipsum dolor sit amet...</p>
  </div>
</div>

</body>
</html>
```

## Full-Page Background Image

Learn how to set a full-page background image for your website using CSS. This snippet covers the background properties to ensure the image covers the entire viewport.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    background-image: url("background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
</style>
</head>
<body>

<div class="content">
  <h1>Main Content</h1>
  <p>Lorem ipsum dolor sit amet...</p>
</div>

</body>
</html>
```

## Fixed Footer

Discover how to create a footer that stays fixed at the bottom of the viewport, regardless of the content length. This snippet uses absolute positioning to achieve the fixed footer effect.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
  }
</style>
</head>
<body>

<div class="content">
  <h1>Main Content</h1>
  <p>Lorem ipsum dolor sit amet...</p>
</div>

<div class="footer">
  <p>&copy; 2023 My Website. All rights reserved.</p>
</div>

</body>
</html>
```

## Carousel with CSS Scroll Snap

Learn how to create a simple image carousel using CSS Scroll Snap. This snippet demonstrates how to make images scroll smoothly within a container.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .carousel {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
  .slide {
    flex: 0 0 100%;
    scroll-snap-align: start;
  }
</style>
</head>
<body>

<div class="carousel">
  <div class="slide"><img src="image1.jpg" alt="Slide 1"></div>
  <div class="slide"><img src="image2.jpg" alt="Slide 2"></div>
  <div class="slide"><img src="image3.jpg" alt="Slide 3"></div>
</div>

</body>
</html>
```

## Responsive Image Grid

Discover how to create a responsive image grid using CSS Grid. This snippet sets up a grid layout that adapts to different screen sizes.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 10px;
  }
  .image {
    width: 100%;
    height: auto;
  }
</style>
</head>
<body>

<div class="image-grid">
  <img class="image" src="image1.jpg" alt="Image 1">
  <img class="image" src="image2.jpg" alt="Image 2">
  <img class="image" src="image3.jpg" alt="Image 3">
</div>

</body>
</html>
```

## Circular Image

Learn how to create a circular image using CSS. This snippet uses the `border-radius` property to achieve the circular shape.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .circular-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
  }
  .circular-image img {
    width: 100%;
    height: auto;
  }
</style>
</head>
<body>

<div class="circular-image">
  <img src="profile.jpg" alt="Profile Image">
</div>

</body>
</html>
```

## Multi-Level Dropdown Menu

Discover how to create a multi-level dropdown menu using HTML and CSS. This snippet sets up nested lists to create a dropdown with submenus.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .nav {
    list-style-type: none;
    padding: 0;
    background-color: #333;
  }
  .nav li {
    position: relative;
    display: inline-block;
  }
  .nav li a {
    display: block;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
  }
  .nav .submenu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #444;
    min-width: 200px;
  }
  .nav li:hover .submenu {
    display: block;
  }
</style>
</head>
<body>

<ul class="nav">
  <li><a href="#">Home</a></li>
  <li>
    <a href="#">Services</a>
    <ul class="submenu">
      <li><a href="#">Service 1</a></li>
      <li><a href="#">Service 2</a></li>
      <li><a href="#">Service 3</a></li>
    </ul>
  </li>
  <li><a href="#">About</a></li>
  <li><a href="#">Contact</a></li>
</ul>

</body>
</html>
```

## Responsive Video Embed

Learn how to create a responsive video embed using CSS. This snippet maintains the video's aspect ratio and adjusts its size based on the screen width.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    overflow: hidden;
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
  <iframe class="video" src="https://www.youtube.com/embed/VIDEO_ID"></iframe>
</div>

</body>
</html>
```

## Custom Checkbox and Radio Button

Discover how to create custom-styled checkbox and radio button inputs using CSS. This snippet hides the default inputs and styles their labels.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .custom-checkbox, .custom-radio {
    display: none;
  }
  .custom-label {
    position: relative;
    padding-left: 30px;
    cursor: pointer;
  }
  .custom-label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
  }
  .custom-checkbox:checked + .custom-label:before {
    background-color: #00b894;
    border-color: #00b894;
  }
  .custom-radio:checked + .custom-label:before {
    border-radius: 50%;
    background-color: #00b894;
    border-color

: #00b894;
  }
</style>
</head>
<body>

<input type="checkbox" id="checkbox" class="custom-checkbox">
<label for="checkbox" class="custom-label">Custom Checkbox</label>

<input type="radio" id="radio1" name="radio" class="custom-radio">
<label for="radio1" class="custom-label">Custom Radio 1</label>

<input type="radio" id="radio2" name="radio" class="custom-radio">
<label for="radio2" class="custom-label">Custom Radio 2</label>

</body>
</html>
```

## Progress Bar

Learn how to create a progress bar using CSS. This snippet uses the `::before` pseudo-element to visually represent progress.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .progress-bar {
    width: 100%;
    height: 20px;
    background-color: #ddd;
    position: relative;
  }
  .progress-bar::before {
    content: "";
    display: block;
    height: 100%;
    width: 70%; /* Set the progress value */
    background-color: #00b894;
  }
</style>
</head>
<body>

<div class="progress-bar"></div>

</body>
</html>
```

I apologize for the oversight. Here is the missing snippet along with its description, provided in Markdown format:

---

## Sliding Sidebar Menu

Learn how to create a sliding sidebar menu that appears from the side of the screen when a button is clicked. This snippet uses CSS transitions and transforms for the sliding effect.

```html
<!DOCTYPE html>
<html>
<head>
<style>
  .sidebar {
    height: 100%;
    width: 0;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }
  .sidebar a {
    padding: 8px 8px 8px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }
  .sidebar a:hover {
    color: #f1f1f1;
  }
  .openbtn {
    font-size: 20px;
    cursor: pointer;
    background-color: #111;
    color: white;
    padding: 10px 15px;
    border: none;
  }
  .openbtn:hover {
    background-color: #444;
  }
</style>
</head>
<body>

<div id="mySidebar" class="sidebar">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Contact</a>
</div>

<button class="openbtn" onclick="openNav()">&#9776; Open Sidebar</button>

<script>
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}
</script>

</body>
</html>
```