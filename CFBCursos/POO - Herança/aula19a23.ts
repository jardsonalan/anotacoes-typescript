// public: acessado de qualquer lugar
// private: acessado somente na sua própria classe
// protected: acessado somente na sua própria classe e nas classes filhas

class Conta {
    protected numero:number; // pode ser acessado pelas classes filhas
    protected titular:string;
    private saldo:number;
    // Método construtor
    constructor(titular:string){
        this.numero = this.gerarNumeroConta(); // recebe o número gerado pela função (gerarNumeroConta)
        this.titular = titular;
        this.saldo = 0;
    };

    private gerarNumeroConta():number{
        let gerar = Math.floor(Math.random()*100000)+1;
        return gerar;
    }; // gera um número aleatório

    protected info():void{
        console.log(`Titular: ${this.titular}`);
        console.log(`Numéro: ${this.numero}`);
    };

    public verificarSaldo():number{
        return this.saldo;
    };

    protected depositar(valor:number):void{
        if (valor < 0) {
            console.log(`Valor inválido`);
            return
        } else {
            this.saldo += valor;
        }
    };

    protected sacar(valor:number):void{
        if (valor < 0) {
            console.log(`Valor inválido`);
            return
        }
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log(`Saldo insuficiente.`);
        }
    };
};

// Classe Filha (Conta Pessoa Física)
class ContaPF extends Conta {
    private cpf:number;
    constructor(titular:string, cpf:number){
        super(titular); // sempre se refere a classe pai
        this.cpf = cpf;
    };

    info():void{
        console.log(`Tipo da Conta: Pessoa Física`);
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log(`Saldo: R$${this.verificarSaldo()}`);
        console.log('-------------------------------');
    };

    public deposito(valor: number):void {
        if (valor > 1000) {
            console.log('Valor de depósito muito grande para este tipo de conta.');
        } else {
            super.depositar(valor);
        }
    };

    public saque(valor:number):void{
        if (valor > 1000) {
            console.log('Valor de saque muito grande para este tipo de conta.');
        } else {
            super.sacar(valor);
        }
    };
};

// Classe Filha (Conta Pessoa Jurídica)
class ContaPJ extends Conta {
    private cnpj:number;
    constructor(titular:string, cnpj:number){
        super(titular);
        this.cnpj = cnpj;
    };

    info():void{
        console.log(`Tipo da Conta: Pessoa Jurídica`);
        super.info();
        console.log(`CNPJ: ${this.cnpj}`);
        console.log(`Saldo: R$${this.verificarSaldo()}`);
        console.log('-------------------------------');
    };

    public deposito(valor: number):void {
        if (valor > 10000) {
            console.log('Valor de depósito muito grande para este tipo de conta.');
        } else {
            super.depositar(valor);
        }
    };

    public saque(valor:number):void{
        if (valor > 10000) {
            console.log('Valor de saque muito grande para este tipo de conta.');
        } else {
            super.sacar(valor);
        }
    };
};

// Objeto da classe
let titular1 = new ContaPF('Jardson', 111);
let titular2 = new ContaPJ('Alan', 222333);

// Chamada da função (deposito)
titular1.deposito(500);
titular2.deposito(1000);

// Chamada da função (saque)
titular1.saque(100);
titular2.saque(200);

// Chamada da função (info)
titular1.info();
titular2.info();