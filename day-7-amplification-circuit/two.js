const intcode2 = require('./intcode2');

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

const evenHigherSignal = (input) => {
  let parsedInput = input
  .split(',')
  .map(x => parseInt(x.trim()));

  let highestSignal = permutations([5,6,7,8,9])
  .map(combination => {

    let initialState = {
      'instructionPointer': 0,
      'parsedInput': parsedInput,
      'finalCode': 0,
      'queue': []
    };

    let ampA = intcode2(initialState, [combination[0], 0]);
    let ampB = intcode2(initialState, [combination[1], ampA.finalCode]);
    let ampC = intcode2(initialState, [combination[2], ampB.finalCode]);
    let ampD = intcode2(initialState, [combination[3], ampC.finalCode]);
    let ampE = intcode2(initialState, [combination[4], ampD.finalCode]);

    while (ampE.parsedInput[ampE.instructionPointer] !== 99) {
      ampA = intcode2(ampA, [ampE.finalCode]);
      ampB = intcode2(ampB, [ampA.finalCode]);
      ampC = intcode2(ampC, [ampB.finalCode]);
      ampD = intcode2(ampD, [ampC.finalCode]);
      ampE = intcode2(ampE, [ampD.finalCode]);
    };

    return ampE.finalCode;
   

    // console.log("ampA", ampA, "ampB", ampB, "ampC", ampC, "ampD", ampD, "ampE", ampE);
  })
  .sort((a, b) => b - a)[0];

  return highestSignal;
}

module.exports = evenHigherSignal;