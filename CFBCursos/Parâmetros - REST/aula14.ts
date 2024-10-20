// Parâmetros REST com SPREAD

function csoma(...n:number[]):number {
    let s:number = 0;
    for (let el of n) {
        s+=el;
    };
    // n.map((el)=>{
    //     s += el;
    // });
    return s;
};

console.log(csoma(10, 20, 30, 40, 100));