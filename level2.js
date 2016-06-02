var level2={
    
  preload:function(){
      this.game.load.image("avatar1","assets/avatar1.png");
      this.game.load.image("mario","assets/mario.png");
      
  },
  
  create:function(){
      this.game.stage.backgroundColor="#F279F2";
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.renderer.renderSession.roundPixels=true;
      
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
     
      
      
      
      console.log("IM IN LEVEL 2");
    


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
          this.game.state.start("game");
          
      
          
          
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
      
      
  }
 
};


