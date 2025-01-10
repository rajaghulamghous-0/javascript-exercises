const add = function (numberOne, numberTwo) {
  return numberOne + numberTwo;
};

const subtract = function (numberOne, numberTwo) {
  return numberOne - numberTwo;
};

const sum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function (array) {
  let multiple = 1;
  for (let i = 0; i < array.length; i++) {
    multiple *= array[i];
  }
  return multiple;
};

const power = function (numberOne, numberTwo) {
  return (result = Math.pow(numberOne, numberTwo));
};

const factorial = function (number) {
  if (number < 0) {
    return "Input a positive number";
  }
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
