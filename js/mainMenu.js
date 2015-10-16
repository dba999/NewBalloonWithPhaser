var menuState = {
	create: function () {
	    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
		logo.anchor.setTo(0.5, 0.5);
		logo.inputEnabled = true;
		logo.events.onInputDown.add(onDown, this);
		
		function onDown(sprite, pointer){
		game.state.start('play');
		}
	}


};