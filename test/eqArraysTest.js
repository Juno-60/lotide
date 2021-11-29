const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // is true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // is false
assertEqual(eqArrays([1, 2, 3], ["1", 2, 3]), true); //is false
assertEqual(eqArrays([1, 2, 3], [0, 1, 2, 3]), true); // is false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 1, 2, 3]), true); // is false
assertEqual(eqArrays([1, 2, 3], []), true); //is false
assertEqual(eqArrays([], []), true); //is true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //is true
assertEqual(eqArrays([1, 2, 3], []), false); //is true