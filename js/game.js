	   	   console.log("----------");
	   
		var w = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;

		var h = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;
		
       var game = new Phaser.Game(w, h, Phaser.AUTO, '');
	   
		game.state.add('boot', bootState);
		game.state.add('init', loadState);
		game.state.add('mainMenu', menuState);
		game.state.add('play', playState);
	   

	   game.state.start('boot');
	   
	  