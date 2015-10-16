var bootState = {

        create: function () {
		game.stage.backgroundColor = '#4d4d4d';

			// Stretch to fill
		game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

			// Keep original size
			// game.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;
		game.state.start('init');
        }


};