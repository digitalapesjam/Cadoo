module.exports = function(game) {

  var preloader = {};

  preloader.preload = function () {
    game.load.image('logo', 'images/phaser.png#grunt-cache-bust');
    game.load.image('stickman', 'images/stickman.png#grunt-cache-bust');
    game.load.image('bigrock', 'images/bigrock.jpg#grunt-cache-bust');
  };

  preloader.create = function () {
    game.state.start('game');
  };

  return preloader;
};
