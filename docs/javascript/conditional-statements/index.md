---
layout: doc
title: Conditional Statements | JavaScript Tutorial
description: Explore the different types of conditional statements and how to effectively use them.
head:
  - ['meta', {property: 'og:title', content:  'Conditional Statements - JavaScript Tutorial' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/javascript/conditional-statements/' }] 
  - ['meta', {name: 'twitter:title', content: 'Conditional Statements - JavaScript Tutorial'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/javascript/conditional-statements/'}]
---

# Conditional Statements

Conditional statements in JavaScript allow you to make decisions in your code. By using these statements, you can execute different blocks of code based on certain conditions.

## If Statement

The `if` statement is used to execute a block of code only if a specified condition evaluates to true. If the condition is false, the code block is skipped.

```javascript
let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
}
```

## If-Else Statement

The `if-else` statement allows you to execute one block of code if a condition is true and another block if the condition is false.

```javascript
let score = 85;

if (score >= 90) {
    console.log("You got an A!");
} else {
    console.log("You did not get an A.");
}
```

## If-Else If-Else Statement

You can use multiple `else if` clauses to test multiple conditions in a sequence and execute the appropriate block of code.

```javascript
let temperature = 28;

if (temperature > 30) {
    console.log("It's a hot day!");
} else if (temperature > 20) {
    console.log("It's a pleasant day.");
} else {
    console.log("It's a bit chilly.");
}
```

## Ternary Operator (Conditional Operator)

The ternary operator is a concise way to write simple conditional statements. It has the form `condition ? expression_if_true : expression_if_false`.

```javascript
let isMember = true;

let discount = isMember ? 10 : 0;
console.log("Discount:", discount);
```

## Switch Statement

The `switch` statement allows you to evaluate an expression against multiple possible case values. It provides an alternative to using multiple `if` and `else if` statements.

```javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It's the end of the workweek!");
        break;
    default:
        console.log("It's a regular day.");
}
```

## Practice Exercises

1. Write an `if` statement that checks if a given number is positive, negative, or zero.
2. Use an `if-else` statement to determine whether a user's age is a teen (13-19) or not.
3. Given the `month` variable containing the current month (as a string), use a `switch` statement to log the number of days in that month.
4. Create a ternary operator that assigns the message "Welcome!" to a variable named `greeting` if the user is logged in, otherwise assigns "Please log in."

Conditional statements allow you to add logic and decision-making to your code. They are essential for building interactive and dynamic applications. In the next section, we'll delve into loops, a powerful concept that enables you to repeat code blocks multiple times. Keep practicing and experimenting with conditional statements to become comfortable with their usage!