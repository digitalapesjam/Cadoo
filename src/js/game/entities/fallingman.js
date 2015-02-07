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
}

Fallingman.prototype.update = function() {
        if(this.cursors.left.isDown){
            this.sprite.body.velocity.x = -150;
        }
        if(this.cursors.right.isDown){
            this.sprite.body.velocity.x = +150;
        }
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