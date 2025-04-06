"use strict";
function doSomethingWithString(input) {
    if (input === undefined || input === '') {
        // Lançando uma exceção customizada
        throw new StringNotValidError(`The string ${input} is not valid`);
    }
    return input;
}
// Implementando uma exceção customizada
class ApplicationError {
    message;
    name = 'ApplicationError';
    constructor(message) {
        this.message = message;
        if (typeof console !== undefined) {
            console.log(`Error: ${message}`);
        }
    }
    toString() {
        return `${this.name} : ${this.message}`;
    }
}
class StringNotValidError extends ApplicationError {
}
// Capturando exceções
try {
    let input = doSomethingWithString('');
}
catch (error) {
    // Tratamento específico
    if (error instanceof ApplicationError) {
        console.log('No action inside if');
        throw error; // Lançando a exceção novamente
    }
    console.log(`No action`);
}
finally { // Sempre será executado
    console.log('Always executed.');
}
//# sourceMappingURL=exception.js.map