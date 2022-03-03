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
  it('should return 1 for [1, 3, 4, 5]', () => {
    expect(numberOfArithmeticSlices([1, 3, 4, 5])).toBe(1);
  });
  it('should return 0 for [1, 3, 4, 6]', () => {
    expect(numberOfArithmeticSlices([1, 3, 4, 6])).toBe(0);
  });
  it('should return 2 for [1, 3, 4, 5, 6]', () => {
    expect(numberOfArithmeticSlices([1, 3, 4, 5, 6])).toBe(2);
  });
});
