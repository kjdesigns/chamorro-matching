var gameState={
    
  preload:function(){
      this.game.load.image("avatar1","assets/avatar1.png");
      this.game.load.image("mario","assets/mario.png");
      this.game.load.image("background","assets/background-3.png");
      
      //load the spritesheet
      this.game.load.image("tileset","assets/tileset.png");
      this.game.load.tilemap("map","assets/level1.json",null,Phaser.Tilemap.TILED_JSON);
      
      

      
  },
  
  create:function(){
      this.game.stage.backgroundColor="#F279F2";
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.renderer.renderSession.roundPixels=true;
      this.background = this.game.add.sprite(0,0,"background");
      this.createWorld();
      
      //Variables
      //this.canTouch = true;
      
      this.imageGroup=this.game.add.group();
      
      this.avatar1 = this.game.add.sprite(42,42,"avatar1");
      this.game.physics.arcade.enable(this.avatar1);
      
      
      this.avatar2 = this.game.add.sprite(200,100,"avatar1");
      this.game.physics.arcade.enable(this.avatar2);
      this.avatar2.customParams="correct";
      this.imageGroup.add(this.avatar2);
      
      
      this.mario = this.game.add.sprite(100,100,"mario");
      this.game.physics.arcade.enable(this.mario);
      this.imageGroup.add(this.mario);
      
      //Enable input and allow for dragging
      this.avatar1.inputEnabled = true;
      this.avatar1.events.onInputDown.add(this.dragPlayer,this);
      
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
      this.game.physics.arcade.collide(this.avatar1,this.imageGroup,this.checkCorrect,null,this);
      //push the player foreward if its position is off the screen
      
      if(this.canTouch){
          this.avatar1.x=this.game.input.activePointer.position.x;
          this.avatar1.y=this.game.input.activePointer.position.y;
      }
    
      
  },
  
  checkCorrect:function(player,correctSprite){
      
    
      if(correctSprite.customParams==="correct" && this.canTouch){
          this.canTouch=false;
          correctSprite.kill();
          this.game.state.start("level2");
          
      
          
          
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



