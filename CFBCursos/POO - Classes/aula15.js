"use strict";
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
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
}
;
let computador1 = new Computador('Rapidão', 64, 10);
let computador2 = new Computador('Carão', 32, 5);
let computador3 = new Computador('Gamer', 128, 10);
computador1.info();
computador2.info();
computador3.info();
