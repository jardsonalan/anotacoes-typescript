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
        let deposito = this.saldo += valor;
        return deposito;
    }
    ;
    sacar(valor) {
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
}
;
let titular1 = new ContaPF('Jardson', 111);
let titular2 = new ContaPJ('Alan', 222333);
titular1.info();
titular2.info();
titular2.deposito(900);
console.log(titular2.verificarSaldo());
