var gyro = require('../../lib/gyro.min.js')


var Fallingman = function Fallingman(game, posx, posy, maxVelY) {
    this.game = game;
    this.sprite = null;
    this.posx = posx;
    this.posy = posy;
    this.cursors = game.input.keyboard.createCursorKeys();
    this.rotation = null;
    this.falling = true;
    this.bouncing = false;
    this.maxVelY = maxVelY;
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
        this.rotation = o.gamma;
    }.bind(this));
}

Fallingman.prototype.update = function() {
    
    if (!this.bouncing) {
        if (this.falling) {
            if (this.rotation != null ) 
                this.sprite.body.velocity.x = this.rotation*5;
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
        } else {
            this.sprite.body.velocity.x = 0;
        }
    }

    if (this.sprite.body.velocity.y > this.maxVelY) {
        this.sprite.body.velocity.y = this.maxVelY;
    }
    
    this.sprite.angle = this.sprite.body.velocity.x/6;
}

module.exports = Fallingman;