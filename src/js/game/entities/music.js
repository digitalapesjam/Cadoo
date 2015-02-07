var Phaser = require('Phaser');

var BgMusic = function(game, ent, worldHeight){ // steps, duration, easeFn) {
  //this.duration = duration || 25000;
  //this.steps = steps || 100;
  this.game = game;
  this.ent = ent;
  this.maxHeight = worldHeight * 7 / 8;
//  this._intv = (this.duration / this.steps) / 1000;
//  this._step = 0;
//  this._t = 0;
};

BgMusic.prototype.create = function() {
  this.player = this.ent.get(0, 'fallingman');
  this.music = this.game.add.audio('music');
  var t = this;
  this.music.onDecoded.add(function(){
    // t.music.volume = 0;
    t.music.play('', 0, 0, true);
    // t.music.loop = true;
//    t.game.add.tween(t.music).to({'volume': 1}, 25000, Phaser.Easing.Quintic.In, true, false);
  });
};

BgMusic.prototype.update = function(game) {
  if (this.player.falling) {
    // if (this.music.loop === false) {
    //   this.music.loop = true;
    // }
    if (this.music.isPlaying && this.music.volume < 1) {

      this.music.volume = Math.min(1, this.player.sprite.y / this.maxHeight);
      //console.log(this.music.volume, this.player.y, this.maxHeight);
    }
  } else if (this.music.isPlaying) {
    console.log('kill audio');
    this.music.fadeOut();
  }
};

module.exports = BgMusic;
