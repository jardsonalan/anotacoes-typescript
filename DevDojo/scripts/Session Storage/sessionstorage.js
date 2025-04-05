"use strict";
let key = 'key1';
let key2 = 'key2';
console.log(sessionStorage.getItem(key));
console.log(sessionStorage.getItem(key2));
// Adicionando valores na Session Storage
sessionStorage.setItem(key, 'Jardson');
sessionStorage.setItem(key2, 'DevDojo');
// Pegando o valor das chaves na sessão
console.log(sessionStorage.getItem(key));
console.log(sessionStorage.getItem(key2));
// Pegando o nome da variável
for (let i = 0; i < sessionStorage.length; i++) {
    let element = sessionStorage.key(i);
    console.log(element);
}
// Pegando o valor da variável armazenado no Session Storage
for (let i = 0; i < sessionStorage.length; i++) {
    let element = sessionStorage.getItem(sessionStorage.key(i));
    console.log(element);
}
// Limpando uma chave específica do Session Storage
sessionStorage.removeItem(key);
console.log(sessionStorage.getItem(key));
// Limpando todo o Session Storage
sessionStorage.clear();
console.log('-------------');
for (let i = 0; i < sessionStorage.length; i++) {
    let element = sessionStorage.getItem(sessionStorage.key(i));
    console.log(element);
}
//# sourceMappingURL=sessionstorage.js.map