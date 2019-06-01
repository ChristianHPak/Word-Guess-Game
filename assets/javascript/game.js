// character variables
var characters = ['bowser', 'waluigi', 'koopalings', 'birdo', 'rosalina', 'toad', 'yoshi']

// empty variables to store later
var lettersguessed = [];
var ranCharacter = "";
var blanks = 0;
var correctblanks = [];
var lettersofword = [];

// counter variables
var wins = 0;
var guessesremaining = 9;

//html shortcuts
var winstext = document.getElementById("wins");
var currentwordtext = document.getElementById("currentword")
var guessesremainingtext = document.getElementById("guessesremaining")
var lettersguessedtext = document.getElementById("lettersguessed")

// function reset(){
//     lettersguessed = [];
//     guessesremaining = 9;
//     correctblanks = [];
//     game();
// }

// game start function
function game() {
    // chooses a character
    var ranCharacter = characters(Math.floor(Math.random() * characters.length));

    // split the individual word into separate arrays, and store in new array 
    lettersofword = ranCharacter.split("");

    // stores/holds the amount of "length" as an integer
    blanks = lettersofword.length;

    // creates a loop generating the amuount of blanks needed to fill
    for (i = 0; i < blanks; i++) {
        // for each blank, it pushes a underscore
        correctblanks.push("_")
    }
    currentword.innerHTML = " " + correctblanks.join(" ");


    //console logging to make sure it works
    console.log(ranCharacter)
    console.log(lettersofword)
    console.log(blanks)
    console.log(correctblanks)
}


// // audio and pictures