const assert = require('assert');
const one = require('./one');
const two = require('./two');

// Day Four - Part One Tests 
describe('Part One ', () => {
  it('should return 2 when input is 12', () => {
    let input = `12`;
    assert.strictEqual(one(input), 2);
  });
});

describe('Part One ', () => {
  it('should return 2 when input is 14', () => {
    let input = `14`;
    assert.strictEqual(one(input), 2);
  });
});

describe('Part One ', () => {
  it('should return 654 when input is 1969', () => {
    let input = `1969`;
    assert.strictEqual(one(input), 654);
  });
});

describe('Part One ', () => {
  it('should return 33583 when input is 100756', () => {
    let input = `100756`;
    assert.strictEqual(one(input), 33583);
  });
});

// Day Four - Part Two Tests 
describe('Part Two ', () => {
  it('should return 2 when input is 14', () => {
    let input = `14`;
    assert.strictEqual(two(input), 2);
  });
});

describe('Part Two ', () => {
  it('should return 966 when input is 1969', () => {
    let input = `1969`;
    assert.strictEqual(two(input), 966);
  });
});

describe('Part Two ', () => {
  it('should return 50346 when input is 100756', () => {
    let input = `100756`;
    assert.strictEqual(two(input), 50346);
  });
});
