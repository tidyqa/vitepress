---
layout: doc
title: Fetch API - JavaScript Tutorial
description: The Fetch API is a versatile tool for handling network requests and asynchronous operations in web development. By mastering its features, you can build applications that interact with remote APIs and provide real-time data to users.
head:
  - ['meta', {property: 'og:title', content:  'Fetch API - JavaScript Tutorial' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/javascript/fetch-api/' }] 
  - ['meta', {name: 'twitter:title', content: 'Fetch API - JavaScript Tutorial'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/javascript/fetch-api/'}]
---

# Fetch API

The Fetch API is a modern way to make network requests and handle asynchronous operations in web applications. It provides a more flexible and powerful alternative to traditional methods like XMLHttpRequest. In this section, we'll dive deeper into the Fetch API and explore its features.

## Making GET Requests

You can use the Fetch API to make GET requests to retrieve data from a server. The basic syntax for a GET request is as follows:

```javascript
fetch(url)
    .then(response => response.json())
    .then(data => {
        // Handle the retrieved data
    })
    .catch(error => {
        // Handle errors
    });
```

## Handling JSON Response

The `response.json()` method parses the response body as JSON and returns a promise that resolves to the JSON data.

```javascript
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
```

## Making POST Requests

You can also use the Fetch API to make POST requests to send data to a server. To send data in the request body, you need to specify the HTTP method, headers, and body content.

```javascript
fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
```

## Handling Headers and Options

You can customize headers and options for your requests using the `headers` and `mode` properties.

```javascript
fetch(url, {
    method: "GET",
    headers: {
        "Authorization": "Bearer your_token"
    },
    mode: "cors"
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
```

## Practice Exercises

1. Fetch data from a REST API that provides information about books. Display the book titles and authors on your webpage.
2. Implement a user registration form that sends user data to a server using a POST request. Handle the response to display a success message.
3. Create a simple weather application that fetches weather data based on user input (city name) and displays relevant information.
