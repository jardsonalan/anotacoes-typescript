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
}
;
class ContaPF extends Conta {
    cpf;
    constructor(titular, cpf) {
        super(titular);
        this.cpf = cpf;
    }
    ;
}
;
class ContaPJ extends Conta {
    cnpj;
    constructor(titular, cnpj) {
        super(titular);
        this.cnpj = cnpj;
    }
    ;
}
;
let titular1 = new ContaPF('Jardson', 111);
let titular2 = new ContaPJ('Alan', 222333);
console.log(titular1.titular, titular1.numero);
console.log(titular2.titular, titular2.numero);
