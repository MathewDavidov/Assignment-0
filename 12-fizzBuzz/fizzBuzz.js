function fizzBuzz(start, end) {
  // Given a range start -> end
  // If a number is divisible by 3 and 5, insert "FizzBuzz"
  // If a number is divisble by 5, insert "Buzz"
  // If a number is divisble by 3, insert "Fizz"
  // Otherwise, enter the number

  let arr = [];

  for (let i=start; i<=end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else {
      arr.push(i);
    }
  }

  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;