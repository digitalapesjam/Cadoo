var Ent = require('../ent.js');

module.exports = function(game) {
  var ent = new Ent();
  var Logo = require("../entities/logo.js");
    
  var gameState = {};

  gameState.create = function () {
    var logo = new Logo(game,0,0);
    console.info(logo);
    ent.register(0, 'logo', logo);
  };

  gameState.update = function() {
    ent.update();
  }

  return gameState;
};
