let key3 = 'localStorageKey'

// Adicionando valores no Local Storage
localStorage.setItem(key3, 'Trying local storage')

// Pegando o valor das chaves no Local Storage
console.log(localStorage.getItem(key3))

// Pegando o nome da variável
for (let i = 0; i < localStorage.length; i++) {
    let element = localStorage.key(i)
    console.log(element)
}

// Pegando o valor da variável armazenado no Local Storage
for (let i = 0; i < localStorage.length; i++) {
    let element = localStorage.getItem(<string>localStorage.key(i))
    console.log(element)
}

// Limpando uma chave específica do Local Storage
localStorage.removeItem(key3)
console.log(localStorage.getItem(key3))

// Limpando todo o Local Storage
localStorage.clear()
console.log('-------------')
for (let i = 0; i < localStorage.length; i++) {
    let element = localStorage.getItem(<string>localStorage.key(i))
    console.log(element)
}