let random = parseInt((Math.random() *100)+1);

// console.log(random);

const submit= document.querySelector('#subt');
const userInput = document.querySelector('#guessField');

const pre_guesses = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');
const lowhigh = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');


// const p = document.createElement('p');
const btn = document.createElement('button');
btn.setAttribute('id','new_game');


let preGusses = [];
let no_of_guess = 1;

let playgame = true;

if(playgame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess= parseInt(userInput.value);
        validateGuess(guess);
    })
}

// to check a valid guess 
function validateGuess(guess){

    if(isNaN(guess)  ||  guess<1 || guess >100){
        alert('please enter a valid number');
    }
    else{
        preGusses.push(guess);
        // console.log(preGusses);
        if(no_of_guess === 10){
            displayguess(guess);
            displaymsg(`Game over: Random no was ${random}`);
            endGame();
        }
        else{
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess){
    if(guess=== random){
        displaymsg('You guessed it right')
        endGame();
    }
    else if(guess <random){
        displaymsg('Number is too low!')
    }
    else if(guess > random){
        displaymsg('Number is too heigh!');

    }
}

function displayguess(){
        userInput.value = ''
        pre_guesses.innerHTML = `${preGusses} `;
        no_of_guess += 1;
        remainingGuess.innerHTML = `${11-no_of_guess}`;
}

function displaymsg(msg){
        lowhigh.innerHTML= `<h2>${msg}</h2>`
}


function newGame(){

    console.log("in new Game");
    // console.log(startover.childNodes());
    const new_game = document.querySelector('#new_game');
    new_game.addEventListener('click', function(e){

        random = parseInt((Math.random() *100)+1);
        preGusses =[];
        no_of_guess =1;
        pre_guesses.innerHTML ='';
        remainingGuess.innerHTML =`${11-no_of_guess}`;
        userInput.removeAttribute('disabled');
        startover.removeChild(btn);

        playgame=true;

    })
}

// let End_Restart_button = document.createElement('button');
// End_Restart_button.setAttribute('class','End_Restart_button');

function endGame(){
    console.log("in endgame");
    userInput.value='';
    userInput.setAttribute('disabled', '');
    
    // End_Restart_button.innerHTML = 'New Game';

    // btn.classList.add('button');
    btn.innerHTML = `New Game`;
    startover.appendChild(btn);
    
    playgame=false;

    newGame();
}
