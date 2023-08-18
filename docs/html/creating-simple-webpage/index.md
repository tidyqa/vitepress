---
layout: doc
title: Creating a Simple Webpage - HTML Tutorial
description:  Apply your acquired HTML skills to craft a complete webpage, incorporating headers, navigation, main content, and a footer.
head:
  - ['meta', {property: 'og:title', content:  'Creating a Simple Webpage - HTML Tutorial' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/html/creating-simple-webpage/' }] 
  - ['meta', {name: 'twitter:title', content: 'Creating a Simple Webpage - HTML Tutorial'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/html/creating-simple-webpage/'}]
---

# Creating a Simple Webpage

Time to put your skills into practice! In this section, we'll guide you through the process of creating a complete, simple webpage that incorporates the HTML concepts you've learned so far.

## Structuring Your Webpage

1. **Header:** Start with a `<header>` containing a `<h1>` for the webpage title and a navigation menu within a `<nav>` element.

2. **Main Content:** Use a `<main>` element to enclose the main content of your webpage. Include meaningful headings, paragraphs, lists, and images.

3. **Footer:** End with a `<footer>` that provides contact information and relevant links.

## Your First Simple Webpage

Here's a basic example of what your HTML structure could look like:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Simple Webpage</title>
  <style>
    /* Your CSS styles here */
  </style>
</head>
<body>

<header>
  <h1>Welcome to My Simple Webpage</h1>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

<main>
  <section id="home">
    <h2>Home</h2>
    <p>This is the homepage of my simple webpage.</p>
  </section>

  <section id="about">
    <h2>About</h2>
    <p>Learn about the purpose and goals...</p>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <p>For inquiries, email us at contact@example.com</p>
  </section>
</main>

<footer>
  <p>&copy; 2023 My Simple Webpage. All rights reserved.</p>
</footer>

</body>
</html>
```

## Putting It All Together

By combining the HTML elements you've learned – headings, paragraphs, links, images, lists, and semantic elements – you can create a fully functional webpage. Use CSS to style your content for a polished and professional look.