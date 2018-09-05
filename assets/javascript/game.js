//create an array that lists out all the options a-z

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","w","x","y","z"];

// creat variables to hold the number of wins, losses

var wins = 0;
var losses = 0;
var guess = 8;
var gameOver = false;

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice)  

// This function is run whenver the user presses a key

document.onkeyup = function (event) {

    // Determines which key was pressed

    var userguess = event.key;

    if(userguess = computerChoice) {
        wins++;

    }else{

        userguess--; 

    }

    if (userguess === 0) 
    {
        losses++

    }

    
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    documnet.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementByID('userguess').innerHTML = "userguess left: " + guess;

}



