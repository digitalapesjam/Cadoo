var Obstacles = function Obstacles(game, sizex, sizey) {
    this.game = game;
    this.sizex = sizex;
    this.sizey = sizey;
    this.birds = null;
    this.ledges = null;
    this.branches_roots = null;
}

Obstacles.prototype.create = function () {
	this.birds = this.game.add.group();
    this.ledges = this.game.add.group();
    this.branches_roots = this.game.add.group();

    this.birds.enableBody = true;
    this.ledges.enableBody = true;
    this.branches_roots.enableBody = true;

    for (var i = 0; i < this.sizey / 400; i++) {
		var verticalPosition = ((i + 1) * 400) + this.game.rnd.integerInRange(-80, 80);

    	switch (this.game.rnd.integerInRange(0, 2)) {
    		case 0:
                var xpos = this.game.rnd.integerInRange(200, this.sizex - 300);
    			var sprite = this.birds.create(xpos, verticalPosition, 'bird');
    			sprite.body.allowGravity = false;
    			sprite.body.immovable = false;
                this.game.add.tween(sprite).to({x:xpos+100},1000,Phaser.Easing.Linear.None,true,this.game.rnd.integerInRange(0,500),-1,true);
    			break;
    		case 1:
    			if (this.game.rnd.integer() % 2 === 0) {
    				var sprite = this.ledges.create(0, verticalPosition, 'ledge');
    				sprite.body.allowGravity = false;
    				sprite.body.immovable = false;
       			} else {
    				var sprite = this.ledges.create(this.sizex, verticalPosition, 'ledge');
                    sprite.x -= sprite.width / 2;
    				sprite.anchor.setTo(0.5, 0.5);
    				sprite.scale.x = -1;
     				sprite.body.allowGravity = false;
    				sprite.body.immovable = false;
   				}
    			break;
    		case 2:
    			var type = this.game.rnd.integer() % 2 === 0 ? 'branch' : 'root';
    			if (this.game.rnd.integer() % 2 === 0) {
    				var sprite = this.branches_roots.create(0, verticalPosition, type);
     				sprite.body.allowGravity = false;
    				sprite.body.immovable = false;
   				} else {
    				var sprite = this.branches_roots.create(this.sizex, verticalPosition, type);
                    sprite.x -= sprite.width / 2;
                    sprite.anchor.setTo(0.5, 0.5);
                    sprite.scale.x = -1;
    				sprite.body.allowGravity = false;
    				sprite.body.immovable = false;
    			}
    			break;
    	}
    }

    this.birds.callAll('animations.add', 'animations', 'flapping');
    this.birds.callAll('animations.play', 'animations', 'flapping', 15, true);
}

Obstacles.prototype.update = function () {
}

module.exports = Obstacles;