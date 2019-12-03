const assert = require('assert');
const manhattan = require('./one');
const minimalSteps = require('./two');

// Day Three - Part One Tests 
describe('Part One Crossed Wires ', () => {
  it('should return 159 when input is R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83', () => {
    let input = `R75,D30,R83,U83,L12,D49,R71,U7,L72
    U62,R66,U55,R34,D71,R55,D58,R83`;
    assert.deepStrictEqual(manhattan(input), 159);
  });
});

describe('Part One Crossed Wires', () => {
  it('should return 135 when input is R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7', () => {
    let input = `R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
    U98,R91,D20,R16,D67,R40,U7,R15,U6,R7`;
    assert.deepStrictEqual(manhattan(input), 135);
  });
});

describe('Part One Crossed Wires', () => {
  it('should return 6 when input is R8,U5,L5,D3\nU7,R6,D4,L4', () => {
    let input = `R8,U5,L5,D3
    U7,R6,D4,L4`;
    assert.deepStrictEqual(manhattan(input), 6);
  });
});

describe('Part Two Crossed Wires', () => {
  it('should return 610 when input is R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83', () => {
    let input = `R75,D30,R83,U83,L12,D49,R71,U7,L72
    U62,R66,U55,R34,D71,R55,D58,R83`;
    assert.deepStrictEqual(minimalSteps(input), 610);
  });
});

describe('Part Two Crossed Wires', () => {
  it('should return 410 when input is R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7', () => {
    let input = `R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
    U98,R91,D20,R16,D67,R40,U7,R15,U6,R7`;
    assert.deepStrictEqual(minimalSteps(input), 410);
  });
});