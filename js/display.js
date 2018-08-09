let gridSize = 40;
let gridMargin = 10;
let gridSpace = 8;
let canvasWidth = COLS * gridSize + 2 * gridMargin + (COLS - 1) * gridSpace;
let canvasHeight = ROWS * gridSize + 2 * gridMargin + (COLS - 1) * gridSpace;

let colors = [
    "#e24b3d",
    "#2572c4",
    "orange",
    "pink",
    "green"
];

// for {c:0, r:0} => {x:0, y:0}
// for {c:5, r:1} => {x:200, y:40}

function translateXY(r,c){
    let x = c * (gridSize + gridSpace) + gridSize / 2 + gridMargin;
    let y = r * (gridSize + gridSpace) + gridSize / 2 + gridMargin;
    return {
        x:x, y:y
    };
}

function drawPlayer(p){
    
    stroke("white");
    let w = Math.sin(frameCount / 3) * 3 + 6;
    strokeWeight(w);

    let coord = translateXY(p.r,p.c);
        
    fill(colors[p.colorIndex]);
    ellipse(coord.x,coord.y,gridSize /2);
}

function drawBoard(){
    noStroke();
    // LOOP THROUGH THE BOARD
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {

            let coord = translateXY(r,c);
            
            let cellValue = game.board[r][c];
            fill(colors[cellValue]);
            ellipse(coord.x,coord.y,gridSize /2);
        }
    }
}
