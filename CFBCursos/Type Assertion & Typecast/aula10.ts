let nvalor:number;
let svalor:string;
let uvalor:unknown;

uvalor=10;
nvalor=10;
// svalor='20';

// Typecast
svalor = nvalor.toString(); // Converte um number para string
// nvalor=Number.parseInt(svalor); // Converte uma string para number (parseInt | parseFloat)

// nvalor=<number><unknown>svalor; // Converte a string para number - Conversão intencional
// nvalor=<number>uvalor; // Converte um unknown para number
// svalor=<string>uvalor; // Converte um unknown para string

// console.log(typeof(uvalor));
// console.log(uvalor);

// console.log(typeof(nvalor));
// console.log(nvalor);

console.log(typeof(svalor));
console.log(svalor);