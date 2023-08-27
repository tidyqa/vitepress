---
layout: doc
title: Buttons and Links - CSS Snippets
description: From gradient backgrounds to animated effects, find inspiration for stylish and functional buttons and links.
head:
  - ['meta', {property: 'og:title', content:  'Buttons and Links - CSS Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/css/buttons-and-links/' }] 
  - ['meta', {name: 'twitter:title', content: 'Buttons and Links - CSS Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/css/buttons-and-links/'}]
---

# Buttons and Links

Elevate your website's visual appeal and user engagement by incorporating gradient backgrounds, subtle animations, and captivating hover effects. From timeless classics to modern trends, explore a range of creative options to enhance your user interface.

## Basic Button and Link Styling

This snippet provides a foundation for styling links and buttons. Links are presented with a blue color and underlined text, while buttons feature a vibrant blue background with white text for clear visibility.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .basic-link {
      color: blue;
      text-decoration: underline;
    }

    .basic-button {
      padding: 8px 16px;
      background-color: #3498db;
      color: white;
      border: none;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h2>Basic Button and Link Styling</h2>
  
  <a href="#" class="basic-link">Basic Link</a>
  <button class="basic-button">Basic Button</button>
</body>
</html>
```

## Rounded Corners and Hover Effect

Elevate your design with this snippet that adds subtle rounded corners and hover effects to links and buttons. Links gain a touch of sophistication with green color, rounded edges, and a light border, while buttons reveal a green border on hover.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .rounded-link {
      color: green;
      text-decoration: none;
      border-radius: 5px;
      padding: 5px 10px;
      border: 1px solid green;
    }

    .rounded-button {
      padding: 8px 16px;
      background-color: white;
      border: 1px solid green;
      border-radius: 5px;
      color: green;
      cursor: pointer;
    }

    .rounded-button:hover,
    .rounded-link:hover {
      background-color: green;
      color: white;
    }
  </style>
</head>
<body>
  <h2>Rounded Corners and Hover Effect</h2>
  
  <a href="#" class="rounded-link">Rounded Link</a>
  <button class="rounded-button">Rounded Button</button>
</body>
</html>
```

## Gradient Background Button

Enhance visual appeal with a button that boasts a gradient background. As the cursor hovers over the button, the gradient transition is animated, adding a touch of dynamism.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .gradient-button {
      padding: 10px 20px;
      background: linear-gradient(to right, #ff8a00, #da1b60);
      color: white;
      border: none;
      cursor: pointer;
    }

    .gradient-button:hover {
      background: linear-gradient(to right, #da1b60, #ff8a00);
    }
  </style>
</head>
<body>
  <h2>Gradient Background Button</h2>
  
  <button class="gradient-button">Gradient Button</button>
</body>
</html>
```

## Underline Slide-In Link

Elevate user interaction with this snippet, which brings an animated underline that gracefully slides in from the left upon hover. A subtle yet engaging effect for your links.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .slide-underline {
      color: #333;
      text-decoration: none;
      position: relative;
    }

    .slide-underline::before {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      background-color: #333;
      bottom: -2px;
      left: 0;
      transition: width 0.3s ease-in-out;
    }

    .slide-underline:hover::before {
      width: 100%;
    }
  </style>
</head>
<body>
  <h2>Underline Slide-In Link</h2>
  
  <a href="#" class="slide-underline">Slide-In Underline</a>
</body>
</html>
```

## Borderless Button with Icon

Effortlessly combine icons and buttons with this snippet, offering a clean interface. The button features an icon on the left, showcasing a seamless design with no visible borders.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <style>
    .icon-button {
      padding: 10px 20px;
      background-color: #f5f5f5;
      color: #333;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    .icon-button i {
      margin-right: 8px;
    }
  </style>
</head>
<body>
  <h2>Borderless Button with Icon</h2>
  
  <button class="icon-button"><i class="fa fa-search"></i>Search</button>
</body>
</html>
```

## Bordered Link with Icon

Elevate your navigation elements with this snippet, which combines a bordered link with an icon for enhanced visual appeal.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <style>
    .nav-link {
      color: #333;
      text-decoration: none;
      border: 1px solid #333;
      padding: 5px 10px;
      border-radius: 5px;
      display: inline-flex;
      align-items: center;
    }

    .nav-link i {
      margin-right: 5px;
    }
  </style>
</head>
<body>
  <h2>Bordered Link with Icon</h2>
  
  <a href="#" class="nav-link"><i class="fa fa-home"></i>Home</a>
</body>
</html>
```

## Pill-shaped Button

Embrace a modern style with this snippet, offering a button with distinctive pill-shaped styling that stands out while remaining user-friendly.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .pill-button {
      padding: 10px 20px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 25px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h2>Pill-shaped Button</h2>
  
  <button class="pill-button">Pill Button</button>
</body>
</html>
```

## Animated Underline Link

Bring an engaging interaction to your links with this snippet. Upon hover, an animated underline grows from the center, adding a subtle but captivating effect.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .animated-underline {
      color: #555;
      text-decoration: none;
      position: relative;
    }

    .animated-underline::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      background-color: #3498db;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      transition: width 0.3s ease-in-out;
    }

    .animated-underline:hover::after {
      width: 100%;
    }
  </style>
</head>
<body>
  <h2>Animated Underline Link</h2>
  
  <a href="#" class="animated-underline">Animated Underline</a>
</body>
</html>
```

## Button with Shadow and Hover Effect

Introduce a touch of depth to your buttons with this snippet, combining a subtle shadow with background color changes on hover for a pleasing user experience.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .shadow-button {
      padding: 10px 20px;
      background-color: #3498db;
      color: white;
      border: none;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }

    .shadow-button:hover {
      background-color: #2980b9;
    }
  </style>
</head>
<body>
  <h2>Button with Shadow and Hover Effect</h2>
  
  <button class="shadow-button">Shadow Button</button>
</body>
</html>
```

## Link with Background Transition

Create an elegant transition effect for your links. When hovered, the background color smoothly changes, offering a subtle yet effective way to enhance user interaction.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .background-transition {
      color: #333;
      text-decoration: none;
      padding: 5px 10px;
      background-color: #f5f5f5;
      transition: background-color 0.3s ease-in-out;
    }

    .background-transition:hover {
      background-color: #3498db;
      color: white;
    }
  </style>
</head>
<body>
  <h2>Link with Background Transition</h2>
  
  <a href="#" class="background-transition">Background Transition</a>
</body>
</html>
```

## Borderless Button with Outline on Hover

Craft an interactive button with this snippet, offering a subtle outline that appears upon hover, adding an extra layer of visual feedback for users.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .outline-button {
      padding: 10px 20px;
      background-color: #f5f5f5;
      color: #333;
      border: none;
      cursor: pointer;
      transition: outline 0.3s ease-in-out;
    }

    .outline-button:hover {
      outline: 2px solid #3498db;
    }
  </style>
</head>
<body>
  <h2>Borderless Button with Outline on Hover</h2>
  
  <button class="outline-button">Outline Button</button>
</body>
</html>
```

## Link with Hover Scaling

Bring a subtle but engaging effect to your links. This snippet scales up the link upon hover, enhancing the user experience and drawing attention to clickable elements.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .scaling-link {
      color: #333;
      text-decoration: none;
      transition: transform 0.2s ease-in-out;
    }

    .scaling-link:hover {
      transform: scale(1.1);
    }
  </style>
</head>
<body>
  <h2>Link with Hover Scaling</h2>
  
  <a href="#" class="scaling-link">Scaling Link</a>
</body>
</html>
```

## Button with Icon

Create visually appealing buttons with icons using this snippet. Incorporate the Font Awesome library to seamlessly include icons alongside your buttons.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <style>
    .icon-button {
      padding: 10px 20px;
      background-color: #3498db;
      color: white;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    .icon-button i {
      margin-right: 8px;
    }
  </style>
</head>
<body>
  <h2>Button with Icon</h2>
  
  <button class="icon-button"><i class="fas fa-heart"></i>Like</button>
</body>
</html>
```

## Animated Gradient Button

Add a captivating touch to your buttons with an animated gradient background. The gradient transitions smoothly, offering an eye-catching effect that engages users.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .animated-gradient-button {
      padding: 10px 20px;
     

 background: linear-gradient(45deg, #3498db, #e74c3c, #9b59b6, #1abc9c);
      background-size: 200% 200%;
      color: white;
      border: none;
      cursor: pointer;
      animation: gradientAnimation 5s ease infinite;
    }

    @keyframes gradientAnimation {
      0% {
        background-position: 0 50%;
      }
      100% {
        background-position: 200% 50%;
      }
    }
  </style>
</head>
<body>
  <h2>Animated Gradient Button</h2>
  
  <button class="animated-gradient-button">Animated Gradient</button>
</body>
</html>
```

## Inverted Link

Deliver a bold and unique style with inverted colors for your links. This snippet provides a distinctive look by switching the text color and background.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .inverted-link {
      color: white;
      background-color: #333;
      padding: 5px 10px;
      text-decoration: none;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <h2>Inverted Link</h2>
  
  <a href="#" class="inverted-link">Inverted Link</a>
</body>
</html>
```

## Glowing Button on Hover

Elevate user engagement with this snippet that adds an alluring glow to buttons upon hover. The button gains a subtle luminance effect, enhancing its visual appeal.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .glowing-button {
      padding: 10px 20px;
      background-color: #3498db;
      color: white;
      border: none;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }

    .glowing-button::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      pointer-events: none;
    }

    .glowing-button:hover::before {
      opacity: 1;
    }
  </style>
</head>
<body>
  <h2>Glowing Button on Hover</h2>
  
  <button class="glowing-button">Glowing Button</button>
</body>
</html>
```

## Link with Animated Background

Elevate the visual interest of your links with this snippet that introduces a pulsating background animation. The link's background color gracefully transitions, creating an engaging effect.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .animated-background-link {
      color: white;
      background-color: #3498db;
      padding: 5px 10px;
      text-decoration: none;
      border-radius: 5px;
      animation: pulseAnimation 2s infinite;
    }

    @keyframes pulseAnimation {
      0% {
        background-color: #3498db;
      }
      50% {
        background-color: #2980b9;
      }
      100% {
        background-color: #3498db;
      }
    }
  </style>
</head>
<body>
  <h2>Link with Animated Background</h2>
  
  <a href="#" class="animated-background-link">Animated Background</a>
</body>
</html>
```

## Transparent Button with Border

Strike a balance between subtlety and style with this snippet that features a transparent button with a visible border.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .bordered-button {
      padding: 10px 20px;
      background-color: transparent;
      color: #333;
      border: 1px solid #333;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h2>Transparent Button with Border</h2>
  
  <button class="bordered-button">Bordered Button</button>
</body>
</html>
```

## Link with Underline and Fade-In

Enhance your links with this snippet that combines an animated underline with a fade-in effect. The underline smoothly appears from the left upon hover, adding a layer of interactivity.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .fade-in-link {
      color: #333;
      text-decoration: none;
      position: relative;
      display: inline-block;
    }

    .fade-in-link::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      background-color: #3498db;
      bottom: -2px;
      left: 0;
      transition: width 0.3s ease-in-out;
    }

    .fade-in-link:hover::after {
      width: 100%;
    }
  </style>
</head>
<body>
  <h2>Link with Underline and Fade-In</h2>
  
  <a href="#" class="fade-in-link">Fade-In Underline</a>
</body>
</html>
```

## Floating Action Button (FAB)

Add an elegant Floating Action Button (FAB) to your design using this snippet. A button with a circular shape and an icon provides easy access to essential actions.

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <style>
    .fab {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 50%;
      padding: 15px;
      cursor: pointer;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    }
  </style>
</head>
<body>
  <h2>Floating Action Button (FAB)</h2>
  
  <button class="fab"><i class="fas fa-plus"></i></button>
</body>
</html>
```