const numberOfArithmeticSlices = require('./arithmetic-slices/arithmetic-slices.js');
const deleteAndEarn = require('./delete-earn/delete-earn.js');

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
  it('should return 3 for [1, 3, 4, 5, 6]', () => {
    expect(numberOfArithmeticSlices([1, 3, 4, 5, 6])).toBe(3);
  });
  it('should return 1 for [1, 2, 3]', () => {
    expect(numberOfArithmeticSlices([1, 2, 3])).toBe(1);
  });
  it('should return 1 for [-1, 0, 1]', () => {
    expect(numberOfArithmeticSlices([-1, 0, 1])).toBe(1);
  });
});

describe.only('delete and earn', () => {
  it('should return the correct responses for the provided examples', () => {
    expect(deleteAndEarn([3, 4, 2])).toBe(6);
    expect(deleteAndEarn([2, 2, 3, 3, 3, 4])).toBe(9);
  });
  it('should work for the simplest base case', () => {
    expect(deleteAndEarn([3, 3, 3])).toBe(9);
  });
  it('should work for blank arrays', () => {
    expect(deleteAndEarn([])).toBe(0);
  });
  it('should work for a very simple recursive case', () => {
    expect(deleteAndEarn([3, 4])).toBe(4);
  });
});
