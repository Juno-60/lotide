const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
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

/*
const eqObjects = function(object1, object2) {
  // creates array of keys inside each object, then compares length of arrays
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // loop over keys of object1
    for (const object1Keys of Object.keys(object1)) {
      let i = 0;
      // if array of keys in obj 1 match array of keys in obj 2
      if (eqArrays((Object.keys(object2)[i]), object1Keys)) {
        // loop over values in object 1
        for (const object1Values of Object.values(object1)) {
          let i = 0;
          // if array of obj 1 values match array of obj 2 values,
          if (eqArrays(object1Values, (Object.values(object2)[i]))) {
            return true;
          }
        }
      }
    }
  } return false;
};
*/

/*
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const object1Values of Object.values(object1)) {
      let i = 0;
      if (eqArrays(object1Values === (Object.values(object2)[i]))) {
        return true;
      }
    }
  } return false;
};
*/

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

const object1 = { a: 1, b: 2};
const object2 = { c: 1, d: 2};
const object3 = { a: 1, b: 2};
const object4 = { a: 1, b: 3};
const ab = { a: '1', b: '2',};
const ba = { b: '1', a: '2',};
const abc = { a: '1', b: '2', c: '3',};
const abNew = { b: '2', a: '1'};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const whatsInTheFridge = {
  dairy: "Butter",
  meat: "Beef",
  veggies: "Tomatoes",
};

const whatsInTheFridgeAgain = {
  dairy: "Butter",
  meat: "Beef",
  veggies: "Tomatoes",
};

const obj1 = { name: "Kevin", location: "Canada" };
const obj2 = { name: "Devin", location: "Canada" };
const obj3 = { location: "Canada", name: "Kevin" };
assertEqual(eqObjects(object1, object2), false);
assertEqual(eqObjects(ab, ba), false);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(bestTVShowsByGenre, whatsInTheFridge), false);
assertEqual(eqObjects(whatsInTheFridge, whatsInTheFridgeAgain), true);
assertEqual(eqObjects(ab, whatsInTheFridge), false);
assertEqual(eqObjects(object3, object4), false);
assertEqual(eqObjects(ab, abNew), true);

// console.log('compare ab, ba:' ,eqObjects(ab, ba)); // => true
// console.log('compare ab, abc: ', eqObjects(ab, abc)); // => false
// console.log('Compare TV shows and Fridge Contents: ', eqObjects(bestTVShowsByGenre, whatsInTheFridge)); // => false
// console.log('Compare Fridge A and B: ', eqObjects(whatsInTheFridge, whatsInTheFridgeAgain)); // => true


assertEqual(eqObjects(obj1, obj1), true); //true
assertEqual(eqObjects(obj1, obj2), false); //false
assertEqual(eqObjects(obj1, obj3), true); //true