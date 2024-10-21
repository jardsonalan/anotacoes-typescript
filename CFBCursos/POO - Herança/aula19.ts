class Conta {
    private numero:number;
    public titular:string;
    // Método construtor
    constructor(numero:number, titular:string){
        this.numero = numero;
        this.titular = titular;
    };
};

class ContaPF extends Conta {
    
};

class ContaPJ extends Conta {
    
};

// Objeto da classe
let titular1 = new ContaPF(123, 'Jardson');
let titular2 = new ContaPJ(456, 'Alan');

console.log(titular1.titular);
console.log(titular2.titular);