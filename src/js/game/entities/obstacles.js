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

    for (var i = 0; i < this.sizey / 400; i++) {
		var verticalPosition = ((i + 1) * 400) + this.game.rnd.integerInRange(-80, 80);

    	switch (this.game.rnd.integerInRange(0, 2)) {
    		case 0:
    			this.birds.create(this.game.rnd.integerInRange(200, this.sizex - 200), verticalPosition, 'bird');
    			break;
    		case 1:
    			if (this.game.rnd.integer() % 2 === 0) {
    				this.ledges.create(0, verticalPosition, 'ledge');
    			} else {
    				var sprite = this.ledges.create(this.sizex, verticalPosition, 'ledge');
    				sprite.anchor.setTo(0, 0);
    				sprite.scale.x *= -1;
    			}
    			break;
    		case 2:
    			var type = this.game.rnd.integer() % 2 === 0 ? 'branch' : 'root';
    			if (this.game.rnd.integer() % 2 === 0) {
    				this.branches_roots.create(0, verticalPosition, type);
    			} else {
    				var sprite = this.branches_roots.create(this.sizex, verticalPosition, type);
    				sprite.anchor.setTo(0, 0);
    				sprite.scale.x *= -1;
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