
var config = {
    
    type: Phaser.AUTO,
    width: 800,
    length: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);

var persona;

function preload()  {    
   
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/peixe_listra.png');
    this.load.image('bolha', 'assets/bokha.png');
}

function create()   { 
    
    this.add.image(400, 390, 'mar');
    this.add.image(650, 600, 'logo').setScale(0.4);
    persona = this.add.image(400, 300, 'peixe').setScale(1.3);
    persona.setFlip(true, false);
    this.add.image(400, 390, 'bolha');
}

function update()   {  
    
    persona.x = this.input.x;
    persona.y = this.input.y;

}