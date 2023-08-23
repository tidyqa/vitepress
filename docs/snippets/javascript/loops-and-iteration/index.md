---
layout: doc
title: Loops and Iteration - JavaScript Snippets
description: Essential for repeating tasks and iterating over data.
head:
  - ['meta', {property: 'og:title', content:  'Loops and Iteration - JavaScript Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/javascript/loops-and-iteration/' }] 
  - ['meta', {name: 'twitter:title', content: 'Loops and Iteration - JavaScript Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/javascript/loops-and-iteration/'}]
---

# Loops and Iteration

Loops are used to repeat a block of code multiple times, which is crucial for iterating over arrays, objects, and other data structures.

## Basic For Loop

A simple example of using a for loop to iterate through numbers.

```javascript
function countToTen() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

countToTen(); // Output: 1 2 3 4 5 6 7 8 9 10
```

## Looping Through an Array

Using a for loop to iterate through an array's elements.

```javascript
function printArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArrayElements([2, 4, 6, 8]); // Output: 2 4 6 8
```

## While Loop

Using a `while` loop to repeat an action as long as a condition is true.

```javascript
function countdownFromTen() {
  let count = 10;
  while (count > 0) {
    console.log(count);
    count--;
  }
}

countdownFromTen(); // Output: 10 9 8 7 6 5 4 3 2 1
```

## Do-While Loop

Using a `do-while` loop to ensure an action is performed at least once.

```javascript
function askForConfirmation() {
  let response;
  do {
    response = prompt('Continue? (yes/no)');
  } while (response !== 'yes');
  console.log('Continuing...');
}

askForConfirmation(); // User input required
```

## Loop Control: Break

Using the `break` statement to exit a loop early.

```javascript
function findFirstPositive(numbers) {
  for (let num of numbers) {
    if (num > 0) {
      console.log(`First positive number: ${num}`);
      break;
    }
  }
}

findFirstPositive([-3, -2, 1, 5, -1]); // Output: First positive number: 1
```

## Loop Control: Continue

Using the `continue` statement to skip to the next iteration.

```javascript
function printOddNumbers(numbers) {
  for (let num of numbers) {
    if (num % 2 === 0) {
      continue;
    }
    console.log(num);
  }
}

printOddNumbers([1, 2, 3, 4, 5]); // Output: 1 3 5
```

## Nested Loops

Using nested loops to iterate through a two-dimensional array.

```javascript
function printMatrix(matrix) {
  for (let row of matrix) {
    for (let cell of row) {
      console.log(cell);
    }
  }
}

const matrix = [[1, 2], [3, 4], [5, 6]];
printMatrix(matrix); // Output: 1 2 3 4 5 6
```

## Looping with Object Keys

Using a `for...in` loop to iterate through object keys.

```javascript
function printObjectKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}

const person = { name: 'Alice', age: 30, occupation: 'Engineer' };
printObjectKeys(person); // Output: name age occupation
```

## Looping with Object Values

Using a `for...in` loop to iterate through object values.

```javascript
function printObjectValues(obj) {
  for (let key in obj) {
    console.log(obj[key]);
  }
}

const person = { name: 'Alice', age: 30, occupation: 'Engineer' };
printObjectValues(person); // Output: Alice 30 Engineer
```

## Looping with Object Entries

Using a `for...of` loop with `Object.entries()` to iterate through key-value pairs.

```javascript
function printObjectEntries(obj) {
  for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
}

const person = { name: 'Alice', age: 30, occupation: 'Engineer' };
printObjectEntries(person); // Output: name: Alice age: 30 occupation: Engineer
```

## Using the "forEach" Method

Using the `forEach` method to iterate through array elements.

```javascript
function printArrayElements(arr) {
  arr.forEach(element => {
    console.log(element);
  });
}

printArrayElements(['apple', 'banana', 'orange']); // Output: apple banana orange
```

## Looping Over Map Entries

Using a `for...of` loop to iterate through Map entries.

```javascript
function printMapEntries(map) {
  for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
  }
}

const colors = new Map([
  ['red', '#FF0000'],
  ['green', '#00FF00'],
  ['blue', '#0000FF']
]);

printMapEntries(colors); // Output: red: #FF0000 green: #00FF00 blue: #0000FF
```

## Looping Over Set Elements

Using a `for...of` loop to iterate through Set elements.

```javascript
function printSetElements(set) {
  for (let element of set) {
    console.log(element);
  }
}

const fruits = new Set(['apple', 'banana', 'orange']);
printSetElements(fruits); // Output: apple banana orange
```

## Looping with "keys" Method

Using the `keys` method to iterate through Map keys.

```javascript
function printMapKeys(map) {
  for (let key of map.keys()) {
    console.log(key);
  }
}

const colors = new Map([
  ['red', '#FF0000'],
  ['green', '#00FF00'],
  ['blue', '#0000FF']
]);

printMapKeys(colors); // Output: red green blue
```

## Looping with "values" Method

Using the `values` method to iterate through Map values.

```javascript
function printMapValues(map) {
  for (let value of map.values()) {
    console.log(value);
  }
}

const colors = new Map([
  ['red', '#FF0000'],
  ['green', '#00FF00'],
  ['blue', '#0000FF']
]);

printMapValues(colors); // Output: #FF0000 #00FF00 #0000FF
```

## Looping with "entries" Method

Using the `entries` method to iterate through Set elements.

```javascript
function printSetEntries(set) {
  for (let [element, _] of set.entries()) {
    console.log(element);
  }
}

const fruits = new Set(['apple', 'banana', 'orange']);
printSetEntries(fruits); // Output: apple banana orange
```

## Infinite Loop with Break

Creating an infinite loop that can be exited with a `break` statement.

```javascript
function countdownFrom(start) {
  while (true) {
    console.log(start);
    if (start === 0) {
      break;
    }
    start--;
  }
}

countdownFrom(5); // Output: 5 4 3 2 1 0
```

## Looping with Labeled Statements

Using labeled statements for more control in nested loops.

```javascript
function printMultiplicationTable() {
  outerLoop:
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      if (i * j > 10) {
        break outerLoop;
      }
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
}

printMultiplicationTable();
// Output: 1 * 1 = 1 1 * 2 = 2 1 * 3 = 3 1 * 4 = 4 1 * 5 = 5
```

## Using the "continue" Statement in a Nested Loop

Using the `continue` statement to skip an iteration in a nested loop.

```javascript
function skipOddNumbers(rows, cols) {
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (i * j % 2 !== 0) {
        continue;
      }
      console.log(i, j);
    }
  }
}

skipOddNumbers(3, 3);
// Output:
// 1 2
// 1 4
// 2 2
// 2 4
// 3 2
// 3 4
```

## Looping Through String Characters

Using a `for...of` loop to iterate through characters in a string.

```javascript
function printChars(str) {
  for (let char of str) {
    console.log(char);
  }
}

printChars('hello'); // Output: h e l l o
```

_These code snippets cover various ways of using loops and iteration in JavaScript for educational purposes. Feel free to use them to learn and understand different loop structures and techniques._