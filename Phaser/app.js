console.log('hey hey it works');

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var score = 0

function preload() {
  game.load.image('sky', 'assets/sky.png');
  game.load.image('ground', 'assets/platform.png');
  game.load.image('star', 'assets/star.png');
  game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
  game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.add.sprite(0, 0, 'sky');

  // Making group of platforms
  platforms = game.add.physicsGroup();
  platforms.enableBody = true;

  // Ground
  var ground = platforms.create(0, game.world.height - 64, 'ground');
  ground.scale.setTo(2, 2);
  ground.body.immovable = true;

  // Ledges
  var ledge = platforms.create(400, 400, 'ground');
  ledge.body.immovable = true;
  ledge = platforms.create(-150, 250, 'ground');
  ledge.body.immovable = true;

  // Player
  player = game.add.sprite(32, game.world.height - 150, 'dude');
    // player animations using spritesheet and applies game physics
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    game.physics.arcade.enable(player);
    
    // Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

  // Enemy
  enemy1 = game.add.sprite(750, 20, 'baddie')
    // Enemy animations using spritesheet and applies game physics
    enemy1.animations.add('left', [0, 1], 10, true);
    enemy1.animations.add('right', [2, 3], 10, true);
    game.physics.arcade.enable(enemy1);
    // Enemy physics properties.
    enemy1.body.bounce.y = 0.2;
    enemy1.body.gravity.y = 500;
    enemy1.body.collideWorldBounds = true;

      enemy2 = game.add.sprite(10, 20, 'baddie')
    // Enemy animations using spritesheet and applies game physics
    enemy2.animations.add('left', [0, 1], 10, true);
    enemy2.animations.add('right', [2, 3], 10, true);
    game.physics.arcade.enable(enemy2);
    // Enemy physics properties.
    enemy2.body.bounce.y = 0.2;
    enemy2.body.gravity.y = 500;
    enemy2.body.collideWorldBounds = true; 

      enemy3 = game.add.sprite(200, 20, 'baddie')
    // Enemy animations using spritesheet and applies game physics
    enemy3.animations.add('left', [0, 1], 10, true);
    enemy3.animations.add('right', [2, 3], 10, true);
    game.physics.arcade.enable(enemy3);
    // Enemy physics properties.
    enemy3.body.bounce.y = 0.2;
    enemy3.body.gravity.y = 500;
    enemy3.body.collideWorldBounds = true; 

  // Creating keyboard entry
  cursors = game.input.keyboard.createCursorKeys();

  // Twinkle creating stars...
  stars=game.add.physicsGroup();
  stars.enableBody = true;
  //loop to crate stars
  for (var i = 0; i < 12; i++) {
var star = stars.create(i * 70, 0, 'star');
star.body.gravity.y = 200;
star.body.bounce.y = Math.random() * 0.9;
  }



}

function update() {
 //Make the player/enemy1 sprite collide with the platform
 game.physics.arcade.collide(player,platforms); 
 game.physics.arcade.collide(enemy1,platforms);
  game.physics.arcade.collide(enemy2,platforms); 
  game.physics.arcade.collide(enemy3,platforms);
 //Player speed reset to 0
 player.body.velocity.x = 0;
 //Keyboard events
 if (cursors.left.isDown) 
  {player.body.velocity.x = -150;
  player.animations.play('left');}
  else if (cursors.right.isDown)
    {player.body.velocity.x = 150;
  player.animations.play('right');}
  else {
    player.animations.stop();
    player.frame = 4;
  }
  //allow the player to jump
  if (cursors.up.isDown && player.body.touching.down) {
    player.body.velocity.y = -300;
  }



  //enenmy A1
  if (enemy1.x > 749) {
    enemy1.animations.play('left');
    enemy1.body.velocity.x = -120;  
  } else if (enemy1.x < 405) {
    enemy1.animations.play('right');
    enemy1.body.velocity.x = 150;
  }

    //enenmy A1
  if (enemy2.x > 200) {
    enemy2.animations.play('left');
    enemy2.body.velocity.x = -120;  
  } else if (enemy2.x < 20) {
    enemy2.animations.play('right');
    enemy2.body.velocity.x = 90;
  }

    //enenmy A1
  if (enemy3.x > 759) {
    enemy3.animations.play('left');
    enemy3.body.velocity.x = -120;  
  } else if (enemy3.x < 405) {
    enemy3.animations.play('right');
    enemy3.body.velocity.x = 10000000000;
  }
}