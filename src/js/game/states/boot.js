var Stats = require('Stats')
  , properties = require('../properties');

module.exports = function(game) {

  var boot = {};

  boot.create = function () {
      
    Parse.initialize("0XC2Fw1zG9HcGxxHWwCXKPwV8NZuHrHct0N0DxVj", "DDLX2bdWogdCN6uSQLMpjSYIBybBeD2bxnFQUhjq");
  

    if (properties.showStats) {
      addStats();
    }

    game.sound.mute = properties.mute;

    //game.scale.startFullScreen(false);        
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setScreenSize();
    
      
    game.state.start('menu');
    //game.state.start('scoreboard');
    //game.state.start('insertname',true,true,0);
  };

  function addStats() {
    var stats = new Stats();

    stats.setMode(0);

    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '0px';
    stats.domElement.style.top = '0px';

    document.body.appendChild(stats.domElement);

    setInterval(function () {
      stats.begin();
      stats.end();
    }, 1000 / 60);
  }

  return boot;
};
