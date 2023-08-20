---
layout: doc
title: Basic Syntax | JavaScript Tutorial
description: In this section, we'll cover the fundamental building blocks of JavaScript syntax, including variables, data types, operators, and comments.
head:
  - ['meta', {property: 'og:title', content:  'Basic Syntax - JavaScript Tutorial' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/javascript/basic-syntax/' }] 
  - ['meta', {name: 'twitter:title', content: 'Basic Syntax - JavaScript Tutorial'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/javascript/basic-syntax/'}]
---

# Basic Syntax

Understanding the basic syntax of a programming language is essential for writing effective and error-free code.

## Variables and Naming Conventions

Variables are used to store and manage data in JavaScript. They can hold different types of values, such as numbers, strings, and objects. To declare a variable, use the `var`, `let`, or `const` keyword, followed by the variable name.

```javascript
// Variable declaration
let age = 25;
const name = "Alice";
var score = 90;
```

### When naming variables, follow these guidelines:

- Start with a letter, underscore (`_`), or dollar sign (`$`).
- Use letters, numbers, underscores, or dollar signs.
- Avoid using reserved words (e.g., `if`, `else`, `while`, etc.).
- Choose descriptive names that convey the purpose of the variable.

## Data Types

JavaScript has several built-in data types that define the kind of value a variable can hold. Some common data types include:

- **Numbers:** Used for numeric values.
- **Strings:** Used for text values. Enclose strings in single (' ') or double (" ") quotes.
- **Booleans:** Used for true or false values.
- **Arrays:** Used to store collections of values.
- **Objects:** Used to group related data and functions.

```javascript
let num = 42;             // Number
let greeting = "Hello";   // String
let isTrue = true;        // Boolean
let colors = ["red", "green", "blue"]; // Array
let person = {            // Object
    firstName: "John",
    lastName: "Doe",
    age: 30
};
```

## Operators

JavaScript provides various operators for performing operations on values:

- **Arithmetic Operators:** `+`, `-`, `*`, `/`, `%`
- **Comparison Operators:** `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Logical Operators:** `&&` (and), `||` (or), `!` (not)
- **Assignment Operators:** `=`, `+=`, `-=`, `*=`, `/=`, `%=`
- **Increment/Decrement Operators:** `++`, `--`

```javascript
let x = 10;
let y = 5;
let sum = x + y; // 15
let isGreater = x > y; // true
```

## Comments

Comments are used to annotate code and make it more understandable. In JavaScript, comments can be single-line (`//`) or multi-line (`/* */`).

```javascript
// This is a single-line comment

/*
This is a
multi-line comment
*/
```

## Practice Exercises

1. Declare a variable called `fruit` and assign it the value "apple".
2. Create an array called `numbers` containing three numeric values.
3. Write a simple arithmetic operation using variables.
4. Write a comment explaining the purpose of your code.

Understanding basic syntax is a crucial foundation for more advanced JavaScript concepts, so make sure you're comfortable with these concepts before moving forward.