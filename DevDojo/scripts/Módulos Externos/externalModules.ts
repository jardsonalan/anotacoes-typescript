import { EmailValidatorExternal } from "./EmailValidatorExternal"

let emailExample2 = ['lalala@', 'lalala@lalala', 'lalala@email.com']

emailExample2.forEach(email => {
    console.log(`${email} ${new EmailValidatorExternal().isValid(email)}`)
})

/*
Comando para executar o arquivo:
node DevDojo/scripts/Módulos\ Externos/externalModules.js
*/