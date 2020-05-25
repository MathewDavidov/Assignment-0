function pairSum(nums, target) {
  // Find if any two numbers in the given array equal the given target
  // This solution is O(n^2)

  if (nums.length <= 1) {
    throw "Array is less than length 2";
  }

  for (let i=0; i<nums.length; i++) {
    for (let j=i+1; j<nums.length; j++) {
      if (i !== j && (nums[i] + nums[j] === target)) {
        return true;
      }
    }
  }

  return false;
}

// Do not edit this line;
module.exports = pairSum;