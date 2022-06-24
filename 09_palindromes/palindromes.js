const palindromes = function (string) {
  string = string.replace(/,| |\.|!/g, "").toLowerCase();
  let reversed = '';
  for (let i = string.length-1; i >= 0; i--) {
    reversed += string[i];
  }
  console.log(string, reversed);

  if (reversed === string) {
    return true;
  }
  else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;