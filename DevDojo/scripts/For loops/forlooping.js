"use strict";
let array2 = ['DevDojo', 'Awesomeness'];
// Forma básica
for (let i = 0; i < array2.length; i++) {
    console.log(array2[i]);
}
/*
Não podemos utilizar no forEach:
- break
- continue
- return
*/
array2.forEach((name) => {
    console.log(name);
});
let person5 = { name: 'Jardson', lastname: 'Alan' };
// O (in) é utilizado para navegar dentro das propriedades de determinado objeto
for (let prop in person5) {
    console.log(prop);
}
// Se utilizarmos o (in) em um array, a função irá retorna o index
// O index desse array é uma string
for (let prop in array2) {
    console.log(prop);
    console.log(typeof prop);
}
// Se utilizarmos o (of) em um array, a função irá retorna os valores
for (let prop of array2) {
    console.log(prop);
}
//# sourceMappingURL=forlooping.js.map