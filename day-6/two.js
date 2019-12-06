const minimumOribitalTransfers = (input) => {
  let pairs = input.split('\n')
    .map(x => x.trim().split(')'));

  let yourSteps = [];
  let sanSteps = [];

  pairs
    .map(x => x[1])
    .forEach(child => {
      let parent = pairs
        .find(x => x[1] === child)[0];

      while (parent !== 'COM') {
        if (child === 'YOU') {
          yourSteps.push(parent);
        } else if(child === 'SAN') {
          sanSteps.push(parent);
        }

        parent = pairs
          .find(x => x[1] === parent)[0];
      }
    });

    let minimumTransfers = yourSteps.filter(match => sanSteps.includes(match))
      .map(intersection => {
          return  yourSteps.findIndex(step => step === intersection) 
            + sanSteps.findIndex(step => step === intersection);
      })
      .sort((a, b) => a - b)[0];

    return minimumTransfers;
}

module.exports = minimumOribitalTransfers