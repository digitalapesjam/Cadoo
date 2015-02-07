var ManObstacleCollision = function Floor(man, obstacles) {
    this.man = man;
    this.obstacles = obstacles;
}

ManObstacleCollision.prototype.checkCollision = function(game) {
    game.physics.arcade.overlap(this.man.sprite, this.obstacles.ledges, function() { 
        //console.log('ledge hit');
        if (this.man.falling) {
            
        }
    }, null, this);
    game.physics.arcade.overlap(this.man.sprite, this.obstacles.birds, function() { 
        //console.log('bird hit');
        if (this.man.falling) {

        }
    }, null, this);
    game.physics.arcade.overlap(this.man.sprite, this.obstacles.branches_roots, function() { 
        //console.log('branch/root hit');
        if (this.man.falling) {

        }
    }, null, this);
}

module.exports = ManObstacleCollision;