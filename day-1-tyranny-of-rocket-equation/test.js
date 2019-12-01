const assert = require('assert');
const calculateFuel = require('./one');
const calculateMoreFuel = require('./two');

// Day One - Part One Tests 
describe('Part One ', () => {
  it('should return 2 when input is 12', () => {
    let input = `12`;
    assert.strictEqual(calculateFuel(input), 2);
  });
});

describe('Part One ', () => {
  it('should return 2 when input is 14', () => {
    let input = `14`;
    assert.strictEqual(calculateFuel(input), 2);
  });
});

describe('Part One ', () => {
  it('should return 654 when input is 1969', () => {
    let input = `1969`;
    assert.strictEqual(calculateFuel(input), 654);
  });
});

describe('Part One ', () => {
  it('should return 33583 when input is 100756', () => {
    let input = `100756`;
    assert.strictEqual(calculateFuel(input), 33583);
  });
});

// Day One - Part Two Tests 
describe('Part Two ', () => {
  it('should return 2 when input is 14', () => {
    let input = `14`;
    assert.strictEqual(calculateMoreFuel(input), 2);
  });
});

describe('Part Two ', () => {
  it('should return 966 when input is 1969', () => {
    let input = `1969`;
    assert.strictEqual(calculateMoreFuel(input), 966);
  });
});

describe('Part Two ', () => {
  it('should return 50346 when input is 100756', () => {
    let input = `100756`;
    assert.strictEqual(calculateMoreFuel(input), 50346);
  });
});
