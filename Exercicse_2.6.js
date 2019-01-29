/*
**Make a program that ask the user to enter a number between 1 and 7.
**Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)
*/

const readLineSync = require("readline-sync");//Call the module for ask the user.

let userNumber = readLineSync.question("Enter a number between 1 and 7: ");

  if (userNumber < 2) {// I'll take a moment, one dy, to convert it in a switch statement.
    console.log("It's Monday");

  } else if (userNumber < 3) {
    console.log("It's Tuesday");

  } else if (userNumber < 4) {
    console.log("It's Wednesday");

  } else if (userNumber < 5) {
    console.log("It's Thursday");

  } else if (userNumber < 6) {
    console.log("It's Friday");

  } else if (userNumber < 7) {
    console.log("It's Saturday");

  } else if (userNumber < 8) {
    console.log("It's Sunday");
    
  }else{
    console.log("Are you really enter number between 1 and 7 ?");
  }
