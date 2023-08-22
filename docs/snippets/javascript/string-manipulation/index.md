---
layout: doc
title: String Manipulation - JavaScript Snippets
description: Crucial for text processing and formatting.
head:
  - ['meta', {property: 'og:title', content:  'String Manipulation - JavaScript Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/javascript/string-manipulation/' }] 
  - ['meta', {name: 'twitter:title', content: 'String Manipulation - JavaScript Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/javascript/string-manipulation/'}]
---

# String Manipulation

## Reverse a string

The `reverseString` function splits the string into an array of characters, reverses the array, and then joins the characters back together.

```javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('hello')); // Output: 'olleh'
```

## Check for palindrome

The `isPalindrome` function removes non-alphanumeric characters, converts the string to lowercase, and then checks if the cleaned string is the same as its reverse.

```javascript
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}
console.log(isPalindrome('racecar')); // Output: true
```

## Capitalize the first letter of a string

The `capitalizeFirstLetter` function capitalizes the first letter of the string by using string manipulation methods.

```javascript
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter('hello')); // Output: 'Hello'
```

## Convert string to title case

The `toTitleCase` function uses a regular expression to match the first letter of each word and then converts it to uppercase.

```javascript
function toTitleCase(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(toTitleCase('hello world')); // Output: 'Hello World'
```

## Remove all whitespace from a string

The `removeWhitespace` function uses a regular expression to replace all whitespace characters with an empty string.

```javascript
function removeWhitespace(str) {
  return str.replace(/\s/g, '');
}
console.log(removeWhitespace('  hello   world ')); // Output: 'helloworld'
```

## Count the occurrences of a substring in a string

The `countSubstringOccurrences` function uses a regular expression with the global flag to find all occurrences of a substring and then counts them.

```javascript
function countSubstringOccurrences(str, substring) {
  const regex = new RegExp(substring, 'g');
  return (str.match(regex) || []).length;
}
console.log(countSubstringOccurrences('hello world hello', 'hello')); // Output: 2
```

## Truncate a string with ellipsis

The `truncateString` function truncates a string to a specified length and adds ellipsis if necessary.

```javascript
function truncateString(str, maxLength) {
  return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}
console.log(truncateString('Lorem ipsum dolor sit amet', 10)); // Output: 'Lorem ipsu...'
```

## Remove vowels from a string

The `removeVowels` function uses a regular expression to replace all vowel characters with an empty string.

```javascript
function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, '');
}
console.log(removeVowels('hello world')); // Output: 'hll wrld'
```

## Convert a string to lowercase

The `toLowerCase` function converts all characters in the string to lowercase.

```javascript
function toLowerCase(str) {
  return str.toLowerCase();
}
console.log(toLowerCase('Hello World')); // Output: 'hello world'
```

## Convert a string to uppercase

The `toUpperCase` function converts all characters in the string to uppercase.

```javascript
function toUpperCase(str) {
  return str.toUpperCase();
}
console.log(toUpperCase('Hello World')); // Output: 'HELLO WORLD'
```

## Count the number of words in a string

The `countWords` function splits the string into an array of words using a regular expression and counts the elements.

```javascript
function countWords(str) {
  return str.split(/\s+/).length;
}
console.log(countWords('Hello world')); // Output: 2
```

## Replace all occurrences of a substring in a string

The `replaceAllOccurrences` function splits the string by the search substring and then joins the array using the replacement substring.

```javascript
function replaceAllOccurrences(str, search, replacement) {
  return str.split(search).join(replacement);
}
console.log(replaceAllOccurrences('Hello, world!', 'o', 'i')); // Output: 'Helli, wirld!'
```

## Check if a string contains a substring

The `includes` method checks if a given substring is present in the string.

```javascript
function containsSubstring(str, substring) {
  return str.includes(substring);
}
console.log(containsSubstring('hello world', 'world')); // Output: true
```

## Remove leading and trailing whitespace from a string

The `trim` method removes leading and trailing whitespace characters from the string.

```javascript
function trimWhitespace(str) {
  return str.trim();
}
console.log(trimWhitespace('  hello world  ')); // Output: 'hello world'
```

## Pad a string with a specified character to a certain length

The `padStart` and `padEnd` methods pad the string with the specified padding character to achieve the desired length.

```javascript
function padString(str, length, paddingChar) {
  return str.padStart(length, paddingChar).padEnd(length, paddingChar);
}
console.log(padString('hello', 10, '-')); // Output: '---hello---'
```

##  Split a string into an array of substrings using a delimiter

The `split` method divides the string into an array of substrings based on the specified delimiter.

```javascript
function splitString(str, delimiter) {
  return str.split(delimiter);
}
console.log(splitString('apple,banana,orange', ',')); // Output: ['apple', 'banana', 'orange']
```

## Concatenate multiple strings into a single string

The `join` method combines the provided strings into a single string.

```javascript
function concatenateStrings(...args) {
  return args.join('');
}
console.log(concatenateStrings('Hello', ' ', 'World')); // Output: 'Hello World'
```

## Convert a string to an array of characters

The `Array.from` method converts a string into an array of characters.

```javascript
function stringToArray(str) {
  return Array.from(str);
}
console.log(stringToArray('hello')); // Output: ['h', 'e', 'l', 'l', 'o']
```

## Extract a substring from a string

The `substr` method extracts a substring from the string starting at the specified index with the given length.

```javascript
function extractSubstring(str, start, length) {
  return str.substr(start, length);
}
console.log(extractSubstring('hello world', 6, 5)); // Output: 'world'
```

## Convert a string to an array of words

The `split` method with a regular expression splits the string into an array of words based on whitespace.

```javascript
function stringToWords(str) {
  return str.split(/\s+/);
}
console.log(stringToWords('Hello world')); // Output: ['Hello', 'world']
```