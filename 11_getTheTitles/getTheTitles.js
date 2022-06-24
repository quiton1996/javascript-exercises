const getTheTitles = function(struct) {
  let array = [];
  for (let i = 0; i < struct.length; i++) {
    array.push(struct[i].title);
  }

  return array;
};

// Do not edit below this line
module.exports = getTheTitles;