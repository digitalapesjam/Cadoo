var Ent = require('../ent.js');
var CollisionaManager = require("../collisionManager.js");

var capVelocity = 800;
var worldHeight = 40000;
//var worldHeight = 1600;


var setBG = function (game) {
        game.stage.backgroundColor = "#ffffff"
        var drawnObject;
        var bmd = game.add.bitmapData(game.width, worldHeight);
        bmd.ctx.beginPath();
        bmd.ctx.rect(0, 0, game.width, worldHeight);
        bmd.ctx.fillStyle = '#000000';
        bmd.ctx.fill();
        drawnObject = game.add.sprite(0, 0, bmd);
}

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
    var Collectibles = require('../entities/collectible.js');
    var ScoreDisplay = require('../score.js');
    var ManCollectibleCollision = require('../collisions/manCollectibleCollision.js');
    var CollectibleFloorCollision = require('../collisions/collectibleFloorCollision.js');
    var ManSidesCollision = require("../collisions/manSidesCollision.js");
    var BigrockFloorCollision = require("../collisions/bigrockFloorCollision.js");
    var Obstacles = require('../entities/obstacles.js');
    var ManObstacleCollision = require("../collisions/manObstacleCollision.js");
    var ManBigRockCollision = require("../collisions/manBigRockCollision.js");
    var BigRockObstacleCollision = require("../collisions/bigRockObstacleCollision.js");

    var gameState = {};

    gameState.create = function () {        
        game.world.setBounds(0, 0, game.width, worldHeight);

        setBG(game);

        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 100;

        var sidetiles = new Sidetile(game, game.width, worldHeight);
        var obstacles = new Obstacles(game, game.width, worldHeight);
        var fallingman = new Fallingman(game, game.width / 2, 0, capVelocity);
        

        var camera = new Camera(game, fallingman);
        var floor = new Floor(game, game.width, worldHeight);

        var music = new BgMusic(game, ent, worldHeight);

        var scoreDisplay = new ScoreDisplay(game);
        var collectibles = new Collectibles(game, worldHeight);
        
        var bigrock = new Bigrock(game, game.width / 2, -500, capVelocity);

        ent.register(0, 'collectibles', collectibles);
        ent.register(3, 'bigrock', bigrock);
        ent.register(0, 'fallingman', fallingman);
        ent.register(0, 'sidetiles', sidetiles);
        ent.register(0, 'obstacles', obstacles);
        ent.register(0, 'floor', floor);
        ent.register(0, 'camera', camera);
        ent.register(1, 'bg_music', music);
        ent.register(2, 'score', scoreDisplay);
        
        collisionManager.addCollision(new ManFloorCollision(fallingman, floor));
        collisionManager.addCollision(new ManSidesCollision(fallingman, sidetiles));
        collisionManager.addCollision(new ManCollectibleCollision(fallingman, collectibles.group, scoreDisplay.updateScore.bind(scoreDisplay)));
        collisionManager.addCollision(new CollectibleFloorCollision(floor, collectibles.group));
        collisionManager.addCollision(new BigrockFloorCollision(bigrock,floor, camera, scoreDisplay));
        collisionManager.addCollision(new ManObstacleCollision(fallingman, obstacles));
        collisionManager.addCollision(new ManBigRockCollision(fallingman, bigrock));
        collisionManager.addCollision(new BigRockObstacleCollision(bigrock, obstacles));
    };

    gameState.update = function (game) {
        ent.update(game);
        collisionManager.checkCollisions();
    }

    return gameState;
};
