let startGame = document.querySelector("#start");
let hidden = document.querySelector(".hidden");
let input = document.querySelector("#userInput");
let hint = document.querySelector("#hint");
let win = document.querySelector("#win");
let send = document.querySelector("#send");
let pickedNumbers = document.querySelector("#pickedNumbers");

let numbers = [];
let tries = 0;


let randomNumber = Math.floor(Math.random()*101);


startGame.addEventListener("click", function(){
    hidden.classList.toggle("hidden");
});

send.addEventListener("click", function(){

        if (parseInt(input.value) === randomNumber) {

            win.textContent = `THE NUMBER IS CORRECT, YOU WIN!!!`;

        } else if (parseInt(input.value) !== randomNumber){ 

            if (parseInt(input.value) < randomNumber) {
                
                hint.textContent = `The number is HIGHER`;

            } else {

                hint.textContent = `The number is LOWER`;

            }
        } 

        numbers.push(parseInt(input.value));
        pickedNumbers.textContent = `Your picks: ${numbers}`

        if (numbers.length > 9) {
            win.textContent = `YOU LOSE, THE SECRET NUMBER WAS ${randomNumber}`;
        }
});








// if (input.value !== randomNumber) {

//     if (input.value < randomNumber) {
//         hint.textContent = `The secret number is higher`; 
//     } else if (input > randomNumber) {
//         hint.textContent = `The secret number is lower`; 
//     } else {
//         console.log("404 NOT FOUND");
//     }

// } else if (input.value === randomNumber) {
//     win.textContent = `THE NUMBER IS CORRECT, YOU WIN!!!`; 
// }