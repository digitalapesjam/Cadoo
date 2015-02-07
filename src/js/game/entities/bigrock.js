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

        var tween = this.game.add.tween(this.sprite);

        var angleThreshold = 0.02;
        var animationTime = 100;
        tween
        .to({'rotation': angleThreshold}, animationTime, Phaser.Easing.Linear.None, true, 0, -1, true)
        .to({'rotation': -angleThreshold}, animationTime, Phaser.Easing.Linear.None, true, 0, -1, true)
        .loop();
        tween.start();

}

BigRock.prototype.update = function() {
}

module.exports = BigRock;