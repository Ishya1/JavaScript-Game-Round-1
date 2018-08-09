function setup() {
    createCanvas(canvasWidth, canvasHeight);
    ellipseMode(RADIUS);
}

function draw() {
    background(51);
    
    //drawTime();
    
    drawBoard();
    drawPlayer(game.player);
    drawPlayer(game.enemy);
    if (frameCount % 30 == 0) moveEnemy();
    drawScore();
    drawParticles();

    
}