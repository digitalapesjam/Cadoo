var Ent = require('../ent.js');
var CollisionaManager = require("../collisionManager.js");

var capVelocity = 800;
var worldHeight = 30000;
var worldHeight = 1600;

module.exports = function (game) {
    var ent = new Ent();
        

    var gameState = {};

    gameState.create = function () {
        game.world.setBounds(0, 0, game.width, worldHeight);
        
        var startGameText = "Press here to start game";
        var creditsText = "Credits";

        var style = { font: "35px Arial", fill: "#ff0044", align: "center" };


        var text1 = 'Sometimes you dream of falling...';
        var text2 = 'and then you wake up in your bed.';

        var text3 = 'sometimes you dream of being in your bad...';
        var text4 = 'and then you wake up...';
        


        var text1Area = game.add.text(game.world.centerX/2, 0, text1, style);
        var text2Area = game.add.text(game.world.centerX/2, 100, text1, style);

        var startGameButton = game.add.text(game.world.centerX/2, 200, startGameText, style);
        var creditsButton = game.add.text(game.world.centerX/2, 300, creditsText, style);

        var text3Area = game.add.text(game.world.centerX/2, 400, text3, style);
        var text4Area = game.add.text(game.world.centerX/2, 500, text4, style);


        startGameButton.inputEnabled = true;
        startGameButton.events.onInputUp.add(function () {
            game.state.start('game');
        });
        
    };

    gameState.update = function (game) {
        
    }

    return gameState;
};
