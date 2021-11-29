const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

console.log('expect empty array: ', middle([1])) // => []
assertArraysEqual(middle([1]), []);

console.log('expect empty array: ', middle([1, 2])) // => []
assertArraysEqual(middle([1, 2]), []);

console.log('expect [2]: ', middle([1, 2, 3])) // => [2]
assertArraysEqual(middle([1, 2, 3]), [2]);

console.log('expect [3]: ', middle([1, 2, 3, 4, 5])) // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

console.log('expect [2, 3]: ', middle([1, 2, 3, 4])) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

console.log('expect [3, 4]: ', middle([1, 2, 3, 4, 5, 6])) // => [3, 4])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);