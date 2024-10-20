var today = new Date();
//var months = today.GetMonth();
//var days = today.GetDay();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['Sunday', 'Monday', "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"]
var date = today.getDate();
var year = today.getFullYear();
var hours = today.getHours();
var minutes = today.getMinutes();


function name(userName) { 
    var firstLetter = userName.charAt(0);
    firstLetter = userName.toUpperCase();
}

let visitorName = prompt("Welcome!\nPlease tell use your name. ");
 
function validEmail(email) {
    var emailRegex = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
    var valid = email.match(emailRegex);
    if (valid = email.match(emailRegex)) {
        valid = string.split("@");
        valid = valid[0].toUpperCase;
        return valid;
    } else {
        document.write("Please enter a valid email. ");
    }
}

let visitorEmail = prompt("Please enter your email. ");

window.alert(validEmail([0]) + " + " + validEmail([1]) )


var quotes = ["A person's a person, no matter how small. - Dr. Seuss", "The young man knows the rules, but the old man knows the exceptions.- Oliver Wendell Holmes, Sr.",
    "It is an extra dividend when you like the girl you've fallen in love with. - Clark Gable", "Dream as if you'll live forever. Live as if you'll die today. - James Dean",
    "Today is the only day. Yesterday is gone. - John Wooden"];
var randQuote = quotes[Math.floor(Math.random()*3)+1];


/*if (hours < 12) {
    if (curHr < 12) {
        window.alert('Good morning, ' + visitorName + ".")
      } else if (curHr < 18) {
        window.alert('Good afternoon, ' + visitorName + ".")
      } else {
        window.alert('Good evening, ' + visitorName + ".")
      }
} */

switch (hours) {
    case (hours < 12): {
        window.alert('Good morning, ' + visitorName + ".");
    }
    case (hours < 18): {
        window.alert('Good afternoon, ' + visitorName + ".");
    }
    default:
        window.alert('Good evening, ' + visitorName + ".");
}

var triviaQuest = ["the name of the dog that found the Jules rimet Cup in 1966?", "the name of the Soviet ghost town in Norway?", "the second aria in the opera, Tosca?"];
var triviaAns = ["pickles", "pryamiden", "e lucevan le stelle"];

var points = 0;
var triviaQuest = triviaQuest.length
for (var i = 0; i <= triviaQuest.length; i++) {
    var score = triviaQuiz(i);
 }

function triviaQuiz(i) {

    var attempts = 2;
    while (attempts > 0) {
        ans = prompt("What is " + triviaQuest[i]);
        ans = string.toLowerCase();
        if (ans == triviaAns[i]) {
            alert("Correct!");
            attempts = 0;
        } else {
            alert("Incorrect");
            attempts = attempts - 1;
        }

        if (attempts == 2 && ans == triviaAns[i]) {
            points = points + 3;
        } else if (attempts == 1 && ans == triviaAns[i]) {
            points = points + 2;
        } else if (attempts == 0 && ans == triviaAns[i]) {
            points = points + 1;
        } else {
            points = points + 0;
            attempts == 0;
            
        }

        if (i === 3 && attempts == 0) {break; }
    }
  return points;
}