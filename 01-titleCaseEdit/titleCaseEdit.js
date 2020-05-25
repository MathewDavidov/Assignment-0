function titleCaseEdit(title) {
  // Split the string into an array containing each word seperated by spaces
  let titleCase = title.split(" ");

  // Capitalize the first character of the string in each index
  for (let i=0; i<titleCase.length; i++) {
    titleCase[i] = titleCase[i].charAt(0).toUpperCase() + titleCase[i].substr(1);
  }

  // Return a string of the array by using .join
  return titleCase.join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;