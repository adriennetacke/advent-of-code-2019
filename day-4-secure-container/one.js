const passwordOptions = (input) => {
  let range = input.split('-').map(x => parseInt(x));
  let validOptions = {
    "total": 0,
    "validPasswords": []
  };
  
  // 168630 <= x <= 718098
  siftThroughOptions: 
  for (let i = range[0]; i <= range[1]; i++) {
    let digits = i.toString().split("").map(x => parseInt(x));

    // --> never decrease
    for (let j = 0; j < digits.length - 1; j++) {
      if (digits[j] > digits[j + 1]) {
        continue siftThroughOptions;
      }
    }

    //two adjacent digits are the same
    for (let k = 0; k < digits.length - 1; k++) {
    
      if (digits[k] === digits[k + 1]) {
        validOptions["total"] += 1;
        validOptions["validPasswords"].push(digits);
        continue siftThroughOptions;
      }
    }
  }
  
  return validOptions;
}

module.exports = passwordOptions;