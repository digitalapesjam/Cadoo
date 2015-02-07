var BigRock = function BigRock(game, posx, posy) {
        this.game = game;
        this.sprite = null;
        this.posx = posx;
        this.posy = posy;
        this.rotationDirection = 1;
        this.emitter = null;
        this.trembleTween = null;
}

BigRock.prototype.create= function() {
        this.sprite = this.game.add.sprite(this.posx, this.posy, 'bigrock');
        this.sprite.width= 600;
        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.allowGravity = true;
        this.sprite.anchor.setTo(0.5, 0.5);

        //bigroke rotation
        this.trembleTween = this.game.add.tween(this.sprite);
        var angleThreshold = 0.02;
        var animationTime = 100;
        this.trembleTween
        .to({'rotation': angleThreshold}, animationTime, Phaser.Easing.Linear.None, true, 0, -1, true)
        .to({'rotation': -angleThreshold}, animationTime, Phaser.Easing.Linear.None, true, 0, -1, true)
        .loop();
        this.trembleTween.start();

        
        //bigrock smoke
        this.emitter = this.game.add.emitter(this.sprite.x, 200, 200);
        this.emitter.width= 10;
        this.emitter.height= 0;

        this.emitter.makeParticles('smoke');

        this.emitter.setXSpeed(0, 0);
        this.emitter.setYSpeed(0, 0);

        this.emitter.setRotation(0, 0);
        this.emitter.setAlpha(0.1, 0.2, 3000);
        this.emitter.setScale(0.1, 1, 0.1, 2, 20, Phaser.Easing.Quintic.Out);
        this.emitter.gravity = -200;

        this.emitter.start(false, 4000, 20);

        

        this.game.add.tween(this.emitter).to( { emitX: 10 }, 1000, Phaser.Easing.Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true);
        this.game.add.tween(this.emitter).to( { emitY: 200 }, 4000, Phaser.Easing.Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true);





}

BigRock.prototype.update = function() {
    this.emitter.emitX = this.sprite.x;
    this.emitter.emitY = this.sprite.y - this.sprite.height*1.6 ;


}

module.exports = BigRock;