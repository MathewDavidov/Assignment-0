function frequencyCounter(word) {
  // Create a mapping of key frequency 

  let map = {};

  // Split the string into an array of letters
  // If the key exists, increment
  // Otherwise, add the letter as a key and initialize its value to 1
  word.split('').forEach((letter) => {
    if (map[letter]) {
      map[letter] += 1;
    } else {
      map[letter] = 1;
    }
  });

  return map;
}

// Do not edit this line;
module.exports = frequencyCounter;