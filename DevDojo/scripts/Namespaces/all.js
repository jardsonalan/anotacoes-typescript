// Agrupa a classe responsável por validação de e-mail
var Validation;
(function (Validation) {
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/;
    // Exportando a classe
    var EmailValidator = /** @class */ (function () {
        function EmailValidator() {
        }
        EmailValidator.prototype.isValid = function (str) {
            return emailRegex.test(str);
        };
        return EmailValidator;
    }());
    Validation.EmailValidator = EmailValidator;
})(Validation || (Validation = {}));
// Importando a classe
/// <reference path="Validation.ts"/>
/// <reference path="EmailValidator.ts"/>
var EmailValidator = Validation.EmailValidator;
var emailExample = ['lalala@', 'lalala@lalala', 'lalala@email.com'];
emailExample.forEach(function (email) {
    console.log("".concat(email, " ").concat(new EmailValidator().isValid(email)));
});
