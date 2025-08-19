class User {
  name: string
  email: string
  active: boolean

  constructor(name: string, email: string, active: boolean = false) {
    this.name = name
    this.email = email
    this.active = active
  }
}

const carlos = new User('Carlos', 'carlos@email.com')
console.log(carlos)

const user2 = new User('User2', 'user2@email.com', true)
console.log(user2)