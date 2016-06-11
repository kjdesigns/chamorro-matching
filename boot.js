var bootState={
    
  preload:function(){
      //load the image
      this.game.load.image("progressBar","assets/progressBar.png");
  },
  
  create:function(){
  
    
      //Set some game settings
      this.game.stage.backgroundColor = "#111934";
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.renderer.renderSession.roundPixels = true;
      
      
       
          //Set the type of scaling to 'show all'
          this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
          
          //Set the min and max width/height of the game
          this.game.scale.setMinMax(this.game.width/2,this.game.height/2,this.game.width*2,this.game.height*2);
          
          //Center the game on the screen
          this.game.scale.pageAlignHorizontally = true;
          this.game.scale.pageAlignVertically = true;
          
          //Add a blue color to the page to hide potential white borders
         // document.body.style.backgroundColor = "#111934";
        
          
          
      
      //Start the load state
      this.game.state.start("load");
      
  }
  
  
    
};