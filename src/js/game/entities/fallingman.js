var gyro = require('../../lib/gyro.min.js')
var rotation = null;

var Fallingman = function Fallingman(game, posx, posy) {
    this.game = game;
    this.sprite = null;
    this.posx = posx;
    this.posy = posy;
    this.cursors = game.input.keyboard.createCursorKeys();
}

Fallingman.prototype.create= function() {
    this.sprite = this.game.add.sprite(this.posx, this.posy, 'stickman');
    this.game.physics.arcade.enable(this.sprite);
    this.sprite.body.allowGravity = true;
    this.sprite.smoothed = false;
    this.sprite.scale.set(3,3);
    this.sprite.anchor.setTo(0.5, 1);
    
    this.sprite.animations.add('falling');
    this.sprite.animations.play('falling', 15, true);
    
    gyro.startTracking(function(o) {
        rotation = o.gamma;
    });
}

Fallingman.prototype.update = function() {
         
    
        if (rotation != null ) 
            this.sprite.body.velocity.x = rotation*5;
        else if(this.cursors.left.isDown)
            this.sprite.body.velocity.x -= 30;
        else if(this.cursors.right.isDown)
            this.sprite.body.velocity.x += 30;
        else 
            this.sprite.body.velocity.x *= 0.95;
    
    if (this.sprite.body.velocity.x < -200)
        this.sprite.body.velocity.x  = -200;
        
    if (this.sprite.body.velocity.x > 200)
        this.sprite.body.velocity.x = 200;
        
    
    this.sprite.angle = this.sprite.body.velocity.x/6;
}

var collided = false;
Fallingman.prototype.collide = function(collider) {
    if (!collided) {
        console.info(collider);
        this.sprite.loadTexture("stickman_hit");
        this.sprite.animations.add('hitting');
        this.sprite.animations.play('hitting', 40, false);
        collided = true;
    }
}

module.exports = Fallingman;