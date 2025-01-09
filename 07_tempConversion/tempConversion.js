const convertToCelsius = function (tempInFahrenheit) {
  const tempInCelsius = (tempInFahrenheit - 32) * (5 / 9);
  const result = Math.round(tempInCelsius * 10) / 10;
  return result;
};

const convertToFahrenheit = function (tempInCelsius) {
  const tempInFahrenheit = (tempInCelsius * 9) / 5 + 32;
  const result = Math.round(tempInFahrenheit * 10) / 10;
  return result;
};

convertToCelsius(32); // should output 0
convertToCelsius(100); // should output 37.8
convertToCelsius(-100); // should output -73.3

convertToFahrenheit(0); // should output 32
convertToFahrenheit(73.2); // should output 163.8
convertToFahrenheit(-10); // should output 14

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
