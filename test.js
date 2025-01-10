const palindromes = function (input) {
  let array = input.replace(/[^\w]/g, "").toLowerCase().split("");
  let startOfArray = 0;
  let endOfArray = array.length - 1;
  while (startOfArray < endOfArray) {
    if (array[startOfArray] !== array[endOfArray]) {
      console.log("False");
      return false;
    }
    startOfArray++;
    endOfArray--;
  }
  console.log("True");
  return true;
};
palindromes("Racecar!");
palindromes("Hello, World!");
