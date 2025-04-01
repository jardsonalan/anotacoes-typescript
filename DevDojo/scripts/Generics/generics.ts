// Function utilizando Generics
function reverseList<T>(list:Array<T>): Array<T> {
    let reversedList: T[] = []
    for (let i = list.length-1; i>=0; i--) {
        reversedList.push(list[i])
    }

    return reversedList
}
let names = ['Luffy', 'Zoro', 'Sanji']
let numbers = [1, 2, 3, 4, 5]
let reversedNames = reverseList<string>(names)
let reversedNumbers = reverseList<number>(numbers)
console.log(reversedNames)
console.log(reversedNumbers)

// Arrow Function utilizando Generics
let reversedListArrow = <T>(list:Array<T>): Array<T> => {
    let reversedList: T[] = []
    for (let i = list.length-1; i>=0; i--) {
        reversedList.push(list[i])
    }

    return reversedList
}
console.log(reversedListArrow(names))

// Classes utilizando Generics
class Person3 {
    protected name: string

    constructor (name: string) {
        this.name = name
    }

    print(): void {
        console.log(`name: ${this.name}`)
    }

    get getName(): string {
        return this.name
    }

    set setName(name: string) {
        this.name = name
    }
}

interface Repository <T, ID> {
    findById(id: ID): T
    save(entity: T): T
}

class Person3Repository implements Repository<Person3, number> {
    findById(id: number): Person3 {
        console.log(`Buscando ID: ${id}`)
        return new Person3('Nani')
    }

    save(entity: Person3): Person3 {
        return new Person3('Franky')
    }
}

let personRepository = new Person3Repository()
console.log(personRepository.findById(3))
console.log(personRepository.save(new Person3('Choppe')))

interface NumberID {
    id: number
}

interface Repository2<T, ID extends NumberID> {
    findById(id: ID): T
    save(entity: T): T
}

class Person3Repository2 implements Repository2<Person3, NumberID> {
    findById(numberId: NumberID): Person3 {
        console.log(`Buscando ID: ${numberId.id}`)
        return new Person3('Nani')
    }

    save(entity: Person3): Person3 {
        return new Person3('Franky')
    }
}

let personRepository2 = new Person3Repository2()
console.log(personRepository2.findById({id: 3}))