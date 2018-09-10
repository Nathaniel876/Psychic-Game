
    
    var alpha = ["a", "b", "c"];
    var userGuessHis = [];
        
    var winCount = 0;
    var loseCount = 0;
    var guessLeftCount = 9;
     
    document.onkeyup= function(event){
  
    var userPicks = event.key;
    console.log("USer: "+userPicks);
   
    var computerGuess = alpha[Math.floor(Math.random()*alpha.length)];
    console.log("Computer: "+computerGuess);
    
    if (userPicks === computerGuess){
        winCount++; 
        guessLeftCount = 9; 
        userGuessHis = [];
     
    } else {
        --guessLeftCount;
        userGuessHis.push(userPicks);
        if (guessLeftCount == 0){
            loseCount++;
            guessLeftCount = 9;
        }
        
    }
   
    var winScore = document.getElementById("winCount-Text");
    var loseScore = document.getElementById("loseCount-Text");
    var guessLeft = document.getElementById("guessLeftCount-Text");
    var guessSoFar = document.getElementById("guessSoFar-Text");
 
    winScore.textContent = "Win: "+ winCount;
    loseScore.textContent = "Lose: "+ loseCount;
    guessLeft.textContent = "Guesses left: "+ guessLeftCount;
    guessSoFar.textContent = "Your guesses so far: "+ userGuessHis;
};
 