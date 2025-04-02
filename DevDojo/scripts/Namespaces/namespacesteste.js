"use strict";
// Importando a classe
/// <reference path="Validation.ts"/>
/// <reference path="EmailValidator.ts"/>
var EmailValidator = Validation.EmailValidator;
let emailExample = ['lalala@', 'lalala@lalala', 'lalala@email.com'];
emailExample.forEach(email => {
    console.log(`${email} ${new EmailValidator().isValid(email)}`);
});
//# sourceMappingURL=namespacesteste.js.map