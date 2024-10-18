"use strict";
function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}
;
console.log(soma());
function novoUser(user, pass, nome) {
    let dados = { user, pass, nome };
    console.log(dados);
}
;
novoUser('jardson', '123', 'Jardson');
novoUser('alan', '123');
