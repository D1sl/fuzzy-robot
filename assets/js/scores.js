var scoreListEl = document.querySelector("#highscores");

function listScores() {
    var highscore = JSON.parse(localStorage.getItem("highscore"));
    if (name && score === null) {
        return;
    }

    for (i = 1; i <= highscore.length; i++) {

        var scoreRow = document.createElement("li");
        scoreListEl.appendChild(scoreRow);
        scoreRow.textContent = highscore[i - 1].name + " " + highscore[i - 1].score;
        scoreRow.className = "list-group-item d-flex justify-content-left align-items-center";

    }
}

listScores();