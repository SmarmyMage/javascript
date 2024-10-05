/* var triviaQuest = ["the smallest irregular prime?", "the smallest perfect number?", "the second aria in the opera, Tosca?"];
var triviaAns = ['37', '6', "E lucevan le stelle"];

function triviaQuiz() {

    var points = 0;
    for (i = 0; i <= 3; i++) {    
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
                attempts = 0;
            }
        }
    }
  return points;
} */

  // set up question and matching answer arrays
var mathQuest = ['3 + 2', '7 - 4', '10 / 5', '6 X 2'];
var mathAns = ['5', '3', '2', '12'];

// math quiz function displays math questions and gives the user 2 attempts to get it right - then returns a score
function mathQuiz() {
  // initialize points
  var points = 0;
  //use a for loop to loop through each math question
  for (i = 0; i <= 3; i++) {
    //set attempts to 3
    var attempts = 3;
    // use a while loop to give the user 3 attempts to answer
    while (attempts > 0) {
      // prompt user with math question
      ans = prompt("What is " + mathQuest[i]);
      // see if the answer matches the answer array
      if (ans == mathAns[i]) {
        // if correct, add 1 to points, alert user and set attempts to 0
        points = points + 1;
        alert("Correct!");
        attempts = 0;
      } else {
        // if answer doesn't match, alert user and subtract 1 from attempts
        alert("Incorrect");
        attempts = attempts - 1;
      } // end if
    } // end while
  } // end for
  // return the points variable
  return points;
} // end mathQuiz function