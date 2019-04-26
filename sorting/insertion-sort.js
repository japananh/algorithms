function insertionSort(data) {
  let key, i;

  for (let j = 1; j < data.length; j++) {
    key = data[j];
    i = j - 1;

    while(i >= 0 && data[i] > key) {
      data[i + 1] = data[i];
      i -= 1;
    }
    
    data[i + 1] = key;
  }

  return data;
}

module.exports.insertionSort = insertionSort;