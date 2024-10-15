

var today = new Date();
var months = today.GetMonth();
var days = today.GetDay();
var date = today.getDate();
var year = today.getFullYear();
var hours = today.getHours();
var minutes = today.getMinutes();

function name(userName) {
    var firsLetter = userName.charAt(0);
    firstLetter = userName.toUpperCase();
}

var triviaQuest = ["the smallest irregular prime?", "the smallest perfect number?", "the second aria in the opera, Tosca?"];
var triviaAns = ['37', '6', "E lucevan le stelle"];

var points = 0;
var triviaQuest = triviaQuest.length
for (var i = 0; i <= triviaQuest.length; i++) {
    var score = triviaQuiz(i);
 }

function triviaQuiz(i) {

    var attempts = 3;
    while (attempts > 0) {
        ans = prompt("What is " + triviaQuest[i]);
        if (ans == triviaAns[i]) {
            alert("Correct!");
            attempts = 0;
        } else {
            alert("Incorrect");
            attempts = attempts - 1;
        }

        if (attempts == 3 && ans == triviaAns[i]) {
            points = points + 3;
        } else if (attempts == 2 && ans == triviaAns[i]) {
            points = points + 2;
        } else if (attempts == 1 && ans == triviaAns[i]) {
            points = points + 1;
        } else {
            points = points + 0;
            attempts == 0;
            
        }

        if (i === 4 && attempts == 0) {break; }
    }
  return points;
}