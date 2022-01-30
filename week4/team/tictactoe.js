// create variables
const gameboard = document.getElementById("gameboard");
const boxes = Array.from(document.getElementsByClassName("box"));
const restartBtn = document.getElementById("restartBtn");
const playText = document.getElementById("playText");
const spaces = [null, null, null, null, null, null, null, null, null];
const player1 = "O";
const player2 = "X";
let currentPlayer = player1;

// add event listener
gameboard.addEventListener("click", boxClicked);
let turnCount = 0;
// display the player that clicked on the box
function boxClicked(e) {
    // get the index of the box that was clicked
    const index = e.target.id;
    turnCount++;
    if (!spaces[index]) {
        spaces[index] = currentPlayer;
        e.target.innerText = currentPlayer;

        // check for winner
        if (hasPlayerWon(currentPlayer)) {
            playText.innerHTML = `${currentPlayer} wins!!`;
            return;
        }

        if (turnCount == 8) {
            playText.innerHTML = `Tie`;
            return;
        }
        // switch player
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }

}

const hasPlayerWon = (player) => {
    //from top left, check across, down, and diagonal
    if (spaces[0] === player) {
        if (spaces[1] === player && spaces[2] === player) {
            console.log(`${player} wins up top`);
            return true;
        }
        if (spaces[3] === player && spaces[6] === player) {
            console.log(`${player} wins on the left`);
            return true;
        }
        if (spaces[4] === player && spaces[8] === player) {
            console.log(`${player} wins on the diagonal`);
            return true;
        }
    }
    //from bottom check up and across
    else if (spaces[8] === player) {
        if (spaces[2] === player && spaces[5] === player) {
            console.log(`${player} wins on the right`);
            return true;
        }
        if (spaces[7] === player && spaces[6] === player) {
            console.log(`${player} wins on the bottom`);
            return true;
        }
    }
    //from middle check middle vertical and middle horizontal
    else if (spaces[4] === player) {
        if (spaces[3] === player && spaces[5] === player) {
            console.log(`${player} wins on the middle horizontal`);
            return true;
        }
        if (spaces[1] === player && spaces[7] === player) {
            console.log(`${player} wins on the middle vertical`);
            return true;
        }
        if (spaces[2] === player && spaces[6] === player) {
            console.log(`${player} wins on the diagonal`);
            return true;
        }
    }
    else {
        return false;
    }
};

// reset game 
restartBtn.addEventListener("click", () => {
    spaces.forEach((space, index) => {
        spaces[index] = null;
    });
    boxes.forEach((box) => {
        box.innerText = "";
    });
    playText.innerHTML = `Tic Tac Toe`;

    currentPlayer = player1;
});

