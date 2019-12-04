const plotGrid = require('./plotter'); 
const stepCounter = require('./stepCounter');

const minimalSteps = (input) => {
  let lines = input.split('\n');

  let firstLine = lines[0]
    .split(',')
    .map(x => x.trim());

  let secondLine = lines[1]
    .split(',')
    .map(x => x.trim());

  let plottedGrid = plotGrid(firstLine, 1, {});
  plottedGrid = plotGrid(secondLine, 2, plottedGrid);

  let intersections = Object.keys(plottedGrid)
    .filter(key => plottedGrid[key] == 3)
    .filter(x => x !== '0, 0');

  let minimumSteps = stepCounter([firstLine, secondLine], intersections)[0];

  return minimumSteps;
}

module.exports = minimalSteps;