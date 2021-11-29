const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else console.log(`🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
};

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

const map = function(array, callback) {
  // provide empty array for output
  const results = [];
  // iterate through array for each item in array
  for (let item of array) {
    // push array as modified by callback function to empty array
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

const words = ["ground", "control", "to", "major", "tom"];
const multiplyByTwo = [2, 4, 6, 8];
const graduate = ["Lector", "Hawking", "Pepper", "Octopus"];
const results1 = map(words, word => word[0]); // [ 'g', 'c', 't', 'm', 't' ]
// const results2 = map(multiplyByTwo, num => num * 2); // [ 4, 8, 12, 16 ]
// const results3 = map(graduate, words => `Dr. ${words}`); // [ 'Dr. Lector', 'Dr. Hawking', 'Dr. Pepper', 'Dr. Octopus' ]
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(multiplyByTwo, num => num * 2), [ 4, 8, 12, 16 ]);
assertArraysEqual(map(graduate, words => `Dr. ${words}`), [ 'Dr. Lector', 'Dr. Hawking', 'Dr. Pepper', 'Dr. Octopus' ]);