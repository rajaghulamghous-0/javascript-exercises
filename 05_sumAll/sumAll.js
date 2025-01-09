function sumAll(positiveIntegerOne, positiveIntegerTwo) {
  if (
    isNaN(positiveIntegerOne) ||
    isNaN(positiveIntegerTwo) ||
    positiveIntegerOne < 0 ||
    positiveIntegerTwo < 0 ||
    positiveIntegerOne % 1 != 0 ||
    positiveIntegerTwo % 1 != 0 ||
    typeof positiveIntegerOne != "number" ||
    typeof positiveIntegerTwo != "number"
  ) {
    return "ERROR";
  } else if (positiveIntegerTwo > positiveIntegerOne) {
    let sum = 0;
    for (let i = positiveIntegerOne; i <= positiveIntegerTwo; i++) {
      sum += i;
    }
    let result = sum;
    return parseInt(result);
  } else if (positiveIntegerOne > positiveIntegerTwo) {
    let sum = 0;

    for (let i = positiveIntegerTwo; i <= positiveIntegerOne; i++) {
      sum += i;
    }
    let result = sum;
    return parseInt(result);
  }
}
parseInt(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
