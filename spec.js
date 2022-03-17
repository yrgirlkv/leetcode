const numberOfArithmeticSlices = require('./arithmetic-slices/arithmetic-slices.js');
const deleteAndEarn = require('./delete-earn/delete-earn.js');
const {
  mergeTwoLists,
  sampleList1,
  sampleList2,
  linkedListArray,
} = require('./merge-two-sorted-lists/merge-two-sorted-lists.js');
const hasCycle = require('./linked-list-cycle/linked-list-cycle.js');
const scoreOfParentheses = require('./score-of-parentheses/score-of-parentheses.js');

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

describe('delete and earn', () => {
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

describe('merge two sorted lists', () => {
  it('should return an array out of a linked list', () => {
    expect(linkedListArray(sampleList1)).toStrictEqual([1, 2, 4]);
    expect(linkedListArray(sampleList2)).toStrictEqual([1, 3, 4]);
  });
  xit('should return the head of a linked list', () => {
    const mergedList = mergeTwoLists(sampleList1, sampleList2);
    expect(mergedList.val).toBe(1);
  });
  it('should return a correctly sorted list', () => {
    const mergedList = mergeTwoLists(sampleList1, sampleList2);
    expect(linkedListArray(mergedList)).toStrictEqual([1, 1, 2, 3, 4, 4]);
  });
});

describe('linked list cycle', () => {
  xit('should return true for a linked list that has a loop', () => {
    expect(FILL_IN_VALUE).toBe(true);
  });
  xit("should return false for a linked list that doesn't have a loop", () => {
    expect(FILL_IN_VALUE).toBe(false);
  });
});

describe.only('score of parentheses', () => {
  it('should return the correct score for the most basic string', () => {
    expect(scoreOfParentheses('()')).toBe(1);
  });
  it('should return correct scores for strings of minor complexity', () => {
    expect(scoreOfParentheses('(())')).toBe(2);
    expect(scoreOfParentheses('()()')).toBe(2);
  });
  it('should return correct scores for complex strings', () => {
    expect(scoreOfParentheses('(()())')).toBe(4);
  });
});
