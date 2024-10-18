// Parâmetro padrão
function soma(n1:number=0, n2:number=0):number{
    return n1+n2;
};

console.log(soma());

// Parâmetro opcional
function novoUser(user:string, pass:string, nome?:string):void{
    let dados = {user, pass, nome};
    console.log(dados);
};

novoUser('jardson', '123', 'Jardson');
novoUser('alan', '123');