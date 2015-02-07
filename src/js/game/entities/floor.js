var Floor = function Floor(game,posx,posy) {
    this.game = game;
    this.sprite = null;
    this.posx = posx;
    this.posy = posy;
}

Floor.prototype.create= function() {
    this.sprite = this.game.add.sprite(this.posx, this.posy, 'floor');
    this.game.physics.arcade.enable(this.sprite);
    this.sprite.body.allowGravity = false;
    this.sprite.body.immovable = true;
    this.sprite.smoothed = false;
    this.sprite.scale.set(3,3);
    this.sprite.anchor.setTo(0.5, 1);
}

Floor.prototype.update = function() {
    
}

Floor.prototype.collide= function(collider) {}

module.exports = Floor;