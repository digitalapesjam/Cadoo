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

    gameState.preload = function(){
        game.load.image('intro1', 'images/intro1.png#grunt-cache-bust');
        game.load.image('intro2', 'images/intro2.png#grunt-cache-bust');
    }

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

        var creditsArea = game.add.text(centeredTextX, initYOffset, 'Burelli Paolo (Lead Artist) \nBoemo Jurgo (Lead Geologist) \nTurello Paolo (Lead Obstacles Maker) \nZanitti Francesco (Lead Relationships Manager)', styleSmall);
        centerIt(creditsArea);
        var returnInitArea = game.add.text(centeredTextX, initYOffset, '<Return To Intro', style);

        text1Area.inputEnabled = true;
        text2Area.inputEnabled = true;
        text3Area.inputEnabled = true;
        text4Area.inputEnabled = true;
        startGameButton.inputEnabled = true;
        creditsButton.inputEnabled = true;
        returnInitArea.inputEnabled = true;
        
        var intro1Img = game.add.sprite(centeredTextX, initYOffset, 'intro1');
        centerIt(intro1Img);

        var intro2Img = game.add.sprite(centeredTextX, initYOffset, 'intro2');
        centerIt(intro2Img);


        var hideAll = function hideAll(){
            text1Area.alpha = 0;
            text2Area.alpha = 0;
            text3Area.alpha = 0;
            text4Area.alpha = 0;
            startGameButton.alpha = 0;
            creditsButton.alpha = 0;
            creditsArea.alpha = 0;
            returnInitArea.alpha = 0;
            intro1Img.alpha = 0;
            intro2Img.alpha = 0;


            var hideOffesetY = -5000;

            text1Area.y = hideOffesetY;
            text2Area.y = hideOffesetY;
            text3Area.y = hideOffesetY;
            text4Area.y = hideOffesetY;
            startGameButton.y = hideOffesetY;
            creditsButton.y = hideOffesetY;
            creditsArea.y = hideOffesetY;
            returnInitArea.y = hideOffesetY;
            intro1Img.y = hideOffesetY;
            intro2Img.y = hideOffesetY;
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
            hideCurScreen();
            game.state.start('preloader');
        }
        
        var goIntro2 = function(){
            hideCurScreen();

            text3Area.y = 200;
            _showText(text3Area); 

            intro2Img.y = 300;
            _showText(intro2Img, 500); 

            text4Area.y = 600;
            _showText(text4Area, 1000);

            curTimeouts.push(setTimeout(startGame,8000));
        } 

        var goIntro1 = function(){
            hideCurScreen();
            
            text1Area.y = 200;
            _showText(text1Area); 

            intro1Img.y = 300;
            _showText(intro1Img, 500); 

            text2Area.y = 600;
            _showText(text2Area, 1000);

            intro2Img.y = 700
            _showText(intro2Img, 1500); 

            curTimeouts.push(setTimeout(goIntro2,8000));
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
