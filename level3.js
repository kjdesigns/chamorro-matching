var level3={
  
  create:function(){
      this.game.stage.backgroundColor="#ffffff";
      
      this.background = this.game.add.sprite(0,0,"background3");
      
      //create audio
      this.hungan = this.game.add.audio("hungan");
      this.ahe = this.game.add.audio("ahe");
      //this.ahe.volume=0.07;
      
      //create emitter
      this.emitter = this.game.add.emitter(this.game.world.centerX,this.game.world.centerY,50);
      this.emitter.makeParticles("star");
      this.emitter.gravity = 300;
      this.emitter.setXSpeed(-200,200);
      this.emitter.setYSpeed(-300,-400);
      
      
      
      this.playerGroup = this.game.add.group();
      this.imageGroup=this.game.add.group();
      
      
      
   
    var enemyData = [
        {
            key:"chicken",x:200,y:100
          },
          {
            key:"dog",x:300,y:100
          },
          {
            key:"cow",x:400,y:100
          },
          {
            key:"mouse",x:500,y:100
          },
          {
            key:"sheep",x:600,y:100
          }
        
      
      
      ];
      
      var self = this;
      var enemy;
      enemyData.forEach(function(element){
        enemy=this.game.add.sprite(element.x,element.y,element.key);
        this.game.physics.arcade.enable(enemy);
        enemy.customParams=element.key;
        this.imageGroup.add(enemy);
        enemy.scale.setTo(0.3);
        enemy.anchor.setTo(0.5);
      },this);
 
      var playerData = [
          {
            key:"sheep",x:100,y:500
          },
          {
            key:"dog",x:250,y:500
          },
          {
            key:"mouse",x:400,y:500
          },
          {
            key:"cow",x:550,y:500
          },
          {
            key:"chicken",x:700,y:500
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
          player.body.setSize(45,100,45,45);
          player.body.collideWorldBounds = true;
          player.inputEnabled=true;
          player.input.enableDrag();
          player.OriginalX=element.x;
          player.OriginalY=element.y;
          
          //audio
          player.customSound = this.game.add.audio(element.key);
          
          player.events.onInputDown.add(this.playSound,this);
          player.events.onInputUp.add(this.reverse,this);
          
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
        
        
        //create text
        var style = {font:"bold 30px Arial",fill:"#ffffff",align:"center"};
      this.textAppear=this.game.add.text(this.game.width/2,this.game.world.centerY,null,style);
      this.textAppear.anchor.setTo(0.5);
      
      //create the help question mark
      this.questionMark = this.game.add.sprite(this.game.world.width-50,this.game.world.height-50,"icons");
      this.questionMark.frame=42;
      this.questionMark.inputEnabled=true;
      this.questionMark.events.onInputDown.add(this.showTheHelpBar,this);
      
      
  },
  
  update:function(){
      this.game.physics.arcade.overlap(this.playerGroup,this.imageGroup,this.checkCorrect,null,this);
   
      // if(this.playerGroup.total ==0){
      //   this.game.state.start("level2");
      // }
      
      
      this.checkIfNoMoreSprites();
      
    
      
  },
  checkCorrect:function(player,sprites){
    
    
    if(player.customParams==sprites.customParams){
      player.inputEnabled=false;
      this.hungan.play();
      player.kill();
      sprites.kill();
      this.showText("Correct");
      this.textAppear.visible=true;
      this.emitter.start(true,1000,null,30);
      
    
    }else{
      
     
      console.log("SORRY ITS WRONG");
      player.input.draggable = false;
      
      // Flash the color white for 300ms
      this.game.camera.flash(0xffffff, 300);
      
      this.showText("Wrong");
      this.textAppear.visible=true;
      //Play a sound when its wrong
       this.ahe.play();
      
      
      //reset the sprite back to original position
      //player.reset(player.OriginalX,player.OriginalY);
      this.resetPlayer(player);
      
      
      //add event listener to make player sprites draggable again
      this.game.time.events.add(300,function () {
          this.dragPlayer(player);
      },this);
     
     
      
      
    }
    
    this.game.time.events.add(1000,function(){
        this.textAppear.visible=false;
      },this);
    
      
  },
  checkIfNoMoreSprites:function(){
  //check if there is anymore sprites on the game if none then wait 3 seconds before going to the next level
    if(this.playerGroup.total ==0){
      this.game.time.events.add(2000,function(){
       this.game.state.start("level4");
      },this);
       
      }
      
      
      
     
  },
  
  dragPlayer:function(player){
    
    player.input.enableDrag()
    
    
    
  },
  playSound:function(sprite){
    console.log("PLAY SOUND" + sprite.customParams);
    //var tween = this.game.add.tween(sprite).to({alpha:0.5},1000);
    var tween = this.game.add.tween(sprite.scale).to({x:0.4,y:0.4},300);
    tween.start();
    sprite.customSound.play();
    this.showText(sprite.customParams.toUpperCase());
    
   
  },
  
  reverse:function(player){
    //var tween = this.game.add.tween(player).to({alpha:1},1000);
    var tween = this.game.add.tween(player.scale).to({x:0.3,y:0.3},300);
    tween.start();
   
   
  },
  
  resetPlayer:function(sprite){
    var tween = this.game.add.tween(sprite).to({x:sprite.OriginalX,y:sprite.OriginalY},1000);
    tween.start();
    
  },
  
  
  showText:function(text){
    
      this.textAppear.text=text;
      this.textAppear.visible=true;
    
  },
  
  showTheHelpBar:function(){
    //the overlay
    this.overlay = this.add.bitmapData(this.game.width,this.game.height);
    this.overlay.ctx.fillStyle = "#000";
    this.overlay.ctx.fillRect(0,0,this.game.width,this.game.height);
    
    //sprite for the overlay
    this.panel = this.add.sprite(0,this.game.height,this.overlay);
    this.panel.alpha = 0.55;
    
    //make it input enabled
    this.panel.inputEnabled=true;
    this.panel.events.onInputDown.add(this.hidePanel,this);
    
     //overlay raising tween animation
    var gameHelpPanel = this.add.tween(this.panel);
    gameHelpPanel.to({y:0},500);
    
    gameHelpPanel.onComplete.add(function(){
    
      
      var style ={font:"30px Arial",fill:"#fff"};
       this.helpInfo =this.game.add.text(this.game.width/2,this.game.height/2,"HAFA ADAI\n Drag the animals to match the other animals",style)
       this.helpInfo.anchor.setTo(0.5);
      
    },this);
   
   gameHelpPanel.start();
    
    
  },
  
  hidePanel:function(){
    this.panel.y=this.game.height;
    this.helpInfo.text="";
    
  }
  
 
 
};



