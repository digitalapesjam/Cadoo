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
	
	var _worldRectangle = this.game.world.bounds;

	this.game.camera.bounds = new Phaser.Rectangle(-this.trembleOffset ,0,_worldRectangle.width+(this.trembleOffset*2), _worldRectangle.height)	
	//this.game.camera.bounds = new Phaser.Rectangle(-10 ,-10,1000, _worldRectangle.height)	

    this.trembleTween = this.game.add.tween(this.game.camera);
    var offsetThreshold = 1;
    var animationTime = 40;
    this.trembleTween
    .to({'x': +offsetThreshold}, animationTime, Phaser.Easing.Linear.None)
    .to({'x': -offsetThreshold}, animationTime, Phaser.Easing.Linear.None)
    .loop()
    //this.trembleTween.start()
     
}

Camera.prototype.update= function() {
	this.game.debug.cameraInfo(this.game.camera, 32, 32);
}

Camera.prototype.shake = function() {
	var _cameraY = this.game.camera.y;
	var _resetCamera = function _resetCamera(){
		this.game.camera.y = _cameraY;
	}
	console.log('shake');
	this.shakeTween = this.game.add.tween(this.game.camera);
    var trembleTweenOffsetThreshold = 20;
    var animationTime = 40;
    this.shakeTween
    .to({'y': _cameraY-trembleTweenOffsetThreshold}, animationTime, Phaser.Easing.Linear.None)
    .to({'y': _cameraY+trembleTweenOffsetThreshold}, animationTime, Phaser.Easing.Linear.None)
    .repeat(10)  
	 
    this.game.camera.unfollow();

	this.shakeTween.onComplete.add(_resetCamera, this);
    this.shakeTween.start();	

}

module.exports = Camera;