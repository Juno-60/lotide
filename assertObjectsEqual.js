const eqObjects = function(object1, object2) {
  // check object lengths as arrays
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key in object1) {
      // for each key of object 1, check if it exists in object2 and if it's the same in both
      if ((!object2[key]) || ((object2[key]) !== object1[key])) {
        // if one of those conditions isn't fulfilled, return false
        return false;
      }
    }
    // otherwise if both are fulfilled, return true
    return true;
  }
  // returns false for object length check
  return false;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else console.log(`🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
};

let obj1 = {a: 1};
let obj2 = {a: 1};
let obj3 = {a: 2};

assertObjectsEqual(obj1, obj2)
assertObjectsEqual(obj2, obj3)