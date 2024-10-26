// Desestruturação
// Desestruturando Array de Numbers
// let av:number[] = [10, 20, 30, 40];
// let [aa, bb, cc, dd]=av;

// Desestruturando Array de Strings
// let [aa, bb, cc, dd] = ['Verde', 'Amarelo', 'Azul', 'Branco'];

// Desestruturando Objecto
const obj = {
    cor1: 'Verde',
    cor2: 'Amarelo',
    cor3: 'Azul',
    cor4: 'Branco'
};
let {cor1, cor2, cor3, cor4} = obj;

console.log(cor1);
console.log(cor2);
console.log(cor3);
console.log(cor4);