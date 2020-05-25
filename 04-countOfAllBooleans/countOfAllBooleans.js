function countOfAllBooleans(arr) {
  // Count the number of booleans in the array
  let numOfBooleans = 0;

  // Loop through the array and check the type of each object
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === true || arr[i] === false) {
      numOfBooleans++;
    }
  }

  return numOfBooleans;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
