function sumOfMinimumAndMaximum(nums) {
  // Find the sum of the minimum and maximum in the given array

  let min = nums[0];
  let max = nums[0];

  nums.forEach((number) => {
    if (number > max) {
      max = number;
    }
    if (number < min) {
      min = number;
    }
  });

  return max+min;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;