const removeDuplicateLetters = function (s) {
  let counts = {};
  for (let c of s) {
    counts[c] = counts[c] + 1 || 1;
  }
  let res = [];
  let tracker = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    counts[char]--;
    if (char in tracker) {
      continue;
    }
    let last = res.slice(-1)[0];
    while (last && counts[last] && last > char && res.length) {
      delete tracker[last];
      res.pop();
      last = res.slice(-1)[0];
    }
    res.push(char);
    tracker[char] = 1;
  }
  return res.join('');
};

module.exports = removeDuplicateLetters;
