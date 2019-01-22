const readLineSync = require("readline-sync");

let userNumber = readLineSync.question("Enter the number you want: ");
let addNumber = [];
while (userNumber > 0) {

  let anotherNumber = readLineSync.question("Enter the number you want: ");
  addNumber.push(parseInt(anotherNumber));
  userNumber -= 1;
}
console.log("Your choice number is: " + addNumber);
let toatalNumber = 0;

for (var i = 0; i < addNumber.length; i++) {
  toatalNumber += addNumber[i];
}
console.log("The addition of these numbers gives: " + toatalNumber);
