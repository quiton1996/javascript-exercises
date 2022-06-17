const reverseString = function(string) {
  reversed = '';
  for (char of string) {
    reversed = char + reversed;
  }
  return reversed
};

// Do not edit below this line
module.exports = reverseString;
