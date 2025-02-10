// Interfaces
// 
function printName(person: {name: string}): void {
    console.log(person.name);
}

let randomObj = {name: 'Jardson', age: 20};
// let randomObj2 = {age: 20};

printName(randomObj); // Pega apenas o name do randomObj
// printName(randomObj2); // Gera um erro de compilação, pois o name não está presente

interface Person {
    name: string;
}

// Interface Employee que herda os atributos passados na interface Person
interface Employee extends Person {
    salary: number;
}

// Objeto do tipo Person
let person: Person = {
    name: 'Alan'
}

// Objeto do tipo Employee
let employee: Employee = {
    name: 'Jardson Alan',
    salary: 2000
}

// Chamadas da função (printName)
printName(person);
printName(employee);

// Utilizando o tipo da interface em uma função
function printName2(person: Person): void {
    console.log(person.name);
}

// Maneiras de chamadas da função
printName2(person);
printName2(employee);
printName2(randomObj);
printName2({ name: 'Test' } as Person);

// Adicionando novo atributo dentro da interface Person, através de outra interface
interface Person {
    age?: number;
}

// Definição de atributo que só pode ser modificado no momento da criação do objeto
// Uma vez definido esse valor, não pode ser mais alterado
interface Manager extends Employee {
    readonly bonus: number;
}

// Objeto do tipo Manager
let manager: Manager = {
    name: 'Jardson Alan',
    salary: 2000,
    bonus: 5
}
manager.name = 'Alterado'; // Funciona, pois o atributo name não é do tipo readonly
// manager.bonus = 2; // Exibe um erro de compilação, pois o atributo bonus não pode ser mais alterado após a criação do objeto

printName2(manager);