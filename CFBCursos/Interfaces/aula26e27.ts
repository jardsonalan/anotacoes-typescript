// Interface
interface curso{
    titulo:string;
    descricao:string;
    // Função
    iniciarCurso?(teste:string):void;
};

// Herança da interface (curso)
interface cursoProgramacao extends curso {
    numeroAulas:number;
    maxAlunos?:number;
};

interface cursoArtes extends curso {
    numeroAulas:number;
    maxAlunos?:number;
};

// Criar o objeto
let curso1:cursoProgramacao;
let curso2:cursoArtes;

// Adicionando os valores dos parâmetros
curso1={
    titulo: 'TypeScript',
    descricao:'Curso de TypeScript',
    numeroAulas: 100,
    maxAlunos: 50
};
curso2={
    titulo: 'Desenho',
    descricao:'Curso de Desenho',
    numeroAulas: 200,
    maxAlunos: 80
};

console.log(curso1);
console.log(curso2);