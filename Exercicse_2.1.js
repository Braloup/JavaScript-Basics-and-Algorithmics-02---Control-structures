const readLineSync = require("readline-sync");

let userAge = readLineSync.question("Enter yor age please: ");

if(userAge >= 18){
  console.log("You are an adult.")
} else {
  console.log("You are not yet an adult");
}
