let person4 = {name: 'Jardson', lastname: 'Alan'}
let name1 = person4.name
let lastname1 = person4.lastname
console.log(name1)
console.log(lastname1)

// Destruction com objetos
let {name: name2, lastname: lastname2} = person4
console.log(name2)
console.log(lastname2)

// Destruction com arrays
let array = ['DevDojo', 'Awesomeness']
let [a, b] = array
console.log(a)
console.log(b)

class Person4 {
    constructor (public name: string) {}
}

function example (person: Person4): void {
    console.log(person.name)
}
example(new Person4('Jardson'))

// Destruction passando para função os argumentos
function example2 ({name}): void {
    console.log(name)
}
example2(new Person4('Jardson'))
// example2({name: 'Alan'})