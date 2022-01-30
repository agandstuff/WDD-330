const gameboard = document.getElementById('gameboard');
const boxes = Array.from(document.getElementsByClassName('box'));
const restartBtn = document.getElementById('playBtn');
const playText = document.getElementById('winner');
const spaces = [null, null, null, null, null, null, null, null, null];
const player1 = 'O';
const player2 = 'X';

let currentPlayer = player1;

gameboard.addEventListener('click', boxClicked);

let playerWon = false;

let turnCount = 0;

function boxClicked(e) {
    const index = e.target.id;
    turnCount++;
    if (!spaces[index]) {
        spaces[index] = currentPlayer;
        e.target.innerText = currentPlayer;

        hasPlayerWon(currentPlayer);

        if (playerWon === true) {
            playText.innerHTML = `${currentPlayer} wins!`;
            return;
        } 
        if (turnCount === 9) {
            if(!playerWon) {
                playText.innerHTML = 'Tie Game';
                return
            }
        }
    }
    currentPlayer = currentPlayer === player1 ? player2 : player1;
}

const hasPlayerWon = (player) => {
    //from top left, check across, down, and diagonal
    if (spaces[0] === player) {
        if (spaces[1] === player && spaces[2] === player) {
            console.log(`${player} wins up top`);
            playerWon = true;
            return;
        }
        if (spaces[3] === player && spaces[6] === player) {
            console.log(`${player} wins on the left`);
            playerWon = true;
            return;
        }
        if (spaces[4] === player && spaces[8] === player) {
            console.log(`${player} wins on the diagonal`);
            playerWon = true;
            return;
        }
    }
    //from bottom check up and across
    else if (spaces[8] === player) {
        if (spaces[2] === player && spaces[5] === player) {
            console.log(`${player} wins on the right`);
            playerWon = true;
            return;
        }
        if (spaces[7] === player && spaces[6] === player) {
            console.log(`${player} wins on the bottom`);
            playerWon = true;
            return;
        }
    }
    //from middle check middle vertical and middle horizontal
    else if (spaces[4] === player) {
        if (spaces[3] === player && spaces[5] === player) {
            console.log(`${player} wins on the middle horizontal`);
            playerWon = true;
            return;
        }
        if (spaces[1] === player && spaces[7] === player) {
            console.log(`${player} wins on the middle vertical`);
            playerWon = true;
            return;
        }
        if (spaces[2] === player && spaces[6] === player) {
            console.log(`${player} wins on the diagonal`);
            playerWon = true;
            return;
        }
    }
};

restartBtn.addEventListener('click', () => {
    spaces.forEach((space, index) => {
        spaces[index] = null;
    });
    boxes.forEach((box) => {
        box.innerText = "";
    });
    playText.innerHTML = 'Which Player Will Win?';
    playerWon = false;

    currentPlayer = player1;
});