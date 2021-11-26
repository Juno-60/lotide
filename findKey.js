const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = function(obj, callback) {
  // assign keys and values to arrays
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  // iterate through keys array
  for (let i = 0; i < keys.length; i++) {
    //  finds value as specified by callback function
    if (callback(values[i]) === true) {
      // returns equivalent key
      return keys[i];
    } 
  }
};

let result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);


assertEqual(result1, "noma"); // expected return: pass, "noma"

let result2 = findKey({
  "Cake": "Chocolate",
  "Ice Cream": "Chocolate",
  "Chicken Wings": "Buffalo",
}, x => x === "Chocolate");


// expect to pass, "Cake"
assertEqual(result2, "Cake"); 
// expect to fail (!Ice Cream) since function returns first instance of string
assertEqual(result2, "Ice Cream"); 