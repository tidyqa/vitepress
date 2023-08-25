---
layout: doc
title: JSON Manipulation - JavaScript Snippets
description: Crucial for working with data interchange formats.
head:
  - ['meta', {property: 'og:title', content:  'JSON Manipulation - JavaScript Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/javascript/json-manipulation/' }] 
  - ['meta', {name: 'twitter:title', content: 'JSON Manipulation - JavaScript Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/javascript/json-manipulation/'}]
---

# JSON Manipulation

JSON (JavaScript Object Notation) is a widely used format for data interchange between a server and a client.

## Creating a JSON Object

You can create a JSON object using curly braces.

```javascript
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

console.log(person);
```

## Accessing JSON Properties

You can access properties of a JSON object using dot notation.

```javascript
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

console.log(person.name); // Output: John
```

## Modifying JSON Properties

You can modify properties of a JSON object using assignment.

```javascript
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

person.age = 31;
console.log(person.age); // Output: 31
```

## Parsing JSON from a String

You can parse a JSON string into an object using `JSON.parse()`.

```javascript
const jsonString = '{"name":"John","age":30}';
const person = JSON.parse(jsonString);

console.log(person.name); // Output: John
```

## Stringifying an Object to JSON

You can convert an object into a JSON string using `JSON.stringify()`.

```javascript
const person = {
  name: 'John',
  age: 30
};

const jsonString = JSON.stringify(person);
console.log(jsonString); // Output: {"name":"John","age":30}
```

## Handling Nested JSON

JSON objects can be nested, allowing you to represent complex data structures.

```javascript
const employee = {
  name: 'Alice',
  position: 'Engineer',
  contact: {
    email: 'alice@example.com',
    phone: '123-456-7890'
  }
};

console.log(employee.contact.email); // Output: alice@example.com
```

## Checking if a Property Exists

You can use the `hasOwnProperty()` method to check if a property exists in a JSON object.

```javascript
const person = {
  name: 'John',
  age: 30
};

console.log(person.hasOwnProperty('age')); // Output: true
console.log(person.hasOwnProperty('city')); // Output: false
```

## Removing a Property

You can delete a property from a JSON object using the `delete` keyword.

```javascript
const person = {
  name: 'John',
  age: 30
};

delete person.age;
console.log(person); // Output: { name: 'John' }
```

## Iterating Through JSON Properties

You can iterate through the properties of a JSON object using a `for...in` loop.

```javascript
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

## Handling JSON Arrays

JSON arrays are ordered lists that can store multiple values.

```javascript
const colors = ['red', 'green', 'blue'];

console.log(colors[1]); // Output: green
```

## Adding to a JSON Array

You can add elements to a JSON array using the `push()` method.

```javascript
const colors = ['red', 'green'];
colors.push('blue');

console.log(colors); // Output: ['red', 'green', 'blue']
```

## Removing from a JSON Array

You can remove elements from a JSON array using the `pop()` method.

```javascript
const colors = ['red', 'green', 'blue'];
colors.pop();

console.log(colors); // Output: ['red', 'green']
```

## Converting Array to JSON

Arrays can be converted to JSON strings using `JSON.stringify()`.

```javascript
const colors = ['red', 'green', 'blue'];
const jsonColors = JSON.stringify(colors);

console.log(jsonColors); // Output: ["red","green","blue"]
```

## Parsing JSON Array

You can parse a JSON array from a string using `JSON.parse()`.

```javascript
const jsonColors = '["red","green","blue"]';
const colors = JSON.parse(jsonColors);

console.log(colors[2]); // Output: blue
```

## Pretty-printing JSON

You can format JSON strings for better readability using `JSON.stringify()` with spacing.

```javascript
const person = {
  name: 'John',
  age: 30
};

const prettyJSON = JSON.stringify(person, null, 2);
console.log(prettyJSON);
```

## Handling JSON Errors

When parsing JSON, handle potential errors using try-catch.

```javascript
const jsonString = '{"name":"John","age":30';

try {
  const person = JSON.parse(jsonString);
  console.log(person.name);
} catch (error) {
  console.error('Error parsing JSON:', error.message);
}
```

## Deep Clone JSON Object

Create a deep clone of a JSON object using `JSON.parse()` and `JSON.stringify()`.

```javascript
const originalObject = { a: 1, b: { c: 2 } };
const clonedObject = JSON.parse(JSON.stringify(originalObject));

console.log(clonedObject.b.c); // Output: 2
```

## Handling JSON with Fetch API

Fetch JSON data from an API and process it.

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
```

## Filtering JSON Array

Filter an array of JSON objects based on a condition.

```javascript
const products = [
  { name: 'Apple', price: 1 },
  { name: 'Banana', price: 0.5 },
  { name: 'Orange', price: 0.8 }
];

const affordableProducts = products.filter(product => product.price < 1);
console.log(affordableProducts);
```

## Mapping JSON Array

Map an array of JSON objects to extract specific properties.

```javascript
const products = [
  { name: 'Apple', price: 1 },
  { name: 'Banana', price: 0.5 },
  { name: 'Orange', price: 0.8 }
];

const productNames = products.map(product => product.name);
console.log(productNames);
```