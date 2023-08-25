---
layout: doc
title: ES6 Features - JavaScript Snippets
description: Important for utilizing modern JavaScript language features.
head:
  - ['meta', {property: 'og:title', content:  'ES6 Features - JavaScript Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/javascript/es6-features/' }] 
  - ['meta', {name: 'twitter:title', content: 'ES6 Features - JavaScript Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/javascript/es6-features/'}]
---

# ES6 Features

ECMAScript 6 (ES6) introduced modern JavaScript features like arrow functions, template literals, and enhanced object syntax. These examples showcase various ES6 features that enhance JavaScript's capabilities and make code more readable and maintainable.

## Arrow Functions

Arrow functions provide a concise way to write anonymous functions.

```javascript
// ES5
var add = function(a, b) {
    return a + b;
};

// ES6
const add = (a, b) => a + b;
```

## Template Literals

Template literals allow embedding expressions within strings.

```javascript
// ES5
var name = "Alice";
var greeting = "Hello, " + name + "!";

// ES6
const name = "Alice";
const greeting = `Hello, ${name}!`;
```

## Destructuring Assignment

Destructuring allows extracting values from objects and arrays.

```javascript
// ES6
const person = { firstName: "John", lastName: "Doe" };
const { firstName, lastName } = person;
console.log(firstName, lastName); // John Doe
```

## Spread Operator

The spread operator expands arrays and objects.

```javascript
// ES6
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr); // [1, 2, 3, 4, 5]
```

## Rest Parameters

Rest parameters collect remaining arguments into an array.

```javascript
// ES6
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3)); // 6
```

## Default Parameters

Default parameters allow specifying default values for function arguments.

```javascript
// ES6
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet()); // Hello, Guest!
```

## Object Property Shorthand

Object property shorthand simplifies creating objects from variables.

```javascript
// ES6
const firstName = "Alice";
const lastName = "Smith";
const person = { firstName, lastName };
```

## Object Destructuring

Destructuring can also be used to extract properties from objects.

```javascript
// ES6
const person = { firstName: "John", lastName: "Doe" };
const { firstName: fName, lastName: lName } = person;
console.log(fName, lName); // John Doe
```

## Classes

ES6 introduced class syntax for defining object constructors and methods.

```javascript
// ES6
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
```

## Inheritance with Classes

Classes support inheritance through the `extends` keyword.

```javascript
// ES6
class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
}
```

## Promises

Promises provide a cleaner way to work with asynchronous code.

```javascript
// ES6
const fetchData = () => {
    return new Promise((resolve, reject) => {
        // Simulate an async operation
        setTimeout(() => resolve("Data fetched"), 1000);
    });
};
```

## Async/Await

Async/await simplifies handling asynchronous operations using Promises.

```javascript
// ES6
const getData = async () => {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};
```

## Map:

The Map object allows storing key-value pairs.

```javascript
// ES6
const userMap = new Map();
userMap.set("username", "john_doe");
userMap.set("email", "john@example.com");
console.log(userMap.get("username")); // john_doe
```

## Set

The Set object stores unique values of any type.

```javascript
// ES6
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
console.log(uniqueNumbers); // Set { 1, 2, 3, 4 }
```

## Modules

ES6 modules allow organizing code into separate files.

```javascript
// main.js
import { add } from "./math.js";
console.log(add(2, 3));

// math.js
export const add = (a, b) => a + b;
```

## Object.assign()

Object.assign() merges properties from multiple source objects into a target object.

```javascript
// ES6
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const merged = Object.assign(target, source);
console.log(merged); // { a: 1, b: 3, c: 4 }
```

## Array.find()

Array.find() returns the first element that satisfies a condition.

```javascript
// ES6
const numbers = [1, 2, 3, 4, 5];
const even = numbers.find(num => num % 2 === 0);
console.log(even); // 2
```

## Array.includes()

Array.includes() checks if an array contains a specific element.

```javascript
// ES6
const fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana")); // true
```

## Array.from()

Array.from() creates a new array from an iterable or array-like object.

```javascript
// ES6
const str = "hello";
const charArray = Array.from(str);
console.log(charArray); // ["h", "e", "l", "l", "o"]
```

## Proxy

The Proxy object allows customizing behavior of operations on objects.

```javascript
// ES6
const handler = {
    get: function(target, prop) {
        return prop in target ? target[prop] : "Property not found";
    }
};
const person = new Proxy({ name: "Alice" }, handler);
console.log(person.name); // Alice
console.log(person.age); // Property not found
```