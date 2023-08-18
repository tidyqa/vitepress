---
layout: doc
title: CSS Syntax
description: Master selectors, declaration blocks, and rule structures through practical code examples. 
head:
  - ['meta', {property: 'og:title', content:  'CSS Syntax' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/css/syntax/' }] 
  - ['meta', {name: 'twitter:title', content: 'CSS Syntax'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/css/syntax/'}]
---

# CSS Syntax

Foundation for styling web pages. Selectors, property-value pairs, and declaration blocks to craft captivating designs for your websites.

## Selectors

Selectors are the bridge between HTML elements and your creative vision. They target specific elements to apply your desired styles. Let's explore some essential selector types:

### Element Selector

  ```css
  p {
    color: #ff6600;
    font-size: 18px;
  }
  ```

### Class Selector

  ```css
  .button-primary {
    background-color: #007bff;
    color: white;
  }
  ```

### ID Selector

  ```css
  #main-header {
    font-size: 32px;
    font-weight: bold;
  }
  ```

## Declaration Blocks

Declaration blocks encapsulate the magic of CSS styles. They consist of property-value pairs that define how elements should appear. Let's experiment with more properties:

### Text Alignment

Center-align content for a polished look.

  ```css
  .centered-text {
    text-align: center;
  }
  ```

### Box Shadows

Create depth and dimension with subtle box shadows.

  ```css
  .boxed-content {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
  ```

## Rule Structure

CSS rules are structured to make your designs shine. Each rule comprises a selector and a declaration block.

```css
/* Rule for highlighting quotes */
.quote {
  font-style: italic;
  border-left: 3px solid #ffcc00;
  padding-left: 10px;
}
```

## Media Queries

Responsive design is paramount in the digital age. Media queries allow styles to adapt based on device characteristics. Stay ahead by embracing the versatility of media queries:

```css
/* Adjust font size for smaller screens */
@media (max-width: 768px) {
  .responsive-text {
    font-size: 16px;
  }
}
```

## CSS Specificity

CSS specificity determines which styles are applied when multiple rules target the same element. Understand how specificity works to fine-tune your designs:

### Inline Styles

The most specific styles applied directly to HTML elements take precedence over other styles.

```html
<p style="color: red;">This text is red.</p>
```

### IDs vs. Classes

Styles applied using IDs have higher specificity than those applied using classes.

```css
/* This rule has higher specificity due to the ID selector */
#special-element {
  background-color: #ffcc00;
}

/* This rule has lower specificity due to the class selector */
.container {
  background-color: #007bff;
}
```

### Combining Selectors

Combining selectors can increase specificity. The more specific the selector, the higher its priority.

```css
/* This rule targets a specific class within a specific element */
h2.title .sub-heading {
  font-size: 20px;
}
```

### !important Rule

Adding `!important` to a property-value pair gives it the highest specificity and overrides other styles. However, use it sparingly, as it can lead to maintainability issues.

```css
/* This rule takes precedence over other styles due to !important */
.important-element {
  font-weight: bold !important;
}
```

## Comments

Comments provide insights into your code for both yourself and other developers. Use comments to explain your intentions, making your codebase more understandable and maintainable:

```css
/* Highlighting the main navigation links */
.nav-link {
  color: #333;
  /* Increase font weight for emphasis */
  font-weight: bold;
}
```

## Combining Selectors

Combine selectors to create intricate styles that target specific elements within a broader context. Unleash the power of combined selectors for unique and refined designs:

```css
/* Style paragraphs within the 'article' class */
.article p {
  font-size: 14px;
  line-height: 1.6;
}
```

## Pseudo-classes and Pseudo-elements

Pseudo-classes and pseudo-elements add interactivity and visual enhancements.

### Hover Effect

Add a captivating hover effect to buttons.

  ```css
  .button:hover {
    background-color: #ff9900;
    color: white;
  }
  ```

### First Line Styling

Give the first line of a paragraph a distinctive appearance.

  ```css
  .intro::first-line {
    font-weight: bold;
    color: #007bff;
  }
  ```

## CSS Variables

CSS variables, or custom properties, allow you to define reusable values for your styles. Embrace the efficiency of centralizing your style definitions:

```css
/* Define and use a custom color variable */
:root {
  --main-color: #ff6600;
}

.button {
  background-color: var(--main-color);
}
```

## Summary

Congratulations! You've learned to harness the power of selectors, declaration blocks, and rule structures to craft captivating designs. As you journey forward, remember to leverage specificity, comments, and combined selectors for precise and elegant styles. Dynamic effects, CSS variables, and responsive design await your exploration.