---
layout: doc
title: Asynchronous Programming - JavaScript Tutorial
description: Asynchronous programming is essential for building responsive and efficient web applications. By mastering the concepts of callbacks, promises, and async/await, you can manage complex tasks without blocking the user interface.
head:
  - ['meta', {property: 'og:title', content:  'Asynchronous Programming - JavaScript Tutorial' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/javascript/asynchronous-programming/' }] 
  - ['meta', {name: 'twitter:title', content: 'Asynchronous Programming - JavaScript Tutorial'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/javascript/asynchronous-programming/'}]
---

# Asynchronous Programming

Asynchronous programming is essential for creating responsive web applications that can perform tasks without blocking the main thread. JavaScript provides various techniques, such as callbacks, promises, and async/await, to handle asynchronous operations.

## Callbacks

Callbacks are functions that are passed as arguments to other functions and are executed when a particular task is completed. They are a basic form of asynchronous programming in JavaScript.

```javascript
function fetchData(url, callback) {
    // Simulate fetching data
    setTimeout(function() {
        let data = "Data from " + url;
        callback(data);
    }, 1000);
}

fetchData("example.com", function(data) {
    console.log(data);
});
```

## Promises

Promises provide a more structured way to handle asynchronous operations. A promise represents a value that may be available now, or in the future, or never.

```javascript
function fetchData(url) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let data = "Data from " + url;
            resolve(data);
        }, 1000);
    });
}

fetchData("example.com")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.error(error);
    });
```

## Async/Await

The `async` keyword is used to define a function that returns a promise. The `await` keyword is used inside an `async` function to pause execution until the promise is resolved.

```javascript
async function fetchData(url) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let data = "Data from " + url;
            resolve(data);
        }, 1000);
    });
}

async function fetchDataAndLog(url) {
    try {
        let data = await fetchData(url);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchDataAndLog("example.com");
```

## Handling Multiple Promises

You can use `Promise.all` to handle multiple promises in parallel and wait for all of them to complete.

```javascript
let promise1 = fetchData("example.com/data1");
let promise2 = fetchData("example.com/data2");

Promise.all([promise1, promise2])
    .then(function(results) {
        console.log("Result 1:", results[0]);
        console.log("Result 2:", results[1]);
    })
    .catch(function(error) {
        console.error(error);
    });
```

## Practice Exercises

1. Write a function that takes an array of URLs and fetches the data from all of them using promises. Log the retrieved data when all promises are resolved.
2. Create an `async` function that simulates processing a user's order. Use `await` to simulate asynchronous steps like payment processing and shipping confirmation.
3. Build a simple image gallery that fetches images from an API using `fetch` and displays them on the page. Handle loading and error states appropriately.