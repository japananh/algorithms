const swap = require('./swap');

function insertionSort(data) {
  for (let i = 1, len = data.length; i < len; i++) {
    for (let j = i; j >= 0; j--) {
      if (data[j - 1] > data[j]) {
        swap.swap(data, j - 1, j);
      }
    }
  }

  return data;
}

module.exports.insertionSort = insertionSort;