const swap = require('./swap.js');

function selectionSort(arr) {
  let min = 1;
  
  for (let i = 0, len = arr.length; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    
    if (arr[i] > arr[min]) {
      swap.swap(arr, i, min);
    }
    
    ++min;
  }

  return arr;
}

module.exports.selectionSort = selectionSort;