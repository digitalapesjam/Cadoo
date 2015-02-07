module.exports = function(game) {

  var preloader = {};

  preloader.preload = function () {
    game.load.image('logo', 'images/phaser.png#grunt-cache-bust');
    game.load.image('stickman', 'images/stickman.png#grunt-cache-bust');
    game.load.audio('music', 'audio/ScatterNoise1.mp3');
  };

  preloader.create = function () {
    game.state.start('game');
  };

  return preloader;
};
