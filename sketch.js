
let board = [
['O','X','O'],
['X','X','O'],
['X','O','X'],
];

let player1 = 'X'
let player2 = 'O'

function setup(){
    createCanvas(400,400)
}

function draw(){
    background(220)
    let w = width / 3
    let h  = height / 3
    for (let i = 0; i < 3;i++){
        for(let j = 0; j < 3; j++){
            let x = w * i
            let y = h * j
            let spot = board[i][j]
            textSize(32)
            if (spot == player2){
                noFill();
            } else if(spot == player1){

            }
        }
    }
}