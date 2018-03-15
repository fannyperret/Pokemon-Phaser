
var loadState = {

  // Preload function is a standard Phaser function to use and load assets
  preload: function () {

    // Loading label on the screen
    var loadingLabel = game.add.text(80, 150, 'Loading...', { font: '30px Courier', fill: '#ffffff'});
    game.load.image('player', 'assets/player.png');
    game.load.image('pokeball', 'assets/pokeball.png');

    var cursors;
    var player;
    var left;
    var right;


  },

  create: function () {

    // Call menu state
    game.state.start('menu');
  }
};
