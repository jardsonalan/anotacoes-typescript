"use strict";
function soma(...n) {
    let s = 0;
    for (let el of n) {
        s += el;
    }
    ;
    return s;
}
;
console.log(soma(10, 20, 30, 40, 100));
