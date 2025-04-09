@course
class Person5 {
    name: string
}

function course(target: any) {
    Object.defineProperty(target.prototype, 'course', {value: () => 'TypeScript Aprendendo Junto: DevDojo'})
}

let person6 = new Person5()
console.log(person6.course())

// Decorators passando parâmetros
@Course({
    course: 'DevDojo Tutorials'
})

class Teacher {
    name: string
}

function Course(config: any) {
    return (target: any) => {
        Object.defineProperty(target.prototype, 'course', {value: () => config.course})
    }
}

let teacher = new Teacher()
console.log(teacher.course())