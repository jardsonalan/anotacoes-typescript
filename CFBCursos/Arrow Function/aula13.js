"use strict";
const teste = (txt) => {
    console.log(txt);
};
teste('Curso de TypeScript');
teste('YouTube');
teste();
const fsoma = (n) => {
    let s = 0;
    n.map((el) => {
        s += el;
    });
    return s;
};
let fnumeros = [10, 20, 30, 40, 50];
console.log(fsoma(fnumeros));
