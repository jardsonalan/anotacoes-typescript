const Coisas:string[]=['Corda', 'Pilha', 'Lampada', 'Chave'];

class Pessoa {
    public nome:string;
    public altura:number;

    constructor(nome:string, altura:number){
        this.nome = nome;
        this.altura = altura;
    };
};

class Objeto {
    public nome:string;

    constructor(nome:string){
        this.nome = nome;
    };
};

// Elemento padrão
export default Pessoa;

// Exportação
export {Coisas, Objeto};