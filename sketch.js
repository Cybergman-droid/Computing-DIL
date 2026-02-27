function setup() {
  createCanvas(600, 400);

  // Player sprite
  player = createSprite(width / 2, height / 2, 40, 40);
  player.shapeColor = color(0, 150, 255);

  // Group of coins
  coins = new Group();
  spawnCoins(10); // initial coins
}

function draw() {
  background(50);

  // Player movement
  if (keyDown("left")) player.position.x -= 4;
  if (keyDown("right")) player.position.x += 4;
  if (keyDown("up")) player.position.y -= 4;
  if (keyDown("down")) player.position.y += 4;

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
    let c = createSprite(
      random(20, width - 20),
      random(20, height - 20),
      20,
      20,
    );
    c.shapeColor = color(255, 215, 0); // gold coin
    coins.add(c);
  }
}

function collectCoin(player, coin) {
  score++;
  coin.remove();
}

let player;
let platforms;
let levelLength = 3000;

function setup() {
  createCanvas(800, 400);

  platforms = new Group();

  player = new Sprite(100, 0, 40, 40);
  player.color = "red";
  player.friction = 0.1;
  player.bounciness = 0;
  player.rotationLock = true;

  let ground = new Sprite(levelLength / 2, 350, levelLength, 50, "static");
  ground.color = "green";
  platforms.add(ground);

  addPlatform(300, 280, 200, 20);
  addPlatform(700, 220, 150, 20);
  addPlatform(1100, 260, 200, 20);
  addPlatform(1600, 200, 200, 20);
  addPlatform(2200, 300, 200, 20);

  camera.zoom = 1;
}

function addPlatform(x, y, w, h) {
  let p = new Sprite(x, y, w, h, "static");
  p.color = "green";
  platforms.add(p);
}

function draw() {
  background(135, 206, 235);

  let speed = 5;

  if (kb.pressing("left")) player.vel.x = -speed;
  else if (kb.pressing("right")) player.vel.x = speed;
  else player.vel.x = 0;

  if (kb.presses("up") && player.colliding(platforms)) {
    player.vel.y = -12;
  }

  camera.x = player.x;
  camera.y = height / 2;

  camera.x = constrain(camera.x, width / 2, levelLength - width / 2);

  camera.off();
  fill(0);
  textSize(16);
  text("Player X: " + floor(player.x), 20, 20);
  camera.on();
}
