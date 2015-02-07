
var BigrockFloorCollision = function Floor(bigrock,floor, camera) {
    this.bigrock = bigrock;
    this.floor = floor;
    this.camera = camera;
}

BigrockFloorCollision.prototype.checkCollision = function(game) {
    game.physics.arcade.collide(this.bigrock.sprite,this.floor.sprite, function() { 
        console.log('bigrock-floor');
        this.bigrock.trembleTween.stop();
        var audio = game.add.audio('bump_rock');
        audio.onDecoded.add(function(){ audio.play(); });
        this.collisionManager.removeCollision(this);
        this.bigrock.sprite.body.allowGravity = false;
        this.bigrock.crack();
        this.camera.shake();
        //this.camera.trembleTween.start()
        //this.camera.trembleTween.start()
        //this.bigrock.emitter.destroy();

    },null,this);
}

module.exports = BigrockFloorCollision;