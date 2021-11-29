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

const letterPositions = function(sentence) {
  // create empty object
  const results = {};
  // create array of all letters in order from string
  const stringArray = Array.from(sentence);
  // iterate through string 
  for (let i = 0; i < sentence.length; i++) {
    // looks for an existing key within object
    if (results[stringArray[i]]) {
      // pushes index number of that iteration of key to key's value array
      results[stringArray[i]].push(i + 1);
    } 
    // checks for whitespace at value of stringArray[i]
    else if (stringArray[i] !== " ") {
    // creates key with a value of stringArray[i] within object if none exists
      results[stringArray[i]] = [];
      // then adds index number of stringArray[i] to value of key (see above)
      results[stringArray[i]].push(i + 1)
    };
  }
  // returns results duh
  return results;
};

module.exports = letterPositions;

console.log(letterPositions(`lighthouse in the house`));

console.log(assertArraysEqual(letterPositions("lighthouse in the house").e, [10, 17, 23]));
