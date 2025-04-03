"use strict";
function doingSomething(callback) {
    callback.call(this, 'Jardson');
    callback.apply(this, ['Alan']); // Também pode receber um array
    callback('Jardson Alan');
}
function execute(name) {
    console.log(name);
}
doingSomething(execute);
function calculator(num1, num2, type) {
    switch (type) {
        case 'add':
            return num1 + num2;
        case 'multiply':
            return num1 * num2;
        default:
            return 0;
    }
}
function sum(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function doingSomethingCrazy(num1, num2) {
    console.log(`Numbers: ${num1} and ${num2}`);
}
// Aceita funções do tipo void
function calculator2(num1, num2, callback) {
    if (typeof callback === 'function') {
        return callback(num1, num2);
    }
    return 0;
}
function calculator3(num1, num2, callback) {
    return callback(num1, num2);
}
// Maneiras de utilizar o callback
// console.log(calculator(1, 2, 'multiply'))
// console.log(calculator(4, 2, 'add'))
console.log(calculator2(5, 5, sum));
console.log(calculator2(5, 5, multiply));
calculator2(5, 5, doingSomethingCrazy);
// calculator3(5, 5, doingSomethingCrazy)
console.log(calculator3(10, 20, (num1, num2) => {
    return num1 - num2;
}));
//# sourceMappingURL=callbacktest.js.map