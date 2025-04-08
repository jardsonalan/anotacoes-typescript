// 1º Forma de criar um set
let nameSet = new Set<string>()

// Adicionando valores dentro de um set
// Não permite adicionar elementos duplicados
nameSet.add('Jardson')
nameSet.add('Alan')

console.log(nameSet)

// 2º Forma de criar um set
let nameSet2 = new Set<string>().add('Jardson').add('Alan')
console.log(nameSet2)

// 3º Forma de criar um set
let nameSet3 = new Set<string>(['Brenon', 'Sandy', 'DevDojo'])
console.log(nameSet3)

// Verifica se existe determinado elemento dentro de um set
console.log(nameSet3.has('Brenon'))

// Deleta um elemento específico dentro de um set
console.log(nameSet3.delete('Sandy'))

// Retorna o tamanho de um set
console.log(nameSet3.size)

// Serve para limpar o set
nameSet.clear()

// Interando sobre os elementos de um set
for (let aux of nameSet2) {
    console.log(aux)
}

nameSet2.forEach((value) => {
    console.log(value)
})