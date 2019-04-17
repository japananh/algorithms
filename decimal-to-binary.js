let decimalToBinary = function(num) {
  let i = 0;
  let binary = '';

  if (isNaN(num)) return 'Not a number';
  
  while (Math.pow(2,i) <= num) {
    ++i;
  }
  
  for (let j = i - 1; j >= 0; j--) {
    if (Math.pow(2,j) <= num) {
      num -= Math.pow(2,j);
      binary += '1';
    } else {
      binary += '0';
    }
  } 
  
  return binary;
};
// decimalToBinary(10000434451323143) returns the same result as
// decimalToBinary(10000434451323144) ???