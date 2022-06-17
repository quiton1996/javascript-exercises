const ftoc = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;
  celsius = +celsius.toFixed(1);
  return celsius;
};

const ctof = function(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  fahrenheit = +fahrenheit.toFixed(1);
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
