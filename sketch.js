function setup() {
  new Canvas(500, 500);

  bricks = new Group();
  bricks.w = 20;
  bricks.h = 10;
  bricks.tile = "=";

  tilesGroup = new Tiles(
    [
      "======",
      "=========....==",
      "==....",
      "==....",
      "=====.",
      "======",
      "....==",
      "....==",
      "======",
      "=====.",
    ],
    36,
    40,
    bricks.w + 4,
    bricks.h + 4
  );

  let player;
  let coins;
  let score = 0;

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
        20
      );
      c.shapeColor = color(255, 215, 0); // gold coin
      coins.add(c);
    }
  }

  function collectCoin(player, coin) {
    score++;
    coin.remove();
  }
}
