var deleteAndEarn = function (nums) {
  // get all results for a version of the array with each unique value removed, and pick the highest, recursing to get the versions of the array
  //base case
  if (new Set(nums).size === 1) {
    return nums[0] * nums.length;
  } else if (new Set(nums).size === 0) {
    return 0;
  }
  //recursive case
  let max = 0;
  let finalValue = 0;
  for (let value of nums) {
    let currentNums = nums.filter((num) => Math.abs(num - value) > 1);
    let valueScore = value * nums.filter((num) => num === value).length;
    let score = deleteAndEarn(currentNums);
    if (score + valueScore > max) {
      max = score + valueScore;
    }
  }

  return max;
};

module.exports = deleteAndEarn;
