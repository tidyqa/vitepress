---
layout: doc
title: Functional Programming - JavaScript Snippets
description: Useful for writing clean and maintainable code.
head:
  - ['meta', {property: 'og:title', content:  'Functional Programming - JavaScript Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/javascript/es6-features/' }] 
  - ['meta', {name: 'twitter:title', content: 'Functional Programming - JavaScript Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/javascript/es6-features/'}]
---

# Functional Programming

This paradigm focuses on writing code by composing pure functions, leading to cleaner and more maintainable code.

## Pure Function

A pure function always produces the same output for the same input and has no side effects.

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Output: 5
```

## First-Class Functions

Functions can be assigned to variables and passed as arguments to other functions.

```javascript
const greet = name => `Hello, ${name}!`;

const message = greet("Alice");
console.log(message); // Output: Hello, Alice!
```

## Higher-Order Function

A higher-order function takes one or more functions as arguments or returns a function.

```javascript
function multiplyBy(factor) {
  return num => num * factor;
}

const double = multiplyBy(2);
console.log(double(5)); // Output: 10
```

## Map

The `map` function applies a given function to each element of an array and returns a new array.

```javascript
const numbers = [1, 2, 3];
const squared = numbers.map(num => num * num);

console.log(squared); // Output: [1, 4, 9]
```

## Filter

The `filter` function creates a new array with elements that pass a given test.

```javascript
const scores = [85, 90, 70, 95, 60];
const passed = scores.filter(score => score >= 75);

console.log(passed); // Output: [85, 90, 95]
```

## Reduce

The `reduce` function applies a function to an accumulator and each element in an array, reducing it to a single value.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // Output: 15
```

## Closures

Closures allow a function to remember and access its lexical scope even when called outside that scope.

```javascript
function createCounter() {
  let count = 0;
  return () => {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
```

## Currying

Currying transforms a function with multiple arguments into a series of functions that each take a single argument.

```javascript
const add = a => b => a + b;

const add5 = add(5);
console.log(add5(3)); // Output: 8
```

## Composition

Function composition combines multiple functions to create a new function.

```javascript
const add = x => x + 2;
const multiply = x => x * 3;
const calculate = compose(multiply, add);

console.log(calculate(4)); // Output: 18
```

## Immutability

In functional programming, data is treated as immutable to avoid side effects.

```javascript
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4];

console.log(newArray); // Output: [1, 2, 3, 4]
```

## Recursion

Recursion is a technique where a function calls itself to solve smaller instances of a problem.

```javascript
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

## Memoization

Memoization stores the results of expensive function calls and returns the cached result when the same inputs occur again.

```javascript
function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log(fibonacci(6)); // Output: 8
```

## Point-Free Style

Point-free style emphasizes creating functions without mentioning the arguments they operate on.

```javascript
const add = x => y => x + y;
const increment = add(1);

console.log(increment(5)); // Output: 6
```

## Function Composition with Ramda

Using the Ramda library for function composition.

```javascript
const add = x => x + 2;
const multiply = x => x * 3;
const calculate = R.compose(multiply, add);

console.log(calculate(4)); // Output: 18
```

## Partial Application

Partial application fixes a certain number of arguments for a function, producing a new function.

```javascript
const multiply = (a, b, c) => a * b * c;
const double = multiply.bind(null, 2);

console.log(double(3, 4)); // Output: 24
```

## Function Pipelines

Chaining functions together to create a pipeline of operations.

```javascript
const add = x => x + 2;
const multiply = x => x * 3;
const result = add(5) |> multiply;

console.log(result); // Output: 21
```

## Declarative Programming

Declarative programming focuses on expressing what should be done, not how it should be done.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // Output: 15
```

## Lazy Evaluation

Lazy evaluation delays the evaluation of an expression until its value is actually needed.

```javascript
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);

console.log(squared[2]); // Output: 9
```

## Monads

Monads are design patterns used to handle functional programming in an imperative world.

```javascript
const maybe = value => ({
  map: fn => (value === null || value === undefined ? maybe(null) : maybe(fn(value))),
  value: () => value
});

const result = maybe(5)
  .map(x => x * 2)
  .map(x => x + 3)
  .value();

console.log(result); // Output: 13
```

## Promises with Functional Approach

Using promises in a functional programming style.

```javascript
const fetchData = url =>
  new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject

(error));
  });

fetchData('https://api.example.com/data')
  .then(data => data.map(item => item.value))
  .then(values => console.log(values))
  .catch(error => console.error(error));
```

These snippets cover a range of functional programming concepts and techniques in JavaScript. Remember to include necessary imports and dependencies where applicable, especially for libraries like Ramda.