var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","w","x","y","z"];

// creat variables to hold the number of wins, losses

var wins = 0;
var losses = 0;
var guess = 8;
var gameOver = false;

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice)