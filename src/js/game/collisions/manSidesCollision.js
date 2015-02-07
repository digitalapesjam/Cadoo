var ManSidesCollision = function Floor(man,sides) {
    this.man = man;
    this.sides = sides;
}

ManSidesCollision.prototype.checkCollision = function(game) {
    if (this.man.falling) {
        game.physics.arcade.collide(this.man.sprite,this.sides.sidetileLeft, function() { 
            this.bounce(1);
        },null,this);  
    
        game.physics.arcade.collide(this.man.sprite,this.sides.sidetileRight, function() { 
            this.bounce(-1);
        },null,this);
    }
}

ManSidesCollision.prototype.bounce = function (direction) {
    this.man.sprite.body.velocity.x = direction*100;
    this.man.bouncing = true;
    var that = this;
    setTimeout(function() { 
        that.man.bouncing = false;
    }, 300);
}

module.exports = ManSidesCollision;