var Ent = require('../ent.js');

module.exports = function (game) {
    var ent = new Ent();
    var Fallingman = require("../entities/fallingman.js");
    var Camera = require("../entities/camera.js");
    var Floor = require("../entities/floor.js");
    var Sidetile = require("../entities/sidetile.js");

    var gameState = {};

    gameState.create = function () {
        game.world.setBounds(0, 0, game.width, 12000);

        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 100;

        var sidetiles = new Sidetile(game, game.width, 12000);
        var fallingman = new Fallingman(game, game.width / 2, 0);

        var camera = new Camera(game, fallingman);
        var floor = new Floor(game, game.width, 12000);

        ent.register(0, 'sidetiles', sidetiles);
        ent.register(0, 'floor', floor);
        ent.register(0, 'fallingman', fallingman);
        ent.register(0, 'camera', camera);
    };

    gameState.update = function () {
        ent.update();
    }



    return gameState;
};
