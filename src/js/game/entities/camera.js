var Camera = function Camera(game, toFollow, camaraStyle) {
        this.game = game;
        this.toFollow = toFollow;
        this.camaraStyle = camaraStyle||Phaser.Camera.FOLLOW_TOPDOWN;
}

Camera.prototype.create= function() {
    this.game.camera.follow(this.toFollow.sprite);
}

Camera.prototype.update= function() {}

module.exports = Camera;