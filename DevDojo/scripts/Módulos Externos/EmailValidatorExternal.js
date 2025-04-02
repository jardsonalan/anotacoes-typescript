"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidatorExternal = void 0;
let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/;
// Exportando a classe
class EmailValidatorExternal {
    isValid(str) {
        return emailRegex.test(str);
    }
}
exports.EmailValidatorExternal = EmailValidatorExternal;
//# sourceMappingURL=EmailValidatorExternal.js.map