module.exports = function (game) {

    var preloader = {};

    preloader.preload = function () {
        game.load.image('logo', 'images/phaser.png#grunt-cache-bust');
        game.load.game.load.spritesheet('stickman', 'images/stickman.png#grunt-cache-bust', 32, 32);
        game.load.image('floor', 'images/floor.png#grunt-cache-bust');
        game.load.image('leftsidetile', 'images/leftside.png#grunt-cache-bust');
        game.load.image('rightsidetile', 'images/rightside.png#grunt-cache-bust');
    };

    preloader.create = function () {
        game.state.start('game');
    };

    return preloader;
};
