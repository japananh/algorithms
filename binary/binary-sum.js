function reverseString(s) {
  return s.split('').reverse().join('');
}

let binarySum = function(a, b) {
  if (!a || !b) return 'Invalid value!';

  let c = 0;
  let digit;
  let len = Math.max(a.length, b.length);
  let sum = '';

  for (let i = len; i >= 0; i--) {
    digit = parseInt(a[i]) + parseInt(b[i]) + c;
    switch (digit) {
      case 0:
        sum += '0';
        break;
      case 1:
        sum += '1';
        break;
      case 2:
        sum += '0';
        c = 1;
        break;
      case 3:
        sum += '1';
        c = 1;
        break;
      default:
        return 'Invalid binary!'
    }    
  }

  if (c === 1) {
    sum += '1';
  }

  return reverseString(sum);  
}