var BigRock = function BigRock(game, posx, posy) {
        this.game = game;
        this.sprite = null;
        this.posx = posx;
        this.posy = posy;
        this.rotationDirection = 1;
}

BigRock.prototype.create= function() {
        this.sprite = this.game.add.sprite(this.posx, this.posy, 'bigrock');
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.allowGravity = true;
        this.sprite.anchor.setTo(0.5, 0.5);
}

BigRock.prototype.update = function() {
        
        var _delta = 1
        
        if(this.sprite.rotation >= 0.02 || this.sprite.rotation <= -0.02 )
             this.rotationDirection *= -1;

        this.sprite.rotation += (0.02 * this.rotationDirection);
}

module.exports = BigRock;