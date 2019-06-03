// character variables
var characters = ['bowser', 'waluigi', 'koopalings', 'birdo', 'rosalina', 'toad', 'yoshi']

// empty variables to store later
var blanks = 0;
var correctblanks = [];
var lettersofword = [];
var lettersguessed = [];
var ranCharacter = [];

// counter variables
var wins = 0;
var guessesremaining = 10;

//html shortcuts
var winstext = document.getElementById("wins");
var currentwordtext = document.getElementById("currentword")
var guessesremainingtext = document.getElementById("guessesremaining")
var lettersguessedtext = document.getElementById("lettersguessed")
var ranCharacter = characters[Math.floor(Math.random() * characters.length)];

function reset() {
    lettersguessed = [];
    guessesremaining = 10;
    correctblanks = [];
}

// function is run everytime a key is pressed
document.onkeyup = function (event) {
    var userPress = event.key.toLowerCase();
    console.log(userPress);

    // chooses a character
    var ranCharacter = characters[Math.floor(Math.random() * characters.length)];

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
    currentwordtext.textContent = " " + correctblanks.join(" ");

    var lettersinword = false;

    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < blanks; i++) {
        if (ranCharacter[i] == letter) {
            lettersinword = true;
        }
    }

    // if true, the letter will remove blanks and replace
    if (lettersinword) {
        for (var i = 0; i < blanks; i++) {
            if (ranCharacter[i] == letter) {
                correctblanks = letter;
            }
        }
        // the guess will go down and the guessed letter will be outputted
    } else {
        guessesremaining--;
        lettersguessedtext.push(userPress);
        lettersguessedtext.textContent = " " + lettersguessed.join(" ");
    }

    // if statement to decide if we win or reset
    function result() {
        if (lettersofword == correctblanks) {
            wins++;
            reset();
        } else {
            reset();
        }
    }

    if (lettersofword == correctblanks) {
        wins++;
        reset();
    } else {
        reset();
    }
}