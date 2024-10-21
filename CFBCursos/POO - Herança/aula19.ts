class Conta {
    protected numero:number; // pode ser acessado pelas classes filhas
    protected titular:string;
    // Método construtor
    constructor(titular:string){
        this.numero = this.gerarNumeroConta(); // recebe o número gerado pela função (gerarNumeroConta)
        this.titular = titular;
    };

    private gerarNumeroConta():number{
        let gerar = Math.floor(Math.random()*100000)+1;
        return gerar;
    }; // gera um número aleatório

    protected info():void{
        console.log(`Titular: ${this.titular}`);
        console.log(`Numéro: ${this.numero}`);
        console.log('-------------------------------');
    };
};

// Classe Filha (Conta Pessoa Física)
class ContaPF extends Conta {
    private cpf:number;
    constructor(titular:string, cpf:number){
        super(titular); // sempre se refere a classe pai
        this.cpf = cpf;
        console.log(`Conta PF criada - Nome: ${titular}`);
    };
};

// Classe Filha (Conta Pessoa Jurídica)
class ContaPJ extends Conta {
    private cnpj:number;
    constructor(titular:string, cnpj:number){
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada - Nome: ${titular}`);
    };
};

// Objeto da classe
let titular1 = new ContaPF('Jardson', 111);
let titular2 = new ContaPJ('Alan', 222333);