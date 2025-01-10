const factorial = function (number) {
  if (number < 0) {
    return "Input a positive number";
  }
  let result = 1;
  for (let i = 1; i <= number; i++) {
    console.log((result *= i));
  }
};
factorial(5);
