const intcode = require('./one');

const seedInputs = (input, finalOutput) => {
  let output = 0;

  for (let inputOne = 0; inputOne <= 99; inputOne++) {
    for(let inputTwo = 0; inputTwo <= 99; inputTwo++) {
      output = intcode(input, true, inputOne, inputTwo)[0];

      if (output === finalOutput) {
        return 100 * inputOne + inputTwo;
      }
    }
  }
}

module.exports = seedInputs;