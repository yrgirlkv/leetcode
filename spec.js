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
const removeDuplicateLetters = require('./remove-duplicate-letters/remove-duplicate-letters.js');
const numRescueBoats = require('./boats-to-save-people/boats-to-save-people.js');
const searchMatrix = require('./search-2d-matrix/search-2d-matrix.js');

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

describe('score of parentheses', () => {
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
  it('should score combination strings correctly', () => {
    expect(scoreOfParentheses('(()(()))')).toBe(6);
  });
});

describe('remove duplicate letters', () => {
  it('should pass the provided test cases', () => {
    expect(removeDuplicateLetters('bcabc')).toBe('abc');
    expect(removeDuplicateLetters('cbacdcbc')).toBe('acdb');
  });
});

describe('boats to save people', () => {
  it('should return the correct minimum for the first arbitrary test case', () => {
    expect(numRescueBoats([1, 2], 3)).toBe(1);
  });
  it('should get the second test correct', () => {
    expect(numRescueBoats([3, 2, 2, 1], 3)).toBe(3);
  });
  it('should get the third test correct', () => {
    expect(numRescueBoats([3, 5, 4, 5], 5)).toBe(4);
  });
  it('should get a provided test correct', () => {
    expect(numRescueBoats([21, 40, 16, 24, 30], 50)).toBe(3);
  });
});

describe.only('search a 2d matrix', () => {
  it('should check matrices efficiently', () => {
    let matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ];
    let target = 3;
    expect(searchMatrix(matrix, target)).toBe(true);
  });
  it('should identify if a target is not in the matrix', () => {
    let matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ];
    let target = 33;
    expect(searchMatrix(matrix, target)).toBe(false);
  });
});
