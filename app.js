// Guessing game using js
const max = prompt("Enter the max number:");

const random = Math.floor(Math.random()*max)+1;

let guess = prompt("Guess the number:");

while(true){
    if(guess == "quit"){
        console.log("User quit.");
        break;
    }

    if(guess == random){
        console.log("Your guess is right! congrats!!. random number was "+ random);
        break;
    }else if(guess < random){
        guess = prompt("Hint: Your guess is to small. Please guess again:");
    }else{
        guess = prompt("Hint: Your guess is to large. Please guess again:");
    }
}