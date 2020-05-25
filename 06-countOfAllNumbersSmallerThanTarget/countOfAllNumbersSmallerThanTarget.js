function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Count the amount of numbers smaller than the given target

  let count = 0;

  nums.forEach((number) => {
    if (number < target) {
      count++;
    }
  });

  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;