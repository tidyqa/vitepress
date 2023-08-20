---
layout: doc
title: Functions | JavaScript Tutorial
description: Functions are a powerful tool for organizing and reusing code. They help make your code more modular, readable, and maintainable. 
head:
  - ['meta', {property: 'og:title', content:  'Functions - JavaScript Tutorial' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/javascript/functions/' }] 
  - ['meta', {name: 'twitter:title', content: 'Functions - JavaScript Tutorial'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/javascript/functions/'}]
---

# Functions

Functions are an essential building block of JavaScript programming. They allow you to encapsulate blocks of code into reusable units, making your code more organized and efficient. In this section, we'll explore how to define and use functions, pass arguments, and return values.

## Defining Functions

Functions are defined using the `function` keyword, followed by the function name, a list of parameters enclosed in parentheses, and a block of code enclosed in curly braces.

```javascript
// Function definition
function greet(name) {
    console.log("Hello, " + name + "!");
}
```

## Calling Functions

To execute a function, you "call" it by using its name followed by parentheses. You can pass values, known as arguments, to the function's parameters.

```javascript
greet("Alice"); // Output: "Hello, Alice!"
greet("Bob");   // Output: "Hello, Bob!"
```

## Returning Values

Functions can also return values using the `return` keyword. The returned value can be assigned to a variable or used in further calculations.

```javascript
function add(a, b) {
    return a + b;
}

let result = add(3, 5); // result is now 8
```

## Function Expressions

Functions can also be assigned to variables, creating what's called a "function expression."

```javascript
let multiply = function(x, y) {
    return x * y;
};

let product = multiply(4, 6); // product is now 24
```

## Arrow Functions

Arrow functions provide a concise syntax for defining functions. They are often used for shorter function expressions.

```javascript
let divide = (a, b) => a / b;

let quotient = divide(10, 2); // quotient is now 5
```

## Default Parameters

You can set default values for function parameters, which are used when the argument is not provided.

```javascript
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

let result1 = power(3);     // result1 is 9 (default exponent is 2)
let result2 = power(2, 3);  // result2 is 8
```

## Practice Exercises

1. Write a function named `square` that takes a number as an argument and returns its square.
2. Define a function named `isEven` that takes a number and returns true if it's even, false if it's odd.
3. Create a function `greetUser` that takes a name and a time (morning or evening) and returns a greeting message.
4. Implement a function `calculateAverage` that takes an array of numbers and returns their average.
5. Write a function `printPattern` that takes a number as an argument and prints a pattern of stars.