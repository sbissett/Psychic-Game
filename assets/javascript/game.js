//create an array that lists out all the options a-z

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// creat variables to hold the number of wins, losses

var wins = 0;
var losses = 0;
var guess = 8;
var gameOver = false;
var pastGuesses = [];
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log("Welcome Stephen: " + wins);
console.log("you wanna win or lose: " + losses);
console.log("you have 8 guesses: " + guess);
console.log("hows the choices coming along: " + computerChoice)


// This function is run whenver the user presses a key




document.onkeyup = function (event) {



    // Determines which key was pressed


    var userguess = event.key;
    console.log(userguess);

    if (userguess === computerChoice) {
        console.log("win");

        wins++;

        document.getElementById('wins').innerHTML = wins;



    } 
    else{ 

        var alreadyGuesses = false;
        for (var i=0; i < pastGuesses.length; i++){

            if (userguess === pastGuesses[i]){
                alreadyGuesses=true;
            } 
            console.log(alreadyGuesses);          
        }
        console.log("Fail", guess) 
        
        if (!alreadyGuesses) {
            guess--;
            pastGuesses.push(userguess);
        }
        else{
            
        }
       
        // dispaly letters that have been guessed.
        // reset the game when the game is won or lost
    }

    console.log(pastGuesses);
`           `
    if (guess<1){
        guess=0;
        console.log('You loose')
        losses++;


        document.getElementById('losses').innerHTML = losses;


    }

    document.getElementById('userguess').innerHTML = guess;

}



