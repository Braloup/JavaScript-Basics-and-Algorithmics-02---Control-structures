/*
**Ask the user to enter its age. If its age is at least 18 display "You are an adult".
If it's not the case display "You are not yet an adult".
*/

const readLineSync = require("readline-sync");//Call the module to ask question to the user.

let userAge = readLineSync.question("Enter your age please: ");

if(userAge >= 18){
  console.log("You are an adult.")
} else {
  console.log("You are not yet an adult");
}
