function countOfAllBooleansAndStrings(arr) {
  // Count the number of booleans and strings in the array
  var numOfBooleansAndStrings = 0;

  // Loop through the array and check the type of each object
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === true || arr[i] === false || typeof arr[i] === 'string') {
      numOfBooleansAndStrings++;
    }
  }

  return numOfBooleansAndStrings;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;