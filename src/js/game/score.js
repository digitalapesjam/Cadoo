var ScoreDisplay = function ScoreDisplay(game) {
  this.game = game;
  this.score = 0;
};

ScoreDisplay.prototype.create = function() {
  this.text = this.game.add.text(100, 8, 'score: 0', {fontSize: '24px', fill: '#CCC'});
  this.text.fixedToCamera = true;
};

ScoreDisplay.prototype.updateScore = function(scoreMod) {
  this.score += scoreMod;
  this.text.text = 'Score: ' + this.score;
  //console.log('new score', this.score);
};

ScoreDisplay.prototype.update = function() {
};

module.exports = ScoreDisplay;