// Checks if arrays are equal
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 'moose', true];
let array2 = [1, 2, 4, 6, false, 'moose'];

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

// Returns assertion on equality of arrays

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else console.log(`🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
};


// creates new array from source, while removing items as specified by second array

const without = function(source, itemsToRemove) {
  for (let i = 0; i < source.length; i++) {
    let newArray = source.filter(sourceItems => !itemsToRemove.includes(sourceItems));
    return newArray;
  }
};

console.log(without(array1, array2));