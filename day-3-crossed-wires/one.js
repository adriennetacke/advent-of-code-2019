const manhattan = (input) => {
  let lines = input.split('\n');

  let firstLine = lines[0]
    .split(',')
    .map(x => x.trim());

  let secondLine = lines[1]
    .split(',')
    .map(x => x.trim());

  let grid = {};


  const plotGrid = (line, linePattern) => {
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
  }

  plotGrid(firstLine, 1);
  plotGrid(secondLine, 2);

  let intersections = Object.keys(grid)
    .filter(key => grid[key] == 3);

  let shortestManhattanDistance = intersections
    .map(x => {
      let split = x.split(',');
      return Math.abs(parseInt(split[0])) + Math.abs(parseInt(split[1]))
    })
    .sort((a, b) => a - b)[1];

    return shortestManhattanDistance;
}

module.exports = manhattan;