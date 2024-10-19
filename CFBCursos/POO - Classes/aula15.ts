// POO - Classes
class Computador {
    nome?:string;
    ram?:number;
    cpu?:number;
    ligado?:boolean;
};

// Objetos da Classe
let computador1 = new Computador();
let computador2 = new Computador();
let computador3 = new Computador();

// Atribuições ao parâmetro (nome)
computador1.nome = 'Rapidão';
computador2.nome = 'Carão';
computador3.nome = 'Gamer';

// Obtendo o valor do parâmetro (nome)
console.log(computador1.nome);
console.log(computador2.nome);
console.log(computador3.nome);