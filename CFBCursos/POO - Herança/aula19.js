"use strict";
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    ;
    gerarNumeroConta() {
        let gerar = Math.floor(Math.random() * 100000) + 1;
        return gerar;
    }
    ;
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Numéro: ${this.numero}`);
        console.log('-------------------------------');
    }
    ;
}
;
class ContaPF extends Conta {
    cpf;
    constructor(titular, cpf) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF criada - Nome: ${titular}`);
    }
    ;
}
;
class ContaPJ extends Conta {
    cnpj;
    constructor(titular, cnpj) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada - Nome: ${titular}`);
    }
    ;
}
;
let titular1 = new ContaPF('Jardson', 111);
let titular2 = new ContaPJ('Alan', 222333);
