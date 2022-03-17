const scoreOfParentheses = (string) => {
  let splitString = string.split(')');
  return splitString.reduce((prev, now) => {
    if (typeof prev === 'string') {
      return prev.length + now.length;
    } else {
      return prev + now.length;
    }
  });
};

module.exports = scoreOfParentheses;
