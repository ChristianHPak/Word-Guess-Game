// character variables
var characters = ['bowser', 'waluigi', 'koopalings', 'birdo', 'rosalina', 'toad', 'yoshi']

// empty variables to store later
var blanks = 0;
var correctblanks = [];
var lettersofword = [];
var lettersguessed = [];

// counter variables
var wins = 0;
var guessesremaining = 10;

var ranCharacter = characters[Math.floor(Math.random() * characters.length)];
//html shortcuts
var winstext = document.getElementById("wins");
var currentwordtext = document.getElementById("currentword")
var guessesremainingtext = document.getElementById("guessesremaining")
var lettersguessedtext = document.getElementById("lettersguessed")

gamesetup();

// game start function
function gamesetup() {
    
    // chooses a character
    ranCharacter = characters[Math.floor(Math.random() * characters.length)];

    // split the individual word into separate arrays, and store in new array 
    var lettersofword = ranCharacter.split("");

    // stores/holds the amount of "length" as an integer
    blanks = lettersofword.length;

    // creates a loop generating the amuount of blanks needed to fill
    for (var i = 0; i < blanks; i++) {
        // for each blank, it pushes a underscore
        correctblanks.push("_")
    }

    // prints out the blanks
    currentwordtext.textContent = " " + correctblanks.join(" ")
}

function reset() {
    lettersguessed = [];
    guessesremaining = 10;
    correctblanks = [];
    gamesetup();
}

//IfElse, to see if letter selected matches random word
// function checkLetters(letter) {
//     var lettersinword = false;

//     //if the generated randomword is equal to the letter entered... then variable is true
//     for (var i = 0; i < blanks; i++) {
//         if (ranCharacter[i] == letter) {
//             lettersinword = true;
//         }
//     }

//     // if true, the letter will remove blanks and replace
//     if (lettersinword) {
//         for (var i = 0; i < blanks; i++) {
//             if (ranCharacter[i] == letter) {
//                 correctblanks = letter;
//             }
//         }
//         // the guess will go down and the guessed letter will be outputted
//     } else {
//         guessesremaining--;
//         lettersguessedtext.push(lettersguessed);
//     }
// }

// if statement to decide if we win or reset
function result() {
    if (lettersofword == correctblanks) {
        wins++;
        reset();
    } else {
        reset();
    }
}


// function is run everytime a key is pressed
document.onkeyup = function (event) {
    var userPress = event.key.toLowerCase();
    console.log(userPress);
    //checks to see if input matches a letter from the ranNumber
    var lettersinword = false;

    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < blanks; i++) {
        if (ranCharacter[i] == userPress) {
            lettersinword = true;
        }
    }

    // if true, the letter will remove blanks and replace
    if (lettersinword) {
        for (var i = 0; i < blanks; i++) {
            if (ranCharacter[i] == userPress) {
                correctblanks = userPress;
            }
        }
        // the guess will go down and the guessed letter will be outputted
    } else {
        guessesremaining--;
        lettersguessedtext.push(lettersguessed);
    }

    // decides if you win or not
    result();
}
// every press results in either a guessed letter or a letter
lettersguessedtext.textContent = " " + lettersguessed.join(" ");
