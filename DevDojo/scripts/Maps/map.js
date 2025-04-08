"use strict";
// 1º Forma de criar um maps
let nameAge = new Map();
nameAge.set('Gon', 14);
nameAge.set('Killua', 14);
console.log(nameAge);
// 2º Forma de criar um maps
// Encadeamento de sets
let nameAge2 = new Map().set('Gon', 14).set('Killua', 14);
console.log(nameAge2);
// 3º Forma de criar um maps
let animeEpisodes = new Map([
    ['DBZ', 200], ['FullMetal', 64]
]);
console.log(animeEpisodes);
// Pegando um valor específico de uma determinada chave
console.log(animeEpisodes.get('DBZ'));
// Retorna (true), se a chave existir, e (false) se não existir
console.log(animeEpisodes.has('DBZ'));
// Deleta uma chave específica e o valor associado a ela
// console.log(animeEpisodes.delete('DBZ'))
// Interando sobre as chaves de um map
for (let key of animeEpisodes.keys()) {
    console.log(key);
}
// Interando sobre os valores
for (let value of animeEpisodes.values()) {
    console.log(value);
}
// Interando sobre as entradas
// Retorna em formato de array
for (let entry of animeEpisodes.entries()) {
    console.log(`${entry[0]} | ${entry[1]}`);
}
// Desestruturação com maps
for (let [key, value] of animeEpisodes.entries()) {
    console.log(`${key} | ${value}`);
}
// Serve para limpar o maps
animeEpisodes.clear();
// Serve para saber se existe algum valor dentro do maps
console.log(animeEpisodes.size);
//# sourceMappingURL=map.js.map