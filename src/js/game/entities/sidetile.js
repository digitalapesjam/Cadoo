var Sidetile = function Sidetile(game, sizex, sizey) {
    this.game = game;
    this.sidetileLeft = null;
    this.sidetileRight = null;
    this.sizex = sizex;
    this.sizey = sizey;
}

Sidetile.prototype.create = function () {
    this.sidetileLeft = this.game.add.tileSprite(0, 0, 80, this.sizey, 'leftsidetile');
    this.sidetileRight = this.game.add.tileSprite(this.sizex - 80, -100, this.sizex, this.sizey + 100, 'rightsidetile');
}

Sidetile.prototype.update = function () {
}

module.exports = Sidetile;