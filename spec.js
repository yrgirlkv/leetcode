const numberOfArithmeticSlices = require('./arithmetic-slices/arithmetic-slices.js');

describe('sample test', () => {
  it('should run tests', () => {
    expect(true).toBe(true);
  });
});

describe('arithmetic slices', () => {
  it('should return 3 for [1, 2, 3, 4]', () => {
    expect(numberOfArithmeticSlices([1, 2, 3, 4])).toBe(3);
  });
  it('should return 0 for [1]', () => {
    expect(numberOfArithmeticSlices([1])).toBe(0);
  });
});
