const findTheOldest = function(array) {
  let oldestAge = 0;
  let index;

  array.forEach((person, i) => {
    let age;
    if (!("yearOfDeath" in person)) {
      age = 2022 - parseInt(person.yearOfBirth);
    }
    else {
      age = person.yearOfDeath - person.yearOfBirth;
    }
    
    if (age > oldestAge) {
      oldestAge = age;
      index = i;
    }
  })
  array = array[index]
  return array;
};

// Do not edit below this line
module.exports = findTheOldest;
