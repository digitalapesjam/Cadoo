var CollisionManager = function CollisionManager(game,ent) {
    this.ent = ent;
    this.game = game;
    this.colliders = [];
}

CollisionManager.prototype.addCollision = function(collision) {
    collision.collisionManager = this;
    this.colliders[this.colliders.length] = collision;
}

CollisionManager.prototype.removeCollision = function(collision) {
    var i = this.colliders.indexOf(collision);
    if (i > -1) 
        this.colliders.splice(i,1);
}

CollisionManager.prototype.checkCollisions = function() {
    var that = this;
    this.colliders.forEach(function(cs) { 
        cs.checkCollision(that.game)
    });
}

module.exports = CollisionManager;