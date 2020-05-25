function sumOfNumsWithinARange(nums, start, end) {
  // Count the numbers between a given range [start, end] (inclusive)

  let count = 0;

  nums.forEach((number) => {
    if (number >= start && number <= end) {
      count++;
    }
  });

  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;