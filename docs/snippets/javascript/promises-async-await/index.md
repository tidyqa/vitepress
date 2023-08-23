---
layout: doc
title: Promises and Async/Await - JavaScript Snippets
description: Critical for managing asynchronous operations.
head:
  - ['meta', {property: 'og:title', content:  'Promises and Async/Await - JavaScript Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/javascript/promises-async-await/' }] 
  - ['meta', {name: 'twitter:title', content: 'Promises and Async/Await - JavaScript Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/javascript/promises-async-await/'}]
---

# Promises and Async/Await

These are used for managing asynchronous operations, ensuring that your code doesn't block while waiting for certain tasks to complete.

## Creating a Basic Promise

A simple example of creating and resolving a promise.

```javascript
// Creating a basic promise
function basicPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 1000);
  });
}

basicPromise().then(result => {
  console.log(result); // Output: Promise resolved
});
```

## Handling Promise Rejection

Handling promise rejection using the `.catch()` method.

```javascript
// Handling promise rejection
function rejectedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Promise rejected');
    }, 1000);
  });
}

rejectedPromise().catch(error => {
  console.error(error); // Output: Promise rejected
});
```

## Async Function with Await

Using `async` function and `await` to handle asynchronous code.

```javascript
// Async function with await
async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  return data.title;
}

fetchData().then(title => {
  console.log(title); // Output: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
});
```

## Handling Multiple Promises with Promise.all

Using `Promise.all` to handle multiple promises concurrently.

```javascript
// Handling multiple promises with Promise.all
function fetchUserData() {
  return fetch('https://jsonplaceholder.typicode.com/users');
}

function fetchPostData() {
  return fetch('https://jsonplaceholder.typicode.com/posts');
}

async function fetchData() {
  const [usersResponse, postsResponse] = await Promise.all([fetchUserData(), fetchPostData()]);
  const users = await usersResponse.json();
  const posts = await postsResponse.json();
  return { users, posts };
}

fetchData().then(data => {
  console.log(data); // Output: { users: [...], posts: [...] }
});
```

## Chaining Promises

Chaining promises using `.then()`.

```javascript
// Chaining promises
function fetchUserData() {
  return fetch('https://jsonplaceholder.typicode.com/users/1');
}

fetchUserData()
  .then(response => response.json())
  .then(user => {
    console.log(user.name); // Output: Leanne Graham
  });
```

## Async Function Error Handling

Using `try` and `catch` with async/await to handle errors.

```javascript
// Async function error handling
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/nonexistent');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error); // Output: FetchError: request to ... failed, reason: ... 
  }
}

fetchData();
```

## Promise Race

Using `Promise.race` to settle with the value of the fastest promise.

```javascript
// Promise race
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fetchData() {
  return Promise.race([
    fetch('https://jsonplaceholder.typicode.com/posts/1'),
    timeout(500)
  ]);
}

fetchData().then(response => {
  if (response) {
    console.log(response); // Output: Response object if fetch succeeds, otherwise undefined
  } else {
    console.log('Timeout occurred');
  }
});
```

## Sequential Execution

Executing promises sequentially using recursion.

```javascript
// Sequential execution using recursion
function fetchPosts(postIds) {
  if (postIds.length === 0) {
    return Promise.resolve([]);
  }

  const postId = postIds.shift();
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
      return fetchPosts(postIds).then(posts => [post, ...posts]);
    });
}

fetchPosts([1, 2, 3]).then(posts => {
  console.log(posts); // Output: Array of posts
});
```

## Async/Await with Promise.allSettled

Using `Promise.allSettled` with async/await to handle a mixture of fulfilled and rejected promises.

```javascript
// Async/await with Promise.allSettled
async function fetchAllData(urls) {
  const promises = urls.map(url => fetch(url).then(response => response.json()));

  const results = await Promise.allSettled(promises);

  const fulfilledResults = results.filter(result => result.status === 'fulfilled').map(result => result.value);
  const rejectedReasons = results.filter(result => result.status === 'rejected').map(result => result.reason);

  return { fulfilledResults, rejectedReasons };
}

const urls = ['https://jsonplaceholder.typicode.com/posts/1', 'invalid-url'];
fetchAllData(urls).then(data => {
  console.log(data);
  // Output: {
  //   fulfilledResults: [postObject],
  //   rejectedReasons: ["TypeError: Failed to fetch"]
  // }
});
```

## Async Iteration with for-await-of

Using `for-await-of` to iterate over asynchronous generators.

```javascript
// Async iteration with for-await-of
async function* fetchPosts(postIds) {
  for (const postId of postIds) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await response.json();
    yield post;
  }
}

(async () => {
  const postIds = [1, 2, 3];
  for await (const post of fetchPosts(postIds)) {
    console.log(post.title); // Output: Title of each post
  }
})();
```

## Using Async/Await with map

Using `async/await` with `Array.prototype.map` to process an array of promises.

```javascript
// Using async/await with map
async function fetchPostTitles(postIds) {
  const promises = postIds.map(async postId => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await response.json();
    return post.title;
  });

  const titles = await Promise.all(promises);
  return titles;
}

const postIds = [1, 2, 3];
fetchPostTitles(postIds).then(titles => {
  console.log(titles); // Output: Array of post titles
});
```

## Handling Multiple Promises with Promise.allSettled

Using `Promise.allSettled` to handle multiple promises regardless of rejection or fulfillment.

```javascript
// Handling multiple promises with Promise.allSettled
function fetchUserData(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .catch(error => ({ error: true }));
}

const userIds = [1, 2, 3];
Promise.allSettled(userIds.map(fetchUserData)).then(results => {
  console.log(results); // Output: Array of objects with user data or error
});
```

## Sequentially Resolving Promises with reduce

Using `Array.prototype.reduce` to sequentially resolve promises.

```javascript
// Sequentially resolving promises with reduce
const delayedValues = [100, 200, 300];

const sequentiallyResolved = delayedValues.reduce(async (previousPromise, delay) => {
  await previousPromise;
  await new Promise(resolve => setTimeout(resolve, delay));
  console.log(`Resolved after ${delay}ms`);
}, Promise.resolve());

sequentiallyResolved.then(() => {
  console.log("All promises resolved");
});
```

## Handling Timeout with Promise.race

Using `Promise.race` to handle promises with a timeout.

```javascript
// Handling timeout with Promise.race
function fetchDataWithTimeout(url, timeout) {
  const dataPromise = fetch(url).then(response => response.json());
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Request timed out')), timeout)
  );
  return Promise.race([dataPromise, timeoutPromise]);
}

fetchDataWithTimeout('https://jsonplaceholder.typicode.com/posts/1', 1000)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error.message); // Output: Request timed out
  });
```

## Converting Callback to Promise

Converting a callback-based function to return a promise.

```javascript
// Converting callback to promise
function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

readFileAsync('example.txt')
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
```

## Async/Await with setTimeout

Using `async/await` with `setTimeout` for a delayed operation.

```javascript
// Async/await with setTimeout
function delay(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function delayedOperation() {
  console.log('Start');
  await delay(2000);
  console.log('End after delay');
}

delayedOperation();
```

## Async/Await Error Propagation

Using `async/await` to propagate errors in a sequence.

```javascript
// Async/await error propagation
async function operationA() {
  throw new Error('Error in operation A');
}

async function operationB() {
  await operationA();
}

operationB().catch(error => {
  console.error(error.message); // Output: Error in operation A
});
```

## Using Promise.resolve and Promise.reject

Using `Promise.resolve` and `Promise.reject` for immediate resolution or rejection.

```javascript
// Using Promise.resolve and Promise.reject
const resolvedPromise = Promise.resolve('Resolved');
const rejectedPromise = Promise.reject(new Error('Rejected'));

resolvedPromise.then(value => {
  console.log(value); // Output: Resolved
});

rejectedPromise.catch(error => {
  console.error(error.message); // Output: Rejected
});
```

## Async Functions in Parallel

Executing multiple async functions in parallel.

```javascript
// Async functions in parallel
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

(async () => {
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];

  const promises = urls.map(url => fetchData(url));
  const results = await Promise.all(promises);

  console.log(results); // Output: Array of fetched data
})();
```

## Async/Await in forEach Loop

Using `async/await` in a `forEach` loop for sequential execution.

```javascript
// Async/await in forEach loop
async function processItems(items) {
  for (const item of items) {
    await processItem(item);
  }
}

async function processItem(item) {
  console.log(`Processing ${item}`);
  // Simulating async operation
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log(`Completed ${item}`);
}

const items = ['item1', 'item2', 'item3'];
processItems(items);
```

_These are the 20 code snippets related to "Promises and Async/Await". Each snippet illustrates different concepts and techniques for handling asynchronous operations in JavaScript._
