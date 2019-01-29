/*
**Ask the user to enter three numbers: min, max and current. Display if current is between min and max.

**Bonus: if min is greater than max, display an error message to explain the user he's doesn't understand anything then exit the program.
(It must not ask any other question.)

**Bonus 2: be polite in the error messages. (facultative)
*/

const readLineSync = require("readline-sync");//Call the module for ask the user.

let userMin = readLineSync.question("Enter a Minimum number: ");

let userMax = readLineSync.question("Enter a Maximum number: ");

let userCurrent = readLineSync.question("Enter the current number: ");


if(userMin > userMax) {//A long if else statement to verify a lot condition.

  console.log("You doesn't understand anything. Minimum is greater than Maximum.");

}else if((userMin < userCurrent) && (userMax > userCurrent)) {

  console.log("Current is between Minimum and Maximum. It's good.");

}else if((userMin === userCurrent) || (userMax === userCurrent)){

  console.log("You are probaly enter the same current number for Minimum or Maximum.");

}else{

  console.log("Current are probably under Minimum or over Maximum.");

}
