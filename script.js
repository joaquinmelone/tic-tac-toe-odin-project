// Player Factory
const Player = (name, playingPosition) => {
    let turn;

    if (playingPosition === 1) {
        turn = true;
    }

    else {
        turn = false;
    }

    return { name, turn }
}

// Global variables

const player1 = Player("Jugador1", 1);
const player2 = Player("Jugador2", 2);

// Gameboard Object
let GameboardObj = {
    gameboard: []
}

// DOM declarations

const gameboardSpace = document.querySelectorAll(".gameboard-space");

// Render gameboard
const renderGameboard = (() => {

    // Gameboard mark input
    for (let i = 0; i < 9; i++) {
        gameboardSpace[i].addEventListener("click", () => {
            let mark;

            if (GameboardObj.gameboard[i] === undefined) {

                if (player1.turn === true) {
                    mark = "X"
                    player1.turn = false;
                    player2.turn = true;
                }
    
                else if (player2.turn === true) {
                    mark = "O"
                    player2.turn = false;
                    player1.turn = true;
                }

                GameboardObj.gameboard[i] = mark;
                gameboardSpace[i].textContent = GameboardObj.gameboard[i];

                
            }            
        })
    }
})();

/* // Check for winner or tie

function endOfTheGame() {
    if ((GameboardObj.gameboard[0] && GameboardObj.gameboard[1] && GameboardObj.gameboard[2]) === "X" || (GameboardObj.gameboard[3] && GameboardObj.gameboard[4] && GameboardObj.gameboard[5]) === "X" || (GameboardObj.gameboard[6] && GameboardObj.gameboard[7] && GameboardObj.gameboard[8]) === "X" || (GameboardObj.gameboard[0] && GameboardObj.gameboard[4] && GameboardObj.gameboard[8]) === "X" || (GameboardObj.gameboard[2] && GameboardObj.gameboard[4] && GameboardObj.gameboard[6]) === "X") {
        alert("player1 wins")
    }

    else if ((GameboardObj.gameboard[0] && GameboardObj.gameboard[1] && GameboardObj.gameboard[2]) === "O" || (GameboardObj.gameboard[3] && GameboardObj.gameboard[4] && GameboardObj.gameboard[5]) === "O" || (GameboardObj.gameboard[6] && GameboardObj.gameboard[7] && GameboardObj.gameboard[8]) === "O" || (GameboardObj.gameboard[0] && GameboardObj.gameboard[4] && GameboardObj.gameboard[8]) === "O" || (GameboardObj.gameboard[2] && GameboardObj.gameboard[4] && GameboardObj.gameboard[6]) === "O") {
        alert("player2 wins")
    }

    else if () {

    }
} */


