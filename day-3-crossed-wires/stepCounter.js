const stepCounter = (lines, intersections) => {
  
  let totalSteps = intersections.map(pair => {
    let coordinates = pair.split(',');
    let xCoordinate = parseInt(coordinates[0]);
    let yCoordinate = parseInt(coordinates[1]);
    let countedSteps = 0;

    let calcLineSteps = (line) => {
      let x = 0;
      let y = 0;
      
      for (let i = 0; i < line.length; i++) {
        const pathCodePattern = '(.)([0-9]*)'; //(Direction)(Steps)
        const pathCode = line[i].match(pathCodePattern);
    
        const direction = pathCode[1];
        const steps = parseInt(pathCode[2]);

        switch (direction) {
          case 'U': {
            const stepsUp = y + steps;
    
            for (let i = y; i < stepsUp; i++) {
              if (x === xCoordinate && i === yCoordinate) return countedSteps;
              countedSteps++;
            }

            y += steps; 
          }; break;
          case 'R': {
            const stepsRight = x + steps;
    
            for (let i = x; i < stepsRight; i++) {
              if (i === xCoordinate && y === yCoordinate) return countedSteps;
              countedSteps++;
            }

            x += steps;
          }; break;
          case 'D': {
            const stepsDown = y - steps;
    
            for (let i = y; i > stepsDown; i--) {
              if (x === xCoordinate && i === yCoordinate) return countedSteps;
              countedSteps++;
            }

            y -= steps;
          }; break;
          case 'L': {
            const stepsLeft = x - steps;
    
            for (let i = x; i > stepsLeft; i--) {
              if (i === xCoordinate && y === yCoordinate) return countedSteps;
              countedSteps++;
            }

            x-= steps;
          }; break;
        }
      };
      return countedSteps;
    }

    let lineOneSteps = calcLineSteps(lines[0]);
    let lineTwoSteps = calcLineSteps(lines[1]);

    return lineTwoSteps;
  });
  
  return totalSteps;
}

module.exports = stepCounter;