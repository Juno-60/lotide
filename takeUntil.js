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

// COOL TAKEUNTIL FUNCTION

const takeUntil = function(array, callback) {
  // create new array to push results to
  let result = [];
  // loop through array
  for (let i = 0; i < array.length; i++) {
  // break when callback reaches true as outlined by function
    if (callback(array[i]) === true) { 
      break; 
    }
  // push to result array until break
  result.push(array[i]);
  } 
  return result;
};

module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// Checks
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ] )