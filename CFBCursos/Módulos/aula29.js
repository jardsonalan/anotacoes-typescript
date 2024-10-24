"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Classes_1 = require("./Classes");
const p1 = new Classes_1.Pessoa('Jardson', 1.79);
const obj1 = new Classes_1.Objeto('Garrafa');
console.log(`Nome: ${p1.nome} | Altura: ${p1.altura}`);
console.log(obj1.nome);
