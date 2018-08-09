function keyPressed() {
    console.log("keyPressed keyCode = " + keyCode);

    if (keyCode === LEFT_ARROW) {
        game.player.c += -1;
    } else if (keyCode === RIGHT_ARROW) {
        game.player.c += 1;
    } else if (keyCode === DOWN_ARROW) {
        game.player.r += 1;
    } else if (keyCode === UP_ARROW) {
        game.player.r += -1;
    }

    // when player goes off the screen left
    if (game.player.c < 0) game.player.c = COLS - 1;
    // when player goes off the screen top
    if (game.player.r < 0) game.player.r = ROWS - 1;
    
    // when player goes off the screen bottom
    if (game.player.r == ROWS) game.player.r = 0;
    
    game.board[game.player.r][game.player.c] = P1;
}