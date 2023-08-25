---
layout: doc
title: Sorting and Searching - JavaScript Snippets
description: Essential for organizing and retrieving data efficiently.
head:
  - ['meta', {property: 'og:title', content:  'Sorting and Searching - JavaScript Snippets' }]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/snippets/javascript/es6-features/' }] 
  - ['meta', {name: 'twitter:title', content: 'Sorting and Searching - JavaScript Snippets'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/snippets/javascript/es6-features/'}]
---

# Sorting and Searching

These techniques are essential for organizing and finding data efficiently in arrays and other data structures.

## Bubble Sort

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

```javascript
const bubbleSort = arr => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(unsortedArray)); // Output: [11, 12, 22, 25, 34, 64, 90]
```

## Selection Sort

Selection sort is a sorting algorithm that selects the smallest (or largest) element from an unsorted list in each iteration and places it in the sorted part of the list.

```javascript
const selectionSort = arr => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log(selectionSort(unsortedArray)); // Output: [11, 12, 22, 25, 34, 64, 90]
```

## Insertion Sort

Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time, by inserting elements in their correct order.

```javascript
const insertionSort = arr => {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log(insertionSort(unsortedArray)); // Output: [11, 12, 22, 25, 34, 64, 90]
```

## Binary Search

Binary search is a fast search algorithm that finds the position of a target value within a sorted array.

```javascript
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

const sortedArray = [11, 12, 22, 25, 34, 64, 90];
console.log(binarySearch(sortedArray, 25)); // Output: 3
```

## Merge Sort

Merge sort is a divide-and-conquer sorting algorithm that divides an array into two halves, recursively sorts them, and then merges the sorted halves.

```javascript
const mergeSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  
  const merge = (left, right) => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  };
  
  return merge(mergeSort(left), mergeSort(right));
};

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log(mergeSort(unsortedArray)); // Output: [11, 12, 22, 25, 34, 64, 90]
```

## Quick Sort

Quick sort is a divide-and-conquer sorting algorithm that selects a 'pivot' element and partitions the array into two sub-arrays such that elements less than the pivot are on the left, and elements greater are on the right.

```javascript
const quickSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)];
};

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log(quickSort(unsortedArray)); // Output: [11, 12, 22, 25, 34, 64, 90]
```

## Linear Search

Linear search is a simple search algorithm that sequentially checks each element in a list until a match is found.

```javascript
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

const dataArray = [11, 12, 22, 25, 34, 64, 90];
console.log(linearSearch(dataArray, 25)); // Output: 3
```

## Counting Sort

Counting sort is an integer sorting algorithm that works by counting the number of occurrences of each element and then using that information to place elements in order.

```javascript
const countingSort = arr => {
  const max = Math.max(...

arr);
  const countArray = new Array(max + 1).fill(0);
  
  for (let num of arr) {
    countArray[num]++;
  }
  
  const sortedArray = [];
  for (let i = 0; i < countArray.length; i++) {
    while (countArray[i] > 0) {
      sortedArray.push(i);
      countArray[i]--;
    }
  }
  
  return sortedArray;
};

const unsortedArray = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(unsortedArray)); // Output: [1, 2, 2, 3, 3, 4, 8]
```

## Binary Search Tree (BST)

Binary search tree is a data structure where each node has at most two child nodes, and for each node, all elements in the left subtree are less than the node, and all elements in the right subtree are greater.

```javascript
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new TreeNode(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  search(val) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (val === current.val) return true;
      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
console.log(bst.search(7)); // Output: true
console.log(bst.search(9)); // Output: false
```

## Heap Sort

Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure to build a max-heap and repeatedly extract the maximum element from it.

```javascript
const heapify = (arr, n, i) => {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
};

const heapSort = arr => {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
};

const unsortedArray = [12, 11, 13, 5, 6, 7];
console.log(heapSort(unsortedArray)); // Output: [5, 6, 7, 11, 12, 13]
```

## Interpolation Search

Interpolation search is an improved variation of binary search, particularly useful for uniformly distributed sorted arrays.

```javascript
// Interpolation Search
const interpolationSearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    if (low === high) {
      if (arr[low] === target) {
        return low;
      }
      return -1;
    }

    const pos = low + Math.floor(((target - arr[low]) / (arr[high] - arr[low])) * (high - low));

    if (arr[pos] === target) {
      return pos;
    }

    if (arr[pos] < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  return -1;
};

const sortedArray = [11, 12, 22, 25, 34, 64, 90];
console.log(interpolationSearch(sortedArray, 25)); // Output: 3
```

## Shell Sort

Shell sort is an in-place comparison-based sorting algorithm that uses a sequence of diminishing increments to improve efficiency.

```javascript
const shellSort = arr => {
  const n = arr.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;

      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = temp;
    }

    gap = Math.floor(gap / 2);
  }

  return arr;
};

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log(shellSort(unsortedArray)); // Output: [11, 12, 22, 25, 34, 64, 90]
```

## Radix Sort

Radix sort is a non-comparative integer sorting algorithm that sorts numbers by processing individual digits.

```javascript
const getMax = arr => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const countingSortForRadix = (arr, exp) => {
  const output = new Array(arr.length).fill(0);
  const count = new Array(10).fill(0);

  for (let i = 0; i < arr.length; i++) {
    count[Math.floor(arr[i] / exp) % 10]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
   

 output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
};

const radixSort = arr => {
  const max = getMax(arr);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSortForRadix(arr, exp);
  }

  return arr;
};

const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(unsortedArray)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
```

## Jump Search

Jump search is a searching algorithm that finds the position of a target value within a sorted array by making jumps of a fixed step size and then performing linear search in the smaller interval.

```javascript
const jumpSearch = (arr, target) => {
  const n = arr.length;
  let step = Math.sqrt(n);
  let prev = 0;

  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.sqrt(n);
    if (prev >= n) {
      return -1;
    }
  }

  while (arr[prev] < target) {
    prev++;
    if (prev === Math.min(step, n)) {
      return -1;
    }
  }

  if (arr[prev] === target) {
    return prev;
  }

  return -1;
};

const sortedArray = [11, 12, 22, 25, 34, 64, 90];
console.log(jumpSearch(sortedArray, 25)); // Output: 3
```

## Exponential Search

Exponential search is a searching algorithm that works by finding a range where the target value may exist and then performing a binary search within that range.

```javascript
const binarySearchForExponential = (arr, target, left, right) => {
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

const exponentialSearch = (arr, target) => {
  const n = arr.length;
  if (arr[0] === target) {
    return 0;
  }

  let i = 1;
  while (i < n && arr[i] <= target) {
    i *= 2;
  }

  return binarySearchForExponential(arr, target, i / 2, Math.min(i, n - 1));
};

const sortedArray = [11, 12, 22, 25, 34, 64, 90];
console.log(exponentialSearch(sortedArray, 25)); // Output: 3
```

## Searching in a 2D Matrix

Searching in a 2D matrix involves finding a target value in a matrix where the rows and columns are sorted.

```javascript
const searchInMatrix = (matrix, target) => {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let row = 0;
  let col = cols - 1;

  while (row < rows && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }

  return false;
};

const matrix = [
  [1,  4,  7, 11],
  [2,  5,  8, 12],
  [3,  6,  9, 16],
  [10, 13, 14, 17]
];

console.log(searchInMatrix(matrix, 5)); // Output: true
console.log(searchInMatrix(matrix, 20)); // Output: false
```

## Find Minimum in Rotated Sorted Array

Finding the minimum element in a rotated sorted array.

```javascript
const findMinInRotatedArray = arr => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return arr[left];
};

const rotatedArray = [4, 5, 6, 7, 0, 1, 2];
console.log(findMinInRotatedArray(rotatedArray)); // Output: 0
```

## Find Peak Element

Finding a peak element in an array, which is an element that is greater than or equal to its neighbors.

```javascript
const findPeakElement = arr => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

const nums = [1, 2, 3, 1];
console.log(findPeakElement(nums)); // Output: 2
```

## Find First and Last Position of Element in Sorted Array

Finding the first and last occurrence of an element in a sorted array using binary search.

```javascript
const searchRange = (nums, target) => {
  const findFirst = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        result = mid;
        right = mid - 1;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  };

  const findLast = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        result = mid;
        left = mid + 1

;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  };

  return [findFirst(nums, target), findLast(nums, target)];
};

const sortedArray = [5, 7, 7, 8, 8, 10];
console.log(searchRange(sortedArray, 8)); // Output: [3, 4]
```

## Kth Largest Element in an Array

Finding the kth largest element in an array using a variation of quick sort.

```javascript
const findKthLargest = (nums, k) => {
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  const partition = (arr, left, right) => {
    const pivot = arr[right];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
      if (arr[i] >= pivot) {
        swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }

    swap(arr, partitionIndex, right);
    return partitionIndex;
  };

  const quickSelect = (arr, left, right, k) => {
    const pivotIndex = partition(arr, left, right);

    if (pivotIndex === k - 1) {
      return arr[pivotIndex];
    } else if (pivotIndex < k - 1) {
      return quickSelect(arr, pivotIndex + 1, right, k);
    } else {
      return quickSelect(arr, left, pivotIndex - 1, k);
    }
  };

  return quickSelect(nums, 0, nums.length - 1, k);
};

const nums = [3, 2, 1, 5, 6, 4];
console.log(findKthLargest(nums, 2)); // Output: 5
```