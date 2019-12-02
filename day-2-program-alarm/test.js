const assert = require('assert');
const intcode = require('./one');
const seedInputs = require('./two');

// Day Two - Part One Tests 
describe('Part One Intcode ', () => {
  it('should return 2,0,0,0,99 when input is 1,0,0,0,99', () => {
    let input = `1,0,0,0,99`;
    assert.deepStrictEqual(intcode(input), [2,0,0,0,99]);
  });
});

describe('Part One Intcode', () => {
  it('should return 2,3,0,6,99 when input is 2,3,0,3,99', () => {
    let input = `2,3,0,3,99`;
    assert.deepStrictEqual(intcode(input), [2,3,0,6,99]);
  });
});

describe('Part One Intcode', () => {
  it('should return 2,4,4,5,99,9801 when input is 2,4,4,5,99,0', () => {
    let input = `2,4,4,5,99,0`;
    assert.deepStrictEqual(intcode(input), [2,4,4,5,99,9801]);
  });
});

describe('Part One Intcode', () => {
  it('should return 30,1,1,4,2,5,6,0,99 when input is 1,1,1,4,99,5,6,0,99', () => {
    let input = `1,1,1,4,99,5,6,0,99`;
    assert.deepStrictEqual(intcode(input), [30,1,1,4,2,5,6,0,99]);
  });
});

describe('Part Two SeedInputs', () => {
  it('should return 1202 when input is {puzzleInput} and output is 3267740', () => {
    let input = `1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,19,5,23,1,6,23,27,1,27,5,31,2,31,10,35,2,35,6,39,1,39,5,43,2,43,9,47,1,47,6,51,1,13,51,55,2,9,55,59,1,59,13,63,1,6,63,67,2,67,10,71,1,9,71,75,2,75,6,79,1,79,5,83,1,83,5,87,2,9,87,91,2,9,91,95,1,95,10,99,1,9,99,103,2,103,6,107,2,9,107,111,1,111,5,115,2,6,115,119,1,5,119,123,1,123,2,127,1,127,9,0,99,2,0,14,0`;
    assert.deepStrictEqual(seedInputs(input, 3267740), 1202);
  });
});