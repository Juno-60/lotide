/*
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = [1];
let arr4 = [];

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
*/

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else console.log(`🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
};

//assertArraysEqual(arr1, arr2);