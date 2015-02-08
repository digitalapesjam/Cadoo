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
    
    
    

    function showScreen(Obj1Text, Obj2Text, delay){
            if(typeof(delay) !== 'number')
                delay = 0

            
            Obj1Text.y =  game.world.centerY/2 - 100;
            

            _showText(Obj1Text, delay + 0);

            if(typeof(Obj2Text) !== 'undefined' ){
                Obj2Text.y =  game.world.centerY/2 + 100;           
                _showText(Obj2Text, delay + 1000);
            } else
                Obj1Text.y = game.world.centerY/2;

        }
    function centerIt(field){
        field.x = (game.width/2) - field.width/2;  
    }

    var gameState = {};
    gameState.create = function () {
        var startGameText = "[ Play ]";
        var creditsText = "Developed By:";

        var styleTitle = { font: "34px Arial", fill: "#ffffff", align: "center"};
        var style = { font: "32px Arial", fill: "#ffffff", align: "center"};
        var styleSmall = { font: "26px Arial", fill: "#ffffff", align: "center"};


        var text1 = 'Sometimes you dream\n of falling...';
        var text2 = '...then you wake up\n  in your bed';

        var text3 = 'Sometimes you dream\n of being in your bed...';
        var text4 = '...then you wake up...';

        var initYOffset = -5000;
        var centeredTextX = game.width/2

        var titleArea = game.add.text(centeredTextX, initYOffset, "CADOO", styleTitle);
        centerIt(titleArea);
        var text1Area = game.add.text(centeredTextX, initYOffset, text1, style);
        centerIt(text1Area);
        var text2Area = game.add.text(centeredTextX, initYOffset, text2, style);
        centerIt(text2Area);
        var startGameButton = game.add.text(centeredTextX, initYOffset, startGameText, style);
        centerIt(startGameButton);

        var creditsButton = game.add.text(centeredTextX, initYOffset, creditsText, style);
        centerIt(creditsButton);

        var text3Area = game.add.text(centeredTextX, initYOffset, text3, style);
        centerIt(text3Area);
        var text4Area = game.add.text(centeredTextX, initYOffset, text4, style);
        centerIt(text4Area);

        var creditsArea = game.add.text(centeredTextX, initYOffset, 'Burelli Paolo (Web Designer) \nBoemo Jurgo (Geologist) \nTurello Paolo (Obstacle Makers) \nZanitti Francesco (Relationship Manager)', styleSmall);
        centerIt(creditsArea);
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
            creditsArea.alpha = 0;
            returnInitArea.alpha = 0;

            var hideOffesetY = -5000;

            text1Area.y = hideOffesetY;
            text2Area.y = hideOffesetY;
            text3Area.y = hideOffesetY;
            text4Area.y = hideOffesetY;
            startGameButton.y = hideOffesetY;
            creditsButton.y = hideOffesetY;
            creditsArea.y = hideOffesetY;
            returnInitArea.y = hideOffesetY;
        }
        var hideCurScreen = function hideCurScreen(){
            curShowTweens.forEach(function(tween){
                tween.stop()
            });
            curTimeouts.forEach(function(timeoutIdx){
                clearTimeout(timeoutIdx)
            });
            hideAll();
        }


        var startGame = function(){
            game.state.start('preloader');
        }
        
        var goIntro2 = function(){
            hideCurScreen();
            showScreen(text3Area, text4Area, 0); 
            curTimeouts.push(setTimeout(startGame,2500));
        } 

        var goIntro1 = function(){
            hideCurScreen();
            showScreen(text1Area, text2Area, 0);
            curTimeouts.push(setTimeout(goIntro2,4000));
        } 

        var showInitialScreen = function(){
            hideCurScreen();

            titleArea.y = 50
            _showText(titleArea); 

            startGameButton.y = 200;
            _showText(startGameButton); 

            creditsButton.y = 350;
            _showText(creditsButton);

            creditsArea.y = 400;
            _showText(creditsArea);            

        }

        var showCredits = function(){

            hideAll();
            
            creditsArea.alpha = 1;
            creditsArea.y =  game.world.centerY/2 - 200;

            returnInitArea.alpha = 1;
            returnInitArea.y =  game.world.centerY/2 + 100;


        }

        //startGameButton = game.add.button(game.world.centerX - 95, 400, 'button', from2to3, this, 2, 1, 0);
        startGameButton.events.onInputUp.add(goIntro1);

        text1Area.events.onInputUp.add(goIntro2);
        text2Area.events.onInputUp.add(goIntro2);
        
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
