var Phaser = require('Phaser');

var BgMusic = function(game, steps, duration, easeFn) {
  this.duration = duration || 25000;
  this.steps = steps || 100;
  this.easeFn = easeFn || function (x) {return 1 - Math.cos(Math.PI/2 * x);};
  this.game = game;
  this._intv = (this.duration / this.steps) / 1000;
  this._step = 0;
  this._t = 0;
};

BgMusic.prototype.create = function() {
  this.music = this.game.add.audio('music');
  var t = this;
  this.music.onDecoded.add(function(){
    t.music.volume = 0;
    t.music.play();
    t.game.add.tween(t.music).to({'volume': 1}, t.duration, Phaser.Easing.Quintic.In, true, false);
  });
};

BgMusic.prototype.update = function(game) {};

module.exports = BgMusic;
