// Countdown timer
var timeLeft = 60;
var timerId;

// Page element queryselectors
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

// Questions
var questions = [
    {
        question: "Question one",
        answers: ["1. Answer one", "2. Answer two", "3. Answer three"],
        correctAnswer: "2"
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

// Question handler
function questionHandler(i) {
    var i = 0;
    if (i < questions.length) {
        questionEl.textContent = questions[i].question;
        questionEl.textContent = questions[i].question;
        ans1Btn.textContent = questions[i].answers[0];
        ans2Btn.textContent = questions[i].answers[1];
        ans3Btn.textContent = questions[i].answers[2];
    }
}  

// Answer handler
function answerHandler(event) {
    event.preventDevault();



}

questionHandler();

countdown();

