---
layout: doc
title: Array Operations - JavaScript Snippets
description: Essential for working with collections of data.
head:
  - ['meta', {property: 'og:title', content:  'Array Operations - JavaScript Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/javascript/array-operations/' }] 
  - ['meta', {name: 'twitter:title', content: 'Array Operations - JavaScript Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/javascript/array-operations/'}]
---

# Array Operations

## Calculate the sum of an array

The `reduce` function accumulates the sum of array elements starting from an initial value of 0.

```javascript
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4])); // Output: 10
```

## Calculate the average of an array

The average is calculated by dividing the sum of the array elements by the array length.

```javascript
function calculateAverage(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}
console.log(calculateAverage([4, 6, 8])); // Output: 6
```

## Find the maximum value in an array

The spread operator `...` is used to spread the array elements as arguments to the `Math.max` function, which returns the maximum value.

```javascript
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([3, 9, 2, 7])); // Output: 9
```

## Find the minimum value in an array

The spread operator `...` is used to spread the array elements as arguments to the `Math.min` function, which returns the minimum value.

```javascript
function findMin(arr) {
  return Math.min(...arr);
}
console.log(findMin([3, 9, 2, 7])); // Output: 2
```

## Remove duplicate elements from an array

The `Set` object is used to automatically remove duplicate values when constructing a new array.

```javascript
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
```

## Merge two arrays

The spread operator is used to combine the elements of both arrays into a new array.

```javascript
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2], [3, 4])); // Output: [1, 2, 3, 4]
```

## Find the intersection of two arrays

The `filter` method is used to create a new array containing only the elements that are present in both arrays.

```javascript
function intersection(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}
console.log(intersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
```

## Find the union of two arrays

The `Set` object is used to automatically remove duplicate values when constructing the union of two arrays.

```javascript
function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
console.log(union([1, 2, 3], [2, 3, 4])); // Output: [1, 2, 3, 4]
```

## Find the difference between two arrays

The `filter` method is used to create a new array containing only the elements that are present in the first array but not in the second array.

```javascript
function difference(arr1, arr2) {
  return arr1.filter(item => !arr2.includes(item));
}
console.log(difference([1, 2, 3, 4], [2, 3])); // Output: [1, 4]
```

## Reverse an array

The `reverse` method is used to reverse the order of elements in the array.

```javascript
function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray([1, 2, 3])); // Output: [3, 2, 1]
```

## Sort an array in ascending order

The `slice` method is used to create a copy of the array before applying the `sort` method with a comparison function for ascending order.

```javascript
function sortAscending(arr) {
  return arr.slice().sort((a, b) => a - b);
}
console.log(sortAscending([3, 1, 4, 2])); // Output: [1, 2, 3, 4]
```

## Sort an array in descending order

The `slice` method is used to create a copy of the array before applying the `sort` method with a comparison function for descending order.

```javascript
function sortDescending(arr) {
  return arr.slice().sort((a, b) => b - a);
}
console.log(sortDescending([3, 1, 4, 2])); // Output: [4, 3, 2, 1]
```

## Find the index of a specific element in an array

The `indexOf` method returns the index of the first occurrence of a given element in the array.

```javascript
function indexOfElement(arr, element) {
  return arr.indexOf(element);
}
console.log(indexOfElement([1, 2, 3, 4, 5], 3)); // Output: 2
```

## Check if an array contains a specific element

The `includes` method checks if a given element is present in the array.

```javascript
function containsElement(arr, element) {
  return arr.includes(element);
}
console.log(containsElement([1, 2, 3], 2)); // Output: true
```

## Add an element to the beginning of an array

The spread operator is used to create a new array with the added element at the beginning.

```javascript
function addToBeginning(arr, element) {
  return [element, ...arr];
}
console.log(addToBeginning([2, 3], 1)); // Output: [1, 2, 3]
```

## Add an element to the end of an array

The spread operator is used to create a new array with the added element at the end.

```javascript
function addToEnd(arr, element) {
  return [...arr, element];
}
console.log(addToEnd([1, 2], 3)); // Output: [1, 2, 3]
``` 

## Remove an element from an array by index

The `slice` method is used to create two arrays before and after the specified index, and then they are concatenated.

```javascript
function removeAtIndex(arr, index) {
  return arr.slice(0, index).concat(arr.slice(index + 1));
}
console.log(removeAtIndex([1, 2, 3, 4], 2)); // Output: [1, 2, 4]
```

## Remove the first element from an array

The `slice` method is used to create a new array starting from the second element.

```javascript
function removeFirstElement(arr) {
  return arr.slice(1);
}
console.log(removeFirstElement([1, 2, 3])); // Output: [2, 3]
```

## Remove the last element from an array

The `slice` method is used to create a new array excluding the last element.

```javascript
function removeLastElement(arr) {
  return arr.slice(0, arr.length - 1);
}
console.log(removeLastElement([1, 2, 3])); // Output: [1, 2]
```

## Flatten a nested array

The `reduce` method is used to flatten a nested array by concatenating its subarrays.

```javascript
function flattenArray(arr) {
  return arr.reduce((flat, subArray) => flat.concat(subArray), []);
}
console.log(flattenArray([[1, 2], [3, 4], [5]])); // Output: [1, 2, 3, 4, 5]
```