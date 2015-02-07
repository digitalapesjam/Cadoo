var Ent = require('../ent.js');
var CollisionaManager = require("../collisionManager.js");
var worldHeight = 1200;

module.exports = function (game) {
    var ent = new Ent();
    var collisionManager = new CollisionaManager(game,ent);    
    var Fallingman = require("../entities/fallingman.js");
    var Bigrock = require("../entities/bigrock.js");
    var Camera = require("../entities/camera.js");
    var Floor = require("../entities/floor.js");
    var Sidetile = require("../entities/sidetile.js");
    var BgMusic = require('../entities/music.js');
    
    var ManFloorCollision = require("../collisions/manFloorCollision.js");

    var gameState = {};

    gameState.create = function () {
        game.world.setBounds(0, 0, game.width, worldHeight);

        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 100;

        var sidetiles = new Sidetile(game, game.width, worldHeight);
        var fallingman = new Fallingman(game, game.width / 2, 0);
        var bigrock = new Bigrock(game, game.width / 2, -300 );

        var camera = new Camera(game, fallingman);
        var floor = new Floor(game, game.width, worldHeight);

        ent.register(0, 'sidetiles', sidetiles);
        ent.register(0, 'floor', floor);
        ent.register(0, 'fallingman', fallingman);
        ent.register(0, 'camera', camera);
        ent.register(0, 'bigrock', bigrock);
        ent.register(1, 'bg_music', new BgMusic(game));
        
        collisionManager.addCollision(new ManFloorCollision(fallingman,floor));
    };

    gameState.update = function (game) {
        ent.update(game);
        collisionManager.checkCollisions();
    }

    return gameState;
};
