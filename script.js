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

// Player's form info

const player1Form = document.getElementById("player-name-1");
const player2Form = document.getElementById("player-name-2");

// Player's creation

let player1;
let player2;

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

                isVictory(gameboardSpace);
            }            
        })
    }
})();

//Counter for when there's no more space on the board (the game is a tie)
let counter = 0;

// Check for winner or tie
function isVictory(cells) {
  counter += 1;

	let combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let comb of combs) {

		if (
			cells[comb[0]].textContent == cells[comb[1]].textContent &&
			cells[comb[1]].textContent == cells[comb[2]].textContent &&
			cells[comb[0]].textContent != ''
		) {
            if (cells[comb[0]].textContent === "X") {
              document.querySelector(".congratulate-winner").textContent = (`${player1.name} wins!`);
            }

            else if (cells[comb[0]].textContent === "O") {
              document.querySelector(".congratulate-winner").textContent = (`${player2.name} wins!`);
            }

            for (let i = 0; i < 9; i++) {
                if (GameboardObj.gameboard[i] === undefined) {

                    GameboardObj.gameboard[i] = "";
                    gameboardSpace[i].textContent = GameboardObj.gameboard[i];
                }
            }
		}

    else if (counter === 9) {
      document.querySelector(".congratulate-winner").textContent = (`It's a tie!`);
      }
	}

	return false;
}

/* PLAYER'S FORM */

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

/* RESTART AND CHANGE PLAYERS BUTTON */

const changePlayers = document.getElementById("change-players-button");
const restartButton = document.getElementById("restart-button");

changePlayers.addEventListener("click", () => {
  openModal(modal);
  
  for (let i = 0; i < 9; i++) {
        GameboardObj.gameboard[i] = undefined;
        gameboardSpace[i].textContent = GameboardObj.gameboard[i];
    }

    document.querySelector(".congratulate-winner").textContent = "";

  counter = 0;
})

restartButton.addEventListener("click", () => {
  for (let i = 0; i < 9; i++) {
        GameboardObj.gameboard[i] = undefined;
        gameboardSpace[i].textContent = GameboardObj.gameboard[i];
    }

    document.querySelector(".congratulate-winner").textContent = "";

  counter = 0;
})

/* SUBMIT BUTTON */

openModal(modal);

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", (e) => {
  if (!player1Form.checkValidity() || !player2Form.checkValidity()) {
    playerName1.reportValidity();
    playerName2.reportValidity();
  }

  else {
    e.preventDefault();

    player1 = Player(player1Form.value, 1);
    player2 = Player(player2Form.value, 2);

    closeModal(modal);
  }
  
})


