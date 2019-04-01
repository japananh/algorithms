const bubbleSort = require('./bubble-sort');
const selectionSort = require('./selection-sort');
const insertionSort = require('./insertion-sort');
const mergeSort = require('./merge-sort');
const quickSort = require('./quick-sort');

let arr = [10, 34, 53, -33, 100, 13, 90.45, -3000, 4.89];

bubbleSort.bubbleSort(arr);
console.log(selectionSort.selectionSort(bubbleSort.bubbleSort(arr))); // this function has an issue
insertionSort.insertionSort(arr);
mergeSort.mergeSort(arr);
quickSort.quickSort(arr);
