const intcode = require('./intcode');

// https://stackoverflow.com/questions/9960908/permutations-in-javascript
const permutations = (availableOptions) => {
  let allPermutations = [];

  const findPermutation = (options, modification = []) => {
    if (options.length === 0) {
      allPermutations.push(modification);
    } else {
      for (let i = 0; i < options.length; i++) {
        let current = options.slice();
        let next = current.splice(i, 1);
    
        findPermutation(current.slice(), modification.concat(next));
      }
    }
  }

  findPermutation(availableOptions);

  return allPermutations;
};

const highestSignal = (input) => {
  let highestSignal = permutations([0,1,2,3,4])
    .map(combination => {
      let ampA = intcode(input, combination[0], 0);
      let ampB = intcode(input, combination[1], ampA);
      let ampC = intcode(input, combination[2], ampB);
      let ampD = intcode(input, combination[3], ampC);
      let ampE = intcode(input, combination[4], ampD);

      return ampE;
    })
    .sort((a, b) => b - a)[0];
  
    return highestSignal;
};

module.exports = highestSignal;