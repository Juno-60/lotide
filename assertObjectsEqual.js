const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else console.log(`🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
};

module.exports = assertObjectsEqual;

/*
let obj1 = {a: 1};
let obj2 = {a: 1};
let obj3 = {a: 2};

assertObjectsEqual(obj1, obj2)
assertObjectsEqual(obj2, obj3)
*/