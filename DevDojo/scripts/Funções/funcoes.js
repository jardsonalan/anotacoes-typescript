"use strict";
// Criando uma função
function funcPrint(valor) {
    console.log(valor);
}
funcPrint('Hello');
// Valor padrão de um paramêtro em uma função
function printOrNot(flag = false) {
    let str = flag ? 'flag: true' : 'flag: false';
    console.log(str);
}
// Caso nenhum valor seja passado, retorna (flag: false)
printOrNot();
// Passando o valor, retorna (flag: true)
printOrNot(true);
// Função anônima
// Só podem ser instanciadas após a criação da função
const sumAnonymous = function (n1, n2) {
    console.log(`sum: ${n1 + n2}`);
};
sumAnonymous(1, 2);
// Arrow Functions
const sumArrow1 = (n1, n2) => n1 + n2;
const sumArrow2 = (n1, n2) => {
    return n1 + n2;
};
// Retorna um objeto utilizando Arrow Function
const objectArrow = (name, surname) => ({
    name: name,
    surname: surname
});
console.log(sumArrow1(3, 3));
console.log(sumArrow2(4, 4));
console.log(objectArrow('Jardson', 'Alan'));
// This
// Sempre estará referenciando alguma coisa
// O this em uma function, pega o nível onde ele está sendo utilizado
// O this em uma Arrow Funtion, pega o nível, que está fora, de onde ele está sendo utilizado
function testThis() {
    return this;
}
;
console.log(testThis());
console.log(this);
const objExample = {
    name: 'Jiraya',
    lastName: 'Ninja',
    fullName: function () {
        return this;
    },
    fullName2: () => {
        return this;
    },
    thisExample: this
};
console.log(objExample.fullName());
console.log(objExample.fullName2());
console.log(objExample.thisExample);
let lottery = {
    names: ['Gon', 'Killua', 'Leorio'],
    test: 'lalala',
    createLotteryPicker: function () {
        console.log('first level this: ' + this.names, '' + this.test);
        return () => {
            console.log('second level this: ' + this);
            let pickedPersonNumber = Math.floor(Math.random() * 3);
            return { name: this.names[pickedPersonNumber] };
        };
    }
};
let personPicker = lottery.createLotteryPicker();
let pickedPerson = personPicker();
console.log(pickedPerson);
//# sourceMappingURL=funcoes.js.map