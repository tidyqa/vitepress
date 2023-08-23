---
layout: doc
title: Conditional Statements - JavaScript Snippets
description: Vital for making decisions in your code.
head:
  - ['meta', {property: 'og:title', content:  'Conditional Statements - JavaScript Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/javascript/conditional-statements/' }] 
  - ['meta', {name: 'twitter:title', content: 'Conditional Statements - JavaScript Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/javascript/conditional-statements/'}]
---

# Conditional Statements

Conditional statements allow you to make decisions in your code based on certain conditions, enabling different paths of execution.

## Basic If-Else Statement

A simple example of using an `if-else` statement to determine if a number is even or odd.

```javascript
function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even.`);
  } else {
    console.log(`${number} is odd.`);
  }
}

evenOrOdd(5); // Output: 5 is odd.
```

## Multiple Conditions with Else If

Using an `else if` statement to check multiple conditions and provide different responses.

```javascript
function checkGrade(grade) {
  if (grade >= 90) {
    console.log('A');
  } else if (grade >= 80) {
    console.log('B');
  } else if (grade >= 70) {
    console.log('C');
  } else {
    console.log('F');
  }
}

checkGrade(85); // Output: B
```

## Ternary Operator

Using a ternary operator to provide a quick conditional value assignment.

```javascript
function isAdult(age) {
  const status = age >= 18 ? 'Adult' : 'Minor';
  console.log(status);
}

isAdult(22); // Output: Adult
```

## Logical AND (&&) in Condition

Using logical `AND` to check `if` two conditions are both true.

```javascript
function canDrive(age, hasLicense) {
  if (age >= 18 && hasLicense) {
    console.log('You can drive.');
  } else {
    console.log('You cannot drive.');
  }
}

canDrive(20, true); // Output: You can drive.
```

## Logical OR (||) in Condition

Using logical `OR` to check `if` at least one condition is true.

```javascript
function isWeekend(day) {
  if (day === 'Saturday' || day === 'Sunday') {
    console.log('It\'s the weekend!');
  } else {
    console.log('It\'s a weekday.');
  }
}

isWeekend('Sunday'); // Output: It's the weekend!
```

## Nested If Statements

Using nested `if` statements to check multiple conditions with different levels of specificity.

```javascript
function assessTicket(speed) {
  if (speed > 100) {
    console.log('Reckless driving');
  } else {
    if (speed > 80) {
      console.log('Speeding ticket');
    } else {
      console.log('Safe driving');
    }
  }
}

assessTicket(95); // Output: Speeding ticket
```

## Switch Statement

Using a `switch` statement to handle multiple cases efficiently.

```javascript
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 0:
      console.log('Sunday');
      break;
    case 1:
      console.log('Monday');
      break;
    // ... other cases ...
    default:
      console.log('Invalid day');
  }
}

getDayName(3); // Output: Wednesday
```

## Using the Default Case

Using the `default` case in a `switch` statement for handling unspecified cases.

```javascript
function getAnimalSound(animal) {
  switch (animal) {
    case 'dog':
      console.log('Woof woof!');
      break;
    case 'cat':
      console.log('Meow meow!');
      break;
    default:
      console.log('Unknown animal');
  }
}

getAnimalSound('cat'); // Output: Meow meow!
```

## Checking for Empty or Undefined Values

Using a conditional statement to check if a variable is empty or undefined.

```javascript
function printMessage(message) {
  if (!message) {
    console.log('No message provided.');
  } else {
    console.log(message);
  }
}

printMessage(); // Output: No message provided.
```

## Checking Object Properties

Using conditional statements to check for the presence of properties in an object.

```javascript
function printPersonInfo(person) {
  if (person.name && person.age) {
    console.log(`${person.name} is ${person.age} years old.`);
  } else {
    console.log('Incomplete person information.');
  }
}

const person = { name: 'Alice', age: 30 };
printPersonInfo(person); // Output: Alice is 30 years old.
```

## Short-Circuit Evaluation

Using short-circuit evaluation to perform conditional actions efficiently.

```javascript
function greetUser(username) {
  const user = username || 'Guest';
  console.log(`Welcome, ${user}!`);
}

greetUser('John'); // Output: Welcome, John!
```

## Checking Array Length

Using conditional statements to check if an array is `empty` or has elements.

```javascript
function printArrayContents(arr) {
  if (arr.length === 0) {
    console.log('Array is empty.');
  } else {
    console.log('Array contents:', arr);
  }
}

printArrayContents([1, 2, 3]); // Output: Array contents: [1, 2, 3]
```

## Using the "Not" Operator (!)

Using the `not` operator to reverse a boolean value.

```javascript
function isFalsy(value) {
  if (!value) {
    console.log('Value is falsy.');
  } else {
    console.log('Value is truthy.');
  }
}

isFalsy(0); // Output: Value is falsy.
```

## Checking if a String Contains a Substring

Using the `includes` method to check if a string contains a specific substring.

```javascript
function hasKeyword(text, keyword) {
  if (text.includes(keyword)) {
    console.log(`Text contains the keyword "${keyword}".`);
  } else {
    console.log(`Text does not contain the keyword "${keyword}".`);
  }
}

hasKeyword('Hello, world!', 'world'); // Output: Text contains the keyword "world".
```

## Using the "Not Equal" Operator (!=)

Using the `not equal` operator to check if two values are different.

```javascript
function isNotZero(value) {
  if (value != 0) {
    console.log(`${value} is not equal to zero.`);
  } else {
    console.log(`${value} is equal to zero.`);
  }
}

isNotZero(5); // Output: 5 is not equal to zero.
```

## Chaining Multiple Conditions

Chaining multiple conditions using logical operators.

```javascript
function assessLoanEligibility(income, creditScore) {
  if (income > 50000 && creditScore >= 700) {
    console.log('You are eligible for a loan.');
  } else {
    console.log('You are not eligible for a loan.');
  }
}

assessLoanEligibility(60000, 720); // Output: You are eligible for a loan.
```

## Using the "Greater Than or Equal To" Operator (>=)

Using the `greater than` or `equal to` operator to check if a value is within a certain range.

```javascript
function assessTemperature(temp) {
  if (temp >= 25) {
    console.log('It\'s a warm day.');
  } else {
    console.log('It\'s a cool day.');
  }
}

assessTemperature(28); // Output: It's a warm day.
```

## Combining Multiple Conditions

Combining multiple conditions using logical operators.

```javascript
function isPositiveAndEven(num) {
  if (num > 0 && num % 2 === 0) {
    console.log(`${num} is a positive even number.`);
  } else {
    console.log(`${num} is not a positive even number.`);
  }
}

isPositiveAndEven(6); // Output: 6 is a positive even number.
```

## Checking for Undefined or Null

Using conditional statements to check for `undefined` or `null` values.

```javascript
function printMessage(message) {
  if (message === undefined || message === null) {
    console.log('No message provided.');
  } else {
    console.log(message);
  }
}

printMessage(null); // Output: No message provided.
```

## Checking for Object Property Existence

Using the `in` operator to check if a property exists in an object.

```javascript
function hasProperty(person, property) {
  if (property in person) {
    console.log(`Person has the property "${property}".`);
  } else {
    console.log(`Person does not have the property "${property}".`);
  }
}

const person = { name: 'Bob', age: 25 };
hasProperty(person, 'age'); // Output: Person has the property "age".
```

_Feel free to use these code snippets for educational purposes. They cover a range of scenarios where conditional statements are commonly used in JavaScript programming._