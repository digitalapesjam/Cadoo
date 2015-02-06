module.exports = function(game) {
  var Logo = require("../entities/logo.js");
  var Camera = require("../entities/camera.js");
    
  var gameState = {};
    var logo;

  gameState.create = function () {
      
    game.world.setBounds(0, 0, game.width, 12000);
      
    game.physics.startSystem(Phaser.Physics.ARCADE);
      game.physics.arcade.gravity.y = 100;
      
    logo = new Logo(game,game.width/2,0);
    logo.create();
    var camera = new Camera(game, logo.sprite);  
    camera.create();
    //game.camera.follow(logo.sprite,Phaser.Camera.FOLLOW_TOPDOWN);
  };
    
    gameState.update = function () {
        logo.update();
    }

  return gameState;
};
