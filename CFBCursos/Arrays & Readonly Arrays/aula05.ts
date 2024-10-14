// Definir o tipo do Array

// 1° Forma
// let numeros:number[] = [20, 30, 40];

// 2° Forma
// let numeros:Array<number|string>=[20, 30, 40, 'Jardson'];

// 3° Forma
// let numeros:(number|string)[]=[20, 30, 40, 'Jardson'];

let numeros:number[]=[20, 30, 40];

numeros.push(50); // Adiciona o valor no final do Array
numeros.unshift(10); // Adiciona o valor no início do Array

numeros.pop(); // Remove o último elemento do Array
numeros.shift(); // Remove o primeiro elemento do Array

console.log(numeros);

// Readonly Array - Apenas leitura
let numerosRO:ReadonlyArray<number>=[100, 200, 300];

console.log(numerosRO);