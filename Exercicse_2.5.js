const readLineSync = require("readline-sync");

let userNumber = readLineSync.question("Enter your favorite number: ");

while(userNumber != 42){
  console.log("Are you sure ?");
  userNumber = readLineSync.question("Enter your favorite number: ");
}
