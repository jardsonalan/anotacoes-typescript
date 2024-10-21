"use strict";
class Conta {
    numero;
    titular;
    saldo;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldo = 0;
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
    }
    ;
    verificarSaldo() {
        return this.saldo;
    }
    ;
    depositar(valor) {
        if (valor < 0) {
            console.log(`Valor inválido`);
            return;
        }
        else {
            this.saldo += valor;
        }
    }
    ;
    sacar(valor) {
        if (valor < 0) {
            console.log(`Valor inválido`);
            return;
        }
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log(`Saldo insuficiente.`);
        }
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
    info() {
        console.log(`Tipo da Conta: Pessoa Física`);
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log(`Saldo: R$${this.verificarSaldo()}`);
        console.log('-------------------------------');
    }
    ;
    deposito(valor) {
        if (valor > 1000) {
            console.log('Valor de depósito muito grande para este tipo de conta.');
        }
        else {
            super.depositar(valor);
        }
    }
    ;
    saque(valor) {
        if (valor > 1000) {
            console.log('Valor de saque muito grande para este tipo de conta.');
        }
        else {
            super.sacar(valor);
        }
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
    info() {
        console.log(`Tipo da Conta: Pessoa Jurídica`);
        super.info();
        console.log(`CNPJ: ${this.cnpj}`);
        console.log(`Saldo: R$${this.verificarSaldo()}`);
        console.log('-------------------------------');
    }
    ;
    deposito(valor) {
        if (valor > 10000) {
            console.log('Valor de depósito muito grande para este tipo de conta.');
        }
        else {
            super.depositar(valor);
        }
    }
    ;
    saque(valor) {
        if (valor > 10000) {
            console.log('Valor de saque muito grande para este tipo de conta.');
        }
        else {
            super.sacar(valor);
        }
    }
    ;
}
;
let titular1 = new ContaPF('Jardson', 111);
let titular2 = new ContaPJ('Alan', 222333);
titular1.deposito(500);
titular2.deposito(1000);
titular1.saque(100);
titular2.saque(200);
titular1.info();
titular2.info();
