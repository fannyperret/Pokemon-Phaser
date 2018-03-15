
var menuState = {

  create: function () {

    // Display the name of the game, the text, the parameters x and y positional values
    var nameLabel = game.add.text(80, 100, 'Sydo Game', { font: '60px Courier New', fill: '#ffffff' });
    // Instructions to start the game for the player
    var startLabel = game.add.text(80, game.world.height-100, 'Appuie sur la touche "W" pour commencer l\'aventure !', { font: '25px Comic', fill: '#ffffff' });
    // Defining W as Phaser.Keyboard.W
    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    wkey.onDown.addOnce(this.start, this);

  },

  // Start function to call the play state
  start: function () {
  game.state.start('play');

  },
};
