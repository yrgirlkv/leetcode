const numRescueBoats = (people, limit) => {
  people.sort();
  let [i, j, boats] = [0, people.length, 0];
  while (i <= j) {
    boats += 1;
    if (people[i] + people[j] <= limit) {
      i++;
    }
    j--;
  }
  return boats - 1;
};

module.exports = numRescueBoats;
