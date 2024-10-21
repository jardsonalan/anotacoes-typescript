class Conta {
    public numero:number;
    public titular:string;
    // Método construtor
    constructor(titular:string){
        this.numero = this.gerarNumeroConta(); // recebe o número gerado pela função (gerarNumeroConta)
        this.titular = titular;
    };

    gerarNumeroConta():number{
        let gerar = Math.floor(Math.random()*100000)+1;
        return gerar;
    }; // gera um número aleatório
};

// Classe Filha (Conta Pessoa Física)
class ContaPF extends Conta {
    private cpf:number;
    constructor(titular:string, cpf:number){
        super(titular); // sempre se refere a classe pai
        this.cpf = cpf;
    };
};

// Classe Filha (Conta Pessoa Jurídica)
class ContaPJ extends Conta {
    private cnpj:number;
    constructor(titular:string, cnpj:number){
        super(titular);
        this.cnpj = cnpj;
    };
};

// Objeto da classe
let titular1 = new ContaPF('Jardson', 111);
let titular2 = new ContaPJ('Alan', 222333);

console.log(titular1.titular, titular1.numero);
console.log(titular2.titular, titular2.numero);