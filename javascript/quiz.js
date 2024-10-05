var triviaQuest = ["the smallest irregular prime?", "the smallest perfect number?", "the second aria in the opera, Tosca?"];
var triviaAns = ['37', '6', "E lucevan le stelle"];

function triviaQuiz() {

    var points = 0;
    for (var i = 0; i <= 3; i++) {    
        var attempts = 3;
        while (attempts > 0) {
            ans = prompt("What is " + triviaQuest[0]);
            if (ans == triviaAns[0]) {
                alert("Correct!");
                attempts = 0;
            } else {
                alert("Incorrect");
                attempts = attempts - 1;
            }

            if (attempts == 3) {
                points = points + 3;
            } else if (attempts == 2) {
                points = points + 2;
            } else if (attempts == 1) {
                points = points + 1;
            } else {
                points = points + 0; 
            }
        }
    }
  return points;
}