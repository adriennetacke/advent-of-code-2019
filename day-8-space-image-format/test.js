const assert = require('assert');
const spaceImageFormat = require('./one');
const decodeImage = require('./two');

// Day Eight - Part One Tests 
describe('Part One Space Image format', () => {
  it(`should return 1 when image is 123456789012`, () => {
    let input = `123456789012` ;
    assert.strictEqual(spaceImageFormat(input, 6), 1);
  });
});

// Day Eight - Part Two Tests 
describe.only('Part Two Space Image format', () => {
  it(`should return 0110 when image is 0222112222120000`, () => {
    let input = `0222112222120000` ;
    assert.deepStrictEqual(decodeImage(input, 4), '0110');
  });
});