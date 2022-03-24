const numRescueBoats = (people, limit) => {
  people = people.sort();
  let capacity = limit;
  let boats = 1;
  for (let person of people) {
    if (person <= capacity) {
      capacity -= person;
    } else {
      boats++;
    }
  }
  return boats;
};

module.exports = numRescueBoats;
