var Ent = require('../ent.js');

module.exports = function(game) {
  var ent = new Ent();
  var Fallingman = require("../entities/fallingman.js");
  var Camera = require("../entities/camera.js");
    
  var gameState = {};

  gameState.create = function () {
    game.world.setBounds(0, 0, game.width, 12000);
      
    game.physics.startSystem(Phaser.Physics.ARCADE);
      game.physics.arcade.gravity.y = 100;
      
    var fallingman = new Fallingman(game, game.width/2,0);
    var camera = new Camera(game, fallingman.sprite);  
    //game.camera.follow(logo.sprite,Phaser.Camera.FOLLOW_TOPDOWN);

    ent.register(0, 'fallingman', fallingman);
    ent.register(0, 'camera', camera);

  };

  gameState.update = function() {
    ent.update();
  }

  return gameState;
};
