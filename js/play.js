
create: function () {

  // Keyboard to move the sprite
  this.keyboard = game.input.keyboard;
  // Create player sprite and enable Physics
  this.player = game.add.sprite(64, 64, 'pikachu');
  game.physics.enable(this.player, Phaser.Physics.ARCADE);
  // Create win sprite and enable Physics
  this.win = game.add.sprite(1024, 1024, 'pokeball');
  game.physics.enable(this.win, Phaser.Physics.ARCADE);

}

update: function () {

  // When the player sprite and win sprite overlap, Win!
  game.physics.arcade.overlap(this.player, this.win, this.Win, null, this);

  if (this.keyboard.isDown(Phaser.Keyboard.A)) {
    this.player.body.velocity.x = -175;
  } else if (this.keyboard.isDown(Phaser.Keyboard.D)) {
    this.player.body.velocity.x = 175;
  } else {
    this.player.body.velocity.x = 0;
  }

  if (this.keyboard.isDown(Phaser.Keyboard.W)) {
    this.player.body.velocity.x = -175;
  } else if (this.keyboard.isDown(Phaser.Keyboard.S)) {
    this.player.body.velocity.x = 175;
  } else {
    this.player.body.velocity.x = 0;
  }

}

Win: function () {

  game.state.start('pokeball');
}
