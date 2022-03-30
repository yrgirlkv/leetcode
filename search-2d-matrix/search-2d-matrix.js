const searchMatrix = (matrix, target) => {
  let start = 0;
  let end = matrix.length - 1;

  while (start <= end) {
    let index = Math.floor((end + start) / 2);
    let row = matrix[index];
    if (row[0] <= target && row[row.length - 1] >= target) {
      let [left, right] = [0, row.length - 1];
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let value = row[mid];
        if (value === target) {
          return true;
        } else if (value > target) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
      return false;
    } else if (row[0] > target) {
      end = index - 1;
    } else {
      start = index + 1;
    }
  }
  return false;
};

module.exports = searchMatrix;
