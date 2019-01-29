/*
**Make a program that asks the favorite number of the user.
**If that number is anything other than 42 display "Are you sure?" and ask again.
**(This program should never end as long as the user didn't chose 42).
*/

const readLineSync = require("readline-sync");//Call the module for ask the user.

let userNumber = readLineSync.question("Enter your favorite number: ");

while(userNumber != 42){
  console.log("Are you sure ?");

  userNumber = readLineSync.question("Enter your favorite number: ");
}
