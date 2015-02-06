module.exports = function(game) {
  var Logo = require("../entities/logo.js");
    
  var gameState = {};

  gameState.create = function () {
    var logo = new Logo(game,0,0);
    console.info(logo);
    logo.create();
  };

  return gameState;
};
