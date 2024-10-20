"use strict";
class Computador {
    id;
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        this.id = 0;
    }
    ;
    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`CPU: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado ? 'Sim' : 'Não'}`);
        console.log('------------------------');
    }
    ;
    ligar() {
        return this.ligado = true;
    }
    ;
    desligar() {
        return this.ligado = false;
    }
    ;
    upgradeRam(qtde) {
        if (qtde >= 0 && qtde <= 1000) {
            this.ram = qtde;
        }
        else {
            console.log(`Quantidade: ${qtde} para RAM do computador ${this.nome}, não é permitida.`);
        }
    }
    ;
    upgradeCpu(qtde) {
        if (qtde >= 0 && qtde <= 1000) {
            this.cpu = qtde;
        }
        else {
            console.log(`Quantidade: ${qtde} para CPU do computador ${this.nome}, não é permitida.`);
        }
    }
    ;
}
;
let computador1 = new Computador('Rapidão', 64, 10);
let computador2 = new Computador('Carão', 32, 5);
let computador3 = new Computador('Gamer', 128, 10);
computador1.ligar();
computador1.upgradeRam(128);
computador1.upgradeCpu(20);
computador1.info();
computador2.info();
computador3.info();
