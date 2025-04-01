interface Example1 {
    name: string;
}

class AnotherExample1 {
    name: string
    age: number
}

class AnotherExample2 {
    num: number
}

let exampleVar: Example1

// Aceita, porque apresenta argumentos semelhantes
exampleVar = new AnotherExample1()
// Retorna um erro, pois as estruturas são diferentes
// exampleVar = new AnotherExample2()

let exampleVar2 = {name: 'Brook', age: 20}
exampleVar = exampleVar2

function testExample1 (ex:Example1) {
    console.log(ex.name)
}

let exampleVar3 = {name: 'Brook', age: 20}
testExample1(exampleVar3)

let x1 = (a: number) => a
let x2 = (b: number, s: string) => 0
// let x2 = (b: number, s: string) => b+s

console.log(x1(10))
console.log(x2(10, ' something'))
// Compatibilidade aceita, porque o segundo argumento de x2 está sendo descartado e o primeiro argumento de x2 é compatível com o argumento de x1
x2 = x1
console.log(x2(20, ' something2'))

let items = [1, 2, 3]
items.forEach((item, index, array) => console.log(item))
items.forEach(item => console.log(item))