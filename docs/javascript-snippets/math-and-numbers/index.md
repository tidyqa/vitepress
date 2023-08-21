---
layout: doc
last Updated: true
title: Math and Numbers - JavaScript Snippets
description: Fundamental for handling mathematical calculations and operations.
head:
  - ['meta', {property: 'og:title', content:  'Math and Numbers - JavaScript Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/javascript-snippets/math-and-numbers/' }] 
  - ['meta', {name: 'twitter:title', content: 'Math and Numbers - JavaScript Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/javascript-snippets/math-and-numbers/'}]
---

# Math and Numbers

## Check if a number is even

This function checks if a given number is even by using the modulo operator to check if the remainder when divided by 2 is 0.

```javascript
function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false
```

## Check if a number is prime

This function checks if a number is prime by iterating from 2 to the square root of the number and checking for divisibility.

```javascript
function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
```

## Calculate the factorial of a number

The `factorial` function recursively calculates the factorial of a given number `n`.

```javascript
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5)); // Output: 120
```

## Generate a random integer between a range

The function generates a random integer between `min` and `max` (inclusive) using the `Math.random` function.

```javascript
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInRange(1, 10)); // Output: Random number between 1 and 10
```

## Calculate the sum of an array of numbers

The `reduce` function accumulates the sum of array elements starting from an initial value of 0.

```javascript
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4])); // Output: 10
```

## Calculate the average of an array of numbers

The average is calculated by dividing the sum of the array elements by the array length.

```javascript
function calculateAverage(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}
console.log(calculateAverage([4, 6, 8])); // Output: 6
```

## Find the maximum value in an array of numbers

The spread operator `...` is used to spread the array elements as arguments to the `Math.max` function, which returns the maximum value.

```javascript
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([3, 9, 2, 7])); // Output: 9
```

## Find the minimum value in an array of numbers

The spread operator `...` is used to spread the array elements as arguments to the `Math.min` function, which returns the minimum value.

```javascript
function findMin(arr) {
  return Math.min(...arr);
}
console.log(findMin([3, 9, 2, 7])); // Output: 2
```

## Round a number to a specified decimal place

The function multiplies the number by a factor to shift the decimal point, rounds the result, and then shifts the decimal point back.

```javascript
function roundToDecimal(number, decimalPlaces) {
  const factor = 10 ** decimalPlaces;
  return Math.round(number * factor) / factor;
}
console.log(roundToDecimal(3.14159, 2)); // Output: 3.14
```

## Calculate the power of a number

The `Math.pow` function calculates the power of a base raised to an exponent.

```javascript
function power(base, exponent) {
  return Math.pow(base, exponent);
}
console.log(power(2, 3)); // Output: 8
```

## Calculate the square root of a number

The `Math.sqrt` function calculates the square root of a given number.

```javascript
function squareRoot(number) {
  return Math.sqrt(number);
}
console.log(squareRoot(25)); // Output: 5
```

## Calculate the absolute value of a number

The `Math.abs` function returns the absolute value of a number.

```javascript
function absoluteValue(number) {
  return Math.abs(number);
}
console.log(absoluteValue(-10)); // Output: 10
```

## Calculate the logarithm of a number

The function calculates the logarithm of a number with a specified base using the change of base formula.

```javascript
function logarithm(number, base) {
  return Math.log(number) / Math.log(base);
}
console.log(logarithm(8, 2)); // Output: 3
```

## Generate a random floating-point number between 0 and 1

The `Math.random` function generates a random floating-point number between 0 (inclusive) and 1 (exclusive).

```javascript
function randomFloat() {
  return Math.random();
}
console.log(randomFloat()); // Output: Random float between 0 and 1
```

## Convert degrees to radians

The function converts degrees to radians using the conversion factor `(π / 180)`.

```javascript
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}
console.log(degreesToRadians(180)); // Output: 3.141592653589793
```

## Convert radians to degrees

The function converts radians to degrees using the conversion factor `(180 / π)`.

```javascript
function radiansToDegrees(radians) {
  return radians * (180 / Math.PI);
}
console.log(radiansToDegrees(Math.PI)); // Output: 180
```

## Calculate the hypotenuse of a right triangle

The function uses the Pythagorean theorem to calculate the length of the hypotenuse in a right triangle.

```javascript
function hypotenuse(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}
console.log(hypotenuse(3, 4)); // Output: 5
```

## Limit a number within a specified range

The `clamp` function restricts a number to be within the specified range.

```javascript
function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
}
console.log(clamp(10, 0, 5)); // Output: 5
```

## Calculate the greatest common divisor (GCD) of two numbers

The function calculates the GCD using the Euclidean algorithm and recursion.

```javascript
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
console.log(gcd(48, 18)); // Output: 6
```

## Calculate the least common multiple (LCM) of two numbers

The function calculates the LCM using the relationship between GCD and LCM. The GCD function from snippet 19 is used here.

```js
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
console.log(lcm(4, 6)); // Output: 12
```

_Feel free to use and modify these code snippets for various mathematical calculations and operations in your JavaScript projects._


 