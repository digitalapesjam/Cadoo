var Phaser = require('Phaser');

var BigRockObstacleCollision = function BigRockObstacleCollision(rock, obstacles) {
    this.rock = rock;
    this.obstacles = obstacles;
    this.ledgesHit = 0;
    this.lastLedgeHit = null;
    this.lastBirdHit = null;
    this.lastBranchHit = null;
    this.maxLedgesHit = 5;
}

var sd = 0.05;

BigRockObstacleCollision.prototype.checkCollision = function(game) {
    if (game.physics.arcade.gravity.y < 10000) {
        game.physics.arcade.overlap(this.rock.sprite, this.obstacles.ledges, function(rock, ledge) {
                if (this.lastLedgeHit !== ledge) {
                    ledge.kill();
                    var name = 'impact' + Math.round(Math.random() * 2);
                    this.playAudio(name, game);
                    this.explode(game,Math.max(ledge.x,ledge.width),ledge.y);
                }
        }, null, this);
        game.physics.arcade.overlap(this.rock.sprite, this.obstacles.birds, function(rock, bird) {
                if (this.lastBirdHit !== bird) {
                    this.lastBirdHit = bird;
                    this.playAudio('birdhit', game);
                    bird.kill();
                    this.explode(game,bird.x,bird.y);
                }
        }, null, this);
            game.physics.arcade.overlap(this.rock.sprite, this.obstacles.branches_roots, function(fallingman, branch) {
                if (this.lastBranchHit !== branch) {
                    this.lastBranchHit = branch;
                    this.playAudio('branchhit', game);
                    branch.kill();
                    this.explode(game,Math.max(branch.x,branch.width),branch.y);
                }
        }, null, this);
    }
}

BigRockObstacleCollision.prototype.explode = function(game,posx, posy) {
                var emitter = game.add.emitter(posx, posy + 100, 5);
                emitter.maxParticles = 20;
                emitter.makeParticles('smoke');
                emitter.explode(1000, 20);
                setTimeout(function() {emitter.kill();}, 1200);
};

BigRockObstacleCollision.prototype.playAudio = function(name, game) {
    console.log('play', name)
    var audio = game.add.audio(name);
    audio.onDecoded.add(function() {audio.play();});
};

module.exports = BigRockObstacleCollision;