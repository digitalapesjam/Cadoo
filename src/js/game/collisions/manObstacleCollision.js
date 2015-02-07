var ManObstacleCollision = function Floor(man, obstacles) {
    this.man = man;
    this.obstacles = obstacles;
}

ManObstacleCollision.prototype.checkCollision = function(game) {
    game.physics.arcade.collide(this.man.sprite, this.obstacles.ledges, function() { 
        console.log('ledge hit');
        if (this.man.falling) {
            //this.man.sprite.loadTexture("stickman_hit");
            //this.man.sprite.animations.add('hitting');
            //this.man.sprite.animations.play('hitting', 40, false);
            //this.man.falling = false;
        }
    }, null, this);
    game.physics.arcade.overlap(this.man.sprite, this.obstacles.birds, function() { 
        console.log('bird hit');
        if (this.man.falling) {
            //this.man.sprite.loadTexture("stickman_hit");
            //this.man.sprite.animations.add('hitting');
            //this.man.sprite.animations.play('hitting', 40, false);
            //this.man.falling = false;
        }
    }, null, this);
    game.physics.arcade.overlap(this.man.sprite, this.obstacles.branches_roots, function() { 
        console.log('branch/root hit');
        if (this.man.falling) {
            //this.man.sprite.loadTexture("stickman_hit");
            //this.man.sprite.animations.add('hitting');
            //this.man.sprite.animations.play('hitting', 40, false);
            //this.man.falling = false;
        }
    }, null, this);
}

module.exports = ManObstacleCollision;