const readLineSync = require("readline-sync");

let userMin = readLineSync.question("Enter a Minimum number: ");

let userMax = readLineSync.question("Enter a Maximum number: ");

let userCurrent = readLineSync.question("Enter the current number: ");

if(userMin > userMax) {
  console.log("You doesn't understand anything. Minimum is greater than Maximum.");
}else if((userMin < userCurrent) && (userMax > userCurrent)) {
  console.log("Current is between Minimum and Maximum. It's good.");
}else if((userMin === userCurrent) || (userMax === userCurrent)){
  console.log("You are probaly enter the same current number for Minimum or Maximum.");
}else{
  console.log("Current are probably under Minimum or over Maximum.");
}
