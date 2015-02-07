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
        }
    },null,this);
}

module.exports = ManFloorCollision;