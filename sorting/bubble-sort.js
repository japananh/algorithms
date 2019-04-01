const swap = require('./swap');

function bubbleSort(data) {
  let isSwapped;
  
  for (let i = 0, len = data.length; i < len - 1; i++) {
    isSwapped = false;

    for (let j = 0; j < len - 1 - i; j++) {
      if (data[j] > data[j + 1]) {
        swap.swap(data, j, j + 1);
        isSwapped = true;
      }
    }

    if (isSwapped === false) {
      return data;
    }
  }

  return data;
}

module.exports.bubbleSort = bubbleSort;