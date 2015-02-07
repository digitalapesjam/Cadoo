var ManBigRockCollision = function ManBigRockCollision(man,rock) {
    this.man = man;
    this.rock = rock;
}

ManBigRockCollision.prototype.checkCollision = function(game) {
    game.physics.arcade.collide(this.man.sprite,this.rock.sprite, function() { 
        if (this.man.falling) {
           game.physics.arcade.gravity.y = 200;
           this.man.dragged = true;
        }
    },null,this);
}

module.exports = ManBigRockCollision;
