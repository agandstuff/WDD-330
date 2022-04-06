import * as utils from './utils.js';
window.handleGuess = handleGuess;
window.reset = reset;

// Defining constant variables storing elements from HTML
const popup = document.getElementById('popup-container');
const result = document.getElementById('result');
const bodyParts = document.querySelectorAll('.body-part');
const keyboard = document.getElementById('keyboard');

// defining variables to be used throughout game functions
let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;
let clue = '';
let alphabet = [];

function getAlphabet(url) {
    utils.getJSON(url).then(data => {
        alphabet = data;
    }) 
}

function randomGame() {
    // determining random word for the answer to the game
    getAlphabet('./alphabet.json');
    answer = alphabet[Math.floor(Math.random() * alphabet.length)];
}

// adds letter to guessed array, disables it, checks to see if it is part of the answer, and checks to see if the game is won or lost. If not, updates mistakes and hangman
function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);

    if (answer.indexOf(chosenLetter) >= 0) {
        guessedWord();
        checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1 ) {
        mistakes++;
        updateMistakes();
        checkIfGameLost();
        updateHangman();
    }
}

function generateButtons() {
    // generating buttons for each letter of the alphabet and displaying them in the HTML to create the keyboard
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `<button class="btn" id='` + letter + `' onClick="handleGuess('` + letter + `')">` + letter + `</button>`).join('');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}


// checks to see how many mistakes are made and runs through each body part to update style to match equal number of mistakes
function updateHangman() {
    bodyParts.forEach((part, index) => {
        const errors = mistakes;
    
        if (index < errors) {
          part.style.display = 'block';
        } else {
          part.style.display = 'none';
        }
      });
}

// checks to see if guessed word equals the answer, if so pop up with result and reset button
function checkIfGameWon() {
    if (wordStatus === answer) {
        result.innerText = 'Congrats, you won!';
        popup.style.display = 'flex';
    }
}

// checks to see if mistakes equal total allowed mistakes, if so pop up with result and reset button
function checkIfGameLost() {
    if (mistakes === maxWrong) {
        result.innerText = 'Sorry, the answer was '+ answer + ', try again...';
        popup.style.display = 'flex';
    }
}

// checks guessed letters to created guessed word, also displays current clue to user based on current answer
function guessedWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('word').innerHTML = wordStatus;

    clue = answer.charAt(0) + ' is for . . .';
    document.getElementById('clue').innerHTML = clue;
}

// function to update mistakes displayed to user
function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}

// function to reset the game
function reset() {
    // reset variables and style attributes
    mistakes = 0;
    guessed = [];
    keyboard.style.display = 'flex';
    popup.style.display = 'none';
    bodyParts.forEach((part) => {
        part.style.display = 'none';
        })
    
    // functions to reset the answer, guessed word, mistakes displayed and regenerate the keyboard
    randomGame();
    guessedWord();
    updateMistakes();
    generateButtons();
}

// display the max wrong
document.getElementById('maxWrong').innerHTML = maxWrong;

// initial functions to start game
randomGame();
generateButtons();
guessedWord();

