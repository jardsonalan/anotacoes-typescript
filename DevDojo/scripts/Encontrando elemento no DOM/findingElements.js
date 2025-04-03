"use strict";
let element = document.getElementById('btn2'); // Tipo retornado: HTMLElement
console.log(element);
let element2 = document.querySelector('#btn1'); // Tipo retornado: Element
console.log(element2);
let element3 = document.querySelector('#main'); // Tipo retornado: HTMLDivElement
console.log(element3);
let elements = document.getElementsByTagName('div'); // Tipo retornado: NodeListOf<HTMLDivElement>
console.log(elements);
console.log(elements[3]);
let elements2 = document.querySelectorAll('.test'); // Tipo retornado: NodeList
console.log(elements2);
console.log(elements2[0]); // Tipo retornado: Node
console.log(elements2[0]); // Tipo retornado: Node
let elements3 = document.getElementsByName('button'); // Tipo retornado: NodeList<HTMLElement>
console.log(elements3);
//# sourceMappingURL=findingElements.js.map