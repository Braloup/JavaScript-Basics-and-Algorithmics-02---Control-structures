/*
**Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number.
**At the end display the sum of all the numbers collected this way.

**Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.
*/

const readLineSync = require("readline-sync");//Call the module for ask the user.

let userNumber = readLineSync.question("Enter the number you want: ");

let addNumber = [];

while (userNumber > 0) {//While loop to put the user number in a array.

  let anotherNumber = readLineSync.question("Enter the number you want: ");

  addNumber.push(parseInt(anotherNumber));

  userNumber -= 1;
}

console.log("Your choice number is: " + addNumber);

let toatalNumber = 0;

for (var i = 0; i < addNumber.length; i++) {//For loop to calculate the addition of all number.
  toatalNumber += addNumber[i];
}
console.log("The addition of these numbers gives: " + toatalNumber);
