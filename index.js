var readLineSync = require('readline-sync');
var username = readLineSync.question('May I know your name ');
console.log("Welcome to the quiz " + username);
var score = 0;
function play(question, answer) {
  var userans = readLineSync.question(question);
  if (userans == answer) {
    console.log("YAYY..correct " + username);
    score = score + 1;
  }
  else {
    console.log("OOPS..Incorrect " + username);
  }
}
//array of objects
var questions = [
  { question: "What is my birth month?(FULL NAME)  ", answer: "February" },
  { question: "What is my comfort food?  ", answer: "Pasta" },
  { question: "What is my favourite fun time(ONE WORD)?  ", answer: "Teaching" },
  { question: "What is my school best friend name?  ", answer: "Kirti" },
]
for (var i = 0; i < questions.length; i++) {
  var currQues = questions[i];
  play(currQues.question, currQues.answer);
}
console.log("You scored " + score + " out of 4 " + username);
console.log("Thanks for playing!");