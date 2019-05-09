function selectionSort(arr) {
  let min, index;

  for (let i = 0; i < arr.length - 1; i++) {
    min = arr[i + 1];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        index = j;
      }
    }

    if (min < arr[i]) {
      arr[index] = arr[i];
      arr[i] = min;
    }
  }

  return arr;
}

module.exports.selectionSort = selectionSort;
