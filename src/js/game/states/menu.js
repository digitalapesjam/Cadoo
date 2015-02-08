var Ent = require('../ent.js');
var CollisionaManager = require("../collisionManager.js");

var capVelocity = 800;
var worldHeight = 30000;
var worldHeight = 1600;




module.exports = function (game) {
    var ent = new Ent();

    function _showText(textArea, delay){
        if(typeof(delay) !== 'number')
            delay = 0

        var tween = game.add.tween(textArea).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None).delay(delay);
        tween.start();
    }
    function _hideText(textArea){
         var tween = game.add.tween(textArea).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
         tween.start();
    }
        

    var gameState = {};

    gameState.create = function () {
        game.world.setBounds(0, 0, game.width, worldHeight);
        
        var startGameText = "Press here to start game";
        var creditsText = "Credits";

        var style = { font: "35px Arial", fill: "#ff0044", align: "center" };


        var text1 = 'Sometimes you dream\n of falling...';
        var text2 = 'and then you wake\n up in your bed.';

        var text3 = 'sometimes you dream of being in your bad...';
        var text4 = 'and then you wake up...';
        
        var continueText = 'Click to continue';

        var text1Area = game.add.text(game.world.centerX/2, 0, text1, style);
        var text2Area = game.add.text(game.world.centerX/2, 0, text2, style);
        var continueArea = game.add.text(game.world.centerX/2, 0, continueText, style);

        var startGameButton = game.add.text(game.world.centerX/2, 0, startGameText, style);
        var creditsButton = game.add.text(game.world.centerX/2, 0, creditsText, style);

        var text3Area = game.add.text(game.world.centerX/2, 0, text3, style);
        var text4Area = game.add.text(game.world.centerX/2, 0, text4, style);

        text1Area.inputEnabled = true;
        text2Area.inputEnabled = true;
        text3Area.inputEnabled = true;
        text4Area.inputEnabled = true;
        startGameButton.inputEnabled = true;
        
        function hideAll(){
            text1Area.alpha = 0;
            text2Area.alpha = 0;
            text3Area.alpha = 0;
            text4Area.alpha = 0;
            startGameButton.alpha = 0;
            creditsButton.alpha = 0;
            continueArea.alpha = 0;
        }

        function showScreen(Obj1Text, Obj2Text, delay){
            if(typeof(delay) !== 'number')
                delay = 0

            hideAll();

            Obj1Text.y =  game.world.centerY/2 - 100;
            Obj2Text.y =  game.world.centerY/2 + 100;           

            _showText(Obj1Text, delay + 0);
            _showText(Obj2Text, delay + 1000);

        }
        
        var from1to2 = function(){
            showScreen(startGameButton, creditsButton); 
        } 

        var from2to3 = function(){
            showScreen(text3Area, text4Area); 
        } 

        var startGame = function(){
            game.state.start('game');
        }


        text1Area.events.onInputUp.add(from1to2);
        text2Area.events.onInputUp.add(from1to2);
        startGameButton.events.onInputUp.add(from2to3);
        text3Area.events.onInputUp.add(startGame);
        text4Area.events.onInputUp.add(startGame);

        hideAll();
        showScreen(text1Area, text2Area);

        //game.add.text(game.world.centerX/2, 0, 'Quick Start', style)


    };

    gameState.update = function (game) {
    }

    return gameState;
};
