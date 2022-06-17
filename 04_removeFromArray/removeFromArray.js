const removeFromArray = function(...args) {
  const array = args[0];

  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!args.includes(array[i])) {
      newArray.push(array[i]);
    }
  }

  console.log(array);
  return newArray;
};
removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
