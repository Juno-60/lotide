const assertEqual = require('./assertEqual');

const tail = function(arrayInput) {
  let output = [];
  for (let i = 1; i < arrayInput.length; i++) {
    output.push(arrayInput[i]);
  } return output;
};

module.exports = tail;