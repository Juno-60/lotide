const assertArraysEqual = require('../assertArraysEqual');

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = [1];
let arr4 = [];
assertArraysEqual(arr1, arr2);
assertArraysEqual(arr3, arr4);