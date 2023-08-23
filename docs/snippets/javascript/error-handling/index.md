---
layout: doc
title: Error Handling - JavaScript Snippets
description: Important for gracefully managing errors in your code.
head:
  - ['meta', {property: 'og:title', content:  'Error Handling - JavaScript Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/javascript/error-handling/' }] 
  - ['meta', {name: 'twitter:title', content: 'Error Handling - JavaScript Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/javascript/error-handling/'}]
---

# Error Handling

Properly handling errors helps prevent crashes and makes your code more robust, especially when dealing with unexpected situations.

## Handling Specific Error Types

Handling a specific type of error using `try` and `catch`.

```javascript
// Attempt to parse an invalid JSON string
function parseJSON(jsonString) {
  try {
    const parsed = JSON.parse(jsonString);
    return parsed;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

console.log(parseJSON('{ "name": "John", "age": }'));
// Output: Error: Unexpected end of JSON input
```

## Throwing Custom Errors

Throwing a custom error using the `throw` statement.

```javascript
// Calculate the square root, throwing an error for negative inputs
function calculateSquareRoot(number) {
  if (number < 0) {
    throw new Error('Negative input not allowed');
  }
  return Math.sqrt(number);
}

try {
  console.log(calculateSquareRoot(-9));
} catch (error) {
  console.log(error.message);
}
// Output: Negative input not allowed
```

## Handling Multiple Error Types

Handling multiple types of errors using multiple `catch` blocks.

```javascript
// Divide two numbers, handling zero division and other errors
function safeDivide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  } catch (error) {
    if (error.message === 'Division by zero') {
      return 'Cannot divide by zero';
    }
    return `Error: ${error.message}`;
  }
}

console.log(safeDivide(10, 0));
// Output: Cannot divide by zero
```

## Async Function Error Handling

Error handling in an asynchronous function using `try`, `catch`, and `await`.

```javascript
// Simulate an async function that may throw an error
async function fetchData() {
  try {
    const response = await fetch('https://nonexistent-url');
    const data = await response.json();
    return data;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

fetchData().then(result => console.log(result));
// Output: Error: NetworkError when attempting to fetch resource.
```

## Handling Promises Rejection

Handling promise rejection using `.catch()`.

```javascript
// Simulate a rejected promise
function simulateRejectedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise rejected'));
    }, 1000);
  });
}

simulateRejectedPromise().catch(error => console.log(error.message));
// Output: Promise rejected
```

## Async/Await Try-Catch

Using a try-catch block with async/await.

```javascript
// Async function using try-catch with async/await
async function asyncTask() {
  try {
    const result = await someAsyncOperation();
    return result;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

asyncTask().then(result => console.log(result));
// Output: Error: something went wrong
```

## Unhandled Promise Rejection

Demonstrating an unhandled promise rejection.

```javascript
// Unhandled promise rejection
async function unhandledPromise() {
  const promise = Promise.reject(new Error('Unhandled rejection'));
}

unhandledPromise();
// Output: (No output in console, but Unhandled Promise Rejection warning in the console)
```

## Error Stack Tracing

Logging the stack trace of an error.

```javascript
// Logging error stack trace
function triggerError() {
  try {
    nonExistentFunction();
  } catch (error) {
    console.log(error.stack);
  }
}

triggerError();
/* Output:
Error: nonExistentFunction is not defined
    at triggerError (/path/to/file.js:4:5)
    at Object.<anonymous> (/path/to/file.js:8:1)
    ... (more stack trace lines)
*/
```

## Using `finally` Block

Using a `finally` block to perform cleanup tasks.

```javascript
// Handling errors with a finally block
function handleFileOperation() {
  try {
    // Perform file operation
    throw new Error('File operation error');
  } catch (error) {
    console.log(`Error: ${error.message}`);
  } finally {
    console.log('Cleanup: Closing file');
  }
}

handleFileOperation();
/* Output:
Error: File operation error
Cleanup: Closing file
*/
```

## Global Error Handling

Setting up a global error handler using `window.onerror`.

```javascript
// Global error handling using window.onerror
window.onerror = function(message, source, lineno, colno, error) {
  console.log(`Error: ${message}`);
  return true; // Prevent default browser error handling
};

nonExistentFunction(); // This triggers a ReferenceError
// Output: Error: nonExistentFunction is not defined
```

## Async Function Error Bubbling

Bubbling up errors in a chain of asynchronous functions.

```javascript
// Async function error bubbling
async function async1() {
  throw new Error('Async 1 error');
}

async function async2() {
  try {
    await async1();
  } catch (error) {
    console.log(`Async 2 caught: ${error.message}`);
    throw error; // Bubbling the error up
  }
}

async2().catch(error => console.log(`Caught outside: ${error.message}`));
/* Output:
Async 2 caught: Async 1 error
Caught outside: Async 1 error
*/
```

## Custom Error Class

Creating a custom error class for more specific error handling.

```javascript
// Custom error class
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function validateInput(input) {
  if (!input) {
    throw new ValidationError('Input cannot be empty');
  }
}

try {
  validateInput('');
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`Validation Error: ${error.message}`);
  } else {
    console.log(`Error: ${error.message}`);
  }
}
// Output: Validation Error: Input cannot be empty
```

## Catch Multiple Errors

Catching multiple types of errors using multiple `catch` blocks.

```javascript
// Handling multiple error types using multiple catch blocks
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  } catch (zeroError) {
    console.log(`Zero division error: ${zeroError.message}`);
  } catch (otherError) {
    console.log(`Other error: ${otherError.message}`);
  }
}

divide(10, 0);
// Output: Zero division error: Division by zero
```

## Async Function Promise Rejection

Handling promise rejections in an async function.

```javascript
// Async function with promise rejection handling
async

 function fetchData() {
  try {
    const response = await fetch('https://nonexistent-url');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Fetch error: ${error.message}`);
  }
}

fetchData();
// Output: Fetch error: NetworkError when attempting to fetch resource.
```

## Global Unhandled Rejection

Detecting unhandled promise rejections using `unhandledrejection` event.

```javascript
// Global unhandled promise rejection detection
window.addEventListener('unhandledrejection', event => {
  const error = event.reason;
  console.log(`Unhandled Rejection: ${error.message}`);
});

Promise.reject(new Error('Unhandled rejection example'));
// Output: Unhandled Rejection: Unhandled rejection example
```

## Catch Error from Promises Chain

Chaining promises and catching errors in a promise chain.

```javascript
// Chaining promises and catching errors
fetch('https://nonexistent-url')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(`Fetch error: ${error.message}`));
// Output: Fetch error: NetworkError when attempting to fetch resource.
```

## Async Function Error Bubbling with Promise

Bubbling up errors in a chain of asynchronous functions using promises.

```javascript
// Async function error bubbling using promises
function async1() {
  return new Promise((resolve, reject) => {
    reject(new Error('Async 1 error'));
  });
}

function async2() {
  return async1().catch(error => {
    console.log(`Async 2 caught: ${error.message}`);
    throw error; // Bubbling the error up
  });
}

async2().catch(error => console.log(`Caught outside: ${error.message}`));
/* Output:
Async 2 caught: Async 1 error
Caught outside: Async 1 error
*/
```

## Handling `finally` Block Error

Handling an error in the `finally` block.

```javascript
// Handling error in the finally block
function errorInFinally() {
  try {
    throw new Error('Error in try block');
  } finally {
    console.log('Finally block executed');
    throw new Error('Error in finally block');
  }
}

try {
  errorInFinally();
} catch (error) {
  console.log(`Caught outside: ${error.message}`);
}
/* Output:
Finally block executed
Caught outside: Error in finally block
*/
```

## Catch and Rethrow Error

Catching and rethrowing an error to add more context.

```javascript
// Catch and rethrow error with additional context
try {
  JSON.parse('invalid json');
} catch (error) {
  console.log(`Caught: ${error.message}`);
  throw new Error(`Rethrown: ${error.message}`);
}
/* Output:
Caught: Unexpected token i in JSON at position 0
Rethrown: Unexpected token i in JSON at position 0
*/
```

## Handling Promise All Rejections

Handling promise rejections using `Promise.all()`.

```javascript
// Handling promise rejections using Promise.all()
const promises = [
  Promise.resolve('Success 1'),
  Promise.reject(new Error('Error 1')),
  Promise.resolve('Success 2')
];

Promise.all(promises.map(p => p.catch(error => error.message)))
  .then(results => console.log(results))
  .catch(error => console.log(`Promise.all error: ${error.message}`));
/* Output:
[ 'Success 1', 'Error 1', 'Success 2' ]
*/
```

_Please note that the actual console output might vary based on the environment and the specific conditions under which the code is executed. These code snippets are meant for educational purposes and demonstrate various ways of handling errors in JavaScript._