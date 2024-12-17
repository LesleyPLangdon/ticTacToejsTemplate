let player1 = "X";
let player2 = "O";
// let player1Score = 0;
// let player2Score = 0;

let turn = 0;
let square = [1, 2, 3, 4, 5, 6, 7, 8, 9]
/********************* Function to display game board and set player to x ********************************/
function initializeGame() {

}

/********************* Function handles the player input and places mark on board. This may be completed as more than one function if you choose ********************************/
function playerMove(num) {
    console.log('playSquare ran');
    let player = "";
    if (turn % 2 == 0) {
        player = player1;
        turn ++;
        
    } else if (turn % 2 == 1) {
        player = player2;
        turn ++;
    }
    document.getElementById("cell"+num).innerHTML = player;
    square[num-1] = player;
    checkWinner(player);

}

/********************* Function checks all rows, columns, and diagonals for three identical symbols ********************************/
function checkWinner(player) {
    if ((square[0] == square[1] && square[1] == square[2]) ||
    (square[3] == square[4] && square[4] == square[5]) ||
    (square[6] == square[7] && square[7] == square[8]) ||
    (square[0] == square[3] && square[3] == square[6]) ||
    (square[1] == square[4] && square[4] == square[7]) ||
    (square[2] == square[5] && square[5] == square[8]) ||
    (square[0] == square[4] && square[4] == square[8]) ||
    (square[2] == square[4] && square[4] == square[6])) {
        document.getElementById("winner").innerHTML = player + "WINS!!!"
        // if (player == "X") {
        //     player1Score ++;
        // } else {
        //     player2Score ++;
        // }
    }

}

/********************* Function resets the game board ********************************/
function resetGame() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById("cell"+ i).innerHTML = "";
    }
    document.getElementById("winner").innerHTML = "";
}

