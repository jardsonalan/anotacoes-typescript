// Arrow Function
const teste = (txt?:string):void => {
    console.log(txt);
};

teste('Curso de TypeScript');
teste('YouTube');
teste();

// Percorrendo Array
const fsoma = (n:number[]):number => {
    let s:number = 0;
    n.map((el:number)=>{
        s += el;
    });
    return s;
};

let fnumeros:number[]=[10, 20, 30, 40, 50];
console.log(fsoma(fnumeros));