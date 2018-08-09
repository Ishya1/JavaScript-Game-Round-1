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
    pacman (game.player);
    calculateScore();
}

function moveEnemy() {
    if (Math.random () > 0.5)
        if(game.player.c > game.enemy.c) 
            game.enemy.c += 1;
        else
            game.enemy.c += -1;
    else
    
        if(game.player.r > game.enemy.r) 
            game.enemy.r += 1;
        else
            game.enemy.r += -1;
        

    pacman (game.enemy);

    calculateScore();
}

function pacman(p) {
    if (p.c < 0) p.c = COLS -1;
    // when player goes off the screen top
    if (p.r < 0) p.r =  ROWS -1;
    
    // when player goes off the screen bottom
    if (p.r == ROWS) p.r = 0;
    if (p.c == COLS) p.c = 0;
    //this is where we "paint" the cell
    game.board[p.r][p.c] = p.colorIndex;

}