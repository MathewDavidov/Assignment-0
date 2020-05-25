function countOfAllIndexMatchingNumbers(nums) {
  // Count the amount of times the index of an array is the same as the number at that index

  let count = 0;

  for (let i=0; i<nums.length; i++) {
    if (i === nums[i]) {
      count++;
    }
  }

  return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;