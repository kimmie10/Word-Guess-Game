//game resets when begin and end 


//list of cartoon characters
var carChar = ["tommy", "dil", "spike", "stu", "didi", "grandpa lou", "taffy", "lulu", "angelica", "charlotte", "drew", "chuckie", "kimi", "chas", "kira", "phil", "lil", "betty", "howie", "susie", "lucy", "randy"];

//alphabet letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "0", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//start with random cartoon character to guess


//need holder picture for character picture change
var picChange = ;

//user picks letter that is documented by program and logged as letter picked
var letterPicked = null;

//letter is checked to see if it is a letter in character name currently guessing
var letterCheck = ;

//if letter is not in character name guessing counts down number of guesses
var wrongLetter = ;

//if letter is in character name guessing is output over letter line 
var correctLetter = ;

//user gets 12 guesses
var guessesLeft = 12;

//once 12 guesses is up if all letters are guessed correctly 1 win
var win = 0;

//if all letters are not guessed before 12 guesses 1 lose 
var lose = 0;

//for each letter guessed correctly positive sound is played
var pSound = ;

//for each letter guessed incorrectly negative sound is played
var nSound = ;
