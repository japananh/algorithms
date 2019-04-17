let binaryToDecimal = function(binary) {
  if (!binary) return 'Invaild value!';

  let decimal = 0;
  let len = binary.length

  for (let i = 0; i < len; i++) {
    if (binary[i] === '1') {
      decimal += Math.pow(2,len - i - 1);
    }
  }

  return decimal;
}

// binaryToDecimal('100011100001110101011110010111000100100001100100000111')
// returns the same result (10000434451323144) as 
// binaryToDecimal('100011100001110101011110010111000100100001100100001000')
// ???