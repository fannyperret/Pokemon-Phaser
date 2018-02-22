
// Defining the state
var bootState = {

  // Create function
  create: function () {

    // Physics system Arcade Physics engine
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Calling the load state
    game.state.start('load');
  }
};
