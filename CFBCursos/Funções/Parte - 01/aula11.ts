// Função sem retorno
function logar(user:string, password:string):void{
    console.log(`User: ${user}`);
    console.log(`Password: ${password}`);
}; // void: quando a função não retorna nada

logar('Jardson', '123');

// Função com retorno
function somar2(n1: number, n2:number):number{
    let r = n1+n2;
    return r;
};

let n_res:number = somar2(2, 2);
let s_res:string = somar2(2, 2).toString(); // Conversão de number para string

console.log(n_res);
console.log(s_res);