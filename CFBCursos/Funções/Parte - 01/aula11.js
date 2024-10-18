"use strict";
function logar(user, password) {
    console.log(`User: ${user}`);
    console.log(`Password: ${password}`);
}
;
logar('Jardson', '123');
function somar2(n1, n2) {
    let r = n1 + n2;
    return r;
}
;
let n_res = somar2(2, 2);
let s_res = somar2(2, 2).toString();
console.log(n_res);
console.log(s_res);
