// Enemies our player must avoid
var Enemy = function(x,y,speed) {

    this.sprite = 'images/enemy-bug.png';
    //Setting the Enemy initial location
    this.x =  (Math.random() * 60 ) ;
    this.y =Math.floor(Math.random() * (230 - 60 + 1)) + 60;
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
    if (this.x > 500)
    {
        this.x = Math.floor(Math.random() * (-1 + 4 + 1)) - 4;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function(x,y,speed) {

    this.sprite = 'images/char-boy.png';
    this.x = 202;
    this.y = 400;
    this.speed = speed;

};
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function(dt) {


};
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};
Player.prototype.handleInput = function (keypress) {

  if(keypress === 'left'){
 this.x -= 100;
 }
 if(keypress === 'up'){
 this.y -= 82.5;
 }
 if(keypress === 'right'){
 this.x += 100;
 }
 if(keypress === 'down'){
 this.y += 82.5;
 }

};
// Now instantiate your objects.
var enemy1 = new Enemy(50,60,10);
var enemy2 = new Enemy(100,145,40);
var enemy3 = new Enemy(130,220,50);


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
