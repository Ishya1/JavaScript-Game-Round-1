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
}