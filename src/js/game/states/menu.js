var Ent = require('../ent.js');
var CollisionaManager = require("../collisionManager.js");




module.exports = function (game) {
    var ent = new Ent();

    var curShowTweens = [];
    var curTimeouts = [];

    function _showText(textArea, delay){
        if(typeof(delay) !== 'number')
            delay = 0

        
        curShowTween = game.add.tween(textArea).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None).delay(delay);
        curShowTweens.push(curShowTween);
        curShowTween.start();
    }
    function _hideText(textArea){
         var tween = game.add.tween(textArea).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
         tween.start();
    }
    function clearAllTimeouts(textArea){
         
         curTimeouts.forEach(function(timeoutIdx){
                clearTimeout(timeoutIdx)
            })
    }
    
    function showScreen(Obj1Text, Obj2Text, delay, hideAll){
            if(typeof(delay) !== 'number')
                delay = 0


            curShowTweens.forEach(function(tween){
                tween.stop()
            })
            clearAllTimeouts();
            hideAll();

            Obj1Text.y =  game.world.centerY/2 - 100;
            

            _showText(Obj1Text, delay + 0);

            if(typeof(Obj2Text) !== 'undefined' ){
                Obj2Text.y =  game.world.centerY/2 + 100;           
                _showText(Obj2Text, delay + 1000);
            } else
                Obj1Text.y = game.world.centerY/2;

        }

    var gameState = {};
    gameState.create = function () {
        var startGameText = ">Play";
        var creditsText = "              >Credits";

        var style = { font: "32px Arial", fill: "#ffffff", align: "center" };


        var text1 = 'Sometimes you dream\n of falling...';
        var text2 = '...then you wake up\n  in your bed';

        var text3 = 'Sometimes you dream\n of being in your bed...';
        var text4 = '...then you wake up...';
        
        var continueText = 'Play';

        var initYOffset = -5000;
        var centeredTextX = game.world.centerX/2 - 20

        var text1Area = game.add.text(centeredTextX, initYOffset, text1, style);
        var text2Area = game.add.text(centeredTextX, initYOffset, text2, style);
        var continueArea = game.add.text(centeredTextX, initYOffset, continueText, style);

        var startGameButton = game.add.text(centeredTextX, initYOffset, startGameText, style);
        startGameButton.anchor.set(0.5,0.5);
        startGameButton.x = game.width/2;
        
        var creditsButton = game.add.text(centeredTextX, initYOffset, creditsText, style);

        var text3Area = game.add.text(centeredTextX, initYOffset, text3, style);
        var text4Area = game.add.text(centeredTextX, initYOffset, text4, style);

        var creditsArea = game.add.text(centeredTextX, initYOffset, 'Burelli Paolo \nBoemo Jurgo \nTurello Paolo \nZanitti Francesco', style);
        var returnInitArea = game.add.text(centeredTextX, initYOffset, '<Return To Intro', style);

        text1Area.inputEnabled = true;
        text2Area.inputEnabled = true;
        text3Area.inputEnabled = true;
        text4Area.inputEnabled = true;
        startGameButton.inputEnabled = true;
        creditsButton.inputEnabled = true;
        returnInitArea.inputEnabled = true;
        
        var hideAll = function hideAll(){
            text1Area.alpha = 0;
            text2Area.alpha = 0;
            text3Area.alpha = 0;
            text4Area.alpha = 0;
            startGameButton.alpha = 0;
            creditsButton.alpha = 0;
            continueArea.alpha = 0;
            creditsArea.alpha = 0;
            returnInitArea.alpha = 0;

            text1Area.y = 0;
            text2Area.y = 0;
            text3Area.y = 0;
            text4Area.y = 0;
            startGameButton.y = 0;
            creditsButton.y = 0;
            continueArea.y = 0;
            creditsArea.y = 0;
            returnInitArea.y = 0;
        }

        var startGame = function(){
            game.state.start('preloader');
        }
        
        var from2to3 = function(){
            showScreen(text3Area, text4Area, 0, hideAll); 
            curTimeouts.push(setTimeout(startGame,2500));
        } 

        var from1to2 = function(){
            showScreen(startGameButton, creditsButton, 0, hideAll); 
        } 

        var showInitialScreen = function(){
            showScreen(text1Area, text2Area, 0, hideAll);
            curTimeouts.push(setTimeout(from1to2,4000));
        }

        var showCredits = function(){

            hideAll();
            
            creditsArea.alpha = 1;
            creditsArea.y =  game.world.centerY/2 - 200;

            returnInitArea.alpha = 1;
            returnInitArea.y =  game.world.centerY/2 + 100;


        }

        text1Area.events.onInputUp.add(from1to2);
        text2Area.events.onInputUp.add(from1to2);
        startGameButton.events.onInputUp.add(from2to3);
        text3Area.events.onInputUp.add(startGame);
        text4Area.events.onInputUp.add(startGame);
        
        creditsButton.events.onInputUp.add(showCredits);
        returnInitArea.events.onInputUp.add(showInitialScreen);

        showInitialScreen();
        

        //game.add.text(game.world.centerX/2, 0, 'Quick Start', style)

        //game.add.text(centeredTextX, initYOffset, "Skip Intro", style)

    };

    gameState.update = function (game) {
    }

    return gameState;
};