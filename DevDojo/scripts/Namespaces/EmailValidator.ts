// Agrupa a classe responsável por validação de e-mail
namespace Validation {
    let emailRegex: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/;
    
    // Exportando a classe
    export class EmailValidator implements Validator {
        isValid(str: string): boolean {
            return emailRegex.test(str)
        }
    }
}