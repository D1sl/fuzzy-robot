var i = 0;

// Countdown timer
var timeLeft = 60;
var timerId;

var finalScoreEl = document.querySelector("#finalscore");

var startButton = document.querySelector("#starterbutton")

// Answer buttons
var ans1Btn = document.querySelector("#ans1");
var ans2Btn = document.querySelector("#ans2");
var ans3Btn = document.querySelector("#ans3");

// Current question
var questionEl = document.querySelector("#question");

// Answer validation
var ansValidatorEl = document.querySelector("#answervalidation");


// Timer
var timerEl = document.querySelector("#timer");

var message = document.querySelector("#answervalidation");


// Questions
var questions = [
    {
        question: "Question one",
        answers: ["1. Answer one", "2. Answer two", "3. Answer three"],
        correctAnswer: "2. Answer two"
    },
    {
        question: "Question two",
        answers: ["1. Answer one", "2. Answer two", "3. Answer three"],
        correctAnswer: "1. Answer one"
    },
    {
        question: "Question three",
        answers: ["1. Answer one", "2. Answer two", "3. Answer three"],
        correctAnswer: "3. Answer three"
    },
    {
        question: "Question four",
        answers: ["1. Answer one", "2. Answer two", "3. Answer three"],
        correctAnswer: "1. Answer one2"
    },
] 


// MAIN LOGIC
function countdown() {
    // Remove a second from the time  
        timeLeft--;
        timerEl.textContent = timeLeft;

}


document.querySelector(".questionnaire").style.display = 'none';
document.querySelector(".endgame").style.display = 'none';
document.querySelector(".scoretimer").style.display = 'none';


startButton.addEventListener("click", askQuestions);

// Question iterator
questionHandler(0);

function askQuestions() {
    document.querySelector(".scoretimer").style.display = 'inline';
    timerId = setInterval(countdown, 1000);

    console.log("Ask questions clicked");
    
    document.querySelector(".questionnaire").style.display = "block";
    document.querySelector("#starter").textContent = null;

    ans1Btn.addEventListener("click", function() {
        checkAnswer(ans1Btn);
    });

    ans2Btn.addEventListener("click", function() {
        checkAnswer(ans2Btn);
    });

    ans3Btn.addEventListener("click", function() {
        checkAnswer(ans3Btn);
    });

    questionHandler(0);
}

// Question handler
function questionHandler(i) {

        questionEl.textContent = questions[i].question;
        ans1Btn.textContent = questions[i].answers[0];
        ans2Btn.textContent = questions[i].answers[1];
        ans3Btn.textContent = questions[i].answers[2];

}  

// Answer handler
function checkAnswer(element) {

    // Get the current questions index and correct answer and compare it to what the user chose
    correct = questions[i].correctAnswer;
    if (element.textContent === correct) {
      console.log("Right answer chosen");
      timeLeft = timeLeft + 10;
      answerMessage("Correct!")
    } else {
        console.log("Wrong answer chosen");
        answerMessage("Incorrect!")
      timeLeft = timeLeft - 10;
    }

    i++;

    if (i === questions.length) {
      endQuiz();
    } else {
      questionHandler(i);
    }
  }

  function answerMessage(messageContent) {
      message.textContent = messageContent;
      setTimeout(function() {
          message.textContent = null;
      }, 1500);
  }



function endQuiz() {

    clearInterval(timerId);

    document.querySelector(".scoretimer").style.display = 'none';

    console.log("Quiz has ended");
    document.querySelector(".questionnaire").style.display = 'none';
    document.querySelector(".endgame").style.display = 'block';
    finalScoreEl.textContent = timeLeft;
} 



countdown();

