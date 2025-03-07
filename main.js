const readline = require('readline-sync');

let firstName = readline.question("What is your name? ");

let index = readline.questionInt("Please enter an index number to find the character at that index: ");

console.log(firstName[index]);