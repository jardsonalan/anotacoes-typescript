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
}
;
let computador1 = new Computador('Rapidão', 64, 10);
let computador2 = new Computador('Carão', 32, 5);
let computador3 = new Computador('Gamer', 128, 10);
console.log(computador1.nome, computador1.ram, computador1.cpu, computador1.ligado);
console.log(computador2.nome, computador2.ram, computador2.cpu, computador2.ligado);
console.log(computador3.nome, computador3.ram, computador3.cpu, computador3.ligado);
