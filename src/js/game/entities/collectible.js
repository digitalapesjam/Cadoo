
var Collectibles = function(game, worldHeight) {
  this.game = game;
  this.worldHeight = worldHeight;
//  this.entities = entities;
};

Collectibles.prototype.create = function() {
  var t = this;
  var s = 20;
  //var w = this.game.width / s;
  //var h = this.worldHeight / s;

  this.group = this.game.add.group();
  this.group.enableBody = true;

  var width = this.game.width * 2 / 3;
  var offset = this.game.width / 6;

  var max = (width/s) * (this.worldHeight/s);
  var taken = {o:true};
  var m = 0;

  var numStars = Math.max(Math.round(this.worldHeight / 100), 10);

  for(var i = 0; i < numStars; i++) {
    while(m==0 || m in taken) {
      m = Math.round(Math.random() * max);
    }
    taken[m] = true;
    taken[m-1] = true;
    taken[m+1] = true;

    var x = m * 20;
    var y = 10;
    while (x > width) {
      y += s;
      x -= width;
    }
    console.log('create star at ', offset + x, y, 'gen', m, 'max', max);
    var star = this.group.create(offset + x, y, 'star');
    star.body.gravity.y = -30;
    star.body.bounce.y = 0.2;
  }
};

Collectibles.prototype.update = function() {
};

module.exports = Collectibles;