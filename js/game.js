
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv');

// Each state adding
this.game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);

// Game Start
game.state.start('boot');
