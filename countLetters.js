/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};
*/

const countLetters = function(string) {
  let output = {};                          // - empty object
  for (const letter of string) {            // - Iterates through string
    if (output[letter]) {                   // - Checks to see if current property in string exists in object
    output[letter] += 1;                    // - if yes, adds one and recalculates that key in object
    } else if (!output[letter]) {           // - if property being read does not yet exist in object,
      output[letter] = 1;                   // - creates property in object, with a value of 1.
    }
  } return output;                          // - returns finished object
};

// console.log(countLetters('LHL'));
// console.log(countLetters('Another Big Old String'));
// console.log(countLetters(`algernon cadwallader`));