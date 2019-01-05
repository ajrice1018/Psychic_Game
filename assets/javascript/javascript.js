

//Creates array for allowed letter values
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y",
        "z"];

//Variables for game    
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var userGuessSoFar = [];

//Generated HTML elements for display    
    var winPoints = document.getElementById("wins");
    var guessesLeft = document.getElementById("guessLeft");
    var losePoints = document.getElementById("losses");
    var guessSoFar = document.getElementById("guess-so-far");     

//Generates initial letters for guessing game and then console logs
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess)
    
//function to update display for wins, losses, guesses    
    function updateDisplays() {
    winPoints.textContent = wins;
    guessesLeft.textContent = guesses;
    losePoints.textContent = losses;
  }

//The moment game begins
  document.onkeyup = function(event) {
  
    var userGuess = event.key;
    userGuessSoFar.push(userGuess);
    guessSoFar.textContent = userGuessSoFar;

//Conditions for victory  
    if (userGuess == computerGuess) {
  
      wins++;
      guesses = 9
      userGuessSoFar = [];
      computerGuess = letters[Math.floor(Math.random() * letters.length)];
      console.log(computerGuess)

//Conditions for losses
    
    } else {
  
      guesses--;
  
      if (guesses == 0) {
        losses++;
        userGuessSoFar = [];
        guesses = 9;
      }
  
    }
//Calls update function so correct wins, losses, guesses are displayed
    updateDisplays();
  
  }