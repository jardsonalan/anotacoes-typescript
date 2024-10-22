// Interface
interface curso{
    titulo:string;
    descricao:string;
    numeroAulas:number;
    maxAlunos?:number;
};

// Criar o objeto
let curso1:curso;
let curso2:curso;

// Adicionando os valores dos parâmetros
curso1={
    titulo: 'TypeScript',
    descricao:'Curso de TypeScript',
    numeroAulas: 100,
    maxAlunos: 50
};
curso2={
    titulo: 'JavaScript',
    descricao:'Curso de JavaScript',
    numeroAulas: 200,
    maxAlunos: 80
};

console.log(curso1);
console.log(curso2);