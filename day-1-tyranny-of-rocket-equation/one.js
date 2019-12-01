const calculateFuel = (input) => {
  let fuel = input
    .split('\n')
    .map(x => (Math.floor(parseInt(x) / 3)) - 2)
    .reduce((totalFuel, currentCalculatedFuel) => {
      return totalFuel += currentCalculatedFuel;
    }, 0);

    return fuel;
}

module.exports = calculateFuel;