"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailValidatorExternal_1 = require("./EmailValidatorExternal");
let emailExample2 = ['lalala@', 'lalala@lalala', 'lalala@email.com'];
emailExample2.forEach(email => {
    console.log(`${email} ${new EmailValidatorExternal_1.EmailValidatorExternal().isValid(email)}`);
});
/*
Comando para executar o arquivo:
node DevDojo/scripts/Módulos\ Externos/externalModules.js
*/ 
//# sourceMappingURL=externalModules.js.map