const plotGrid = require('./plotter');

const manhattan = (input) => {
  let lines = input.split('\n');

  let firstLine = lines[0]
    .split(',')
    .map(x => x.trim());

  let secondLine = lines[1]
    .split(',')
    .map(x => x.trim());

  let plottedGrid = plotGrid(firstLine, 1, {});
  plottedgrid = plotGrid(secondLine, 2, plottedGrid);

  let intersections = Object.keys(plottedGrid)
    .filter(key => plottedGrid[key] == 3);

  let shortestManhattanDistance = intersections
    .map(x => {
      let split = x.split(',');
      return Math.abs(parseInt(split[0])) + Math.abs(parseInt(split[1]))
    })
    .sort((a, b) => a - b)[1];

    return shortestManhattanDistance;
}

module.exports = manhattan;