var mainMenu ={
      init:function(){
    
    
    //   this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      
    //   this.game.scale.setMinMax(this.game.width/2,this.game.height/2,this.game.width*2,this.game.height*2);
      
    //   this.game.scale.pageAlignHorizontally = true;
    //   this.game.scale.pageAlignVertically = true;
      
    //   this.game.physics.startSystem(Phaser.Physics.ARCADE);
    //   this.game.renderer.renderSession.roundPixels=true;
      
      //variables
      this.textAppear;
      this.spriteText;
  
    
  },
    
    
    preload:function(){
    //   this.game.load.image("cat","assets/cat.png");
    //   this.game.load.image("snake","assets/snake.png");
    //   this.game.load.image("bird","assets/parrot.png");
    //   this.game.load.image("pig","assets/pig.png");
    //   this.game.load.image("background","assets/background-3.png");
    //   this.game.load.image("background2","assets/background2.png");
    //   this.game.load.image("background3","assets/background3.png");
    //   this.game.load.image("ibb","assets/ibb.png");
    //   this.game.load.image("star","assets/star.png");
    //   this.game.load.image("pig","assets/pig.png");
    //   this.game.load.image("rabbit","assets/rabbit.png");
    //   this.game.load.image("monkey","assets/monkey.png");
    //   this.game.load.image("elephant","assets/elephant.png");
    //   this.game.load.image("chicken","assets/chicken.png");
    //   this.game.load.image("cow","assets/cow.png");
    //   this.game.load.image("mainMenu","assets/main.jpg");
      
    //   this.game.load.image("goat","assets/goat.png");
    //   this.game.load.image("mouse","assets/mouse.png");
    //   this.game.load.image("sheep","assets/sheep.png");
    //   this.game.load.image("dog","assets/dog.png");
      
    //   //spritesheet
    //   this.game.load.spritesheet("icons","assets/icon.png",32,32);
      
      
    //   //audio
    //   this.game.load.audio("hungan","assets/sounds/correct.mp3");
    //   this.game.load.audio("ahe","assets/sounds/ahe.mp3");
    //   this.game.load.audio("bird","assets/sounds/bird.mp3");
    //   this.game.load.audio("snake","assets/sounds/snake.mp3");
    //   this.game.load.audio("cat","assets/sounds/cat.mp3");
    //   this.game.load.audio("dog","assets/sounds/dog.mp3");
    //   this.game.load.audio("rabbit","assets/sounds/rabbit.mp3");
    //   this.game.load.audio("pig","assets/sounds/pig.mp3");
    //   this.game.load.audio("elephant","assets/sounds/elephant.mp3");
    //   this.game.load.audio("sheep","assets/sounds/sheep.mp3");
    //   this.game.load.audio("chicken","assets/sounds/chicken.mp3");
    //   this.game.load.audio("cow","assets/sounds/cow.mp3");
    //   this.game.load.audio("monkey","assets/sounds/monkey.mp3");
      
    //   //bitmap font
    //   this.load.bitmapFont("font","assets/font.png","assets/font.xml");
      
      
      
      
      

      
  },
    
    
    create:function(){
        this.background = this.game.add.sprite(0,0,"mainMenu");
        
        
        //bitmap font
        this.mainText = this.add.bitmapText(this.world.centerX,128,"font","ANIMAL CHELU",100);
        this.mainText.anchor.setTo(0.5);
        this.mainText.smoothed = false;
        
        this.mainText.tint = 0xada8a2;
        
        
        this.startText = this.add.bitmapText(this.world.centerX,this.game.world.height+150,"font","TOUCH TO START",72);
        this.startText.anchor.setTo(0.5);
        this.startText.tint=0xffffff;
        
        
        this.pig = this.game.add.sprite(this.game.world.centerX,this.game.world.height+150,"pig");
        this.pig.scale.setTo(0.3);
        this.pig.anchor.setTo(0.5);
        
        this.dog = this.game.add.sprite(this.game.world.width*0.25,this.game.world.height+150,"dog");
        this.dog.scale.setTo(0.3);
        this.dog.anchor.setTo(0.5);
        
        this.chicken = this.game.add.sprite(this.game.world.width*0.75,this.game.world.height+150,"chicken");
        this.chicken.scale.setTo(0.3);
        this.chicken.anchor.setTo(0.5);
        
        
        
        // //the tweens
        // this.pigArrives = this.game.add.tween(this.pig);
        // this.pigArrives.to({y:this.game.world.centerY-100},1000,Phaser.Easing.Bounce.Out);
        
        // this.chickenArrives = this.game.add.tween(this.chicken);
        // this.chickenArrives.to({y:this.game.world.centerY+100},1000,Phaser.Easing.Bounce.Out);
        
        // this.dogArrives = this.game.add.tween(this.dog);
        // this.dogArrives.to({y:this.game.world.centerY+100},1000,Phaser.Easing.Bounce.Out);
        
        // this.pigArrives.chain(this.dogArrives);
        // this.dogArrives.chain(this.chickenArrives);
       
        
        // this.startTextTween = this.game.add.tween(this.startText);
        // this.startTextTween.to({y:this.game.world.height-50},1500);
        
        // this.startTextTweenAlpha=this.game.add.tween(this.startText);
        // this.startTextTweenAlpha.to({alpha:0},1000,"Linear").loop();
        // this.startTextTweenAlpha.yoyo(true,1000);
          
        
        // this.pigArrives.start();
        // this.chickenArrives.onComplete.add(function(){
        //     this.startTextTween.start();
        // },this);
        
        // this.startTextTween.onComplete.add(function(){
        //     this.startTextTweenAlpha.start();
        //     this.background.inputEnabled=true;
        //     this.background.events.onInputDown.add(this.startGame,this);
        // },this);
        
        this.background.inputEnabled = true;
        this.background.events.onInputDown.add(this.startGame,this);
        
        
        
    },
    
    startGame:function(){
        this.game.state.start("frogJumper");
    }
    
    
};