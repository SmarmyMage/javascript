
var mathQuest = ['3 + 2', '7 - 4', '10 / 5', '6 X 2'];
var mathAns = ['5', '3', '2', '12'];


function mathQuiz() {
  var points = 0;
  for (i = 0; i <= 3; i++) {
    var attempts = 3;
    while (attempts > 0) {
      ans = prompt("What is " + mathQuest[i]);
      if (ans == mathAns[i]) {
        points = points + 1;
        alert("Correct!");
        attempts = 0;
      } else {
        alert("Incorrect");
        attempts = attempts - 1;
      }
    }
  }
  return points;
}