const fibonacci = function(member) {
  let fib = [1, 1];
  if (member < 1) {
    return "OOPS";
  }

  if (member >= 3) {
    for (let i = 2; i <= member - 1; i++) {
      fib[i] = fib[i-1] + fib[i-2];
    }
  }
  return fib[member - 1];
};

// Do not edit below this line
module.exports = fibonacci;
fibonacci(1);