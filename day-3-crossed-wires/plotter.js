const plotGrid = (line, linePattern, grid) => {
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

        for (let i = y; i <= stepsUp; i++) {
          grid[`${x}, ${i}`]  = grid[`${x}, ${i}`] === undefined
          ? linePattern 
          : grid[`${x}, ${i}`] += linePattern;
        }

        y += steps; 
      }; break;
      case 'R': {
        const stepsRight = x + steps;

        for (let i = x; i <= stepsRight; i++) {
          grid[`${i}, ${y}`]  = grid[`${i}, ${y}`] === undefined
          ? linePattern 
          : grid[`${i}, ${y}`] += linePattern;
        }

        x += steps;
      }; break;
      case 'D': {
        const stepsDown = y - steps;

        for (let i = y; i >= stepsDown; i--) {
          grid[`${x}, ${i}`]  = grid[`${x}, ${i}`] === undefined
          ? linePattern 
          : grid[`${x}, ${i}`] += linePattern;
        }
       
        y -= steps;
      }; break;
      case 'L': {
        const stepsLeft = x - steps;

        for (let i = x; i >= stepsLeft; i--) {
          grid[`${i}, ${y}`]  = grid[`${i}, ${y}`] === undefined
          ? linePattern 
          : grid[`${i}, ${y}`] += linePattern;
        }
      
        x-= steps;
      }; break;
    }
  };

  return grid;
}

module.exports = plotGrid;