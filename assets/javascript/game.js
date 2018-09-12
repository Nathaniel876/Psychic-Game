var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var userGuessHis = [];

var winCount = 0;
var loseCount = 0;
var guessLeftCount = 9;

document.onkeyup = function (event) {

    var userPicks = event.key;
    console.log("USer: " + userPicks);

    var computerGuess = alpha[Math.floor(Math.random() * alpha.length)];
    console.log("Computer: " + computerGuess);

    if (userPicks === computerGuess) {
        winCount++;
        guessLeftCount = 9;
        userGuessHis = [];

    } else {
        --guessLeftCount;
        userGuessHis.push(userPicks);
        if (guessLeftCount == 0) {
            loseCount++;
            guessLeftCount = 9;
        }

    }

    var winScore = document.getElementById("winCount-Text");
    var loseScore = document.getElementById("loseCount-Text");
    var guessLeft = document.getElementById("guessLeftCount-Text");
    var guessSoFar = document.getElementById("guessSoFar-Text");

    winScore.textContent = "Wins: " + winCount;
    loseScore.textContent = "Losses: " + loseCount;
    guessLeft.textContent = "Guesses left: " + guessLeftCount;
    guessSoFar.textContent = "Your guesses so far: " + userGuessHis;
};
