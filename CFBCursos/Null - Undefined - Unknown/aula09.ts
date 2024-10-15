// NULL - Tipo Nulo
let tnome:(string|null);
tnome = null;
console.log(tnome);

// UNDEFINED - Tipo Indefinido
let tnome2:any;
console.log(tnome2);

// UNKNOWN - Tipo Desconhecido - Só pode ser atribuido em tipos unknown ou any
let tnome3:unknown=tnome;
// let tnum:number=tnome3; // ERRO: Porque tnome3 é do tipo unknown e tnum é do tipo number
console.log(tnome3);