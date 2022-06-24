const add = function() {
  let total = 0;
	for (let i = 0; i < arguments.length; i++) {
    total += parseInt(arguments[i]);
  }
  return total;
};

const subtract = function() {
	const diff = arguments[0] - arguments[1];
  return diff
};

const sum = function() {
	let result = 0;
  for (let i = 0; i < arguments[0].length; i++) {
    result += parseInt(arguments[0][i]);
  }
  return result;
};

const multiply = function() {
  let product = 1;
  for (let i = 0; i < arguments[0].length; i++) {
    product *= arguments[0][i];
  }
  console.log(product);
  return product;
};

const power = function() {
	return (arguments[0] ** arguments[1]);
};

const factorial = function() {
	let fact = 1;
  for (let i = arguments[0]; i > 1; i--) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

multiply([2,3]);