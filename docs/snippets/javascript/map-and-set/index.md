---
layout: doc
title: Map and Set - JavaScript Snippets
description: Important for managing unique values and key-value pairs.
head:
  - ['meta', {property: 'og:title', content:  'Map and Set - JavaScript Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/javascript/map-and-set/' }] 
  - ['meta', {name: 'twitter:title', content: 'Map and Set - JavaScript Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/javascript/map-and-set/'}]
---

# Map and Set

These data structures are used for managing collections of unique values and key-value pairs, respectively.

## Creating an Empty Map

You can create an empty Map using the `Map` constructor.

```javascript
const emptyMap = new Map();
console.log(emptyMap);
```

## Adding Key-Value Pairs to a Map

You can add key-value pairs to a Map using the `set` method.

```javascript
const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
console.log(myMap);
```

## Getting Values from a Map

Retrieve values from a Map using the `get` method.

```javascript
console.log(myMap.get('name')); // Output: John
```

## Checking if a Key Exists in a Map

Use the `has` method to check if a key exists in a Map.

```javascript
console.log(myMap.has('age')); // Output: true
```

## Deleting Key-Value Pairs from a Map

Remove key-value pairs using the `delete` method.

```javascript
myMap.delete('age');
console.log(myMap.has('age')); // Output: false
```

## Iterating Through Map Keys

You can iterate through the keys of a Map using a `for...of` loop.

```javascript
for (const key of myMap.keys()) {
  console.log(key);
}
```

## Iterating Through Map Values

Iterate through the values of a Map using a `for...of` loop.

```javascript
for (const value of myMap.values()) {
  console.log(value);
}
```

## Iterating Through Map Entries

Use a `for...of` loop to iterate through key-value pairs (entries) of a Map.

```javascript
for (const entry of myMap.entries()) {
  console.log(entry);
}
```

## Creating a Set

Create an empty Set using the `Set` constructor.

```javascript
const mySet = new Set();
console.log(mySet);
```

## Adding Values to a Set

Add values to a Set using the `add` method.

```javascript
mySet.add(10);
mySet.add(20);
console.log(mySet);
```

## Checking if a Value Exists in a Set

Use the `has` method to check if a value exists in a Set.

```javascript
console.log(mySet.has(10)); // Output: true
```

## Deleting a Value from a Set

Remove a value from a Set using the `delete` method.

```javascript
mySet.delete(20);
console.log(mySet.has(20)); // Output: false
```

## Iterating Through Set Values

Iterate through the values of a Set using a `for...of` loop.

```javascript
for (const value of mySet) {
  console.log(value);
}
```

## Converting Array to Set

Convert an array to a Set using the `Set` constructor.

```javascript
const array = [1, 2, 3, 2, 1];
const uniqueSet = new Set(array);
console.log(uniqueSet);
```

## Converting Set to Array

Convert a Set back to an array using the spread operator.

```javascript
const arrayFromSet = [...uniqueSet];
console.log(arrayFromSet);
```

## Using Sets for Union Operation

Perform a union of two Sets using the `Set` methods.

```javascript
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);
const unionSet = new Set([...set1, ...set2]);
console.log(unionSet);
```

## Using Sets for Intersection Operation

Perform an intersection of two Sets using the `Set` methods.

```javascript
const intersectionSet = new Set([...set1].filter(value => set2.has(value)));
console.log(intersectionSet);
```

## Clearing a Map

Clear all key-value pairs from a Map using the `clear` method.

```javascript
myMap.clear();
console.log(myMap.size); // Output: 0
```

## Clearing a Set

Clear all values from a Set using the `clear` method.

```javascript
mySet.clear();
console.log(mySet.size); // Output: 0
```

## Using WeakMap and WeakSet

WeakMap and WeakSet are similar to Map and Set, but they allow the garbage collector to remove entries when they are no longer referenced.

```javascript
const weakMap = new WeakMap();
const weakSet = new WeakSet();
// Use weakMap and weakSet similarly to Map and Set
```