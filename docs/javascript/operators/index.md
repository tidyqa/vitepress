---
layout: doc
title: Operators | JavaScript Tutorial
description: Explore various types of operators and their usage.
head:
  - ['meta', {property: 'og:title', content:  'Operators - JavaScript Tutorial' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/javascript/operators/' }] 
  - ['meta', {name: 'twitter:title', content: 'Operators - JavaScript Tutorial'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/javascript/operators/'}]
---

# Operators

Operators in JavaScript are symbols used to perform operations on variables and values. They allow you to manipulate data, perform calculations, compare values, and more.

## Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations on numeric values:

- **Addition (+):** Adds two values.
- **Subtraction (-):** Subtracts the right operand from the left operand.
- **Multiplication (*):** Multiplies two values.
- **Division (/):** Divides the left operand by the right operand.
- **Modulus (%):** Returns the remainder of the division of the left operand by the right operand.

```javascript
let a = 10;
let b = 5;

let sum = a + b;       // 15
let difference = a - b; // 5
let product = a * b;    // 50
let quotient = a / b;   // 2
let remainder = a % b;  // 0
```

## Comparison Operators

Comparison operators are used to compare values and return a Boolean result:

- **Equal (==):** Returns true if the operands are equal.
- **Not Equal (!=):** Returns true if the operands are not equal.
- **Strict Equal (===):** Returns true if the operands are equal and have the same data type.
- **Strict Not Equal (!==):** Returns true if the operands are not equal or have different data types.
- **Greater Than (>):** Returns true if the left operand is greater than the right operand.
- **Less Than (<):** Returns true if the left operand is less than the right operand.
- **Greater Than or Equal (>=):** Returns true if the left operand is greater than or equal to the right operand.
- **Less Than or Equal (<=):** Returns true if the left operand is less than or equal to the right operand.

```javascript
let x = 10;
let y = 5;

console.log(x == y);    // false
console.log(x != y);    // true
console.log(x === y);   // false
console.log(x !== y);   // true
console.log(x > y);     // true
console.log(x < y);     // false
console.log(x >= y);    // true
console.log(x <= y);    // false
```

## Logical Operators

Logical operators are used to combine or negate Boolean values:

- **AND (&&):** Returns true if both operands are true.
- **OR (||):** Returns true if at least one operand is true.
- **NOT (!):** Negates the value of an operand.

```javascript
let sunny = true;
let warm = true;

console.log(sunny && warm); // true
console.log(sunny || warm); // true
console.log(!sunny);        // false
```

## Assignment Operators

Assignment operators are used to assign values to variables:

- **Assignment (=):** Assigns the value on the right to the variable on the left.
- **Addition Assignment (+=):** Adds the right operand to the variable and assigns the result.
- **Subtraction Assignment (-=):** Subtracts the right operand from the variable and assigns the result.
- **Multiplication Assignment (*=):** Multiplies the variable by the right operand and assigns the result.
- **Division Assignment (/=):** Divides the variable by the right operand and assigns the result.
- **Modulus Assignment (%=):** Calculates the modulus and assigns the result.

```javascript
let num = 5;

num += 3;  // num is now 8
num -= 2;  // num is now 6
num *= 4;  // num is now 24
num /= 3;  // num is now 8
num %= 5;  // num is now 3
```

## Increment and Decrement Operators

Increment (`++`) and decrement (`--`) operators are used to increase or decrease a variable's value by 1:

```javascript
let count = 0;

count++;  // count is now 1
count--;  // count is now 0
```

## Practice Exercises

1. Calculate the area of a rectangle with a width of 10 and a height of 6 using appropriate arithmetic operators.
2. Compare the values 15 and "15" using a strict equality operator and log the result.
3. Given two Boolean variables `isRainy` and `isCold`, use logical operators to determine if you should stay indoors.
4. Increment a variable named `counter` by 1 and then decrement it by 2.
5. Assign the value of 20 to a variable named `total` and then calculate its modulus with 7.

Operators are fundamental tools for manipulating data and controlling program flow in JavaScript. By understanding how to use different types of operators, you'll be able to perform a wide range of tasks in your programs.