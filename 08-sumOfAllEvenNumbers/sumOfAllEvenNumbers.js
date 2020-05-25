function sumOfAllEvenNumbers(nums) {
  // Count the amount of numbers in the array that are even
  let count = 0;

  // For each number in the array, check if it's even. If so, increment count.
  nums.forEach((number) => {
    if (number % 2 == 0) {
      count++;
    }
  });

  return count;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;