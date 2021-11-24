/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};
*/

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {          // - checks both arrays length
    return false;                             // - returns false if different lengths
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {                // - checks each element for each iteration
      return false;                           // - return false if the arrays don't match at that index
    }
  }
  return true;                                // - if all other conditions fulfilled, return true
};


/*
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // is true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // is false
assertEqual(eqArrays([1, 2, 3], ["1", 2, 3]), true); //is false
assertEqual(eqArrays([1, 2, 3], [0, 1, 2, 3]), true); // is false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 1, 2, 3]), true); // is false
assertEqual(eqArrays([1, 2, 3], []), true); //is false
assertEqual(eqArrays([], []), true); //is true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //is true
assertEqual(eqArrays([1, 2, 3], []), false); //is true
*/