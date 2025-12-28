const form = document.querySelector('form');
const min = 1;
const max = 100;
let attempts = 5;
const numArray = [];
const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
form.addEventListener('submit', function(e){
    e.preventDefault();
    const num = Number(document.querySelector('#guess').value);
    const result = document.querySelector('#result');
    const previous = document.querySelector('#previous');
    const rem = document.querySelector('#remGuess');
    if(num == randomNum){
        result.textContent = `Congratulations! You guessed the correct number ${randomNum}.`;
    }
    else if(num < randomNum){ 
        result.textContent = `Your guess is too low. Try again!`;
    }
    else if(num > randomNum){
        result.textContent = `Your guess is too high. Try again!`;
    }

    numArray.push(num);
    previous.textContent = `Previous guess: ${numArray.join(', ')}`;
    attempts--;
    rem.textContent = `Guess Remaining: ${attempts}`;
    if(attempts === 0 && num !== randomNum){
        result.textContent = `Game Over! The correct number was ${randomNum}.`;
        form.querySelector('button').disabled = true;
    }
})