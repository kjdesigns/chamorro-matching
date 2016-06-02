var gameState={
  
  //maybe make it like a bubble shooter
  //make a timer that when the player gets it right it shows a nice animation then it goes to next level
  //make timer stuff
  //tween when it overlaps 
  init:function(){
    this.PX = this.game.world.centerX;
    this.PY = 400;
  },
    
  preload:function(){
      this.game.load.image("panda","assets/panda.png");
      this.game.load.image("snake","assets/snake.png");
      this.game.load.image("parrot","assets/parrot.png");
      this.game.load.image("pig","assets/pig.png");
      this.game.load.image("background","assets/background-3.png");
      this.game.load.image("ibb","assets/ibb.png");
      this.game.load.image("mario","assets/mario.png")
      
      
      

      
  },
  
  create:function(){
      this.game.stage.backgroundColor="#F279F2";
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.renderer.renderSession.roundPixels=true;
      this.background = this.game.add.sprite(0,0,"background");
      
      
      
      this.playerGroup = this.game.add.group();
      this.imageGroup=this.game.add.group();
      
      this.panda = this.game.add.sprite(100,100,"panda");
      this.panda.scale.setTo(0.3);
      this.panda.anchor.setTo(0.5);
      this.panda.customParams="panda";
      this.game.physics.arcade.enable(this.panda);
      this.imageGroup.add(this.panda);
      
      
      
      this.snake = this.game.add.sprite(300,100,"snake");
      this.snake.scale.setTo(0.3);
       this.snake.anchor.setTo(0.5);
      this.game.physics.arcade.enable(this.snake);
      this.snake.customParams="snake";
      this.imageGroup.add(this.snake);
      
      
      this.parrot = this.game.add.sprite(500,100,"parrot");
      this.parrot.scale.setTo(0.3);
       this.parrot.anchor.setTo(0.5);
      this.game.physics.arcade.enable(this.parrot);
      this.parrot.customParams="parrot";
      this.imageGroup.add(this.parrot);
      
      this.player = this.game.add.sprite(this.PX,this.PY,"mario");
      this.player.anchor.setTo(0.5);
      
      //Enable input and allow for dragging
      this.player.inputEnabled = true;
      this.game.physics.arcade.enable(this.player);
      this.playerGroup.forEach(function(element){
        element.events.onInputDown.add(this.dragPlayer,this);
      
      },this)
      //text
      var style = {font:"18px Arial",fill:"#FF69B4"};
      var label = this.game.add.text(100,100,"Find the GALAGU",style);
      label.anchor.setTo(0.5);
      this.game.add.tween(label).to({y:50}).yoyo(true).start().loop(true);
      
      var playerData = [
          {
            key:"panda",x:500,y:500
          },
          {
            key:"snake",x:100,y:500
          },
          {
            key:"parrot",x:300,y:500
          }
        
        
        ];
        
        var self=this;
        var player;
        playerData.forEach(function(element,index){
          player =  this.game.add.sprite(element.x,element.y,element.key);
          player.customParams=element.key;
          this.playerGroup.add(player);
          player.scale.setTo(0.3);
          player.anchor.setTo(0.5);
          player.inputEnabled=true;
          player.input.enableDrag();
        },this);
      
   
      
      
      
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
      this.game.physics.arcade.overlap(this.playerGroup,this.imageGroup,this.checkCorrect,null,this);
      //push the player foreward if its position is off the screen
      
      // if(this.canTouch){
      //     //this.player.x=this.game.input.activePointer.position.x;
      //     //this.player.y=this.game.input.activePointer.position.y;
          
      //     this.playerGroup.x = this.game.input.activePointer.position.x;
      //     this.playerGroup.y = this.game.input.activePointer.position.y;
          
          
      //     // this.playerGroup.forEach(function(element){
      //     //   element.x = this.game.input.activePointer.position.x;
      //     //   element.y = this.game.input.activePointer.position.y;
      //     // },this);
      // }
      
      // this.imageGroup.forEachDead(function(element){
      //   if(!element.customParams.isAlive);
      //   console.log("Hey there is 0 left");
      // },this);
      
      
    
      
  },
  checkCorrect:function(player,sprites){
    console.log("im overlapping");
    if(player.customParams==sprites.customParams){
      player.inputEnabled=false;
      player.kill();
      sprites.kill();
    }
  },
  
  
  
  // checkCorrect:function(player,correctSprite){
  //     player.forEach(function(element){
  //       console.log(element.customParams);
  //   //console.log(correctSprite.customParams);
  //     },this);
    
  //     if(correctSprite.customParams==player.customParams ){
  //         this.canTouch=false;
  //         player.inputEnabled=false;
  //         correctSprite.customParams.isAlive=false;
  //         correctSprite.kill();
  //         //this.game.state.start("level2");
          
      
          
          
  //     }else{
  //         this.canTouch=false;
  //       player.kill();
  //       player.reset(this.PX,this.PY);
         
  //     }
    
    // if(correctSprite.customParams===undefined && this.canTouch){
    //     this.canTouch=false;
    //     player.kill();
    //     player.reset(300,300);
        
        
        
    //}
    
    
    
      
     
      
     
      
 // },
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



