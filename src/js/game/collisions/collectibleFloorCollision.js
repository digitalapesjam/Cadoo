var Phaser = require('Phaser');

var Collision = function Collision(floor, collectibles) {
    this.floor = floor;
    this.collectibles = collectibles;
}

Collision.prototype.checkCollision = function(game) {
    this.game = game;
    game.physics.arcade.collide(this.floor.sprite, this.collectibles, this.onCollision, null, this);
}

Collision.prototype.onCollision = function(floor, collectible) {
    this.game.time.events.add(Phaser.Timer.SECOND * (1 + (Math.random() * 4)), collectible.kill, collectible);
};

module.exports = Collision;