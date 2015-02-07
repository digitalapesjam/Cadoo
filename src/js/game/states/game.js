var Ent = require('../ent.js');

module.exports = function(game) {
  var ent = new Ent();
  var Logo = require("../entities/logo.js");
  var Camera = require("../entities/camera.js");
  var BgMusic = require('../entities/music.js');

  var gameState = {};

  gameState.create = function () {
    game.world.setBounds(0, 0, game.width, 12000);
      
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 100;
      
    var logo = new Logo(game, game.width/2,0);
    logo.create();
    var camera = new Camera(game, logo.sprite);  
    camera.create();

    var music = new BgMusic(game);
    music.create();
    //game.camera.follow(logo.sprite,Phaser.Camera.FOLLOW_TOPDOWN);

    ent.register(0, 'logo', logo);
    ent.register(0, 'camera', camera);
    ent.register(1, 'bg_music', music)
  };

  gameState.update = function(game) {
    ent.update(game);
  }

  return gameState;
};
