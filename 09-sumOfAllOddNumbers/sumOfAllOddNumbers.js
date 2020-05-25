function sumOfAllOddNumbers(nums) {
  // Count the amount of numbers in the array that are odd
  let count = 0;

  // For each number in the array, check if it's odd. If so, increment count.
  nums.forEach((number) => {
    if (number % 2 !== 0) {
      count++;
    }
  });

  return count;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
