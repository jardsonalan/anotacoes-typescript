"use strict";
// Function utilizando Generics
function reverseList(list) {
    let reversedList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
}
let names = ['Luffy', 'Zoro', 'Sanji'];
let numbers = [1, 2, 3, 4, 5];
let reversedNames = reverseList(names);
let reversedNumbers = reverseList(numbers);
console.log(reversedNames);
console.log(reversedNumbers);
// Arrow Function utilizando Generics
let reversedListArrow = (list) => {
    let reversedList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
};
console.log(reversedListArrow(names));
// Classes utilizando Generics
class Person3 {
    name;
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log(`name: ${this.name}`);
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
}
class Person3Repository {
    findById(id) {
        console.log(`Buscando ID: ${id}`);
        return new Person3('Nani');
    }
    save(entity) {
        return new Person3('Franky');
    }
}
let personRepository = new Person3Repository();
console.log(personRepository.findById(3));
console.log(personRepository.save(new Person3('Choppe')));
class Person3Repository2 {
    findById(numberId) {
        console.log(`Buscando ID: ${numberId.id}`);
        return new Person3('Nani');
    }
    save(entity) {
        return new Person3('Franky');
    }
}
let personRepository2 = new Person3Repository2();
console.log(personRepository2.findById({ id: 3 }));
//# sourceMappingURL=generics.js.map