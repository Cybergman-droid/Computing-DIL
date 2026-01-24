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

/*let logoImg;
let logo;

function preload() {
logoImg = loadImage("https://imgs.search.brave.com/2PS6pXGf2fThiPRdunRqP_Azvj_lUklB1Q9yAUAlDpU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2R2ZC1wbmcvZHZk/LWxvZ28taWNvbi1k/b3dubG9hZC1pY29u/cy0yMC5wbmc");


}

function setup() {
  createCanvas(800, 450);   
  world.gravity.y = 0;    

  logo = new Sprite();
  logo.img = logoImg;
  logo.scale = 0.4;       


  logo.x = width / 3;
  logo.y = height / 2;

  logo.vel.x = 4;
  logo.vel.y = 3;

  logo.bounciness = 1;
  logo.friction = 0;
  logo.drag = 0;

  logo.collideEdges = true;
}

function draw() {
  background(0);

  if (isNearCorner(logo)) {
    tint(random(100, 255), random(100, 255), random(100, 255));
  } else {
    noTint();
  }

}


function isNearCorner(s) {
  const margin = 20;
  const nearLeft   = s.x - s.width / 2  < margin;
  const nearRight  = s.x + s.width / 2  > width - margin;
  const nearTop    = s.y - s.height / 2 < margin;
  const nearBottom = s.y + s.height / 2 > height - margin;

  return (nearLeft || nearRight) && (nearTop || nearBottom);
}*/

let player;
let coins;
let score = 0;

function setup() {
  createCanvas(600, 400);

  // Player sprite
  player = createSprite(width/2, height/2, 40, 40);
  player.shapeColor = color(0, 150, 255);

  // Group of coins
  coins = new Group();
  spawnCoins(10); // initial coins
}

function draw() {
  background(50);

  // Player movement
  if (keyDown("left"))  player.position.x -= 4;
  if (keyDown("right")) player.position.x += 4;
  if (keyDown("up"))    player.position.y -= 4;
  if (keyDown("down"))  player.position.y += 4;

  // Check collision with coins
  player.overlap(coins, collectCoin);

  // Draw sprites
  drawSprites();

  // Display score
  fill(255);
  textSize(24);
  text("Score: " + score, 20, 30);

  // Extension: spawn more coins when score reaches a threshold
  if (score === 10) {
    spawnCoins(5);
  }
  if (score === 20) {
    spawnCoins(10);
  }
}

function spawnCoins(num) {
  for (let i = 0; i < num; i++) {
    let c = createSprite(random(20, width-20), random(20, height-20), 20, 20);
    c.shapeColor = color(255, 215, 0); // gold coin
    coins.add(c);
  }
}

function collectCoin(player, coin) {
  score++;
  coin.remove();
}
