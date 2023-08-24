---
layout: doc
title: AJAX and Fetch - JavaScript Snippets
description: Vital for making HTTP requests and handling responses.
head:
  - ['meta', {property: 'og:title', content:  'AJAX and Fetch - JavaScript Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/javascript/ajax-and-fetch/' }] 
  - ['meta', {name: 'twitter:title', content: 'AJAX and Fetch - JavaScript Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/javascript/ajax-and-fetch/'}]
---

# AJAX and Fetch

These techniques are crucial for making HTTP requests to remote servers and handling the responses without requiring a full page reload.

## Fetch JSON Data

Fetch JSON data from an API and log it.

```javascript
function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
}

fetchData();
```

## Fetch Error Handling

Handle fetch errors gracefully.

```javascript
function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/posts/999999')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}

fetchData();
```

## Fetch with POST

Send POST request with JSON payload.

```javascript
function sendData() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'New Post',
      body: 'This is the body of the post.',
      userId: 1
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Post created:', data);
  });
}

sendData();
```

## Fetch with Headers

Include custom headers in a fetch request.

```javascript
function fetchWithHeaders() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    headers: {
      'Authorization': 'Bearer myToken',
      'Custom-Header': 'CustomValue'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
}

fetchWithHeaders();
```

## Fetch and DOM Manipulation

Fetch data and update the DOM.

```html
<div id="myDiv"></div>
```

```javascript
function fetchAndDisplay() {
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(user => {
      const div = document.getElementById('myDiv');
      div.textContent = `User: ${user.name}, Email: ${user.email}`;
    });
}

fetchAndDisplay();
```

## Fetch with Async/Await

Use async/await with fetch.

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchData();
```

## Fetch with Query Parameters

Fetch data with query parameters.

```javascript
function fetchWithParams() {
  const params = new URLSearchParams({
    userId: 1,
    completed: true
  });

  fetch(`https://jsonplaceholder.typicode.com/todos?${params}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
}

fetchWithParams();
```

## Fetch and Response Headers

Access and log response headers.

```javascript
function fetchHeaders() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      for (const [header, value] of response.headers.entries()) {
        console.log(`${header}: ${value}`);
      }
    });
}

fetchHeaders();
```

## Fetch and CORS

Fetch data from a different origin with CORS.

```javascript
function fetchWithCORS() {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}

fetchWithCORS();
```

## Fetch with Progress

Track fetch progress using a ReadableStream.

```javascript
async function fetchWithProgress() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos/1');
  const reader = response.body.getReader();
  let receivedLength = 0;

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    receivedLength += value.length;
    console.log(`Received ${receivedLength} bytes`);
  }
}

fetchWithProgress();
```

## Fetch with FormData

Send form data with `fetch`.

```html
<form id="myForm">
  <input type="text" name="username" placeholder="Username">
  <input type="password" name="password" placeholder="Password">
  <button type="submit">Submit</button>
</form>
```

```javascript
const form = document.getElementById('myForm');

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const response = await fetch('https://api.example.com/login', {
    method: 'POST',
    body: formData
  });

  const result = await response.json();
  console.log(result);
});
```

## Fetch with AbortController

Cancel a fetch request using `AbortController`.

```javascript
async function fetchWithAbort() {
  const controller = new AbortController();

  setTimeout(() => {
    controller.abort();
    console.log('Fetch request aborted');
  }, 1000);

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos/1', {
      signal: controller.signal
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Fetch aborted:', error.message);
    } else {
      console.error('Fetch error:', error);
    }
  }
}

fetchWithAbort();
```

## Fetch JSON with Headers

Fetch JSON data with custom headers.

```javascript
async function fetchWithHeaders() {
  const headers = new Headers();
  headers.append('Authorization', 'Bearer myToken');
  const response = await fetch('https://api.example.com/data', { headers });
  const data = await response.json();
  console.log(data);
}

fetchWithHeaders();
```

## Fetch with Basic Authentication

Fetch data using basic authentication.

```javascript
async function fetchWithBasicAuth() {
  const username = 'myUsername';
  const password = 'myPassword';
  const credentials = `${username}:${password}`;
  const encodedCredentials = btoa(credentials);

  const headers = new Headers();
  headers.append('Authorization', `Basic ${encodedCredentials}`);

  const response = await fetch('https://api.example.com/data', { headers });
  const data = await response.json();

  console.log(data);
}

fetchWithBasicAuth();
```

## Fetch and Blob Response

Fetch an image as a Blob and display it.

```html
<div id="imageContainer"></div>
```

```javascript
async function fetchImage() {
  const response = await fetch('https://www.example.com/image.jpg');
  const blob = await response.blob();
  const imageURL = URL.createObjectURL(blob);

  const image = document.createElement('img');
  image.src = imageURL;
  document.getElementById('imageContainer').appendChild(image);
}

fetchImage();
```

## Fetch Text Data

Fetch and log text data.

```javascript
async function fetchText() {
  const response = await fetch('https://www.example.com/text.txt');
  const text = await response.text();

  console.log(text);
}

fetchText();
```

## Fetch and Progress Bar

Fetch a large file and display a progress bar.

```html
<div id="progressBar" style="width: 0%; background-color: lightblue;">0%</div>
```

```javascript
async function fetchLargeFile() {
  const response = await fetch('https://www.example.com/largefile.zip');
  const totalBytes = parseInt(response.headers.get('content-length'));
  let receivedBytes = 0;

  const progressBar = document.getElementById('progressBar');

  const reader = response.body.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    receivedBytes += value.length;
    const progress = (receivedBytes / totalBytes) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.textContent = `${progress.toFixed(2)}%`;
  }
}

fetchLargeFile();
```

## Fetch and FormData

Send FormData using fetch.

```html
<form id="myForm">
  <input type="text" name="name" placeholder="Your name">
  <input type="email" name="email" placeholder="Your email">
  <button type="submit">Submit</button>
</form>
```

```javascript
const form = document.getElementById('myForm');

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const response = await fetch('https://api.example.com/submit', {
    method: 'POST',
    body: formData
  });

  const result = await response.json();
  console.log(result);
});
```

## Fetch and Response Type

Fetch response as array buffer and log its size.

```javascript
async function fetchArrayBuffer() {
  const response = await fetch('https://www.example.com/largefile.zip');
  const data = await response.arrayBuffer();
  const sizeInBytes = data.byteLength;

  console.log('File size:', sizeInBytes, 'bytes');
}

fetchArrayBuffer();
```

## Fetch and Headers

Fetch response headers and log them.

```javascript
async function fetchHeaders() {
  const response = await fetch('https://www.example.com');
  const headers = response.headers;

  for (const [header, value] of headers) {
    console.log(`${header}: ${value}`);
  }
}

fetchHeaders();
```

_You can copy and paste these code snippets into an HTML file to see how they work in practice. They cover various aspects of making AJAX requests using the Fetch API, handling responses, dealing with different data types, and utilizing different features for handling requests and responses._