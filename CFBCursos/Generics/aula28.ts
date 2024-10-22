// Generics: pode operar com qualquer tipo de valor
function f_teste<T, U>(v:T, r:U):U {
    return r; // retorna o tipo (u)
};

console.log(f_teste<number, string>(3, '3'));
console.log(f_teste<string, number>('3', 3));
console.log(f_teste<boolean, boolean>(true, false));

// Classes com Generics
class C_teste<T> {
    public valor:T;

    constructor(valor:T){
        this.valor = valor;
    };
};

const ct1 = new C_teste<string>('100');
const ct2 = new C_teste<number>(100);

console.log(ct1.valor);
console.log(ct2.valor);