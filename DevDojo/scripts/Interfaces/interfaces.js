"use strict";
// Interfaces
// 
function printName(person) {
    console.log(person.name);
}
let randomObj = { name: 'Jardson', age: 20 };
// let randomObj2 = {age: 20};
printName(randomObj); // Pega apenas o name do randomObj
// Objeto do tipo Person
let person = {
    name: 'Alan'
};
// Objeto do tipo Employee
let employee = {
    name: 'Jardson Alan',
    salary: 2000
};
// Chamadas da função (printName)
printName(person);
printName(employee);
// Utilizando o tipo da interface em uma função
function printName2(person) {
    console.log(person.name);
}
// Maneiras de chamadas da função
printName2(person);
printName2(employee);
printName2(randomObj);
printName2({ name: 'Test' });
// Objeto do tipo Manager
let manager = {
    name: 'Jardson Alan',
    salary: 2000,
    bonus: 5
};
manager.name = 'Alterado'; // Funciona, pois o atributo name não é do tipo readonly
// manager.bonus = 2; // Exibe um erro de compilação, pois o atributo bonus não pode ser mais alterado após a criação do objeto
printName2(manager);
//# sourceMappingURL=interfaces.js.map