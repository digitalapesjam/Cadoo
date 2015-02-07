module.exports = function (game) {

    var preloader = {};

    preloader.preload = function () {
        game.load.image('logo', 'images/phaser.png#grunt-cache-bust');
        game.load.game.load.spritesheet ('stickman', 'images/stickman.png#grunt-cache-bust',18 ,23);
        game.load.game.load.spritesheet ('stickman_hit', 'images/hitting.png#grunt-cache-bust',32,32);
        game.load.image('floor', 'images/floor.png#grunt-cache-bust');
        game.load.image('leftsidetile', 'images/leftside.png#grunt-cache-bust');
        game.load.image('rightsidetile', 'images/rightside.png#grunt-cache-bust');
        game.load.image('bigrock', 'images/bigrock.png#grunt-cache-bust');
        game.load.image('star', 'images/star.png#grunt-cache-bust');
        game.load.audio('music', 'audio/ScatterNoise1.mp3');

        game.load.game.load.spritesheet('bird', 'images/bird.png#grunt-cache-bust', 30, 26);
        game.load.image('branch', 'images/branch.png#grunt-cache-bust');
        game.load.image('root', 'images/root.png#grunt-cache-bust');
        game.load.image('ledge', 'images/ledge.png#grunt-cache-bust');
        game.load.image('smoke', 'images/smoke-puff.png');
        game.load.game.load.spritesheet('blood', 'images/blood.png#grunt-cache-bust', 32, 16);
        game.load.game.load.spritesheet ('stickman_flat', 'images/flat.png#grunt-cache-bust',32,32);
    };

    preloader.create = function () {
        game.state.start('game');
    };

    return preloader;
};
