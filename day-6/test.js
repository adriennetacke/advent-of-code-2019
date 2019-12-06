const assert = require('assert');
const orbits = require('./one');

// Day Six - Part One Tests 
describe.only('Part One Universal Orbit Map', () => {
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
