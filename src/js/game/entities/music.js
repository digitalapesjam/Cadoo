var Phaser = require('Phaser');

var BgMusic = function(game, ent, worldHeight){
  this.game = game;
  this.ent = ent;
  this.maxHeight = worldHeight * 7 / 8;
  this.killed = false;
};

BgMusic.prototype.create = function() {
  this.player = this.ent.get(0, 'fallingman');
  this.music = this.game.add.audio('music');
  var t = this;
  this.music.onDecoded.add(function(){
    t.music.play('', 0, 0, true);
  });
};

BgMusic.prototype.update = function(game) {
  if (this.killed) {return;}
  if (this.player.falling) {
    if (this.music.isPlaying && this.music.volume < 1) {

      var x = Math.min(1, this.player.sprite.y / this.maxHeight);
      this.music.volume = Phaser.Easing.Circular.In(x);
    }
  } else if (this.music.isPlaying) {
    console.log('kill audio');
    this.music.fadeOut();
    this.killed = true;
  }
};

module.exports = BgMusic;
