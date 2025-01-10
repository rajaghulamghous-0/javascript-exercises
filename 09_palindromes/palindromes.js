const palindromes = function (input) {
  let array = input.replace(/[^\w]/g, "").toLowerCase().split("");
  let startOfArray = 0;
  let endOfArray = array.length - 1;
  while (startOfArray < endOfArray) {
    if (array[startOfArray] !== array[endOfArray]) {
      return false;
    }
    startOfArray++;
    endOfArray--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
