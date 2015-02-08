
var BigrockFloorCollision = function Floor(bigrock,floor, camera, scoreDisplay) {
    this.bigrock = bigrock;
    this.floor = floor;
    this.camera = camera;
    this.scoreDisplay = scoreDisplay;
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
        
        setTimeout(function() { 
            game.state.start('insertname',true,true,this.scoreDisplay.score);
        }.bind(this),1260);

    },null,this);
}

module.exports = BigrockFloorCollision;