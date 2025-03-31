class Person2 {
    // Atributo
    protected name: string

    // Método construtor
    constructor (name: string) {
        this.name = name
    }

    // Método
    print(): void {
        console.log(`name: ${this.name}`)
    }

    // Método get
    get getName(): string {
        return this.name
    }

    // Método set
    set setName(name: string) {
        this.name = name
    }
}

// Herança
class Employee2 extends Person2 {
    // Modificadores de acesso
    private salary: number

    constructor (name: string, salary: number) {
        // super() - serve para acessar e chamar atributos ou métodos da classe pai
        super(name)
        this.salary = salary
    }

    print():void {
        super.print()
        console.log(`salary: ${this.salary}`)
    }

    // Método get
    get getSalary(): number {
        return this.salary
    }

    // Método set
    set setSalary(value: number) {
        this.salary += value
    }
}

let person1 = new Person2('Jardson')
let employee1 = new Employee2('Alan', 1000)

person1.print()
employee1.print()
console.log(employee1.getName)
console.log(employee1.getSalary)

// let person2 = {name: 'string'} as Person
let person2 = <Person2>{}

// Polimorfismo
let person3: Person2 = new Employee2('Lucy', 2000)
person3.print()