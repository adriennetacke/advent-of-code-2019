const assert = require('assert');
const orbits = require('./one');
const minimumOribitalTransfers = require('./two');

// Day Six - Part One Tests 
describe('Part One Universal Orbit Map', () => {
  it(`should return 1 when input is 
COM)B
  B)C
  C)D
  D)E
  E)F
  B)G
  G)H
  D)I
  E)J
  J)K
  K)L`, () => {
    let input = `COM)B
    B)C
    C)D
    D)E
    E)F
    B)G
    G)H
    D)I
    E)J
    J)K
    K)L` ;
    assert.strictEqual(orbits(input), 42);
  });
});

// Day Six - Part Two Tests 
describe('Part Two Universal Orbit Map', () => {
  it(`should return 1 when input is 
  COM)B
  B)C
  C)D
  D)E
  E)F
  B)G
  G)H
  D)I
  E)J
  J)K
  K)L
  K)YOU
  I)SAN`, () => {
    let input = `COM)B
    B)C
    C)D
    D)E
    E)F
    B)G
    G)H
    D)I
    E)J
    J)K
    K)L
    K)YOU
    I)SAN` ;
    assert.strictEqual(minimumOribitalTransfers(input), 4);
  });
});
