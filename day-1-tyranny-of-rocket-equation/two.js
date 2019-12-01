const calculateMoreFuel = (input) => {
  const calculateUntilNegativeFuelRequired = (moduleMass) => {
    const calculateFuel = (input) => {
      return (Math.floor(parseInt(input) / 3)) - 2;
    }; 

    let temp = calculateFuel(moduleMass);
    
    let totalTempFuel = 0;

    while (temp > 0) {
      totalTempFuel += temp;
      temp = calculateFuel(temp);
    }

    return totalTempFuel;
  }

  let fuel = input
    .split('\n')
    .map(x => {
      return calculateUntilNegativeFuelRequired(x);
    })
    .reduce((totalFuel, currentCalculatedFuel) => {
      return totalFuel += currentCalculatedFuel;
    }, 0);
  
  return fuel;
}

module.exports = calculateMoreFuel;