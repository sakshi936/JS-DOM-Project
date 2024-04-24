# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code


# Project 1 | ColorChanger

```javascript

const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body')


buttons.forEach( (btn)=> {
    btn.addEventListener('click', (e)=>{
        console.log(e);
        console.log(e.target);

        switch(e.target.id){

            case 'grey':
                // body.style.backgroundColor='gray';
                body.style.backgroundColor= e.target.id;
            break;
            case 'white':
                // body.style.backgroundColor='white';
                body.style.backgroundColor= e.target.id;
            break;
            case 'blue':
                // body.style.backgroundColor='blue';
                body.style.backgroundColor= e.target.id;
            break;
            case 'yellow':
                // body.style.backgroundColor='yellow';
                body.style.backgroundColor= e.target.id;
            break;
            case 'purple':
                // body.style.backgroundColor='purple';
                body.style.backgroundColor= e.target.id;
            break;
        }
    })
})

```

# Project 2 | BMI Calculator

```javascript


const form = document.querySelector('form');

//  this use case will give empty value 
// const height=   parseInt(document.querySelector('#height').value);
                                    
form.addEventListener('submit', (e)=>{ 
    e.preventDefault();
    const height=   parseInt(document.querySelector('#height').value);
    const weight=   parseInt(document.querySelector('#weight').value);
    const results=  document.querySelector('#results');


 
    if(height ===' ' || height <0 || isNaN(height)){
        results.innerHTML=`Plases give a valid height ${height}`;
    }
    else  if(weight ===' ' || weight <0 || isNaN(weight)){
        results.innerHTML=`Plases give a valid weight ${weight}`;
    }
    else {
        const BMI = (weight / ((height*height)/10000)).toFixed(2);

       if(BMI < 18.6){
        results.innerHTML = `<span> ${BMI}  Under Weight</span>`;
       }
       else if(BMI > 18.6 && BMI < 24.9){
        results.innerHTML = `<span> ${BMI}  Normal Weight</span>`;
       }
       else {
        results.innerHTML = `<span> ${BMI}  Overweight</span>`;
       }
        
       

    }
    
    });

```
# Project 3 | Digital Clock

```javascript


const clock = document.getElementById('clock');



 setInterval( ()=>{ let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
 }, 1000)

```
# Project 4 | Guess The Number

```javascript
let random = parseInt((Math.random() *100)+1);


const submit= document.querySelector('#subt');
const userInput = document.querySelector('#guessField');

const pre_guesses = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');
const lowhigh = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');



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

function endGame(){
    console.log("in endgame");
    userInput.value='';
    userInput.setAttribute('disabled', '');
    
    
    btn.innerHTML = `New Game`;
    startover.appendChild(btn);
    
    playgame=false;

    newGame();
}


```
# Project 5 | Keyborad

```javascript



const insert = document.getElementById('insert');
window.addEventListener('keydown', (e)=>{
    insert.innerHTML=` <div class=''><table>
    <tr>
      <th>Key</th>
      <th>Kaycode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === " "? 'Space': e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
   
  </table></div>`
})

```

# Project 6 | Unlimited Colors

```javascript


// generate a random color 

const randomcolor= function(){
    const hex = '0123456789ABCDEF';
    let color ='#'

    for(let i=0;i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }

    return color;
}



let setColor;
const startchangingcolor = ()=>{

    if(!setColor)
            setColor= setInterval(changecolor, 1000);

    function changecolor(){ document.body.style.backgroundColor = randomcolor();
}}

const stopchangingcolor = ()=>{
    clearInterval(setColor);
    setColor =null;
};

document.querySelector('#start').addEventListener('click',startchangingcolor);
document.querySelector('#stop').addEventListener('click',stopchangingcolor);

```




