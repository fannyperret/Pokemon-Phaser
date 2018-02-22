
var playState = {

  create: function () {

    // Keyboard to move the sprite
    this.keyboard = game.input.keyboard;
    // Create player sprite and enable Physics
    this.player = game.add.sprite(64, 64,'pikachu');
    this.player.smoothed = false;
    this.player.scale.set(1);

    left = this.player.animations.add('left', [8,9], 10, true);
    right = this.player.animations.add('right', [1,2], 10, true);
    this.player.animations.add('up', [11,12,13], 10, true);
    this.player.animations.add('down', [4,5,6], 10, true);

    cursors = game.input.keyboard.createCursorKeys();

    game.physics.enable(this.player, Phaser.Physics.ARCADE);



    // Create win sprite and enable Physics
    this.win = game.add.sprite(500, 300, 'pokeball');
    this.win.scale.set(0.1);
    game.physics.enable(this.win, Phaser.Physics.ARCADE);



  },

  update: function () {

    // When the player sprite and win sprite overlap, Win!
    game.physics.arcade.overlap(this.player, this.win, this.Win, null, this);

    thid.player.body.velocity.set(0);

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -175;
        player.play('left');
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 175;
        player.play('right');
    }
    else if (cursors.up.isDown)
    {
        player.body.velocity.y = -175;
        player.play('up');
    }
    else if (cursors.down.isDown)
    {
        player.body.velocity.y = 175;
        player.play('down');
    }
    else
    {
        player.animations.stop();
    }

  },

  Win: function () {

    game.state.start('pokeball');
  }
}
