const readLineSync = require("readline-sync");

let userNumber = readLineSync.question("Enter the number you want: ");
let addNumber = [];
while (userNumber > 0) {

  let anotherNumber = readLineSync.question("Enter the number you want: ");
  addNumber.push(anotherNumber);
  userNumber -= 1;
}
console.log(addNumber);
