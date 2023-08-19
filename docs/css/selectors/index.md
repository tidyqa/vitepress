---
layout: doc
title: Selectors - CSS Tutorial
description: Unlock the full potential of CSS selectors with advanced techniques in this tutorial. Dive into child combinators, adjacent sibling selectors, universal styles, and more.
head:
  - ['meta', {property: 'og:title', content:  'Selectors - CSS Tutorial' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/css/selectors/' }] 
  - ['meta', {name: 'twitter:title', content: 'Selectors - CSS Tutorial'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/css/selectors/'}]
---

# Selectors

Learn to target specific HTML elements, classes, and IDs with finesse and mastery.

## Element Selector

It targets all instances of a specific HTML element, allowing you to infuse consistent style across your entire website.

```css
/* Style all paragraphs with a fresh color */
p {
  color: #2671b2;
}
```

## Class Selector

Classes are your tools for creating distinctive designs. By attaching a class attribute to HTML elements, you can apply specific styles to them.

```css
/* Define a class for standout call-to-action buttons */
.cta-button {
  background-color: #f05f40;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}
```

## ID Selector

IDs bring singular focus to your styles. They target a unique HTML element, making them ideal for one-of-a-kind designs.

```css
/* Create a distinctive header with a unique ID */
#main-header {
  font-size: 28px;
  color: #4caf50;
}
```

## Descendant and Child Selectors

Selectors can traverse the HTML hierarchy, allowing you to target elements based on their relationship to other elements.

```css
/* Target only the <a> elements within paragraphs */
p a {
  text-decoration: underline;
}
```

## Attribute Selectors

Attribute selectors enable you to style elements based on their attributes, opening doors to dynamic styling possibilities:

```css
/* Style input fields with placeholder text */
input[placeholder] {
  border: 1px solid #ddd;
  padding: 5px;
}
```

## Pseudo-classes

Pseudo-classes bring interactivity to your styles. They target elements in specific states, such as when a user hovers over a link:

```css
/* Give links a hover effect */
a:hover {
  color: #ff6600;
  text-decoration: underline;
}
```

I apologize for the inconvenience. It seems like the response got cut off again. Here's the continuation of the comprehensive tutorial with the missing content:

---

## Child Combinator and Adjacent Sibling Selectors

Selectors can be further refined to target specific relationships between elements. Explore the child combinator and adjacent sibling selectors:

### Child Combinator:

Select elements that are direct children of a particular parent element.

  ```css
  /* Target only <li> elements that are direct children of <ul> */
  ul > li {
    list-style: circle;
  }
  ```

### Adjacent Sibling Selector

Target elements that are immediately preceded by a specific sibling element.

  ```css
  /* Style the second paragraph that directly follows a heading */
  h2 + p {
    margin-top: 10px;
  }
  ```

## Universal Selector and :not() Pseudo-class

Expand your styling control with the universal selector and the `:not()` pseudo-class:

### Universal Selector

Target all elements and apply styles universally.

  ```css
  /* Add a subtle border to all elements */
  * {
    border: 1px solid #ddd;
  }
  ```

### :not() Pseudo-class

Exclude specific elements from receiving a style.

  ```css
  /* Style all buttons except those with the class 'cancel' */
  button:not(.cancel) {
    background-color: #007bff;
    color: white;
  }
  ```

## Summary

Congratulations! You've journeyed through the realm of CSS selectors, honing your ability to precisely target HTML elements, classes, and IDs. As you continue, explore advanced selector techniques to unlock even more styling potential!