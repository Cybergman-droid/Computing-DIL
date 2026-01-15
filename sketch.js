/*
let board = [
['O','X','X'],
['X','O','O'],
['O','O','O'],
];

let players = ['X','O']
let currentPlayer
let available = []

function setup(){
    createCanvas(400,400)
    currentPlayer = random(players)
    for (let j = 0; j < 3;j++){
        for(let i = 0; i < 3; i++){
            available.push([i,j])
        }
    }
}

function draw(){
    background(220)
    let w = width / 3
    let h  = height / 3

    // vertical grid lines
    line(w,0,w,height)
    line(w*2,0,w*2,height)
    line(0,h,width,h)
    line(0,h*2,width,h*2)

    // horizontal grid lines

    for (let j = 0; j < 3;j++){
        for(let i = 0; i < 3; i++){
            let x = w * i + w/2
            let y = h * j + h/2
            let spot = board[i][j]
            textSize(32)
            strokeWeight(4)
            if (spot == players[1]){
                noFill();
                ellipse(x,y,w/1.5)
            } else if(spot == players[0]){
                let xr = w/4
                line(x-xr,y-xr,x+xr,y+xr)
                line(x+xr,y-xr,x-xr,y+xr)
            }
        }
    }
}*/

/** This function sets up our sketch. */
/** This function loads resources that will be used later. */

/** This function sets up our sketch. */
function setup() {
    createCanvas(400, 480);
    world.gravity.y = 10 
    square = new Sprite (100,100,50,50,'d')
    square.friction = 
    floor = new Sprite(width/2,height/2,width,10,'s')
    floor.rotation = 0

    if(kb.pressed('d')){
        new Sprite()
    }

    if(mouse.pressed()){
        new Sprite()
    }
}
/** This function redraws the sketch multiple times a second. */
function draw() {
    background(140)
}



