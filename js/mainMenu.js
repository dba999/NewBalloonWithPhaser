var menuState = {
	create: function () {
	    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
		logo.anchor.setTo(0.5, 0.5);
		logo.inputEnabled = true;
		logo.events.onInputDown.add(onDown, this);
		
		function onDown(sprite, pointer){
		tweenMenu = game.add.tween(logo).to({alpha: 0}, 800, Phaser.Easing.Linear.None, true);
		tweenMenu.onComplete.add(onComplete, this);
		}
		function onComplete() { game.state.start('play');}
	}


};