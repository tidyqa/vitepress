---
layout: doc
title: Object Manipulation - JavaScript Snippets
description: Important for handling structured data.
head:
  - ['meta', {property: 'og:title', content:  'Object Manipulation - JavaScript Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/javascript/object-manipulation/' }] 
  - ['meta', {name: 'twitter:title', content: 'Object Manipulation - JavaScript Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/javascript/object-manipulation/'}]
---

# Object Manipulation

## Get the keys of an object

The `Object.keys` method returns an array of the object's own property keys.

```javascript
function getKeys(obj) {
  return Object.keys(obj);
}
console.log(getKeys({ a: 1, b: 2, c: 3 })); // Output: ['a', 'b', 'c']
```

## Get the values of an object

The `Object.values` method returns an array of the object's own property values.

```javascript
function getValues(obj) {
  return Object.values(obj);
}
console.log(getValues({ a: 1, b: 2, c: 3 })); // Output: [1, 2, 3]
```

## Check if an object has a specific key

The `in` operator checks if a given key is present in the object.

```javascript
function hasKey(obj, key) {
  return key in obj;
}
console.log(hasKey({ a: 1, b: 2 }, 'b')); // Output: true
console.log(hasKey({ a: 1, b: 2 }, 'c')); // Output: false
```

## Get the length (number of properties) of an object

The `Object.keys` method returns an array of keys, and its length indicates the number of properties in the object.

```javascript
function getObjectLength(obj) {
  return Object.keys(obj).length;
}
console.log(getObjectLength({ a: 1, b: 2, c: 3 })); // Output: 3
```

## Clone an object (shallow copy)

The spread operator `...` creates a shallow copy of the object.

```javascript
function cloneObject(obj) {
  return { ...obj };
}
const original = { a: 1, b: 2 };
const cloned = cloneObject(original);
console.log(cloned); // Output: { a: 1, b: 2 }
console.log(original === cloned); // Output: false
```

## Merge two objects

The spread operator `...` is used to merge properties from both objects, with properties from `obj2` overwriting those from `obj1`.

```javascript
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = mergeObjects(obj1, obj2);
console.log(merged); // Output: { a: 1, b: 3, c: 4 }
```

## Create an object from arrays of keys and values

The function iterates through the arrays of keys and values and creates an object with corresponding key-value pairs.

```javascript
function createObject(keys, values) {
  const obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
  }
  return obj;
}
const keys = ['a', 'b', 'c'];
const values = [1, 2, 3];
const result = createObject(keys, values);
console.log(result); // Output: { a: 1, b: 2, c: 3 }
```

## Remove a property from an object

The function creates a new object with the same properties as the original object except for the specified key.

```javascript
function removeProperty(obj, key) {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}
const original = { a: 1, b: 2, c: 3 };
const withoutB = removeProperty(original, 'b');
console.log(withoutB); // Output: { a: 1, c: 3 }
console.log(original); // Output: { a: 1, b: 2, c: 3 }
```

## Get the values of an object as an array of key-value pairs

The `Object.entries` method returns an array of arrays where each inner array contains a key-value pair.

```javascript
function getObjectEntries(obj) {
  return Object.entries(obj);
}
console.log(getObjectEntries({ a: 1, b: 2 })); // Output: [['a', 1], ['b', 2]]
```

## Convert an array of key-value pairs to an object

The `Object.fromEntries` method converts an array of key-value pairs into an object.

```javascript
function arrayToObject(entries) {
  return Object.fromEntries(entries);
}
const entries = [['a', 1], ['b', 2]];
const obj = arrayToObject(entries);
console.log(obj); // Output: { a: 1, b: 2 }
```

## Iterate through the properties of an object

The `for...in` loop is used to iterate through the keys of an object while checking for own properties.

```javascript
function iterateObject(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}
const person = { name: 'Alice', age: 30 };
iterateObject(person); // Output: 'name: Alice', 'age: 30'
``` 

## Map values of an object to a new object

The `mapObjectValues` function applies a mapping function to each value of the object, creating a new object with the transformed values.

```javascript
function mapObjectValues(obj, mapper) {
  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = mapper(obj[key]);
    }
  }
  return result;
}
const prices = { apple: 1, banana: 0.5, orange: 0.75 };
const discountPrices = mapObjectValues(prices, value => value * 0.9);
console.log(discountPrices); // Output: { apple: 0.9, banana: 0.45, orange: 0.675 }
```

## Check if an object is empty

The `Object.keys` method is used to check if the object has any own properties.

```javascript
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
console.log(isEmptyObject({})); // Output: true
console.log(isEmptyObject({ a: 1 })); // Output: false
```

## Deep clone an object

This method uses JSON serialization to create a deep clone of the object.

```javascript
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
const original = { a: { b: 2 } };
const cloned = deepClone(original);
console.log(cloned); // Output: { a: { b: 2 } }
console.log(original === cloned); // Output: false
```

## Get a nested property from an object using dot notation

The function iterates through the properties in the path and retrieves the nested value from the object.

```javascript
function getNestedProperty(obj, path) {
  const properties = path.split('.');
  return properties.reduce((currentObj, property) => {
    return currentObj ? currentObj[property] : undefined;
  }, obj);
}
const user = { info: { name: 'Alice', age: 30 } };
console.log(getNestedProperty(user, 'info.name')); // Output: 'Alice'
```

## Set a nested property in an object using dot notation

The function iterates through the properties in the path, creates nested objects if necessary, and sets the value.

```javascript
function setNestedProperty(obj, path, value) {
  const properties = path.split('.');
  let currentObj = obj;
  for (let i = 0; i < properties.length - 1; i++) {
    if (!currentObj[properties[i]]) {
      currentObj[properties[i]] = {};
    }
    currentObj = currentObj[properties[i]];
  }
  currentObj[properties[properties.length - 1]] = value;
  return obj;
}
const user = {};
setNestedProperty(user, 'info.name', 'Alice');
console.log(user); // Output: { info: { name: 'Alice' } }
```

## Check if an object contains a specific value

The `Object.values` method is used to extract values and check if the value is present.

```javascript
function objectContainsValue(obj, value) {
  return Object.values(obj).includes(value);
}
console.log(objectContainsValue({ a: 1, b: 2, c: 3 }, 2)); // Output: true
console.log(objectContainsValue({ a: 1, b: 2, c: 3 }, 4)); // Output: false
```

## Convert an object to an array of key-value pairs

The `Object.entries` method returns an array of arrays where each inner array contains a key-value pair.

```javascript
function objectToArray(obj) {
  return Object.entries(obj);
}
console.log(objectToArray({ a: 1, b: 2 })); // Output: [['a', 1], ['b', 2]]
```

## Check if two objects have the same properties and values

This method uses JSON serialization to compare objects, so the order of properties matters.

```javascript
function objectsAreEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
const objA = { a: 1, b: 2 };
const objB = { b: 2, a: 1 };
console.log(objectsAreEqual(objA, objB)); // Output: true
```

## Filter object properties based on a predicate function

The function creates a new object containing only properties that satisfy the given predicate function.

```javascript
function filterObjectProperties(obj, predicate) {
  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && predicate(obj[key])) {
      result[key] = obj[key];
    }
  }
  return result;
}
const scores = { Alice: 95, Bob: 82, Carol: 78, David: 90 };
const passed = filterObjectProperties(scores, score => score >= 80);
console.log(passed); // Output: { Alice: 95, Bob: 82, David: 90 }
```