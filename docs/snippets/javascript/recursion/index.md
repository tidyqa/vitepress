---
layout: doc
title: Recursion - JavaScript Snippets
description: Useful for solving problems that involve repeated subtasks.
head:
  - ['meta', {property: 'og:title', content:  'Recursion - JavaScript Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/javascript/recursion/' }] 
  - ['meta', {name: 'twitter:title', content: 'Recursion - JavaScript Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/javascript/recursion/'}]
---

# Recursion

Recursion involves solving problems by breaking them down into smaller instances of the same problem. It's useful for tasks that have a recursive structure.

## Factorial Calculation

Calculate the factorial of a given positive integer using recursion.

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

## Fibonacci Sequence

Generate the nth number in the Fibonacci sequence using recursion.

```javascript
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(6)); // Output: 8
```

## Countdown

Create a countdown using recursion.

```javascript
function countdown(n) {
  if (n <= 0) {
    console.log("Done!");
  } else {
    console.log(n);
    countdown(n - 1);
  }
}

countdown(5); // Output: 5 4 3 2 1 Done!
```

## Sum of Array

Calculate the sum of an array of numbers using recursion.

```javascript
function sumArray(arr, index = 0) {
  if (index === arr.length) {
    return 0;
  } else {
    return arr[index] + sumArray(arr, index + 1);
  }
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
```

## Power Calculation

Calculate the result of raising a base to an exponent using recursion.

```javascript
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3)); // Output: 8
```

## Palindrome Check

Check if a string is a palindrome using recursion.

```javascript
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  } else if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  }
}

console.log(isPalindrome("racecar")); // Output: true
```

## Sum of Digits

Calculate the sum of the digits of a positive integer using recursion.

```javascript
function sumOfDigits(n) {
  if (n < 10) {
    return n;
  } else {
    return n % 10 + sumOfDigits(Math.floor(n / 10));
  }
}

console.log(sumOfDigits(12345)); // Output: 15
```

## GCD (Greatest Common Divisor)

Calculate the Greatest Common Divisor of two numbers using recursion.

```javascript
function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

console.log(gcd(48, 18)); // Output: 6
```

## Exponentiation by Squaring

Calculate exponentiation using the exponentiation by squaring technique.

```javascript
function expBySquaring(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else if (exponent % 2 === 0) {
    const temp = expBySquaring(base, exponent / 2);
    return temp * temp;
  } else {
    return base * expBySquaring(base, exponent - 1);
  }
}

console.log(expBySquaring(2, 5)); // Output: 32
```

## Binary Search

Implement binary search on a sorted array using recursion.

```javascript
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right);
  } else {
    return binarySearch(arr, target, left, mid - 1);
  }
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(sortedArray, 7)); // Output: 3
```

## Flatten Nested Arrays

Flatten a nested array using recursion.

```javascript
function flattenArray(arr) {
  let result = [];

  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  });

  return result;
}

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]
```

## Tree Traversal - Inorder

Perform inorder traversal on a binary tree using recursion.

```javascript
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function inorderTraversal(root) {
  if (root === null) {
    return [];
  }
  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(inorderTraversal(root)); // Output: [4, 2, 5, 1, 3]
```

## Tree Traversal - Preorder

Perform preorder traversal on a binary tree using recursion.

```javascript
function preorderTraversal(root) {
  if (root === null) {
    return [];
  }
  return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
}

console.log(preorderTraversal(root)); // Output: [1, 2, 4, 5, 3]
```

## Tree Traversal - Postorder

Perform postorder traversal on a binary tree using recursion.

```javascript
function postorderTraversal(root) {
  if (root === null) {
    return [];
  }
  return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];
}

console.log(postorderTraversal(root)); // Output: [4, 5, 2, 3, 1]
```

## Flatten Binary Tree to Linked List

Flatten a binary tree into a linked list in-place using recursion.

```javascript
function flatten(root) {
  if (!root) {
    return;
  }

  if (root.left) {
    const rightSubtree

 = root.right;
    root.right = root.left;
    root.left = null;

    let current = root.right;
    while (current.right) {
      current = current.right;
    }

    current.right = rightSubtree;
  }

  flatten(root.right);
}

// Example binary tree
const treeRoot = new TreeNode(1);
treeRoot.left = new TreeNode(2);
treeRoot.left.left = new TreeNode(3);
treeRoot.left.right = new TreeNode(4);
treeRoot.right = new TreeNode(5);
treeRoot.right.right = new TreeNode(6);

flatten(treeRoot);
console.log(treeRoot); // Tree is flattened into a linked list
```

## Sum of Even Nodes in Binary Tree

Calculate the sum of all even-valued nodes in a binary tree using recursion.

```javascript
function sumEvenNodes(root) {
  if (!root) {
    return 0;
  }

  let sum = root.val % 2 === 0 ? root.val : 0;
  sum += sumEvenNodes(root.left);
  sum += sumEvenNodes(root.right);

  return sum;
}

// Example binary tree
const treeRoot = new TreeNode(2);
treeRoot.left = new TreeNode(3);
treeRoot.left.left = new TreeNode(10);
treeRoot.left.right = new TreeNode(8);
treeRoot.right = new TreeNode(5);
treeRoot.right.right = new TreeNode(6);

console.log(sumEvenNodes(treeRoot)); // Output: 26 (2 + 10 + 8 + 6)
```

## Tower of Hanoi

Solve the Tower of Hanoi puzzle using recursion.

```javascript
function towerOfHanoi(n, source, auxiliary, destination) {
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${destination}`);
    return;
  }

  towerOfHanoi(n - 1, source, destination, auxiliary);
  console.log(`Move disk ${n} from ${source} to ${destination}`);
  towerOfHanoi(n - 1, auxiliary, source, destination);
}

towerOfHanoi(3, 'A', 'B', 'C');
```

## Recursive Object Search

Search for a specific property in a nested object using recursion.

```javascript
function findPropertyValue(obj, key) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (prop === key) {
        return obj[prop];
      } else if (typeof obj[prop] === 'object') {
        const result = findPropertyValue(obj[prop], key);
        if (result !== undefined) {
          return result;
        }
      }
    }
  }
  return undefined;
}

const nestedObj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4
    }
  }
};

console.log(findPropertyValue(nestedObj, 'f')); // Output: 4
```

## Memoized Fibonacci

Calculate the nth Fibonacci number using memoization to improve performance.

```javascript
function fibonacciMemo(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }

  if (n <= 1) {
    return n;
  }

  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

console.log(fibonacciMemo(6)); // Output: 8
```

## Recursive Object Clone

Create a deep clone of an object using recursion.

```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    const newArr = [];
    for (let i = 0; i < obj.length; i++) {
      newArr[i] = deepClone(obj[i]);
    }
    return newArr;
  }

  const newObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}

const originalObj = {
  a: 1,
  b: { c: 2 },
  d: [3, 4]
};

const clonedObj = deepClone(originalObj);
console.log(clonedObj); // Output: Same structure as originalObj
```

Feel free to use these code snippets for your reference and experimentation with recursion in JavaScript!