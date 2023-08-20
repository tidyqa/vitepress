---
layout: doc
title: JavaScript Tutorial
description: JavaScript is a versatile and widely-used programming language primarily used for adding interactivity to websites. Here's a step-by-step guide to get you started:
head:
  - ['meta', {property: 'og:title', content:  'JavaScript Tutorial' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/javascript/' }] 
  - ['meta', {name: 'twitter:title', content: 'JavaScript Tutorial'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/javascript/'}]
---

# JavaScript Tutorial

## Introduction to JavaScript

JavaScript is a scripting language that enables you to create dynamic and interactive web content. It's commonly used to manipulate HTML and CSS, handle user interactions, and perform various tasks on the client-side (browser). JavaScript is supported by all modern web browsers.

## Setting Up

You can include JavaScript code directly in your HTML file using `<script>` tags. These tags can be placed in the `<head>` or `<body>` of your HTML document.

```html
<!DOCTYPE html>
<html>
<head>
    <title>My JavaScript Page</title>
    <script>
        // Your JavaScript code goes here
    </script>
</head>
<body>
    <!-- Your HTML content here -->
</body>
</html>
```

## Basic Syntax

JavaScript is known for its flexible and forgiving syntax. Here's a simple example of a "Hello, World!" program in JavaScript:

```javascript
console.log("Hello, World!");
```

The `console.log()` function is used to output text to the browser's developer console.

## Variables and Data Types

JavaScript has several built-in data types like numbers, strings, booleans, arrays, and objects. You can declare variables using the `var`, `let`, or `const` keywords:

```javascript
var age = 25;        // Number
var name = "John";   // String
var isStudent = true; // Boolean

// Modern way: use let and const
let itemCount = 10;
const PI = 3.14159;
```

## Operators

JavaScript supports various operators for performing arithmetic, comparison, and logical operations.

```javascript
var sum = 10 + 5;
var isGreaterThan = 20 > 15;
var logicalAnd = true && false;
```

## Conditional Statements

Conditional statements allow you to make decisions in your code.

```javascript
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
```

## Loops

Loops are used to repeat a block of code multiple times.

```javascript
for (var i = 1; i <= 5; i++) {
    console.log("Count: " + i);
}

var colors = ["red", "green", "blue"];
for (var color of colors) {
    console.log(color);
}
```

## Functions

Functions are reusable blocks of code that can take inputs (parameters) and return outputs.

```javascript
function greet(name) {
    return "Hello, " + name + "!";
}

var greeting = greet("Alice");
console.log(greeting);
```

## Events and Event Handling

JavaScript allows you to respond to user interactions using event handlers.

```javascript
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});
```

## DOM Manipulation

The Document Object Model (DOM) represents the structure of a web page. JavaScript can be used to manipulate the DOM, changing content, styles, and structure dynamically.

```javascript
document.getElementById("myElement").innerHTML = "New content";
```

## Handling User Input

You can capture user input using prompts or HTML input elements and then process it using JavaScript.

```javascript
var userInput = prompt("Enter your name:");
console.log("Hello, " + userInput + "!");
```

Remember that this is just a brief introduction to JavaScript. As you progress, you can explore more advanced topics like objects, classes, asynchronous programming (callbacks, promises, async/await), and working with APIs.

To practice and experiment with JavaScript, you can use online code editors like CodePen, JSFiddle, or even the developer console in your browser. Additionally, there are many tutorials, courses, and resources available online to help you deepen your understanding of JavaScript.
