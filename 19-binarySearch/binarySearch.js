class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target) {
    // Invoke helper function to perform binary search recursively
    return this.binarySearchRecursive(nums, 0, nums.length-1, target);
  }

  // Keep finding the middle of an array given a left and right and index
  // If the arr[middle] is equal to the target, return true
  // If arr[middle] is greater than the target, search the left half of the array
  // Otherwise, search the right half of the array
  // The base case is if our left is greater than the right (which means we haven't found the number, return false))
  binarySearchRecursive(nums, left, right, target) {
    if (left > right) {
      return false;
    }
    
    let mid = Math.floor((right + left) / 2);

    if (nums[mid] === target) {
      return true;
    } else if (nums[mid] > target) {
      return this.binarySearchRecursive(nums, left, mid-1, target);
    } else {
      return this.binarySearchRecursive(nums, mid+1, right, target);
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;