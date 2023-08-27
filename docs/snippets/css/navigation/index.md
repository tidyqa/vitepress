---
layout: doc
title: Navigation - CSS Snippets
description: Enhance user navigation and user experience with our collection of CSS navigation snippets. Discover creative ways to guide users through your website seamlessly.
head:
  - ['meta', {property: 'og:title', content:  'Navigation - CSS Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/css/navigation/' }] 
  - ['meta', {name: 'twitter:title', content: 'Navigation - CSS Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/css/navigation/'}]
---

# Navigation

Whether you're looking to create sticky navigation bars, responsive menus, or innovative tabbed interfaces, these code examples will help you craft user-friendly navigation solutions that elevate your web design. Explore various styles and techniques to ensure your visitors can effortlessly explore your content.

## Horizontal Navigation Bar

Create a classic horizontal navigation bar with evenly spaced links.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .navbar {
      display: flex;
      list-style: none;
      padding: 0;
    }

    .navbar li {
      margin-right: 20px;
    }
  </style>
</head>
<body>
  <h2>Horizontal Navigation Bar</h2>

  <nav>
    <ul class="navbar">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</body>
</html>
```

## Vertical Navigation Menu

Build a vertical navigation menu with clean styling.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .vertical-menu {
      list-style: none;
      padding: 0;
    }

    .vertical-menu li {
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <h2>Vertical Navigation Menu</h2>

  <nav>
    <ul class="vertical-menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</body>
</html>
```

## Centered Navigation Links

Create a navigation bar with centered links using flexbox.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .centered-navbar {
      display: flex;
      justify-content: center;
      list-style: none;
      padding: 0;
    }

    .centered-navbar li {
      margin: 0 20px;
    }
  </style>
</head>
<body>
  <h2>Centered Navigation Links</h2>

  <nav>
    <ul class="centered-navbar">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</body>
</html>
```

## Dropdown Navigation

Create a dropdown navigation menu using nested lists.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .dropdown-menu {
      list-style: none;
      padding: 0;
    }

    .dropdown-menu li {
      position: relative;
      margin-right: 20px;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
    }

    .dropdown-menu li:hover .dropdown-content {
      display: block;
    }
  </style>
</head>
<body>
  <h2>Dropdown Navigation</h2>

  <nav>
    <ul class="dropdown-menu">
      <li>
        <a href="#">Home</a>
        <ul class="dropdown-content">
          <li><a href="#">Submenu 1</a></li>
          <li><a href="#">Submenu 2</a></li>
        </ul>
      </li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</body>
</html>
```

## Sticky Navigation Bar

Create a navigation bar that sticks to the top of the page as the user scrolls.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .sticky-navbar {
      position: sticky;
      top: 0;
      background-color: #333;
      list-style: none;
      padding: 0;
    }

    .sticky-navbar li {
      margin-right: 20px;
    }
  </style>
</head>
<body>
  <h2>Sticky Navigation Bar</h2>

  <nav>
    <ul class="sticky-navbar">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</body>
</html>
```

## Navigation with Active Link Highlight

Highlight the active link in your navigation menu.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .active-navbar {
      list-style: none;
      padding: 0;
    }

    .active-navbar li {
      margin-right: 20px;
    }

    .active-navbar li a {
      color: #333;
      text-decoration: none;
    }

    .active-navbar li.active a {
      color: #3498db;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h2>Navigation with Active Link Highlight</h2>

  <nav>
    <ul class="active-navbar">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</body>
</html>
```

## Navigation with Icon

Enhance your navigation links with icons.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <style>
    .icon-navbar {
      list-style: none;
      padding: 0;
    }

    .icon-navbar li {
      margin-right: 20px;
    }

    .icon-navbar li a {
      color: #333;
      text-decoration: none;
    }

    .icon-navbar li a i {
      margin-right: 5px;
    }
  </style>
</head>
<body>
  <h2>Navigation with Icon</h2>

  <nav>
    <ul class="icon-navbar">
      <li><a href="#"><i class="fas fa-home"></i>Home</a></li>
      <li><a href="#"><i class="fas fa-info-circle"></i>About</a></li>
      <li><a href="#"><i class="fas fa-cogs"></i>Services</a></li>
      <li><a href="#"><i class="fas fa-envelope"></i>Contact</a></li>
    </ul>
  </nav>
</body>
</html>
```

## Responsive Navigation Menu

Create a responsive navigation menu using media queries.

```html
<!DOCTYPE html>
<html>
<head>


  <style>
    .responsive-navbar {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
    }

    .responsive-navbar li {
      margin-bottom: 10px;
    }

    @media screen and (min-width: 768px) {
      .responsive-navbar {
        flex-direction: row;
      }

      .responsive-navbar li {
        margin-right: 20px;
        margin-bottom: 0;
      }
    }
  </style>
</head>
<body>
  <h2>Responsive Navigation Menu</h2>

  <nav>
    <ul class="responsive-navbar">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</body>
</html>
```

## Transparent Navigation Bar on Scroll

Create a navigation bar that becomes transparent as the user scrolls down.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .transparent-navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.9);
      transition: background-color 0.3s ease-in-out;
      list-style: none;
      padding: 0;
    }

    .transparent-navbar li {
      margin-right: 20px;
    }

    .transparent-bg {
      background-color: transparent !important;
    }

    .content {
      height: 1500px;
    }
  </style>
</head>
<body>
  <h2>Transparent Navigation Bar on Scroll</h2>

  <nav class="transparent-navbar">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <div class="content">
    <!-- Content goes here -->
  </div>

  <script>
    window.addEventListener("scroll", function () {
      const navbar = document.querySelector(".transparent-navbar");
      if (window.scrollY > 100) {
        navbar.classList.add("transparent-bg");
      } else {
        navbar.classList.remove("transparent-bg");
      }
    });
  </script>
</body>
</html>
```

## Mega Menu

Create a mega menu with multiple columns.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .mega-menu {
      list-style: none;
      padding: 0;
    }

    .mega-menu li {
      position: relative;
      display: inline-block;
      margin-right: 20px;
    }

    .mega-menu-content {
      position: absolute;
      top: 100%;
      left: 0;
      display: none;
      background-color: #f5f5f5;
      padding: 20px;
      width: 300px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }

    .mega-menu li:hover .mega-menu-content {
      display: block;
    }

    .mega-menu-column {
      width: 33.33%;
      float: left;
      padding: 0 10px;
    }

    .mega-menu-title {
      font-weight: bold;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <h2>Mega Menu</h2>

  <nav>
    <ul class="mega-menu">
      <li>
        <a href="#">Home</a>
        <div class="mega-menu-content">
          <div class="mega-menu-column">
            <div class="mega-menu-title">Featured</div>
            <ul>
              <li><a href="#">Product 1</a></li>
              <li><a href="#">Product 2</a></li>
              <li><a href="#">Product 3</a></li>
            </ul>
          </div>
          <div class="mega-menu-column">
            <div class="mega-menu-title">Categories</div>
            <ul>
              <li><a href="#">Category 1</a></li>
              <li><a href="#">Category 2</a></li>
              <li><a href="#">Category 3</a></li>
            </ul>
          </div>
          <div class="mega-menu-column">
            <div class="mega-menu-title">Brands</div>
            <ul>
              <li><a href="#">Brand 1</a></li>
              <li><a href="#">Brand 2</a></li>
              <li><a href="#">Brand 3</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</body>
</html>
```

## Navigation Bar with Search Box

Create a navigation bar with an integrated search box.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .search-navbar {
      display: flex;
      align-items: center;
      list-style: none;
      padding: 0;
    }

    .search-navbar li {
      margin-right: 20px;
    }

    .search-box {
      border: 1px solid #ccc;
      padding: 5px;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <h2>Navigation Bar with Search Box</h2>

  <nav>
    <ul class="search-navbar">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li>
        <input type="text" class="search-box" placeholder="Search">
      </li>
    </ul>
  </nav>
</body>
</html>
```

## Sticky Sidebar Navigation

Create a sticky sidebar navigation menu for long content pages.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .sidebar {
      position: sticky;
      top: 20px;
      height: 100vh;
      width: 200px;
      background-color: #f5f5f5;
      padding: 20px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }

    .sidebar ul {
      list-style: none;
      padding: 0;
    }

    .sidebar li {
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <h2>Sticky Sidebar Navigation</h2>

  <div class="sidebar">
    <ul>
      <li><a href="#">Section 1</a></li>
      <li><a href="#">Section 2</a></li>
      <li><a href="#">Section 3</a></li>
      <li><a href="#">Section 4</a></li>
    </ul>
  </div>

  <div class="content">
    <!-- Long content goes here -->
  </div>
</body>
</html>
```

## Vertical Accordion Menu

Create a collapsible accordion-style vertical menu.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .accordion-menu {
      list-style: none;
      padding: 0;
    }

    .accordion-menu li {
      margin-bottom: 1px;
    }

    .accordion-button {
      display: block;
      width: 100%;
      text-align: left;
      padding: 10px;
      background-color: #f5f5f5;
      border: none;
      cursor: pointer;
    }

    .accordion-content {
      display: none;
      padding: 10px;
      background-color: #fff;
    }

    .active .accordion-content {
      display: block;
    }
  </style>
</head>
<body>
  <h2>Vertical Accordion Menu</h2>

  <nav>
    <ul class="accordion-menu">
      <li>
        <button class="accordion-button">Section 1</button>
        <div class="accordion-content">
          <a href="#">Subsection 1.1</a>
          <a href="#">Subsection 1.2</a>
        </div>
      </li>
      <li>
        <button class="accordion-button">Section 2</button>
        <div class="accordion-content">
          <a href="#">Subsection 2.1</a>
          <a href="#">Subsection 2.2</a>
        </div>
      </li>
      <li>
        <button class="accordion-button">Section 3</button>
        <div class="accordion-content">
          <a href="#">Subsection 3.1</a>
          <a href="#">Subsection 3.2</a>
        </div>
      </li>
    </ul>
  </nav>
</body>
</html>
```

## Tabbed Navigation

Create a tabbed navigation interface with content panels.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .tab-navigation {
      list-style: none;
      padding: 0;
      display: flex;
    }

    .tab-navigation li {
      margin-right: 20px;
    }

    .tab-content {
      display: none;
    }

    .active-tab .tab-content {
      display: block;
    }
  </style>
</head>
<body

>
  <h2>Tabbed Navigation</h2>

  <nav>
    <ul class="tab-navigation">
      <li class="active-tab"><a href="#">Tab 1</a></li>
      <li><a href="#">Tab 2</a></li>
      <li><a href="#">Tab 3</a></li>
    </ul>
  </nav>

  <div class="content">
    <div class="tab-content active-tab">
      <!-- Tab 1 content goes here -->
    </div>
    <div class="tab-content">
      <!-- Tab 2 content goes here -->
    </div>
    <div class="tab-content">
      <!-- Tab 3 content goes here -->
    </div>
  </div>
</body>
</html>
```

## Circular Navigation Menu

Create a circular navigation menu with icons.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <style>
    .circular-menu {
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: center;
    }

    .circular-menu li {
      position: absolute;
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
    }

    .circular-menu li a {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #3498db;
      color: white;
      text-decoration: none;
    }

    .circular-menu li:nth-child(1) { transform: rotate(0deg); }
    .circular-menu li:nth-child(2) { transform: rotate(60deg); }
    .circular-menu li:nth-child(3) { transform: rotate(120deg); }
    .circular-menu li:nth-child(4) { transform: rotate(180deg); }
    .circular-menu li:nth-child(5) { transform: rotate(240deg); }
    .circular-menu li:nth-child(6) { transform: rotate(300deg); }
  </style>
</head>
<body>
  <h2>Circular Navigation Menu</h2>

  <nav>
    <ul class="circular-menu">
      <li><a href="#"><i class="fas fa-home"></i></a></li>
      <li><a href="#"><i class="fas fa-info-circle"></i></a></li>
      <li><a href="#"><i class="fas fa-cogs"></i></a></li>
      <li><a href="#"><i class="fas fa-envelope"></i></a></li>
      <li><a href="#"><i class="fas fa-user"></i></a></li>
      <li><a href="#"><i class="fas fa-search"></i></a></li>
    </ul>
  </nav>
</body>
</html>
```

## Pagination Navigation

Create a pagination navigation for content with multiple pages.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .pagination {
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: center;
    }

    .pagination li {
      margin-right: 10px;
    }

    .pagination li a {
      padding: 5px 10px;
      border: 1px solid #333;
      text-decoration: none;
      color: #333;
    }

    .pagination li.active a {
      background-color: #333;
      color: white;
    }
  </style>
</head>
<body>
  <h2>Pagination Navigation</h2>

  <nav>
    <ul class="pagination">
      <li><a href="#">1</a></li>
      <li class="active"><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
    </ul>
  </nav>
</body>
</html>
```

## Horizontal Scrollable Navigation

Create a horizontally scrollable navigation bar for a large number of links.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .scrollable-navbar {
      list-style: none;
      padding: 0;
      display: flex;
      overflow-x: auto;
    }

    .scrollable-navbar li {
      margin-right: 20px;
    }
  </style>
</head>
<body>
  <h2>Horizontal Scrollable Navigation</h2>

  <nav>
    <ul class="scrollable-navbar">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href

="#">Blog</a></li>
      <li><a href="#">FAQ</a></li>
      <li><a href="#">Support</a></li>
      <li><a href="#">Testimonials</a></li>
    </ul>
  </nav>
</body>
</html>
```

## Navigation with Notification Badge

Create a navigation bar with notification badges.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .badge-navbar {
      list-style: none;
      padding: 0;
      display: flex;
      align-items: center;
    }

    .badge-navbar li {
      margin-right: 20px;
      position: relative;
    }

    .badge {
      position: absolute;
      top: -5px;
      right: -5px;
      background-color: red;
      color: white;
      font-size: 12px;
      padding: 3px 6px;
      border-radius: 50%;
    }
  </style>
</head>
<body>
  <h2>Navigation with Notification Badge</h2>

  <nav>
    <ul class="badge-navbar">
      <li><a href="#">Home</a></li>
      <li>
        <a href="#">Notifications</a>
        <span class="badge">3</span>
      </li>
      <li><a href="#">Messages</a></li>
      <li><a href="#">Profile</a></li>
    </ul>
  </nav>
</body>
</html>
```

## Multi-level Dropdown Navigation

Create a multi-level dropdown navigation menu.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .multi-level-menu {
      list-style: none;
      padding: 0;
    }

    .multi-level-menu li {
      position: relative;
      margin-right: 20px;
    }

    .multi-level-menu a {
      text-decoration: none;
      color: #333;
    }

    .sub-menu {
      position: absolute;
      top: 100%;
      left: 0;
      display: none;
      background-color: #f5f5f5;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      width: 200px;
      padding: 10px;
    }

    .multi-level-menu li:hover .sub-menu {
      display: block;
    }
  </style>
</head>
<body>
  <h2>Multi-level Dropdown Navigation</h2>

  <nav>
    <ul class="multi-level-menu">
      <li>
        <a href="#">Home</a>
        <ul class="sub-menu">
          <li><a href="#">Submenu 1</a></li>
          <li><a href="#">Submenu 2</a></li>
        </ul>
      </li>
      <li>
        <a href="#">Products</a>
        <ul class="sub-menu">
          <li><a href="#">Category 1</a></li>
          <li><a href="#">Category 2</a></li>
        </ul>
      </li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</body>
</html>
```

## Full-Screen Overlay Navigation

Create a full-screen overlay navigation menu with a hamburger icon.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <style>
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      display: none;
      align-items: center;
      justify-content: center;
    }

    .overlay-menu {
      list-style: none;
      padding: 0;
    }

    .overlay-menu li {
      margin-bottom: 20px;
    }

    .overlay-menu a {
      text-decoration: none;
      color: white;
      font-size: 20px;
    }

    .hamburger {
      font-size: 24px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h2>Full-Screen Overlay Navigation</h2>

  <div class="overlay">
    <ul class="overlay-menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>

  <div class="content">
    <i class="fas fa-bars hamburger" onclick="toggleOverlay()"></i>
  </div>

  <script>
    function toggleOverlay() {
      const overlay = document.querySelector(".overlay");
      overlay.style.display = overlay.style.display === "flex" ? "none" : "flex";
    }
  </script>
</body>
</html>
```