

//list of cartoon characters
var carChar = ["tommy", "dil", "spike", "stu", "didi", "grandpa lou", "taffy", "lulu", "angelica", "charlotte", "drew", "chuckie", "kimi", "chas", "kira", "phil", "lil", "betty", "howie", "susie", "lucy", "randy"];

//alphabet letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "0", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var lose = 0;
var guessesLeft = 12;
var guessesSoFar = [];
var letterPicked = null;
var randomCarChar = carChar[Math.floor(Math.random() * carChar.length)];
var charHold = [];
var html = "<p>";

function letterToWord() {
    for (var i = 0, k = 0; i < randomCarChar.length; i++) {
        charHold[k] = randomCarChar.charAt(i);
        k++
        if (randomCarChar.charAt(i) != " ") {
            charHold[k] = false;
        } else {
            charHold[k] = true;
        }
        k++
    }

}

function consoleLogs() {
    console.log("wins: " + wins + "\n" + "losses: " + lose + "\n");
    console.log("guessesLeft: " + guessesLeft + "\n");
    console.log("guessesSoFar: " + guessesSoFar + "\n");
    console.log("wordToBeGuessed: " + randomCarChar + "\n");
    console.log("arrayFromWord: " + charHold + "\n");
    console.log("--------------------------------");
}

function reset() {
    guessesLeft = 12;
    guessesSoFar = [];
    randomCarChar = carChar[Math.floor(Math.random() * carChar.length)];
    charHold = [];
    letterToWord();

    for (var i = 0; i < randomCarChar.length; i++) {
        if (randomCarChar.charAt(i) === " ") {
            htmlInitial += "_; _;";
        } else {
            htmlInitial += "_;";
        }

    }
    htmlInitial += "</p>"
    document.querySelector("#currentWord").innerHTML = htmlInitial;
    var htmlWins = "<p>" + "Wins: " + win + "</p>";
    var htmlLosses = "<p>" + "Losses: " + lose + "</p>";
    var htmlGuessesLeft = " Guesses Left: " + guessesLeft + "</p>";
    document.querySelector("#winPoint").innerHTML = htmlWins;
    document.querySelector("#losePoint").innerHTML = htmlLosses;
    document.querySelector("#numGuessesLeft").innerHTML = htmlGuessesLeft;

    htmlGuesses = "<p>"
    for (var i = 0; i < guessesSoFar.length; i++) {
        htmlGuesses += guessesSoFar[i] + "_;";
    }
    htmlGuesses += "</p>";
    document.querySelector("#guessedLetter").innerHTML = htmlGuesses;
}

function checkUserGuess() {

    if (charHold.indexOf(letterPicked) < 0 && guessesSoFar.indexOf(letterPicked) < 0 && letters.indexOf(letterPicked) >= 0) {
        guessesLeft--;
        var audio = new Audio("assets/audio/hopeless.wav");
        audio.play();
    }
    if (guessesSoFar.indexOf(letterPicked) < 0 && letters.indexOf(letterPicked) >= 0) {
        guessesSoFar[guessesSoFar.length] = letterPicked;
    }

    for (var i = 0; i < charHold.length; i++) {
        if (charHold[i] === letterPicked) {
            if (charHold[i + 1] === false) {
                var audio = new Audio("assets/audio/fanfare.wav");
                audio.play();
            }
            charHold[i + 1] = true;
        }
    }
}

function userWins() {
    if (charHold.indexOf(false) < 0 ) {
        console.log("USER WINS");
        win++;
    

    }
    
}

//user picks letter that is documented by program and logged as letter picked
var letterPicked = "";
document.onkeyup = function (event) {
    letterPicked = String.fromCharCode(event.keyCode).toLowerCase();

}




//if letter is not in character name guessing counts down number of guesses


//if letter is in character name guessing is output over letter line 

//user gets 12 guesses then game resets


//once 12 guesses is up if all letters are guessed correctly 1 win


//if all letters are not guessed before 12 guesses 1 lose 


//for each letter guessed correctly positive sound is played


//for each letter guessed incorrectly negative sound is played

