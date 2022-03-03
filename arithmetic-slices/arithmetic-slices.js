const numberOfArithmeticSlices = (nums) => {
  if (nums.length < 3) {
    return 0;
  }

  let [gap, seqs, count] = [-1, 0, 0];

  for (let i = 0; i < nums.length; i++) {
    let diff = nums[i] - nums[i - 1];

    if (diff !== gap) {
      gap = diff;
      seqs = 1;
    } else {
      count += seqs;
      seqs++;
    }
  }

  return count;
};

module.exports = numberOfArithmeticSlices;
