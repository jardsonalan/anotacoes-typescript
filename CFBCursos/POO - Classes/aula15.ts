// POO - Classes
class Computador {
    nome:string;
    ram:number;
    cpu:number;
    ligado:boolean;

    // Método construtor
    constructor(nome:string, ram:number, cpu:number){
        this.nome = nome; // this - se refere a Classe
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
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
};

// Objetos da Classe
let computador1 = new Computador('Rapidão', 64, 10);
let computador2 = new Computador('Carão', 32, 5);
let computador3 = new Computador('Gamer', 128, 10);

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