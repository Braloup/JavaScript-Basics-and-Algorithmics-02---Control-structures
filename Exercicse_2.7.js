const readLineSync = require("readline-sync");

let userNumber = readLineSync.question("Enter the number you want: ");

while (userNumber > 0) {

  let anotherNumber = readLineSync.question("Enter the number you want: ");
  parseInt(anotherNumber);
  console.log(anotherNumber = anotherNumber + anotherNumber);
  userNumber -= 1;
}
