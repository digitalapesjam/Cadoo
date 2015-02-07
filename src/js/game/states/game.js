var Ent = require('../ent.js');

module.exports = function(game) {
  var ent = new Ent();
  var Fallingman = require("../entities/fallingman.js");
  var Camera = require("../entities/camera.js");
  var Bigrock = require("../entities/bigrock.js");
    
  var gameState = {};

  gameState.create = function () {
    game.world.setBounds(0, 0, game.width, 12000);
      
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 100;
    
    var fallingmanX = game.width/2;
    var fallingmanY = 0
      
    var fallingman = new Fallingman(game, fallingmanX, fallingmanY);
    var bigrock = new Bigrock(game, fallingmanX, fallingmanY - 300 );
    var camera = new Camera(game, fallingman); 

    ent.register(0, 'fallingman', fallingman);
    ent.register(0, 'camera', camera);
    ent.register(0, 'bigrock', bigrock);

  };

  gameState.update = function() {
    ent.update();
  }



  return gameState;
};
