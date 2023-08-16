---
layout: doc
last Updated: true
title: HTML Tutorial
description: A Beginner's Guide to Creating Web Content. Learn how to structure webpages, add headings, paragraphs, links, images, and lists. Explore HTML semantics, styling with CSS, and forms for user interaction.
head:
  - ['meta', {property: 'og:title', content:  'HTML Tutorial' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/html/' }] 
  - ['meta', {name: 'twitter:title', content: 'HTML Tutorial'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/html/'}]
---

# HTML Tutorial

HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the web. In this tutorial, we'll guide you through the basics of HTML, from creating a simple webpage to understanding key elements and attributes.

## Table of Contents

1. Introduction to HTML
2. Setting Up Your First HTML Document
3. HTML Document Structure
4. Headings and Paragraphs
5. Links and Anchors
6. Lists
7. Images
8. Basic Styling with CSS
9. Forms and Input Elements
10. HTML Semantics
11. Creating a Simple Webpage
12. Advanced HTML Features (optional)

## Introduction to HTML

HTML is the foundation of any webpage. It uses a series of elements and tags to structure content and provide meaning to different parts of a webpage. HTML is not a programming language but a markup language.

## Setting Up Your First HTML Document

To get started, you need a text editor to write your HTML code and a web browser to view the result. Here's a simple template to create your first HTML document:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Your Page Title</title>
</head>
<body>

<!-- Your content goes here -->

</body>
</html>
```

## HTML Document Structure

Let's break down the structure of the template:

- `<!DOCTYPE html>`: This declaration defines the document type and version of HTML being used.
- `<html>`: The root element that contains all other elements on the page.
- `<head>`: Contains meta information about the document, such as the title.
- `<title>`: Sets the title of the webpage, which appears in the browser's title bar or tab.
- `<body>`: The main content of the webpage is placed within this element.

## Headings and Paragraphs

Headings and paragraphs are fundamental for structuring content. HTML provides six levels of headings, from `<h1>` (highest) to `<h6>` (lowest). Paragraphs are created using the `<p>` tag.

Example:

```html
<h1>Welcome to My Webpage</h1>
<p>This is a simple example of a paragraph.</p>
```

## Links and Anchors

Links are used to navigate between webpages. They are created using the `<a>` (anchor) tag, and the `href` attribute specifies the URL.

Example:

```html
<a href="https://www.example.com">Visit Example.com</a>
```

## Lists

Lists help organize content into ordered (numbered) or unordered (bulleted) lists.

Example:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>
  <li>First Step</li>
  <li>Second Step</li>
</ol>
```

## Images

You can include images using the `<img>` tag. The `src` attribute specifies the image file's URL.

Example:

```html
<img src="image.jpg" alt="Description of the image">
```

## Basic Styling with CSS

Cascading Style Sheets (CSS) allow you to style your HTML elements. Include a `<style>` tag within the `<head>` section.

Example:

```html
<head>
  <style>
    p {
      color: blue;
      font-size: 16px;
    }
  </style>
</head>
```

## Forms and Input Elements

Forms gather user input. Use `<form>` for the overall form and various input elements like `<input>` and `<textarea>`.

Example:

```html
<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
  <input type="submit" value="Submit">
</form>
```

## HTML Semantics

HTML5 introduced semantic elements that give meaning to the structure of a webpage, aiding accessibility and SEO.

Example:

```html
<header>
  <h1>My Website</h1>
</header>

<main>
  <article>
    <h2>Article Title</h2>
    <p>Article content goes here.</p>
  </article>
</main>

<footer>
  <p>Contact us at contact@example.com</p>
</footer>
```

## Creating a Simple Webpage

Combine the elements we've learned to create a simple webpage:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Simple Webpage</title>
</head>
<body>

<h1>Welcome to My Simple Webpage</h1>
<p>This is a paragraph of text.</p>
<a href="https://www.example.com">Visit Example.com</a>
<img src="image.jpg" alt="An example image">
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

</body>
</html>
```

## Advanced HTML Features (optional)

Explore more advanced features like tables, iframes, audio, video, and more as you become comfortable with the basics.

Congratulations! You've completed the HTML tutorial for beginners. With these foundational concepts, you're well on your way to creating and understanding basic webpages. Don't hesitate to explore further and experiment with different elements to enhance your web development skills.