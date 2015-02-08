var Camera = function Camera(game, toFollow, camaraStyle) {
        this.game = game;
        this.toFollow = toFollow;
        this.camaraStyle = camaraStyle||Phaser.Camera.FOLLOW_TOPDOWN;
        this.trembleOffset = 20;

        this.trembleTween = null;
        this.shakeTween = null;     

}

Camera.prototype.create= function() {
    this.game.camera.follow(this.toFollow.sprite, this.camaraStyle);
	//this.game.debug.cameraInfo(this.game.camera, 32, 32);
	var _worldRectangle = this.game.world.bounds;

	this.game.camera.bounds = new Phaser.Rectangle(-10 ,0,_worldRectangle.width+(this.trembleOffset*2), _worldRectangle.height)	

    this.trembleTween = this.game.add.tween(this.game.camera);
    var offsetThreshold = 5;
    var animationTime = 40;
    this.trembleTween
    .to({'x': offsetThreshold}, animationTime, Phaser.Easing.Linear.None)
    .to({'x': -offsetThreshold}, animationTime, Phaser.Easing.Linear.None)
    .loop()

    this.shakeTween = this.game.add.tween(this.game.camera);
    var trembleTweenOffsetThreshold = 25;
    var animationTime = 40;
    this.shakeTween
    .to({'y': trembleTweenOffsetThreshold}, animationTime, Phaser.Easing.Linear.None)
    .to({'y': -trembleTweenOffsetThreshold}, animationTime, Phaser.Easing.Linear.None)
    .repeat(21)
    
}

Camera.prototype.update= function() {

}

Camera.prototype.shake = function() {
	var _cameraY = this.game.camera.y;
	var _resetCamera = function _resetCamera(){
		this.game.camera.y = _cameraY;
	}
	this.game.camera.unfollow();
	this.shakeTween.onComplete.add(_resetCamera, this);
    this.shakeTween.start();	

}

module.exports = Camera;