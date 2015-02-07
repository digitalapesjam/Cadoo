var ManFloorCollision = function Floor(man, collectibles, scoreUpdate) {
    this.man = man;
    this.collectibles = collectibles;
    this.scoreUpdate = scoreUpdate;
}

ManFloorCollision.prototype.checkCollision = function(game) {
    game.physics.arcade.overlap(this.man.sprite, this.collectibles, function(player, collectible) { 
        if (this.man.falling) {
            // console.log('profit!');
            collectible.kill();
            this.scoreUpdate(5);
            var audio = game.add.audio('shimmer');
            audio.onDecoded.add(function(){audio.volume = 0.5; audio.play();});
        }
    }, null, this);
}

module.exports = ManFloorCollision;