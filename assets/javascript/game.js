
var computerChoice = ["pear", "boots", "image", "computer", "desk", "cheery", "string", "boolean", "world", "picture", "challenge", "correct", "biofule", "lignin"];
var intrText = document.getElementById("intrtext");
var winText = document.getElementById("wintext");
var remainingTriesText = document.getElementById("remainingTriestext");
var letterGuessText = document.getElementById("letterguestext");
var winConditionText = document.getElementById("winconditiontext");

var maxTries = 10;
var remainingTries = 0;
var counter;
var computerPick;
var wins;

document.onkeyup = function (event) {
  //take the letter from user
  var userGuess = event.key.toLowerCase();
  winConditionText.textContent = " ";

  //IF game not started
  if (remainingTries <= 0) {
    //pick a word
    computerPick = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    //make an initail array having the same length as the compterPick
    wins = [];
    for (i = 0; i < computerPick.length; i++) {
      wins[i] = "_";
    };

    //display to user
    winText.textContent = "Wins: " + wins.join(" ");

    remainingTries = maxTries;
    counter = 0;
    remainingTriesText.textContent = "Number of Guesses Remaining: " + remainingTries;
    letterGuessText.textContent = "Letters Already Guessed: ";
    return;

  }
  
  //IF game has started
  //comparing the letter with the word and see if match
  // if match repalce the "_ "with the latter at all the match position
  else {

    var i = computerPick.indexOf(userGuess);
    while (i > -1) {
      //if has match, 
      //update the letter on the position that matched,
      wins[i] = userGuess;
      counter++;

      // get value again
      i = computerPick.indexOf(userGuess, i + 1);
    }

    //display # of wins 
    winText.textContent = "Wins: " + wins.join(" ");

    // and show the letter history
    letterGuessText.textContent += userGuess;

    // the nubmer of remaing -- 
    remainingTries--;
    remainingTriesText.textContent = "Number of Guesses Remaining: " + remainingTries;
    //check winning conditions
    if (counter >= computerPick.length) {
      winConditionText.textContent = "You Win!!!";
      remainingTries = 0;
      return;
    
    }

    // declare loose
    if (remainingTries <= 0) {
      winConditionText.textContent = "You Lost!!!";
      return;
    }
  };
};