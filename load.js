var loadState = {
    
    preload:function(){
        //Add a 'loading...' label on the screen
        var loadingLabel = this.game.add.text(this.game.width/2,150,"loading...",{
            font:"30px Arial",
            fill:"#ffffff"
        });
        loadingLabel.anchor.setTo(0.5);
        
        //Display the progress bar
        var progressBar = this.game.add.sprite(this.game.width/2,200,'progressBar');
        progressBar.anchor.setTo(0.5);
        this.game.load.setPreloadSprite(progressBar);
        
        //Load all our assets

		this.game.load.image("cat","assets/cat.png");
      this.game.load.image("snake","assets/snake.png");
      this.game.load.image("bird","assets/parrot.png");
      this.game.load.image("pig","assets/pig.png");
      this.game.load.image("background","assets/background-3.png");
      this.game.load.image("background2","assets/background2.png");
      this.game.load.image("background3","assets/background3.png");
      this.game.load.image("background4","assets/background4.png");
      this.game.load.image("ibb","assets/ibb.png");
      this.game.load.image("star","assets/star.png");
      this.game.load.image("pig","assets/pig.png");
      this.game.load.image("rabbit","assets/rabbit.png");
      this.game.load.image("monkey","assets/monkey.png");
      this.game.load.image("elephant","assets/elephant.png");
      this.game.load.image("chicken","assets/chicken.png");
      this.game.load.image("cow","assets/cow.png");
      this.game.load.image("mainMenu","assets/main.jpg");
      
      this.game.load.image("goat","assets/goat.png");
      this.game.load.image("mouse","assets/mouse.png");
      this.game.load.image("sheep","assets/sheep.png");
      this.game.load.image("dog","assets/dog.png");
      this.game.load.image("bat","assets/bat.png");
      this.game.load.image("crab","assets/crab.png");
      this.game.load.image("fish","assets/fish.png");
      this.game.load.image("octopus","assets/octopus.png");
      this.game.load.image("turtle","assets/turtle.png");
      this.game.load.image("ground","assets/layer_3.png");
      this.game.load.image("cloud","assets/layer1.png");
     
      
      
      //audio
      this.game.load.audio("hungan","assets/sounds/correct.mp3");
      this.game.load.audio("ahe","assets/sounds/ahe.mp3");
      this.game.load.audio("bird","assets/sounds/bird.mp3");
      this.game.load.audio("snake","assets/sounds/snake.mp3");
      this.game.load.audio("cat","assets/sounds/cat.mp3");
      this.game.load.audio("elephant","assets/sounds/elephant.mp3");
      this.game.load.audio("cow","assets/sounds/cow.mp3");
      this.game.load.audio("monkey","assets/sounds/monkey.mp3");
      this.game.load.audio("pig","assets/sounds/pig.mp3");
      this.game.load.audio("rabbit","assets/sounds/rabbit.mp3");
      this.game.load.audio("sheep","assets/sounds/sheep.mp3");
      this.game.load.audio("dog","assets/sounds/dog.mp3");
      this.game.load.audio("chicken","assets/sounds/chicken.mp3");
      this.game.load.audio("fish","assets/sounds/fish.mp3");
      this.game.load.audio("bat","assets/sounds/bat.mp3");
      this.game.load.audio("crab","assets/sounds/crab.mp3");
      this.game.load.audio("hit","assets/sounds/hit.mp3");
      this.game.load.audio("jump","assets/sounds/jump.mp3");
      
      //bitmap font
      this.load.bitmapFont("font","assets/font.png","assets/font.xml");
      
      //spritesheets
      this.game.load.spritesheet("frog","assets/frog.png",64,64);
      this.game.load.spritesheet("icons","assets/icon.png",32,32);
      this.game.load.spritesheet("enemy","assets/enemy.png",60,60);
      
		
	
		
        		
    
    },
    
    create:function(){
        //GO to the menu state
        this.game.state.start("frogJumper");
    }
};