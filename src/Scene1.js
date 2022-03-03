class Scene1 extends Phaser.Scene{
constructor(){
    super("Menu")
}
create(){
    const button = new Button(50, 50, 'PlayGame', this, () => this.scene.start("PlayGame"));
}
}

