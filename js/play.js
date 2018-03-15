
var playState = {

  create: function () {

    // Keyboard to move the sprite
    this.keyboard = game.input.keyboard;
    // Create player sprite and enable Physics
    this.player = game.add.sprite(16, 16,'player');
    this.player.scale.set(0.4);

    left = this.player.animations.add('left', [5,6,7,8], 10, true);
    right = this.player.animations.add('right', [9,10,11,12], 10, true);
    this.player.animations.add('up', [13,14,15,16], 10, true);
    this.player.animations.add('down', [1,2,3,4], 10, true);

    cursors = this.game.input.keyboard.createCursorKeys();

    game.physics.enable(this.player, Phaser.Physics.ARCADE);


    // Create win sprite and enable Physics
    this.win = game.add.sprite(500, 300, 'pokeball');
    this.win.scale.set(0.1);
    game.physics.enable(this.win, Phaser.Physics.ARCADE);

  },



  update: function () {

    // When the player sprite and win sprite overlap, Win!
    game.physics.arcade.overlap(this.player, this.win, this.Win, null, this);

    this.player.body.velocity.set(0);

    if (cursors.left.isDown)
    {
        this.player.body.velocity.x = -175;
        this.player.play('left');
    }
    else if (cursors.right.isDown)
    {
        this.player.body.velocity.x = 175;
        this.player.play('right');
    }
    else if (cursors.up.isDown)
    {
        this.player.body.velocity.y = -175;
        this.player.play('up');
    }
    else if (cursors.down.isDown)
    {
        this.player.body.velocity.y = 175;
        this.player.play('down');
    }
    else
    {
        this.player.animations.stop();
    }

  },

  Win: function () {

    game.state.start('pokeball');
  }
}
