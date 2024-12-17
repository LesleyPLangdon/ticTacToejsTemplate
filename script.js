let player1 = "X";
let player2 = "O";
let player = "";
let turn = 0;
let square = [1, 2, 3, 4, 5, 6, 7, 8, 9]
/********************* Function to display game board and set player to x ********************************/
function initializeGame() {

}

/********************* Function handles the player input and places mark on board. This may be completed as more than one function if you choose ********************************/
function playerMove() {
    console.log('playSquare ran');
    
    if (turn % 2 == 0) {
        player = player1;
        turn ++;
    } else if (turn % 2 == 1) {
        player = player2;
        turn ++;
    }
    document.getElementById("cell"+num).innerHTML = player;

}

/********************* Function checks all rows, columns, and diagonals for three identical symbols ********************************/
function checkWinner() {

}

/********************* Function resets the game board ********************************/
function resetGame() {

}

