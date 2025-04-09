"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Person5 = class Person5 {
    name;
};
Person5 = __decorate([
    course
], Person5);
function course(target) {
    Object.defineProperty(target.prototype, 'course', { value: () => 'TypeScript Aprendendo Junto: DevDojo' });
}
let person6 = new Person5();
console.log(person6.course());
// Decorators passando parâmetros
let Teacher = class Teacher {
    name;
};
Teacher = __decorate([
    Course({
        course: 'DevDojo Tutorials'
    })
], Teacher);
function Course(config) {
    return (target) => {
        Object.defineProperty(target.prototype, 'course', { value: () => config.course });
    };
}
let teacher = new Teacher();
console.log(teacher.course());
//# sourceMappingURL=decorators.js.map