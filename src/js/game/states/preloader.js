module.exports = function(game) {

  var preloader = {};

  preloader.preload = function () {
    game.load.image('logo', 'images/phaser.png#grunt-cache-bust');
    game.load.game.load.spritesheet ('stickman', 'images/stickman.png#grunt-cache-bust',32,32);
    game.load.image('bigrock', 'images/bigrock2.png#grunt-cache-bust');
    game.load.script('filterBlurX', 'https://cdn.rawgit.com/photonstorm/phaser/master/filters/BlurX.js');
    game.load.script('filterBlurY', 'https://cdn.rawgit.com/photonstorm/phaser/master/filters/BlurY.js');

  };

  preloader.create = function () {
    game.state.start('game');
  };

  return preloader;
};
