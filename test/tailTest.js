const tail = require('../tail.js')
const assertEqual = require('../assertEqual.js');


// TEST CASES FOR PROPER FUNCITON
console.log(tail([1, 3, 5, 7, 10]));
console.log(tail([]));
console.log(tail([1]));

// TEST CASES TO CHECK OUTPUT
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

// TEST CASES TO ENSURE ORIGINAL ARRAY REMAINS INTACT
const words = [`I`, `Need`, `Beer`];
tail(words);
assertEqual(words.length, 3);
const wordTail = tail(words);
assertEqual(wordTail[1], `Beer`);
