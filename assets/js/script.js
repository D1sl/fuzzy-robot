var timeLeft = 60;

var timerEl = document.querySelector("#timer");

var timerId;

timerId = setInterval(countdown, 1000);

function countdown() {
    // Remove a second from the time  
        timeLeft--;
        timerEl.textContent = timeLeft;

}

countdown();