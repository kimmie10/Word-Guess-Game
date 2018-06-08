

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
var html = "<span><p>";

console.log(randomCarChar);
function letterToWord() {
    var charHold = "";
    for (var i = 0; i < randomCarChar.length; i++) {
        if (letters.indexOf(randomCarChar[i]) > -1) {
            charHold += "_";
        } else {
            charHold += "";
        }
        
    }
    return charHold;
}

function reset() {
    guessesLeft = 12;
    guessesSoFar = [];
    randomCarChar = carChar[Math.floor(Math.random() * carChar.length)];
    charHold = [];
    letterToWord();

    var htmlInitial = "<span><p>";


    for (var i = 0; i < randomCarChar.length; i++) {
        if (randomCarChar.charAt(i) === " ") {
            htmlInitial += "&nbsp; &nbsp;";
        } else {
            htmlInitial += "_&nbsp;";
        }

    }
    htmlInitial += "</p>"
    document.querySelector("#currentWord").innerHTML = letterToWord();
    var htmlWins = "<p><span>" + "Wins: " + win + "</span></p>";
    var htmlLosses = "<p><span>" + "Losses: " + lose + "</span></p>";
    var htmlGuessesLeft = "<p><span>Guesses Left: " + guessesLeft + "</span></p>";
    document.querySelector("#winPoint").innerHTML = htmlWins;
    document.querySelector("#losePoint").innerHTML = htmlLosses;
    document.querySelector("#numGuessesLeft").innerHTML = htmlGuessesLeft;

    htmlGuesses = "<p><span>"
    for (var i = 0; i < guessesSoFar.length; i++) {
        htmlGuesses += guessesSoFar[i] + "_;";
    }
    htmlGuesses += "</span></p>";
    document.querySelector("#guessedLtrs").innerHTML = htmlGuesses;
}

function progress() {

    for (i = 0, k = 0; i < (charHold.length / 2); i++) {
        if (charHold[k + 1] === true) {
            html += charHold[k];
        } else {
            html += "_";
        }
        html += "&nbsp;";
        k = k + 2;
    }
    html += "</p>"

    document.querySelector("#currentWord").innerHTML = letterToWord();

    htmlWins = "<p><span>Wins: " + win + "</span></p>";
    htmlLosses = "<p><span>Losses: " + lose + "</span></p>";
    htmlGuessesLeft = "<p><span>Guesses Left: " + guessesLeft + "</span></p>";
    document.querySelector("#winPoint").innerHTML = htmlWins;
    document.querySelector("#losePoint").innerHTML = htmlLosses;
    document.querySelector("#numGuessesLeft").innerHTML = htmlGuessesLeft;

    htmlGuess = "<p><span>"
    for (var i = 0; i < guessesSoFar.length; i++) {
        htmlGuess += guessesSoFar[i] + "&nbsp;";
    }
    htmlGuess += "</span></p>";
    document.querySelector("#guessedLtrs").innerHTML = htmlGuess;
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
    console.log(charHold);
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
    if (charHold.indexOf(true) < 0) {
        console.log("USER WINS");
        win++;
        //var charImg = '<img src="assets/images/tommy.gif" class="img-responsive" alt="Rugrats Character">';
        // document.querySelector("img-change").innerHTML = charImg;
        reset();

    }

}

function userLosses() {
    if (guessesLeft === 0) {
        console.log("USER LOSES");
        lose++;
        var audio = new Audio("assets/audio/ahhahaha.wav");
        audio.play();
        var charImg = '<img src="assets/images/tommy.gif" class="img-responsive" alt="Rugrats Character">';
        document.querySelector("img-change").innerHTML = charImg;
        resetGame();
    }

}

function resetHtml() {
    html = "<span><p>";
}

letterToWord();

reset();

document.onkeyup = function (event) {
    letterPicked = String.fromCharCode(event.keyCode).toLowerCase();

    checkUserGuess();

    progress();

    reset();

    userWins();

    userLosses();

}