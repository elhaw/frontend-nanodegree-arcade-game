// Enemies our player must avoid
var Enemy = function(x, y, speed) {

    this.sprite = 'images/enemy-bug.png';
    //Setting the Enemy initial location
    this.x = (Math.random() * 60);
    this.y = Math.floor(Math.random() * (230 - 60 + 1)) + 60;
    this.speed = 40;



};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.dt = 20;
    this.x = this.x + this.speed * dt;
    if (this.x > 500) {
        this.x = Math.floor(Math.random() * (-1 + 7 + 1)) - 7;
    }
    // console.log(this.x);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function(x, y, speed) {

    this.sprite = 'images/char-boy.png';
    this.x = 202;
    this.y = 400;
    this.speed = speed;

};
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function(dt) {
    if (this.y <= -15) {
        this.reset();
    }
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

Player.prototype.handleInput = function(keypress) {

    if (keypress === 'left' && this.x > 40) {
        this.x -= 100;
    }
    if (keypress === 'up' && this.y > 0) {
        this.y -= 83;

    }
    if (keypress === 'right' && this.x < 400) {
        this.x += 100;

    }
    if (keypress === 'down' && this.y < 400) {
        this.y += 83;

    }

};
Player.prototype.checkCollisions = function() {
    for (var i = 0; i < allEnemies.length; i++) {
        if ((Math.abs(this.x - allEnemies[i].x)) < 101 && (Math.abs(this.y - allEnemies[i].y)) < 50) {
            console.log(this.y);
            this.reset();
        }
    }
};
//reset player location after collision
Player.prototype.reset = function() {
    this.x = 202;
    this.y = 400;
};
// Now instantiate your objects.
var enemy1 = new Enemy(50, 200, 10);
var enemy2 = new Enemy(-20,45,40);
var enemy3 = new Enemy(100,150,50);


// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1,enemy2,enemy3];
// Place the player object in a variable called player

var player = new Player();
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