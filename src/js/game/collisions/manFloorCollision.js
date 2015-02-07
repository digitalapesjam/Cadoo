var ManFloorCollision = function Floor(man,floor) {
    this.man = man;
    this.floor = floor;
}

ManFloorCollision.prototype.checkCollision = function(game) {
    game.physics.arcade.collide(this.man.sprite,this.floor.sprite, function() { 
        if (this.man.falling) {
            this.man.sprite.loadTexture("stickman_hit");
            this.man.sprite.animations.add('hitting');
            this.man.sprite.animations.play('hitting', 40, false);
            this.man.falling = false;
            
            
            var blood = game.add.sprite(this.man.sprite.position.x, this.man.sprite.position.y+6, "blood");
            blood.smoothed = false;
            blood.scale.set(4,4);
            blood.anchor.setTo(0.5, 0);
    
            blood.animations.add('spreading');
            blood.animations.play('spreading', 20, false);
        }
    },null,this);
}

module.exports = ManFloorCollision;