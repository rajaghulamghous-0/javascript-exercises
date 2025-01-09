const reverseString = function (userInput) {
  let myArray = userInput.split("").reverse().join("");
  return myArray;
};
reverseString("hello");
reverseString("hello there");
reverseString("123! abc! Hello, Odinite.");
reverseString("");
// Do not edit below this line
module.exports = reverseString;
