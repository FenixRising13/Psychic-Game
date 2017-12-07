//This JS File is linked to index.html for Psychic Game
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var chances = 15;

var confirmPsychic = confirm("Are you a psychic?");

 
    if (confirmPsychic){
        alert("Is there a chance you have powers of the supernatural?");
        alert("See if you can guess which letter the computer is thinking of.");
    }
    else {
        alert("Wrong Answer, Try Again");
        location.reload();
    }

// alert("Is there a chance you have powers of the supernatural?");
// alert("See if you can guess which letter the computer is thinking of.");


// Setup event function for key press
document.onkeyup = function (event) {
    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log(userGuess);//This is to log the key press
    // If the user guess matches computer guess, you must have ESP(N)
    if (userGuess === computerGuess) {
        wins++;
        chances--;
        console.log("Wins: " + wins);
    }
    // If the user guess doesn't match, don't quit your day job
    else if (userGuess !== computerGuess) {
        losses++;
        chances--;
        console.log("Losses: " + losses);
    }
    // Chances = 0
    if (chances === 0) {
        alert("You had your chance, you aren't a psychic!!");
        location.reload();
    }
    // Losses Reaches 10
    else if (losses === 10) {
        alert("You have guessed wrong 10 times. You are not a psychic, and probably just average.");
        location.reload();
    }
    // Wins = 10, oh and be afraid of this person
    // There was a 1 in 26 chance they'd get it right.. per chance
        else if (wins === 10) {
        alert("Someone call the Ghostbusters, or an exorcist!! You're an enigma!!");
        location.reload();
    }

    var html =
        "<p>You chose: " + userGuess + "</p>" +
        "<p>The computer was thinking: " + computerGuess + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>chances: " + chances + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
};

