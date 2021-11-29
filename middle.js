const middle = function(inputArray) {
  let midArray = [];                                            // - set output as empty array
  if (inputArray.length > 2) {                                  // - checks to see if there CAN be a middle
      let evenMid = Math.floor(((inputArray.length - 1) / 2));  // - returns rounded DOWN value of inputArray / 2
      let oddMid = Math.floor((inputArray.length / 2));         // - returns rounded UP value of inputArray / 2
    if (inputArray.length % 2 ===0 ) {                          // - checks if EVEN number of items in array
      midArray.push(inputArray[evenMid], inputArray[oddMid]);   // - outputs both high and low rounded middles
    } else midArray.push(inputArray[oddMid]);                   // - if ODD numbers of items in array, pushes rounded UP value
  }
  return midArray;                                              // - returns empty array if above conditions not met
};

module.exports = middle;