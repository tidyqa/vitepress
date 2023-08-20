---
layout: doc
title: DOM Manipulation | JavaScript Tutorial
description: DOM manipulation is a core skill for web development, enabling you to create dynamic and interactive web pages. By understanding how to access, modify, and create DOM elements, you can build engaging user interfaces and enhance the user experience.
head:
  - ['meta', {property: 'og:title', content:  'DOM Manipulation - JavaScript Tutorial' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/javascript/dom-manipulation/' }] 
  - ['meta', {name: 'twitter:title', content: 'DOM Manipulation - JavaScript Tutorial'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/javascript/dom-manipulation/'}]
---

# DOM Manipulation

The Document Object Model (DOM) is a programming interface that represents the structure of a web page as a hierarchical tree of objects. JavaScript allows you to manipulate the DOM, enabling you to dynamically update and modify the content, styles, and behavior of your web page. In this section, we'll explore DOM manipulation techniques using JavaScript.

## Accessing DOM Elements

You can access DOM elements using various methods, such as `getElementById`, `querySelector`, and `querySelectorAll`. Once you have a reference to an element, you can manipulate its properties, content, and styles.

```javascript
// Accessing elements by ID
let header = document.getElementById("header");

// Accessing elements using CSS selectors
let paragraphs = document.querySelectorAll("p");
```

## Updating Element Content

You can change the content of an element using the `textContent` or `innerHTML` property:

```javascript
let paragraph = document.getElementById("myParagraph");

paragraph.textContent = "New text content"; // Updates text content
paragraph.innerHTML = "<strong>Bold text</strong>"; // Updates HTML content
```

## Changing Styles

You can modify the styles of an element using the `style` property:

```javascript
let myElement = document.getElementById("myElement");

myElement.style.backgroundColor = "lightblue";
myElement.style.fontSize = "18px";
```

## Adding and Removing Classes

You can add or remove CSS classes from elements using the `classList` property:

```javascript
let myDiv = document.getElementById("myDiv");

myDiv.classList.add("highlight");    // Adds the "highlight" class
myDiv.classList.remove("highlight"); // Removes the "highlight" class
```

## Creating and Appending Elements

You can create new elements using the `createElement` method and append them to the DOM using `appendChild` or `insertBefore`:

```javascript
let newParagraph = document.createElement("p");
newParagraph.textContent = "New paragraph content";

let parentElement = document.getElementById("parentElement");
parentElement.appendChild(newParagraph); // Appends the new paragraph
```

## Event Delegation

Event delegation is a technique where you attach a single event listener to a parent element to handle events for its child elements. This can improve performance and simplify event management.

```javascript
let parentList = document.getElementById("parentList");

parentList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.style.color = "red";
    }
});
```

## Practice Exercises

1. Create an HTML list with multiple items. Write JavaScript code to change the background color of the clicked list item.
2. Implement a button that, when clicked, adds a new paragraph element with the text "New paragraph added!" to a div with an ID of "container."
3. Create a form with input fields for a name and email. Write JavaScript code that validates and displays an error message if the name field is empty after submitting the form.