// POO - Classes
class Computador {
    // Modificadores de Acesso
    private id:number;
    public nome:string; // propriedade pública: pode ser acessada de qualquer lugar
    private ram:number;
    private cpu:number; // propriedade privada: não pode ser acessada fora da Classe e só pode ser alterada dentro da própria Classe
    protected ligado:boolean; // propriedade protegida: não pode ser acessada fora da Classe, mas pode ser alterada por Classes Filhas da Classe (Computador)

    // Método construtor
    constructor(nome:string, ram:number, cpu:number){
        this.nome = nome; // this - se refere a Classe
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        this.id = 0;
    };

    // Métodos de classes
    info():void{
        // Obtendo os valores dos parâmetros
        console.log(`Nome: ${this.nome}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`CPU: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado?'Sim':'Não'}`);
        console.log('------------------------');
    };

    ligar():boolean{
        return this.ligado = true;
    };

    desligar():boolean{
        return this.ligado = false;
    };

    upgradeRam(qtde:number):void{
        if (qtde >= 0 && qtde <= 1000) {
            this.ram = qtde;
        } else {
            console.log(`Quantidade: ${qtde} para RAM do computador ${this.nome}, não é permitida.`);
        }
    };

    upgradeCpu(qtde:number):void{
        if (qtde >= 0 && qtde <= 1000) {
            this.cpu = qtde;
        } else {
            console.log(`Quantidade: ${qtde} para CPU do computador ${this.nome}, não é permitida.`);
        }
    };
};

// Objetos da Classe
let computador1 = new Computador('Rapidão', 64, 10);
let computador2 = new Computador('Carão', 32, 5);
let computador3 = new Computador('Gamer', 128, 10);

// Chamada do método (ligar)
computador1.ligar();

// Chamada do método (upgradeRam)
computador1.upgradeRam(128);

// Chamada do método (upgradeCpu)
computador1.upgradeCpu(20);

// Chamada do método (info)
computador1.info();
computador2.info();
computador3.info();

// Atribuições ao parâmetro (nome)
// computador1.nome = 'Rapidão';
// computador2.nome = 'Carão';
// computador3.nome = 'Gamer';

// Obtendo os valores dos parâmetros
// console.log(computador1.nome, computador1.ram, computador1.cpu, computador1.ligado);
// console.log(computador2.nome, computador2.ram, computador2.cpu, computador2.ligado);
// console.log(computador3.nome, computador3.ram, computador3.cpu, computador3.ligado);