---
layout: doc
title: Variables and Data Types | JavaScript Tutorial
description: In this section, we'll dive deeper into variables, data types, and how to manipulate them.
head:
  - ['meta', {property: 'og:title', content:  'Variables and Data Types - JavaScript Tutorial' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/javascript/variables-and-data-types/' }] 
  - ['meta', {name: 'twitter:title', content: 'Variables and Data Types - JavaScript Tutorial'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/javascript/variables-and-data-types/'}]
---

# Variables and Data Types

In JavaScript, variables play a crucial role in storing and managing data. Understanding how to declare variables and work with different data types is essential for effective programming.

## Declaring Variables

Variables in JavaScript are declared using the `var`, `let`, or `const` keyword, followed by the variable name. The choice between these keywords affects the scope and mutability of the variable:

- `var`: Function-scoped variable with no block scope.

- `let`: Block-scoped variable that can be reassigned.

- `const`: Block-scoped variable that cannot be reassigned.

```javascript
// Examples of variable declarations
var age = 25;
let name = "Alice";
const pi = 3.14;
```

## Data Types

JavaScript has several built-in data types that define the nature of the values a variable can hold:

- **Numbers:** Used for numeric values, including integers and floating-point numbers.

- **Strings:** Used for text values. Enclosed in single (' ') or double (" ") quotes.

- **Booleans:** Represents true or false values.

- **Undefined:** Indicates a variable that has been declared but has no assigned value.

- **Null:** Represents the intentional absence of any value.

- **Arrays:** Used to store ordered collections of values.

- **Objects:** Used to store key-value pairs and more complex data structures.

```javascript
let age = 30;                   // Number
let name = "John";               // String
let isActive = true;             // Boolean
let salary;                      // Undefined
let car = null;                  // Null

let colors = ["red", "green"];   // Array
let person = {                  // Object
    firstName: "John",
    lastName: "Doe",
    age: 30
};
```

## Typeof Operator

The `typeof` operator is used to determine the data type of a value:

```javascript
console.log(typeof age);    // "number"
console.log(typeof name);   // "string"
console.log(typeof isActive);// "boolean"
console.log(typeof colors); // "object" (arrays are considered objects)
console.log(typeof person); // "object"
```

## Type Conversion

JavaScript also allows you to convert values from one data type to another using methods like `parseInt()`, `parseFloat()`, `String()`, and others:

```javascript
let numberStr = "42";
let parsedNumber = parseInt(numberStr); // Converts string to integer
let floatStr = "3.14";
let parsedFloat = parseFloat(floatStr); // Converts string to float
```

## Practice Exercises

1. Declare a variable named `temperature` and assign it a value of `72`.
2. Create a string variable named `city` with the value `"New York"`.
3. Define a boolean variable `isSunny` and set it to `true`.
4. Create an array named `fruits` containing three different fruit names.
5. Declare an object `personInfo` with properties for `name`, `age`, and `city`.

Understanding variables and data types is the foundation of programming in JavaScript. With this knowledge, you can effectively manage and manipulate different kinds of values. Keep practicing and experimenting with variables and data types to build a strong understanding!