import { Pessoa, Objeto } from "./Classes";

const p1 = new Pessoa('Jardson', 1.79);
const obj1 = new Objeto('Garrafa');

console.log(`Nome: ${p1.nome} | Altura: ${p1.altura}`);
console.log(obj1.nome);