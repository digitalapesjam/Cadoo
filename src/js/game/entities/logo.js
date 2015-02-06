var Logo = function Logo(game,posx,posy) {
        this.game = game;
        this.sprite = null;
        this.anyCustomVariables = 5;
        this.posx = posx;
        this.posy = posy;
}

Logo.prototype.create= function() {
        this.sprite = this.game.add.sprite(this.posx, this.posy, 'logo');
        this.game.physics.arcade.enable(this.sprite);
}

Logo.prototype.update = function() {
        //this.game.physics.arcade.collide(this.sprite, Platform.group);
}

module.exports = Logo;