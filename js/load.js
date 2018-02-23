
var loadState = {

  // Preload function is a standard Phaser function to use and load assets
  preload: function () {

    // Loading label on the screen
    var loadingLabel = game.add.text(80, 150, 'Loading...', { font: '30px Courier', fill: '#ffffff'});
    game.load.image('pikachu', 'assets/pikachu.png', 16, 16);
    game.load.image('pokeball', 'assets/pokeball.png', 16, 16);

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
