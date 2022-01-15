var i = 0;

// Countdown timer
var timeLeft = 60;
var timerId;

// Scores
var score = 5;

// Page element queryselectors
var startButton = document.querySelector("#starterbutton")

// Answer buttons
var ans1Btn = document.querySelector("#ans1");
var ans2Btn = document.querySelector("#ans2");
var ans3Btn = document.querySelector("#ans3");

// Current question
var questionEl = document.querySelector("#question");

// Answer validation
var ansValidatorEl = document.querySelector("#answervalidation");


// Timer and score
var timerEl = document.querySelector("#timer");
var scoreEl = document.querySelector("#score");

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
        correctAnswer: "2"
    },
    {
        question: "Question three",
        answers: ["1. Answer one", "2. Answer two", "3. Answer three"],
        correctAnswer: "2"
    },
    {
        question: "Question four",
        answers: ["1. Answer one", "2. Answer two", "3. Answer three"],
        correctAnswer: "2"
    },
] 


// MAIN LOGIC
timerId = setInterval(countdown, 1000);
function countdown() {
    // Remove a second from the time  
        timeLeft--;
        timerEl.textContent = timeLeft;

}

scoreEl.textContent = score;

document.querySelector(".questionnaire").style.display = "none";

startButton.addEventListener("click", askQuestions);

// Question iterator
questionHandler(0);

function askQuestions() {
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
    correct = questions[i].correctAnswer;
    if (element.textContent === correct) {
      console.log("Right");
    } else {
      console.log("Wrong");
    }
    i++;
    if (i === questions.length) {
      endQuiz();
    } else {
      askQuestions(i);
    }
  }





countdown();

