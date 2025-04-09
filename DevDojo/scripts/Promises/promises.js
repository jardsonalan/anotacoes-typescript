"use strict";
// let promise = new Promise((resolve, reject) => {
//     // Abrindo um arquivo
//     let isOpened: boolean = false
//     if (isOpened) {
//         resolve('Opened')
//     }
//     reject('Not Opened')
// })
// // then - sempre é o caso de sucesso
// promise.then((fromResolve) => {
//     console.log(fromResolve)
// })
// // catch - caso de erro
// .catch((fromReject) => {
//     console.log(fromReject)
// })
function openFile() {
    return new Promise((resolve, reject) => {
        // Abrindo um arquivo
        let isOpened = true;
        if (isOpened) {
            resolve('Opened');
        }
        reject('Not Opened');
    });
}
function readFile() {
    return new Promise((resolve, reject) => {
        // Lendo um arquivo
        let isOpened = true;
        if (isOpened) {
            resolve('Read');
        }
        reject('Not Read');
    });
}
function deleteFile() {
    return new Promise((resolve, reject) => {
        // Deletando um arquivo
        let isOpened = true;
        if (isOpened) {
            resolve('Deleted');
        }
        reject('Not Deleted');
    });
}
// Forma correta de fazer o encadeamento de promises
openFile()
    .then(() => readFile()
    .then(() => deleteFile()
    .then(() => console.log('Everything OK'))
    .catch((fromRejected) => console.log(fromRejected)))
    .catch((fromRejected) => console.log(fromRejected)))
    .catch((fromRejected) => console.log(fromRejected));
// Caso precise executar todas as promises ao mesmo tempo, quando não dependem uma da outra
Promise.all([openFile(), readFile(), deleteFile()]).then().catch();
// Utilizamos quando têm várias funções, porém, só queremos o resultado de uma delas
// Executa todas ao mesmo tempo, porém, quando tivermos o resultado de uma, irá ter o retorno no then ou no catch
Promise.race([openFile(), readFile(), deleteFile()]).then().catch();
//# sourceMappingURL=promises.js.map