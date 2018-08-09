function calculateScore(){
    game.score.player1 = 0;
    game.score.player2 = 0;
    

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            // put code here
            if (game.board[r][c] == P1) game.score.player1 += 1;
            if (game.board[r][c] == P2) game.score.player2 += 1;
        }
    }
}