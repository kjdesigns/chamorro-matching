// addEnemy:function(){
//         //Get an enemy from the group
//         var enemy = this.enemies.getFirstDead();
//         if(!enemy){
//             return;
//         }
        
      
        
//       enemy.reset(this.game.world.width,200);
//       var scaleX = this.game.rnd.integerInRange(0.2,1.5);
//       var scaleY = this.game.rnd.integerInRange(0.2,1);
//       enemy.scale.setTo(scaleX,scaleY);
       
       
       
//       //init the enemy
//       var randSpeed = this.game.rnd.integerInRange(-300,-500);
//       enemy.anchor.setTo(0,1);
//       enemy.body.velocity.x=randSpeed;
//       enemy.body.gravity.y=800;
//       enemy.animations.add("eat",[0,1],5,true);
//       enemy.animations.play("eat");
       
        
       
//       //Kill the enemy when out of the screen
//       enemy.checkWorldBounds = true;
//       enemy.outOfBoundsKill = true;
       
       
//     },





   //enemy spawn timer
    // this.game.time.events.loop(this.game.rnd.integerInRange(800,1500), this.addEnemy, this);
















var timeLeft = 10;
var frogJumper={
    //Add sprites and groups
    
    
    create:function(){
        
        //scrolling background
        this.bg = this.game.add.tileSprite(0,0,this.game.width,this.game.height,"cloud");
        this.bg.autoScroll(-70,0);
        
        
        this.ground = this.game.add.tileSprite(0,this.game.world.height-100,this.game.world.width,100,"ground");
        this.game.physics.arcade.enable(this.ground);
        this.ground.body.immovable = true;
        this.ground.autoScroll(-300, 0);
        
        //Add the player
        this.player= this.game.add.sprite(150,0,"frog");
        this.game.physics.arcade.enable(this.player);
        this.player.scale.setTo(-1,1);
        this.player.anchor.setTo(0.5,1);
        this.player.body.gravity.y=800;
        this.player.body.setSize(18,60,-30,0);
        this.player.animations.add("run",[0,1,2,3],5,true);
        this.player.animations.add("jump",[0,1,2,3],10,true);
        
        
        this.player.animations.play("run");
        
     
        
        
        
        //labels on the screen
        this.scoreLabel=this.game.add.text(20,20,"time: 10",{font:"18px Arial",fill:"#111934"});
        this.scoreLabel.alpha = 0;
        this.game.add.tween(this.scoreLabel).to({alpha:1},1000).start();
        
        
        //Enemy
        this.enemies = this.game.add.group();
        this.enemies.enableBody = true;
        this.enemies.createMultiple(10,"enemy");
        
     
        
        //Add sounds
        this.jumpSound=this.game.add.audio("jump");
        this.hitSound=this.game.add.audio("hit");;
        
        //Init variables
        this.game.global.score=0;
        //this.nextEnemy=this.game.time.now+500;
        this.nextEnemy=0;
        
       this.game.time.events.loop(1000,this.increaseScore,this);
        
      
        
},

    
    update:function(){
        //parallax old school
        //this.ground.tilePosition.x -= 1.5;
        
        
        
        //handle collision
        this.game.physics.arcade.collide(this.player,this.ground);
        this.game.physics.arcade.collide(this.enemies,this.ground);
        this.game.physics.arcade.overlap(this.player,this.enemies,this.playerHit,null,this);
        
           //handle player movement
        this.movePlayer();
        
        //if the player is out of the world,game over
        if(!this.player.inWorld){
             timeLeft=90;
            this.game.global.score=0;
            this.game.state.start("mainMenu",true,false);
           
        }
     
        
        //Create new enemies faster and faster
        //At first one every 1.5 second and finally one every 800ms
        if(this.nextEnemy<this.game.time.now && timeLeft>0){
            var start = 1500,end=800,score=400;
            var delay = Math.max(start-(start-end)*this.game.global.score/score,end);
            this.addEnemy();
            this.nextEnemy=this.game.time.now+delay;
        }
        
        //start next level after the time left is == 0
        if(timeLeft==0){
            //add a congradulation state
             this.game.state.start("game",true,false);
        }
        
        
    },
    
    addEnemy:function(){
        //Get an enemy from the group
        var enemy = this.enemies.getFirstDead();
        if(!enemy){
            return;
        }
        
      
        
       enemy.reset(this.game.world.width,200);
      var scaleX = this.game.rnd.integerInRange(0.2,1.5);
      var scaleY = this.game.rnd.integerInRange(0.2,1);
      enemy.scale.setTo(scaleX,scaleY);
       
       
       
       //init the enemy
       var randSpeed = this.game.rnd.integerInRange(-300,-400);
       enemy.anchor.setTo(0,1);
       enemy.body.velocity.x=randSpeed;
       enemy.body.gravity.y=800;
       enemy.animations.add("eat",[0,1],5,true);
       enemy.body.setSize(38,60,5,0);
       enemy.animations.play("eat");
       
        
       
       //Kill the enemy when out of the screen
       enemy.checkWorldBounds = true;
       enemy.outOfBoundsKill = true;
       
       
    },
    movePlayer:function(){
        if(this.player.angle<25){
            this.player.angle += 1;
        }
        // else{
        //     this.player.angle=0;
        // }
        
        if(this.player.body.touching.down && this.game.input.activePointer.isUp){
            this.player.angle=0;
        }
         
        //jump the player
        if(this.game.input.activePointer.isDown && this.player.body.touching.down){
            this.player.body.velocity.y=-500;
            this.jumpSound.play();
            this.timeJump=0;
            
            
           
            this.game.add.tween(this.player).to({angle: -25}, 100).start(); 
            
            
            
           
        }
        else if(this.input.activePointer.isDown && this.timeJump<10){
            this.timeJump+=1;
            this.player.body.velocity.y=-500;
        }   
        
        else if(this.input.activePointer.isUp){
            this.timeJump=10;
        }
        
        
    },
    
    playerHit:function(player,enemy){
        //kill the enemy with sound
        enemy.kill();
        this.hitSound.play();
        game.add.tween(this.player).to({x:this.player.x-65},100).start();
    },
    increaseScore:function(){
        game.global.score+=1;
        timeLeft--;
        this.scoreLabel.text="time left: " +timeLeft;
    },
    
   render:function(){
    this.enemies.forEach(function(element){
      this.game.debug.body(element);


    },this);
    
    this.game.debug.body(this.player);
    
 }
    
    
    
    
}