//This JS File is linked to index.html for Psychic Game
var computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var wins = 0;
var losses = 0;
var chances = 15;
var guessArray = [];

var confirmPsychic = confirm("Are you a psychic?");

if (confirmPsychic) {
  alert("Is there a chance you have powers of the supernatural?");
  alert("See if you can guess which letter the computer is thinking of.");
} else {
  alert("Wrong Answer, Try Again");
  location.reload();
}

// Setup event function for key press
document.onkeyup = function (event) {
  var userGuess = event.key;

  var computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // Checks to insure that the userGuess is in the array of letters.
  if (computerChoices.includes(userGuess)) {
    // If the user guess matches computer guess, you must have ESP
    if (userGuess === computerGuess) {
      wins++;
      guessArray.push(userGuess);
      chances--;
    }
    // If the user guess doesn't match, don't quit your day job
    else if (userGuess !== computerGuess) {
      losses++;
      guessArray.push(" " + userGuess);
      chances--;
    }
    // Chances = 0
    if (chances === 0) {
      alert("You had your chance, you aren't a psychic!!");
      location.reload();
    }
    // Losses Reaches 10
    else if (losses === 10) {
      alert(
        "You have guessed wrong 10 times. You are not a psychic, and probably just average."
      );
      location.reload();
    }
    // Wins = 10, oh and be afraid of this person
    // There was a 1 in 26 chance they'd get it right...
    else if (wins === 10) {
      alert(
        "Someone call the Ghostbusters, or an exorcist!! You're an enigma!!"
      );
      location.reload();
    }
  } else {
    // If the user enters any character other than a letter
    alert("That was not a letter!");
  }

  var html =
    "<p>You chose: " + userGuess + "</p>" +
    "<p>You previously guessed: " + guessArray + "</p>" +
    "<p>The computer was thinking: " + computerGuess + "</p>" +
    "<p>wins: <span id='wins'>" + wins + "</span></p>" +
    "<p>losses: <span id='losses'>" + losses + "</span></p>" +
    "<p>chances: " + chances + "</p>";

  // Set the inner HTML contents of the #game div to our html string
  document.querySelector("#game").innerHTML = html;
};