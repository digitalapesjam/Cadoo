module.exports = function(game) {

  var preloader = {};

  preloader.preload = function () {
    game.load.image('logo', 'images/phaser.png#grunt-cache-bust');
    game.load.game.load.spritesheet ('stickman', 'images/stickman.png#grunt-cache-bust',32,32);
  };

  preloader.create = function () {
    game.state.start('game');
  };

  return preloader;
};
