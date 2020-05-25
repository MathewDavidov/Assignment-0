function productOfAnyAmountOfNumbers(...args) {
  // Return the product of a given number of arguments

  let product = 1;

  args.forEach((number) => {
    product *= number;
  })

  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;