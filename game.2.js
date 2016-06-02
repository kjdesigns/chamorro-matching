var gameState={
  
  //maybe make it like a bubble shooter
    
  preload:function(){
      this.game.load.image("panda","assets/panda.png");
      this.game.load.image("snake","assets/snake.png");
      this.game.load.image("parrot","assets/parrot.png");
      this.game.load.image("pig","assets/pig.png");
      this.game.load.image("background","assets/background-3.png");
      
      
      
      

      
  },
  
  create:function(){
      this.game.stage.backgroundColor="#F279F2";
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.renderer.renderSession.roundPixels=true;
      this.background = this.game.add.sprite(0,0,"background");
      
      
      
      
      this.imageGroup=this.game.add.group();
      
      this.panda = this.game.add.sprite(100,100,"panda");
      this.panda.scale.setTo(0.3);
      this.game.physics.arcade.enable(this.panda);
      
      
      this.snake = this.game.add.sprite(200,100,"snake");
      this.snake.scale.setTo(0.3);
      this.game.physics.arcade.enable(this.snake);
      this.snake.customParams={correct:"correct",isAlive:true};
      this.imageGroup.add(this.snake);
      
      
      this.parrot = this.game.add.sprite(300,100,"parrot");
      this.parrot.scale.setTo(0.3);
      this.game.physics.arcade.enable(this.parrot);
      this.imageGroup.add(this.parrot);
      
      //Enable input and allow for dragging
      this.panda.inputEnabled = true;
      this.panda.events.onInputDown.add(this.dragPlayer,this);
      
      //text
      var style = {font:"18px Arial",fill:"#ffffff"};
      var label = this.game.add.text(100,100,"Find the GALAGU",style);
      label.anchor.setTo(0.5);
      this.game.add.tween(label).to({y:50}).yoyo(true).start().loop(true);
     
      
      
      
      //reset sprite if its not correct
      //add 4 boxes or images
      //turn off drag if correct
      //kill off incorrect sprites
      
      
      //  Enable input and allow for dragging
    // atari.inputEnabled = true;
    // atari.input.enableDrag();
    // atari.events.onDragStart.add(onDragStart, this);
    // atari.events.onDragStop.add(onDragStop, this);
    //enable phyics
    //check proximity
    //if player.x<0 push it foreware
    //same with y
    
    


  },
  
  update:function(){
      this.game.physics.arcade.collide(this.panda,this.imageGroup,this.checkCorrect,null,this);
      //push the player foreward if its position is off the screen
      
      if(this.canTouch){
          this.panda.x=this.game.input.activePointer.position.x;
          this.panda.y=this.game.input.activePointer.position.y;
      }
      
      // this.imageGroup.forEachDead(function(element){
      //   if(!element.customParams.isAlive);
      //   console.log("Hey there is 0 left");
      // },this);
      
      
    
      
  },
  
  checkCorrect:function(player,correctSprite){
      
    
      if(correctSprite.customParams.correct==="correct" && this.canTouch){
          this.canTouch=false;
          player.inputEnabled=false;
          correctSprite.customParams.isAlive=false;
          correctSprite.kill();
          //this.game.state.start("level2");
          
      
          
          
       }
    
    if(correctSprite.customParams===undefined && this.canTouch){
        this.canTouch=false;
        player.kill();
        player.reset(300,300);
        
        
        
    }
    
    
    
      
     
      
     
      
  },
  dragPlayer:function(){
      
      //this.avatar1.input.enableDrag();
      this.canTouch=true;
      
      
  },
  
  createWorld:function(){
    //create the tilemap
    this.map = this.game.add.tilemap("map");
    //add the tileset to the map
    this.map.addTilesetImage('tileset');
    //create the layer by specifying the name of the Tiled layer
    this.layer = this.map.createLayer("Tile Layer 1");
    //set the world size to match the size of the layer
    this.layer.resizeWorld();
    //enable collisions for the first tileset element
    this.map.setCollision(1);
    
  }
 
};



