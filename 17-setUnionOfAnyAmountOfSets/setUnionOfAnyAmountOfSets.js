function setUnionOfAnyAmountOfSets(...args) {
  // Create the set union on any given number of sets

  let finalSet = new Set();

  for (const set of args) {
    for (const number of set) {
      finalSet.add(number);
    }
  }

  return finalSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;