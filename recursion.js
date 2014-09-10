/* Recursion */

function isEven(number) {
    if (0 == number)
      return console.log("True");
    else if (1 == number)
      return console.log("False");
    else
      return (Math.abs((number-2))%2==0)
  }

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
