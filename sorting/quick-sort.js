function quickSort(data) {
  if (data.length < 1) {
    return [];
  }

  let left = [];
  let right = [];
  let pivot = data[0];
  
  for (let i = 1, len = data.length; i < len; i++) {
    if (data[i] < pivot) {
      left.push(data[i]);
    } else {
      right.push(data[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

module.exports.quickSort = quickSort;