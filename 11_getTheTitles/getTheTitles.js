const getTheTitles = function(struct) {
  let array = [];

  struct.forEach(object => {
    array.push(object.title);
  })

  return array;
};

// Do not edit below this line
module.exports = getTheTitles;