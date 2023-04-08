var readLineSync = require("readline-sync");
var score = 0;
  var questions = [
    {
      question : "Where do I work? ",
      answer : "Infinera"
    },
  {
    question : "Where do I live? ",
    answer : "Bengaluru"
  },
    {
      question : "My favrioute food? ",
      answer: "Biryani"
    },
    {
      question : "My favrioute sport? ",
      answer: "Cricket",
    },
    {
      question: "My favrioute movie? ",
      answer: "The Shawshank Redemption"
    }
  ]

var highScores = [
  {
    name : "Ihtesham",
    score : 5
  }
]

function welcome()
{
  var userName = readLineSync.question("Enter your name: ");
  console.log("Welcome "+userName+", Do you know Ihtesham?");
}
function play(question, answer)
{
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toUpperCase() == answer.toUpperCase())
  {
    console.log("You're right");
    score++;
  }
  else
  {
    console.log("You're wrong");
  }
}
function game()
{
  for(var i = 0; i<questions.length; i++)
    {
      var currentQue = questions[i];
      play(currentQue.question, currentQue.answer);
    }
}
function displayScore()
{
  console.log("Your final score is = "+score);
  console.log("----------------");
  console.log("Present highscores");
  for(var i = 0; i<highScores.length;i++)
    {
      console.log(highScores[i].name + " -> " + highScores[i].score);
    }
  console.log("let me know if you beat the high score");
}

welcome();
game();
displayScore();