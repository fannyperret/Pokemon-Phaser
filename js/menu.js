
var menuState = {

  create: function () {

    // Display the name of the game, the text, the parameters x and y positional values
    var nameLabel = game.add.text(80, 80, 'My First Game', { font: '50px Arial', fill: '#ffffff' });
    // Instructions to start the game for the player
    var startLabel = game.add.text(80, game.world.height-80, 'Press the "W" key to start', { font: '25px Arial', fill: '#ffffff' });
    // Defining W as Phaser.Keyboard.W
    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    wkey.onDown.addOnce(this.start, this);

  },

  // Start function to call the play state
  start: function () {
  game.state.start('play');

  },
};
