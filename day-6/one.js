const orbits = (input) => {
  let totalOrbits = 0;

  let pairs = input.split('\n')
    .map(x => x.trim().split(')'));

  pairs
    .map(x => x[1])
    .forEach(child => {
      let parent = pairs
        .find(x => x[1] === child)[0];

      while (parent !== 'COM') {
        totalOrbits++;

        parent = pairs
          .find(x => x[1] === parent)[0];
      }

      totalOrbits++;
    });

    return totalOrbits;
}

module.exports = orbits;