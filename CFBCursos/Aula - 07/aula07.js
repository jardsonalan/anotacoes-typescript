"use strict";
let dados = {
    nome: 'Jardson',
    idade: 19,
    status: 'Ativo',
    ola: () => { console.log('Oi'); },
    info: (p) => { console.log(p); }
};
dados.nome = 'Alan';
console.log(typeof (dados));
console.log(dados);
console.log(dados.nome);
dados.ola();
dados.info(dados.nome);
