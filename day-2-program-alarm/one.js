const intcode = (input, restore = false, seedOne = 12, seedTwo = 2) => {
  let converted = input
    .split(',')
    .map(x => parseInt(x.trim()));
  
  if (restore) {
    converted[1] = seedOne;
    converted[2] = seedTwo;
  }
  
  let i = 0;
  let opcode = converted[i];

  while (opcode !== 99) {
    opcode = converted[i];

    let firstPosition = converted[i + 1];
    let secondPosition = converted[i + 2];
    let finalPosition = converted[i + 3];

    switch (opcode) {
      case 1: {
        const sum = converted[firstPosition] + converted[secondPosition];
        converted[finalPosition] = sum;
      }; break;
      case 2: {
        const product = converted[firstPosition] * converted[secondPosition];
        converted[finalPosition] = product;
      }; break;
    };

    i += 4;
  };

  return converted;
}

module.exports = intcode;