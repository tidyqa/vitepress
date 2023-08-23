---
layout: doc
title: Functions - JavaScript Snippets
description: Foundational for structuring your code and reusing logic.
head:
  - ['meta', {property: 'og:title', content:  'Functions - JavaScript Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/javascript/functions/' }] 
  - ['meta', {name: 'twitter:title', content: 'Functions - JavaScript Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/javascript/functions/'}]
---

# Functions

Functions allow you to encapsulate reusable blocks of code, improving code organization and maintainability.

## Basic Function

A simple function that adds two numbers and logs the result.

```javascript
// Define a function
function addNumbers(a, b) {
  return a + b;
}

// Call the function
console.log(addNumbers(5, 7)); // Output: 12
```

## Arrow Function

An arrow function for squaring a number.

```javascript
// Arrow function syntax
const square = num => num * num;

console.log(square(4)); // Output: 16
```

## Default Parameter

Using a default parameter for a function.

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet();         // Output: Hello, Guest!
greet("Alice");  // Output: Hello, Alice!
```

## Rest Parameter

Using the rest parameter to gather multiple arguments into an array.

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
```

## Named Function Expression

Creating a named function expression.

```javascript
const factorial = function calcFactorial(n) {
  if (n === 0) return 1;
  return n * calcFactorial(n - 1);
};

console.log(factorial(5)); // Output: 120
```

## Higher-Order Function

A higher-order function that takes a function as an argument.

```javascript
function applyOperation(x, y, operation) {
  return operation(x, y);
}

const add = (a, b) => a + b;
console.log(applyOperation(3, 4, add)); // Output: 7
```

## Closure

Creating a closure to encapsulate data.

```javascript
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
```

## Immediately Invoked Function Expression (IIFE)

Using an IIFE to create a private scope.

```javascript
(function() {
  const secret = "I'm private";
  console.log(secret);
})();
// Output: I'm private
```

## Callback Function

Passing a function as a callback to another function.

```javascript
function doSomethingAsync(callback) {
  setTimeout(() => {
    console.log("Async operation done!");
    callback();
  }, 1000);
}

doSomethingAsync(() => {
  console.log("Callback executed.");
});
```

## Function as Return Value

Returning a function from another function.

```javascript
function multiplier(factor) {
  return function(x) {
    return x * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
```

## Recursion

Using recursion to calculate factorial.

```javascript
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

## Currying

Using currying to create reusable functions.

```javascript
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5)); // Output: 10
```

## Memoization

Implementing memoization to optimize function calls.

```javascript
function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn(...args);
    cache[args] = result;
    return result;
  };
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Output: 120 (memoized)
```

## Function Composition

Composing multiple functions together.

```javascript
function add(a, b) {
  return a + b;
}

function square(x) {
  return x * x;
}

const addAndSquare = compose(square, add);
console.log(addAndSquare(3, 4)); // Output: 49 (square(add(3, 4)))
```

## Function Hoisting

Using a function before it's declared.

```javascript
sayHello(); // Output: Hello

function sayHello() {
  console.log("Hello");
}
```

## Anonymous Function

Using an anonymous function as an event handler.

```javascript
document.addEventListener("click", function() {
  console.log("Document clicked");
});
```

## Bind, Call, and Apply

Using `bind`, `call`, and `apply` to control the context of a function.

```javascript
const person = {
  name: "Alice",
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFunction = person.greet;
greetFunction(); // Output: Hello, undefined

const boundGreet = person.greet.bind(person);
boundGreet();    // Output: Hello, Alice
```

## Async Function

Defining an asynchronous function using `async` and `await`.

```javascript
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
}

fetchData();
```

## Generator Function

Creating a generator function to yield values.

```javascript
function* countUpTo(limit) {
  let count = 1;
  while (count <= limit) {
    yield count;
    count++;
  }
}

const counter = countUpTo(5);
console.log(counter.next().value); // Output: 1
console.log(counter.next().value); // Output: 2
```

## Recursive Anonymous Function

Creating a self-invoking recursive anonymous function.

```javascript
(function countdown(n) {
  if (n === 0) {
    console.log("Blast off!");
  } else {
    console.log(n);
    countdown(n - 1);
  }
})(5);
// Output: 5, 4, 3, 2, 1, Blast off!
```

_Feel free to experiment with these code snippets and adapt them to your own projects for educational purposes. If you have any questions or need further clarification, please let me know!_