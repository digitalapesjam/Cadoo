module.exports = function (game) {

    var preloader = {};

    var text = null;

    preloader.preload = function () {
        game.load.onLoadStart.addOnce(this.onLoadStart.bind(this));
        game.load.onLoadComplete.addOnce(this.onLoadComplete.bind(this));

        game.load.image('logo', 'images/phaser.png#grunt-cache-bust');
        game.load.game.load.spritesheet ('stickman', 'images/stickman.png#grunt-cache-bust',18 ,23);
        game.load.game.load.spritesheet ('stickman_hit', 'images/hitting.png#grunt-cache-bust',32,32);
        game.load.image('floor', 'images/floor.png#grunt-cache-bust');
        game.load.image('leftsidetile', 'images/leftside.png#grunt-cache-bust');
        game.load.image('rightsidetile', 'images/rightside.png#grunt-cache-bust');
        game.load.game.load.spritesheet ('bigrock', 'images/bigrock-sprite.png#grunt-cache-bust',480,492);
        game.load.image('star', 'images/star.png#grunt-cache-bust');
        game.load.audio('music', 'audio/ScatterNoise1.mp3');
        game.load.audio('splat', 'audio/splat.mp3');
        game.load.audio('shimmer', 'audio/shimmer_1.mp3');
        game.load.audio('bump_rock', 'audio/synthetic_explosion.mp3');
        game.load.audio('branchhit', 'audio/ledge2.mp3');
        game.load.audio('birdhit0', 'audio/peacockscream.mp3');
        game.load.audio('birdhit1', 'audio/vulture.mp3');
        game.load.audio('impact0', 'audio/qubodupImpactMetal.mp3');
        game.load.audio('impact1', 'audio/qubodupImpactWood.mp3');
        game.load.audio('impact2', 'audio/qubodupImpactStone.mp3');

        game.load.game.load.spritesheet('bird', 'images/bird.png#grunt-cache-bust', 30, 26);
        game.load.image('branch', 'images/branch.png#grunt-cache-bust');
        game.load.image('root', 'images/root.png#grunt-cache-bust');
        game.load.image('ledge', 'images/ledge.png#grunt-cache-bust');
        game.load.image('smoke', 'images/smoke-puff.png');
        game.load.game.load.spritesheet('blood', 'images/blood.png#grunt-cache-bust', 32, 16);
        game.load.game.load.spritesheet ('stickman_flat', 'images/flat.png#grunt-cache-bust',32,32);
        game.load.game.load.spritesheet ('coin', 'images/coin.png#grunt-cache-bust',32,21);

        ['01', '02', '11', '14', '15', '16', '17', '18'].forEach(function(el, id) {
            var swosh = 'swosh'+id;
            var fname = 'audio/swosh-' + el + '.mp3';
            game.load.audio(swosh, fname);
        });
    };

    preloader.onLoadStart = function() {
        text = game.add.text(200, 200, 'Loading... 0%', {fontSize: '24px', fill: '#FFF'});
        text.anchor.set(0.5,0.5);
        text.x = game.width/2;
        text.y = game.width/2;
        this._intv = setInterval(this.onInterval.bind(this), 200);
    };

    preloader.onLoadComplete = function() {
        clearInterval(this._intv);
        text.text = 'Loaded: 100%';
    };

    preloader.onInterval = function() {
        text.text = 'Loaded: ' + game.load.progress + '%';
    };

    preloader.create = function () {
        //game.state.start('game');
        game.state.start('game');
    };

    return preloader;
};
