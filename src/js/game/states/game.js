var Ent = require('../ent.js');

module.exports = function(game) {
  var ent = new Ent();
  var Logo = require("../entities/logo.js");
    
  var gameState = {};

  gameState.create = function () {
    game.world.setBounds(0, 0, game.width, 12000);
      
    game.physics.startSystem(Phaser.Physics.ARCADE);
      game.physics.arcade.gravity.y = 100;
      
    var logo = new Logo(game, game.width/2,0);
    logo.create();
      
    game.camera.follow(logo.sprite,Phaser.Camera.FOLLOW_TOPDOWN);

    ent.register(0, 'logo', logo);
  };

  gameState.update = function() {
    ent.update();
  }

  return gameState;
};
