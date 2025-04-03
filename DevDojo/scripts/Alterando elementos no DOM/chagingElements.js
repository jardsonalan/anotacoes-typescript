"use strict";
let divMain = document.getElementById('main');
// Adiciona uma tag com informações dentro
// divMain.innerHTML = '<span>DevDojo is freaking awesome</span>'
// Adiciona um texto
// divMain.textContent = 'DevDojo is freaking awesome'
let newDiv = document.createElement('div');
newDiv.textContent = 'DevDojo is freaking awesome';
// Adiciona uma nova tag na última posição dos elementos filhos
// divMain.appendChild(newDiv)
// Adiciona uma nova tag na primeira posição dos elementos filhos
divMain.insertBefore(newDiv, divMain.firstChild);
//# sourceMappingURL=chagingElements.js.map