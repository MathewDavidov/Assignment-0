class MySolution {
  countDownSum(num) {
    // Recursively add all the numbers from num down to 1
    if (num === 1) {
      return 1;
    }

    return num + this.countDownSum(num-1);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;