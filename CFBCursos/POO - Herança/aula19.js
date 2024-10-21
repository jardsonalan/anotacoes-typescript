"use strict";
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
    ;
}
;
class ContaPF extends Conta {
}
;
class ContaPJ extends Conta {
}
;
let titular1 = new ContaPF(123, 'Jardson');
let titular2 = new ContaPJ(456, 'Alan');
console.log(titular1.titular);
console.log(titular2.titular);
