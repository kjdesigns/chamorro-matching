// var gameState={
  
//   //maybe make it like a bubble shooter
//   //make a timer that when the player gets it right it shows a nice animation then it goes to next level
//   //make timer stuff
//   //tween when it overlaps done
//   init:function(currentLevel){
    
//       //scale the game
//       this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
//       this.game.scale.setMinMax(this.game.width/2,this.game.height/2,this.game.width*2,this.game.height*2);
//       this.game.scale.pageAlignHorizontally = true;
//       this.game.scale.pageAlignVertically = true;
      
      
//       //variables
//       this.textAppear;
      
//       //level data
//       this.numLevels = 3;
//       this.currentLevel = currentLevel ? currentLevel : 1;
//       console.log("Current level " + this.currentLevel);
      
//       this.won = false;
  
    
//   },
    
//   preload:function(){
//       this.game.load.image("panda","assets/panda.png");
//       this.game.load.image("snake","assets/snake.png");
//       this.game.load.image("parrot","assets/parrot.png");
//       this.game.load.image("pig","assets/pig.png");
//       this.game.load.image("background","assets/background-3.png");
//       this.game.load.image("ibb","assets/ibb.png");
//       this.game.load.image("star","assets/star.png");
      
//       //audio
//       this.game.load.audio("hungan","assets/sounds/correct.mp3");
//       this.game.load.audio("ahe","assets/sounds/ahe.mp3");
//       this.game.load.audio("parrot","assets/sounds/parrot.mp3");
//       this.game.load.audio("snake","assets/sounds/snake.mp3");
//       this.game.load.audio("panda","assets/sounds/panda.mp3");
      
      
      
      

      
//   },
  
//   create:function(){
//       this.game.stage.backgroundColor="#F279F2";
//       this.game.physics.startSystem(Phaser.Physics.ARCADE);
//       this.game.renderer.renderSession.roundPixels=true;
//       this.background = this.game.add.sprite(0,0,"background");
      
//       //create audio
//       this.hungan = this.game.add.audio("hungan");
//       this.ahe = this.game.add.audio("ahe");
//       //this.ahe.volume=0.07;
      
//       //create emitter
//       this.emitter = this.game.add.emitter(this.game.world.centerX,this.game.world.centerY,50);
//       this.emitter.makeParticles("star");
//       this.emitter.gravity = 300;
//       this.emitter.setXSpeed(-200,200);
//       this.emitter.setYSpeed(-300,-400);
      
   
//       this.loadLevel();
      
      
      
      
     
//   },
      
  
//   update:function(){
//     this.game.time.events.add(4000,function(){
//       this.won=true;
//     },this);
//       if(this.won){
//         this.game.state.start("game",true,false,this.currentLevel);
//       }
      
    
//   },
  
//   loadLevel:function(){
//     this.levelData = {
//       "playerPositions":[ {
//             "key":"panda",x:600,y:500,"scale":0.3
//           },
//           {
//             "key":"snake","x":200,"y":500,"scale":0.3
//           },
//           {
//             "key":"parrot","x":400,"y":500,"scale":0.3
//           }],
          
//           "playerPositions":[ {
//             "key":"snake",x:500,y:300,"scale":0.3
//           },
//           {
//             "key":"panda","x":100,"y":300,"scale":0.3
//           },
//           {
//             "key":"parrot","x":300,"y":300,"scale":0.3
//           }]
//     };
//     //load the bottom player sprites
//     if(this.currentLevel<this.numLevels && this.won){
//       this.currentLevel++;
//       this.state.start('game', true, false,2);
//       this.loadPlayers();
      
//     }else{
//       this.currentLevel=1;
      
//     this.loadPlayers();
//     }
    
    
//   },
  
//   //this function handles the bottom sprites to have physics and a group to be in
//   loadPlayers:function(){
//     //add group and physics
//     this.playerGroup = this.game.add.group();
//     this.playerGroup.enableBody = true;
//     console.log("im in the loadplayer function");
    
//     var currentLevelData = this.levelData[this.currentLevel];
    
//     var player;
//     //load player to screen with foreach
//     this.levelData.playerPositions.forEach(function(element){
//       player = this.game.add.sprite(element.x,element.y,element.key);
//       player.scale.setTo(element.scale);
//       this.playerGroup.add(player);
//       player.inputEnabled = true;
//       player.input.enableDrag();
//     },this);
    
    
//   }
  
  
 
 
// };






/////////////<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
      
      //variables
      this.textAppear;
  
    
  },
    
  preload:function(){
      this.game.load.image("panda","assets/panda.png");
      this.game.load.image("snake","assets/snake.png");
      this.game.load.image("parrot","assets/parrot.png");
      this.game.load.image("pig","assets/pig.png");
      this.game.load.image("background","assets/background-3.png");
      this.game.load.image("background2","assets/background2.png");
      this.game.load.image("background3","assets/background3.png");
      this.game.load.image("ibb","assets/ibb.png");
      this.game.load.image("star","assets/star.png");
      this.game.load.image("pig","assets/pig.png");
      this.game.load.image("rabbit","assets/rabbit.png");
      this.game.load.image("monkey","assets/monkey.png");
      this.game.load.image("elephant","assets/elephant.png");
      this.game.load.image("chicken","assets/chicken.png");
      this.game.load.image("cow","assets/cow.png");
      
      this.game.load.image("goat","assets/goat.png");
      this.game.load.image("mouse","assets/mouse.png");
      this.game.load.image("sheep","assets/sheep.png");
      this.game.load.image("dog","assets/dog.png");
      
      
      
      //audio
      this.game.load.audio("hungan","assets/sounds/correct.mp3");
      this.game.load.audio("ahe","assets/sounds/ahe.mp3");
      this.game.load.audio("parrot","assets/sounds/parrot.mp3");
      this.game.load.audio("snake","assets/sounds/snake.mp3");
      this.game.load.audio("panda","assets/sounds/panda.mp3");
      
      
      
      

      
  },
  
  create:function(){
      this.game.stage.backgroundColor="#ffffff";
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.renderer.renderSession.roundPixels=true;
      this.background = this.game.add.sprite(0,0,"background");
      
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
      
   
 
      

      
      
      var playerData = [
          {
            key:"panda",x:600,y:500
          },
          {
            key:"snake",x:200,y:500
          },
          {
            key:"parrot",x:400,y:500
          },
          
        
        
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
          player.body.setSize(45,100,45,45);
          player.body.collideWorldBounds = true;
          
          //audio
          player.customSound = this.game.add.audio(element.key);
          
          
          
          player.events.onInputDown.add(this.playSound,this);
          player.events.onInputUp.add(this.reverse,this);
          
          
          
          
          
          
          
          
          
          
          
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
        
        
        //create text
        var style = {font:"bold 30px Arial",fill:"#ffffff",align:"center"};
      this.textAppear=this.game.add.text(this.game.width/2,this.game.world.centerY,null,style);
      this.textAppear.anchor.setTo(0.5);
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
      
      // Shake for 300ms with an intensity of 0.02
      // this.game.camera.shake(0.01, 300);
      
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
       this.game.state.start("level2");
      },this);
       
      }
      
     
  },
  
  dragPlayer:function(player){
    //var tween = this.game.add.tween(player).to({alpha:1},1000);
    // var tween = this.game.add.tween(player.scale).to({x:0.3,y:0.3},300);
    // tween.start();
    
    player.input.enableDrag()
    
    
    
  },
  playSound:function(sprite){
    console.log("PLAY SOUND" + sprite.customParams);
    //var tween = this.game.add.tween(sprite).to({alpha:0.5},1000);
    var tween = this.game.add.tween(sprite.scale).to({x:0.6,y:0.6},300);
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
  // showText:function(text){
  //   if(!this.textAppear){
  //     var style = {font:"bold 30px Arial",fill:"#D0171B",align:"center"};
  //     this.textAppear=this.game.add.text(this.game.width/2,this.game.world.centerY,"this will have text",style);
  //     this.textAppear.anchor.setTo(0.5);
  //   }
  //   this.textAppear.setText(text);
  //   this.textAppear.visible=true;
  // }
  
  showText:function(text){
    
      // var style = {font:"bold 30px Arial",fill:"#D0171B",align:"center"};
      // this.textAppear=this.game.add.text(this.game.width/2,this.game.world.centerY,text,style);
      // this.textAppear.anchor.setTo(0.5);
      this.textAppear.text=text;
    
  },
  // render:function(){
    
  //   this.playerGroup.forEach(function(element){
  //     this.game.debug.body(element); 
  //   },this);
    

  // }
  
 
 
};



