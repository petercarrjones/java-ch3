/* Recursion */

function isEven(number) {
	var even = "Even"
	var odd = "Odd"
    if (0 == number)
      return console.log("True");
    else if (1 == number)
      return console.log("False");
    else
      return ((number-2)%==0)
  }

console.log(isEven(0));
