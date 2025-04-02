"use strict";
// Agrupa a classe responsável por validação de e-mail
var Validation;
(function (Validation) {
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/;
    // Exportando a classe
    class EmailValidator {
        isValid(str) {
            return emailRegex.test(str);
        }
    }
    Validation.EmailValidator = EmailValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=EmailValidator.js.map