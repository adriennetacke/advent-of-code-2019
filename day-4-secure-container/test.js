const assert = require('assert');
const passwordOptions = require('./one');
const highMaintenancePasswordOptions = require('./two');

// Day Four - Part One Tests 
describe('Part One Secure Container', () => {
  it('should return 1 when input is 111111-111111', () => {
    let input = `111111-111111`;
    assert.strictEqual(passwordOptions(input).total, 1);
  });
});

describe('Part One Secure Container', () => {
  it('should return 0 when input is 111111-111110', () => {
    let input = `111111-111110`;
    assert.strictEqual(passwordOptions(input).total, 0);
  });
});

describe('Part One Secure Container', () => {
  it('should return 0 when input is 123789-123789', () => {
    let input = `123789-123789`;
    assert.strictEqual(passwordOptions(input).total, 0);
  });
});

// Day Four - Part Two Tests 
describe('Part Two Secure Container', () => {
  it('should return 1 when input is 112222-112222', () => {
    let input = `112222-112222`;
    assert.strictEqual(highMaintenancePasswordOptions(input), 1);
  });
});

describe('Part Two Secure Container', () => {
  it('should return 0 when input is 122222-122222', () => {
    let input = `122222-122222`;
    assert.strictEqual(highMaintenancePasswordOptions(input), 0);
  });
});

describe('Part Two Secure Container', () => {
  it('should return 1 when input is 112278-112278', () => {
    let input = `112278-112278`;
    assert.strictEqual(highMaintenancePasswordOptions(input), 1);
  });
});
