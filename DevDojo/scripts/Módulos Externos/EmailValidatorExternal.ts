import { ValidatorExternal } from "./ValidatorExternal";

let emailRegex: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/;

// Exportando a classe
export class EmailValidatorExternal implements ValidatorExternal {
    isValid(str: string): boolean {
        return emailRegex.test(str)
    }
}
