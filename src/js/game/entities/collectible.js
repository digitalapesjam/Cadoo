
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

  var max = ((width/s) * (this.worldHeight/s)); // * 3 / 5;
  var taken = {o:true};
  var m = 0;

  var numStars = Math.max(Math.round(this.worldHeight / 500), 10);

  var heightOffsetGravity = this.worldHeight * 5 / 7;

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
    var star = this.group.create(offset + x, y, 'coin',1);
    star.smoothed = false;
    star.scale.set(2,2);
    // if (y < heightOffsetGravity) {
    //   var g = y / heightOffsetGravity;
    //   console.log(g,y,heightOffsetGravity);
    //   star.body.gravity.y = -30 * (1-g);
    // }
    // console.log('create star at ', offset + x, y, 'gen', m, 'max', max, 'g', star.body.gravity.y, heightOffsetGravity);
    //star.body.bounce.y = 0.2;
    star.body.allowGravity = false;
  }
};

Collectibles.prototype.update = function() {
};

module.exports = Collectibles;