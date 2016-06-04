var game = new Phaser.Game(800,630,Phaser.AUTO,"");
this.game.state.add("game",gameState);
this.game.state.add("level2",level2);
this.game.state.add("level3",level3);
this.game.state.start("game");