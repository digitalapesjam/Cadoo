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
};

BgMusic.prototype.update = function(game) {
  console.log('music update', this);
  if (this._step >= this.duration || !this.music.isDecoded) {return;}
  if (!this.music.isPlaying) {
    this.music.volume = 0;
    this.music.play();
  }

  this._t += game.time.physicsElapsed;
  while (this._t >= this._intv) {
    this._step += 1;
    this.music.volume = this.easeFn(this._step/this.steps);
    this._t -= this._intv;
  }
};

module.exports = BgMusic;
