function mergeSort(data) {
  if (data.length < 2) {
    return data;
  }

  let midPoint = Math.round(data.length / 2);

  return merge(
    mergeSort(data.slice(0, midPoint)), 
    mergeSort(data.slice(midPoint))
  );
}

function merge(left, right) {
  let sortedData = [];
  
  while(left.length && right.length) {
    sortedData.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  while(left.length) {
    sortedData.push(left.shift());
  }

  while(right.length) {
    sortedData.push(right.shift());
  }

  return sortedData;
}

module.exports.mergeSort = mergeSort;
module.exports.merge = merge;