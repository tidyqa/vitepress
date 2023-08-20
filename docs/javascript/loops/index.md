---
layout: doc
title: Loops | JavaScript Tutorial
description: Loops are essential for automating repetitive tasks and processing data efficiently. By understanding the different types of loops and their applications, you can create more dynamic and interactive programs.
head:
  - ['meta', {property: 'og:title', content:  'Loops - JavaScript Tutorial' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/javascript/loops/' }] 
  - ['meta', {name: 'twitter:title', content: 'Loops - JavaScript Tutorial'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/javascript/loops/'}]
---

# Loops

Loops are fundamental structures in programming that allow you to repeat a block of code multiple times. They are used for tasks such as iterating over arrays, processing data, and performing repetitive operations.

## For Loop

The `for` loop is used to iterate over a sequence of values, typically numbers. It consists of three parts: initialization, condition, and iteration. The loop continues executing as long as the condition is true.

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}
```

## While Loop

The `while` loop continues executing a block of code as long as a specified condition is true. The condition is evaluated before each iteration.

```javascript
let count = 0;

while (count < 3) {
    console.log("Count:", count);
    count++;
}
```

## Do-While Loop

The `do-while` loop is similar to the `while` loop, but it ensures that the loop body is executed at least once, regardless of the condition.

```javascript
let x = 5;

do {
    console.log("x:", x);
    x--;
} while (x > 0);
```

## For...of Loop

The `for...of` loop is used to iterate over iterable objects such as arrays, strings, and other collection types. It simplifies the process of iterating without worrying about index management.

```javascript
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}
```

## Break and Continue Statements

The `break` statement is used to terminate a loop prematurely, while the `continue` statement skips the rest of the current iteration and moves to the next.

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // Terminates the loop
    }
    console.log("Iteration:", i);
}

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skips iteration 2
    }
    console.log("Iteration:", i);
}
```

## Practice Exercises

1. Use a `for` loop to calculate the sum of the first 10 natural numbers.
2. Write a `while` loop that generates random numbers between 1 and 10 until it generates the number 5.
3. Iterate through an array of names using a `for...of` loop and print each name.
4. Create a `do-while` loop that prompts the user for a password until they enter the correct password "12345".

In the next section, we'll explore functions, which are reusable blocks of code that can be called multiple times. Keep practicing and experimenting with loops to strengthen your programming skills!