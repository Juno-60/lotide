const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(inputObject, inputValue) {
  // create array of object keys
  let keys = Object.keys(inputObject);
  // create array of object variables
  let values = Object.values(inputObject);
  // iterate through array of keys
  for (let i = 0; i < keys.length; i++) {
    // check if the value matches expected input
    if (values[i] === inputValue) {
      // return the equivalent key to the value
      return keys[i];
    }
  }
};

module.exports = findKeyByValue;


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const whatsInTheFridge = {
  dairy: "Butter",
  meat: "Beef",
  veggies: "Tomatoes",
}

assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(whatsInTheFridge, "Beef"), "meat");