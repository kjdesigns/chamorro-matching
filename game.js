var gameState={
  
  //maybe make it like a bubble shooter
  //make a timer that when the player gets it right it shows a nice animation then it goes to next level
  //make timer stuff
  //tween when it overlaps 
  init:function(){
    
    
      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      
      this.game.scale.setMinMax(this.game.width/2,this.game.height/2,this.game.width*2,this.game.height*2);
      
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.pageAlignVertically = true;
    
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
      
      this.panda = this.game.add.sprite(200,100,"panda");
      this.panda.scale.setTo(0.3);
      this.panda.anchor.setTo(0.5);
      this.panda.customParams="panda";
      this.game.physics.arcade.enable(this.panda);
      this.imageGroup.add(this.panda);
      
      
      
      this.snake = this.game.add.sprite(400,100,"snake");
      this.snake.scale.setTo(0.3);
       this.snake.anchor.setTo(0.5);
      this.game.physics.arcade.enable(this.snake);
      this.snake.customParams="snake";
      this.imageGroup.add(this.snake);
      
      
      this.parrot = this.game.add.sprite(600,100,"parrot");
      this.parrot.scale.setTo(0.3);
       this.parrot.anchor.setTo(0.5);
      this.game.physics.arcade.enable(this.parrot);
      this.parrot.customParams="parrot";
      this.imageGroup.add(this.parrot);
      
   
      this.playerGroup.forEach(function(element){
        element.events.onInputDown.add(this.dragPlayer,this);
              
        this.tween = this.game.add.tween(element.scale).to({x:1.3,y:1.3},500,"Elastic");
        
        
        
          
      
      },this);
      

      
      
      var playerData = [
          {
            key:"panda",x:600,y:500
          },
          {
            key:"snake",x:200,y:500
          },
          {
            key:"parrot",x:400,y:500
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
          player.OriginalX=element.x;
          player.OriginalY=element.y;
          
          
          
          
          
          
          
          
          
          
//           var sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'asuna');
// sprite.anchor.set(0.5);
// tween = game.add.tween(sprite.scale).to( { x: 3, y: 3 }, 1000, "Elastic");
// game.input.onDown.addOnce(start, this);
// }
// function start() {
// tween.start();
// text.visible = false;
// }
        
          
        },this);
        
        
        
        this.imageGroup.forEach(function(element){
          var tween = this.game.add.tween(element);
          tween.to({angle:-10},500);
          tween.to({angle:10},1000);
          tween.to({angle:0},500);
          tween.loop();
          tween.start();
          
          
         // var tween = this.game.add.tween(element.scale).to({},2000).yoyo(true).start().loop(true);
        },this);
  },
  
  update:function(){
      this.game.physics.arcade.overlap(this.playerGroup,this.imageGroup,this.checkCorrect,null,this);
   
      if(this.playerGroup.total ==0){
        this.game.state.start("level2");
      }
      
    
      
  },
  checkCorrect:function(player,sprites){
    if(player.customParams==sprites.customParams){
      player.inputEnabled=false;
      player.kill();
      sprites.kill();
    }else{
      player.input.draggable = false;
      player.reset(player.OriginalX,player.OriginalY);
      this.game.time.events.add(1000,function () {
          this.dragPlayer(player)
      },this);
     
      
      
    }
    
    
      
  },
  
  dragPlayer:function(player){
    
    player.input.enableDrag()
    // this.tween.start();
  },
  
 
};



