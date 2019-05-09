function insertionSort(arr) {
  let key, i;

  for (let j = 1; j < arr.length; j++) {
    key = arr[j];
    i = j - 1;

    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i -= 1;
    }

    arr[i + 1] = key;
  }

  return arr;
}

function binarySearch(arr, item, low, high) {
  if (high <= low) {
    return item > arr[low] ? low + 1 : low;
  }

  let mid = Math.round((low + high) / 2);

  if (item === arr[mid]) {
    return mid + 1;
  }

  if (item > arr[mid]) {
    return binarySearch(arr, item, mid + 1, high);
  }

  return binarySearch(arr, item, low, mid - 1);
}

function binaryInsertionSort(arr) {
  let key, i, location;

  for (let j = 1; j < arr.length; j++) {
    key = arr[j];
    i = j - 1;
    // Find location where key should be inserted
    location = binarySearch(arr, key, 0, i);

    while (i >= location) {
      arr[i + 1] = arr[i];
      i--;
    }

    arr[i + 1] = key;
  }

  return arr;
}

module.exports.insertionSort = insertionSort;
module.exports.binarySearch = binarySearch;
module.exports.binaryInsertionSort = binaryInsertionSort;
