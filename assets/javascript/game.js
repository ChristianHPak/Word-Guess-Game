// character variables
var characters = ['bowser', 'waluigi', 'koopalings', 'birdo', 'rosalina', 'toad', 'yoshi']

// empty variables to store later
var ranCharacter = "";
var blanks = 0;
var correctblanks = [];
var lettersofword = [];
var lettersguessed = [];

// counter variables
var wins = 0;
var guessesremaining = 10;

//html shortcuts
var winstext = document.getElementById("wins");
var currentwordtext = document.getElementById("currentword")
var guessesremainingtext = document.getElementById("guessesremaining")
var lettersguessedtext = document.getElementById("lettersguessed")

function reset(){
    lettersguessed = [];
    guessesremaining = 9;
    correctblanks = [];
    gamesetup();
}

// game start function
function lgamesetup() {
    // chooses a character
    var ranCharacter = characters(Math.floor(Math.random() * characters.length));

    // split the individual word into separate arrays, and store in new array 
    lettersofword = ranCharacter.split("");

    // stores/holds the amount of "length" as an integer
    blanks = lettersofword.length;
 
    // creates a loop generating the amuount of blanks needed to fill
    for (var i = 0; i < blanks; i++) {
        // for each blank, it pushes a underscore
        correctblanks.push("_")
    }
    // prints out the blanks
    currentword.innerHTML = " " + correctblanks.join(" ");


    //console logging to make sure it works
    console.log(ranCharacter)
    console.log(lettersofword)
    console.log(blanks)
    console.log(correctblanks)
}

//IfElse, to see if letter selected matches random word
function checkLetters(letter) {
    var lettersinword = false;

    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < blanks; i++){
        if(ranCharacter[i] == letter){
            lettersinword = true;
        }
    }
    
    // if true, the letter will remove blanks and replace
    if(lettersinword){
        for (var i = 0; i < blanks; i++){
            if(ranCharacter[i] == letter){
                correctblanks = letter;
            }
        }
        // the guess will go down and the guessed letter will be outputted
    }else {
        guessesremaining--;
        lettersguessed.push(lettersguessed);
    }
    console.log(correctblanks);
}    




// // audio and pictures