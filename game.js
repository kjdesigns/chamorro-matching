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
          this.game.physics.arcade.enable(player);
          player.customParams=element.key;
          this.playerGroup.add(player);
          player.scale.setTo(0.3);
          player.anchor.setTo(0.5);
          player.inputEnabled=true;
          player.input.enableDrag();
        },this);
  },
  
  update:function(){
      this.game.physics.arcade.overlap(this.playerGroup,this.imageGroup,this.checkCorrect,null,this);
   
      
      
    
      
  },
  checkCorrect:function(player,sprites){
    console.log("im overlapping");
    if(player.customParams==sprites.customParams){
      player.inputEnabled=false;
      player.kill();
      sprites.kill();
    }
  },

 
};



