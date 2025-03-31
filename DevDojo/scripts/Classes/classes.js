"use strict";
class Person2 {
    // Atributo
    name;
    // Método construtor
    constructor(name) {
        this.name = name;
    }
    // Método
    print() {
        console.log(`name: ${this.name}`);
    }
    // Método get
    get getName() {
        return this.name;
    }
    // Método set
    set setName(name) {
        this.name = name;
    }
}
// Herança
class Employee2 extends Person2 {
    // Modificadores de acesso
    salary;
    constructor(name, salary) {
        // super() - serve para acessar e chamar atributos ou métodos da classe pai
        super(name);
        this.salary = salary;
    }
    print() {
        super.print();
        console.log(`salary: ${this.salary}`);
    }
    // Método get
    get getSalary() {
        return this.salary;
    }
    // Método set
    set setSalary(value) {
        this.salary += value;
    }
}
let person1 = new Person2('Jardson');
let employee1 = new Employee2('Alan', 1000);
person1.print();
employee1.print();
console.log(employee1.getName);
console.log(employee1.getSalary);
// let person2 = {name: 'string'} as Person
let person2 = {};
// Polimorfismo
let person3 = new Employee2('Lucy', 2000);
person3.print();
//# sourceMappingURL=classes.js.map