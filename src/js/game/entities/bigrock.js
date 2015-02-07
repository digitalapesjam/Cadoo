var BigRock = function BigRock(game, posx, posy) {
        this.game = game;
        this.sprite = null;
        this.posx = posx;
        this.posy = posy;
}

Logo.prototype.create= function() {
        this.sprite = this.game.add.sprite(this.posx, this.posy, 'stickman');
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.allowGravity = true;
        this.sprite.anchor.setTo(0.5, 1);
}

Logo.prototype.update = function() {
        
}

module.exports = Logo;