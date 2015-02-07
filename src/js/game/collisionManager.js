var CollisionManager = function CollisionManager(game,ent) {
    this.ent = ent;
    this.game = game;
    this.colliders = [];
}

CollisionManager.prototype.init = function() {
    this.colliders = [
        [this.ent.get(0,"fallingman"),this.ent.get(0,"floor")]
    ];
}

CollisionManager.prototype.addColliders = function(a,b) {
    this.colliders[this.colliders.length] = [a,b];
}

CollisionManager.prototype.checkCollisions = function() {
    
    var that = this;
    
    this.colliders.forEach(function(cs) {
        that.game.physics.arcade.collide(cs[0].sprite,cs[1].sprite, function() { 
            cs[0].collide(cs[1]); 
            cs[1].collide(cs[0]); 
        });
    });
}

module.exports = CollisionManager;