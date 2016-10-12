// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.mov = 1;
    this.random = Math.floor(Math.random() * 3) + 1;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.mov++;
    if(this.mov < 610) {
      this.x = (this.mov + dt) * this.random;
    } else {
      this.mov = 1;
    }
    this.y = this.random * 70;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function() {
  this.xPos = 2;
  this.yPos = 5;
  this.life = 3;
  this.score = 0;
  this.x = 300;
  this.y = 300;
  this.sprite = 'images/char-boy.png';
}

Player.prototype.update = function (dt) {
  this.x = 100 * this.xPos;
  this.y = 70 * this.yPos;
}

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function (keyCode) {
  if(keyCode === 'up') {
    if(this.yPos > 0) {
      this.yPos--;
    }
  }
  if(keyCode === 'down') {
    if(this.yPos < 5) {
      this.yPos++;
    }
  }
  if(keyCode === 'right') {
    if(this.xPos < 4) {
      this.xPos++;
    }
  }
  if(keyCode === 'left') {
    if(this.xPos > 0) {
      this.xPos--;
    }
  }
}

Player.prototype.renderText = function () {
  // rendering text for score
  ctx.font = "30px Arial";
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.fillText("Score: " + this.score, 200, 100);
  // ctx.strokeText("Score: " + this.score, 20, 100);

  // rendering text for lifes
  ctx.font = "18px Arial";
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.fillText("life: " + this.life, 440, 98);
  // ctx.strokeText("life: " + this.life, 410, 100);
}

// This class requires an update(), render() and
// a handleInput() method.


var Gem = function () {
  this.y = 70;
  this.random = Math.floor(Math.random() * 5);
  this.x = 100 * this.random;
  this.upgrade = 0;
  this.gems = ['Gem Blue', 'Gem Green','Gem Orange', 'Star'];
  this.sprite = 'images/'+this.gems[this.upgrade]+'.png';
}

Gem.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Gem.prototype.update = function () {
  this.random = Math.floor(Math.random() * 5);
  if(player.score === 5 || player.score === 10 || player.score === 15) {
    gem.upgrade++;
  }
  this.sprite = 'images/'+this.gems[this.upgrade]+'.png';
  this.x = 100 * this.random;
}

// heart object for increaseing life
var Heart = function () {
  this.random = Math.floor(Math.random() * 5);
  this.sprite = 'images/Heart.png';
  this.y = 70;
  this.x = 100 * this.random;
}

Heart.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Heart.prototype.changePos = function () {
  this.random = Math.floor(Math.random() * 5);
  this.x = 100 * this.random;
}

var player = new Player();
var gem = new Gem();
var heart = new Heart();
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var allEnemies = [enemy1, enemy2, enemy3];
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
