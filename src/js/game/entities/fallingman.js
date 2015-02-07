var Fallingman = function Fallingman(game, posx, posy) {
    this.game = game;
    this.sprite = null;
    this.anyCustomVariables = 5;
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

module.exports = Fallingman;