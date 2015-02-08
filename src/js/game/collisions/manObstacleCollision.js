var Phaser = require('Phaser');

var ManObstacleCollision = function ManObstacleCollision(man, obstacles) {
    this.man = man;
    this.obstacles = obstacles;
    this.ledgesHit = 0;
    this.lastLedgeHit = null;
    this.lastBirdHit = null;
    this.lastBranchHit = null;
    this.maxLedgesHit = 5;
}

var sd = 0.1;

ManObstacleCollision.prototype.checkCollision = function(game) {
    game.physics.arcade.overlap(this.man.sprite, this.obstacles.ledges, function(fallingman, ledge) {
        if (this.man.falling && !this.man.dragged) {
            if (this.lastLedgeHit !== ledge) {
                this.lastLedgeHit = ledge;
                this.slowDown(2*sd);
                this.ledgesHit += 1;
                var name = 'impact' + Math.round(Math.random() * 2);
                this.playAudio(name, game);
                if (this.ledgesHit >= this.maxLedgesHit) {
                    this.man.sprite.body.velocity.y = 0;
                    this.man.sprite.body.allowGravity = false;
                } else {
                    var isLeft = ledge.x == 0;
                    var angle = Math.PI / 5;
                    if (isLeft) {
                        ledge.anchor.setTo(0, 1);
                    } else {
                        ledge.anchor.setTo(1, 1);
                        angle *= -1;
                    }
                    game.add.tween(ledge).to({'rotation': angle}, 0.3, Phaser.Easing.Linear.None, true);
                    ledge.body.allowGravity = true;
                    game.add.tween(ledge.body.velocity).to({'y': fallingman.body.velocity.y * 5}, 0.3, Phaser.Easing.Linear.None, true);
                    ledge.body.gravity.y = 100;
                }
            }
        }
    }, null, this);
    game.physics.arcade.overlap(this.man.sprite, this.obstacles.birds, function(fallingman, bird) {
        if (this.man.falling && !this.man.dragged) {
            if (this.lastBirdHit !== bird) {
                this.lastBirdHit = bird;
                this.slowDown(sd);
                this.playAudio('birdhit', game);
                bird.kill();
                var emitter = game.add.emitter(bird.x, bird.y + 100, 5);
                emitter.maxParticles = 10;
                emitter.makeParticles('smoke');
                emitter.explode(200, 10);
                setTimeout(function() {emitter.kill();}, 600);
            }
        }
    }, null, this);
    game.physics.arcade.overlap(this.man.sprite, this.obstacles.branches_roots, function(fallingman, branch) {
        if (this.man.falling && !this.man.dragged) {
            if (this.lastBranchHit !== branch) {
                this.lastBranchHit = branch;
                this.slowDown(sd);
                this.playAudio('branchhit', game);
            }
        }
    }, null, this);
}

ManObstacleCollision.prototype.playAudio = function(name, game) {
    console.log('play', name)
    var audio = game.add.audio(name);
    audio.onDecoded.add(function() {audio.play();});
};

ManObstacleCollision.prototype.slowDown = function(pc) {
    this.man.sprite.body.velocity.y *= (1-pc);
};

module.exports = ManObstacleCollision;