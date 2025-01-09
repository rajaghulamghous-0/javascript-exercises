const repeatString = function (userInput, numberOfTimes) {
  let result = "";
  for (let i = 0; i < numberOfTimes; i++) {
    result += userInput;
  }
  if (numberOfTimes < 0) {
    return "ERROR";
  }
  return result;
};
repeatString("hey", 3);
repeatString("hello", 10);
repeatString("hi", 1);
repeatString("bye", 0);
repeatString("goodbye", -1);
repeatString("", 10);
let number;
Math.random(number);
repeatString("odin", number);

// Do not edit below this line
module.exports = repeatString;
