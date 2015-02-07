var ManBigRockCollision = function ManBigRockCollision(man,rock) {
    this.man = man;
    this.rock = rock;
}

ManBigRockCollision.prototype.checkCollision = function(game) {
    game.physics.arcade.collide(this.man.sprite,this.rock.sprite, function() { 
        if (this.man.falling) {
            game.physics.arcade.gravity.y = 1000000;
            //var tween = game.add.tween(game.physics.arcade.gravity);
            //tween.to({y:1000000},1000);
            //tween.start();
            //this.rock.sprite.body.velocity.y = 100000;
            this.man.dragged = true;
        }
    },null,this);
}

module.exports = ManBigRockCollision;
