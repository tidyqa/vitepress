---
layout: doc
title: HTML Semantics - HTML Tutorial
description: Discover how semantic elements like <header>, <nav>, <main>, and <footer> convey context and significance, enhancing accessibility and SEO.
head:
  - ['meta', {property: 'og:title', content:  'HTML Semantics - HTML Tutorial' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/html/semantics/' }] 
  - ['meta', {name: 'twitter:title', content: 'HTML Semantics - HTML Tutorial'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/html/semantics/'}]
---

# HTML Semantics

Welcome to the world of meaningful structure – the art of using semantic elements to add context and significance to your web content.

## Understanding Semantics

Semantic HTML elements provide meaning to your content beyond their visual representation. By choosing the appropriate semantic elements, you can convey the role and purpose of different parts of your webpage, enhancing both accessibility and SEO.

## Header and Navigation

The `<header>` element represents the top section of a webpage and typically contains branding, site navigation, and introductory content. The `<nav>` element defines a navigation menu, allowing users to easily access different sections of your website.

### Example:

```html
<header>
  <h1>My Website</h1>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
    </ul>
  </nav>
</header>
```

## Main Content

The `<main>` element encapsulates the main content of your webpage. It should contain the primary content that users are seeking, such as articles, blog posts, or product descriptions.

### Example:

```html
<main>
  <article>
    <h2>Exploring National Parks</h2>
    <p>Discover the breathtaking beauty...</p>
  </article>
</main>
```

## Footer

The `<footer>` element represents the bottom section of a webpage and typically contains copyright information, contact details, and links to social media or related resources.

### Example:

```html
<footer>
  <p>Contact us at contact@example.com</p>
  <ul>
    <li><a href="#">Privacy Policy</a></li>
    <li><a href="#">Terms of Service</a></li>
  </ul>
</footer>
```

## Enhanced Accessibility and SEO

By using semantic elements, you create a clearer document structure that benefits both users and search engines. Screen readers can better interpret your content, and search engines can understand the context and relevance of your webpage.

In the next section, we'll guide you through creating a simple webpage that incorporates the concepts you've learned so far.