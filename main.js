var game = new Phaser.Game(800,630,Phaser.AUTO,"");
// Our 'global' variable
game.global = {
    score: 0
};

this.game.state.add("boot",bootState);
this.game.state.add("load",loadState);
this.game.state.add("game",gameState);
this.game.state.add("mainMenu",mainMenu);
this.game.state.add("level2",level2);
this.game.state.add("level3",level3);
this.game.state.add("level4",level4);
this.game.state.add("frogJumper",frogJumper);

this.game.state.start("boot");