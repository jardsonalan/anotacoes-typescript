// Agrupa a classe responsável por validação de e-mail
namespace Validation {
    export interface Validator {
        isValid(str: string): boolean
    }
}