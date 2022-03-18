const scoreOfParentheses = (s) => {
  let score = 0;
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      h++;
    } else {
      h--;
      if (s[i - 1] === '(') {
        score += 2 ** h;
      }
    }
  }
  return score;
};

module.exports = scoreOfParentheses;
