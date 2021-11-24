/*
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
*/

const middle = function(inputArray) {
  let midArray = [];                                            // - set output as empty array
  if (inputArray.length > 2) {                                  // - checks to see if there CAN be a middle
      let evenMid = Math.floor(((inputArray.length - 1) / 2));  // - returns rounded DOWN value of inputArray / 2
      let oddMid = Math.floor((inputArray.length / 2));         // - returns rounded UP value of inputArray / 2
    if (inputArray.length % 2 ===0 ) {                          // - checks if EVEN number of items in array
      midArray.push(inputArray[evenMid], inputArray[oddMid]);   // - outputs both high and low rounded middles
    } else midArray.push(inputArray[oddMid]);                   // - if ODD numbers of items in array, pushes rounded UP value
  }
  return midArray;                                              // - returns empty array if above conditions not met
};

/*
console.log(middle([1])) // => []
assertArraysEqual(middle([1]), []);

console.log(middle([1, 2])) // => []
assertArraysEqual(middle([1, 2]), []);

console.log(middle([1, 2, 3])) // => [2]
assertArraysEqual(middle([1, 2, 3]), [2]);

console.log(middle([1, 2, 3, 4, 5])) // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

console.log(middle([1, 2, 3, 4])) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
*/