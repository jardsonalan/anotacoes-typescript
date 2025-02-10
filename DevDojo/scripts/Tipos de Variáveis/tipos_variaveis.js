"use strict";
// Tipos de Declarações de Variáveis:
// var - É tratado como uma variável global
// let - Poderá ser utilizada apenas dentro do local que está declarada
// const - Não permite alterar os dados iniciais
// Tipos de Variáveis:
// string - Tipo string (texto)
// number - Tipo númerico (int, float)
// boolean - Tipo booleano (true, false)
// void - Tipo primitivo
// any - Serve para quando não sabemos o tipo do retorno
let numero = 10;
let booleano = true;
// Tipos de declaração de strings ('', "", ``):
let tipoString1 = 'A beautiful message';
let tipoString2 = "A beautiful message";
let tipoString3 = `${tipoString2} to willian`;
console.log(tipoString3);
function func() { }
// Comparação de tipos:
if (booleano !== null) { }
if (booleano !== undefined) { }
// Explicação da declaração de variável (let)
if (booleano) {
    let i;
    for (i = 0; i < 3; i++) {
        console.log(i);
    }
}
// console.log(i); // Não pode ser chamada fora do if
// Array:
let listaNumerica = [1, 2, 3];
let listaNumerica2 = [1, 2, 3];
// Tupla: 
// - Tem um tamanho pré-definido
// - Permite trabalhar diretamente com o tipo de dado
let tupla;
tupla = ['jardson', 19];
console.log(tupla[0].toLowerCase());
// Enum - Enumerações:
// - Começa do valor 0, caso nenhum elemento seja especificado com um número diferente de 0
var Dia;
(function (Dia) {
    Dia[Dia["SEGUNDA"] = 1] = "SEGUNDA";
    Dia[Dia["TERCA"] = 2] = "TERCA";
    Dia[Dia["QUARTA"] = 3] = "QUARTA";
})(Dia || (Dia = {}));
;
let dia = Dia.SEGUNDA;
console.log(`Dia: ${dia} | ${Dia.TERCA} | ${Dia.QUARTA}`);
console.log(`Dia: ${Dia[1]} | ${Dia[2]} | ${Dia[3]}`);
// Função:
// - Em parâmetros não obrigatórios, coloca uma (?) antes dos (:)
function adicao(valor1, valor2, valor3) {
    if (valor3 !== undefined) {
        return valor1 + valor2 + valor3;
    }
    return valor1 + valor2;
}
console.log(`Adição: ${adicao(1, 2)}`);
function concatenacao(valor1, valor2, valor3) {
    if (valor3 !== undefined) {
        return valor1 + valor2 + valor3;
    }
    return valor1 + valor2;
}
console.log(`Concatenação: ${concatenacao('Quem é o ', 'cara')}`);
// Casting:
// - Diz ao compilador que sabemos oque estamos fazendo
// - Processo de substituir um tipo
let variavel1 = 'sasa';
let stringLength = variavel1.length;
let stringUpperCase = variavel1.toUpperCase(); // Caso o valor de variavel1 seja um número, não será possível converter para string
console.log(stringLength);
console.log(stringUpperCase);
// Rest Parameter:
// - Último argumento de uma função
function adicao2(valor1, ...valor2) {
    let soma = 0;
    for (let i = 0; i < valor2.length; i++) {
        soma += valor2[i];
    }
    console.log(valor1 + soma);
}
adicao2('A soma é: ', 1, 2, 4, 5);
//# sourceMappingURL=tipos_variaveis.js.map