const readLineSync = require("readline-sync");

let userNumber = readLineSync.question("Enter a number between 1 and 7: ");

  if (userNumber < 2) {
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
