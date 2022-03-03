const numberOfArithmeticSlices = (nums) => {
  if (nums.length < 3) {
    return 0;
  }
  let diffs = [];
  nums.forEach((element, index) => {
    if (nums[index + 1]) {
      diffs.push(nums[index + 1] - element);
    }
  });
  let count = 0;
  diffs.forEach((element, index) => {
    if (element === diffs[index + 1]) {
      count++;
    }
  });

  return Math.abs(count - diffs.length) <= 1 ? count + 1 : count;
};

module.exports = numberOfArithmeticSlices;
