export class Address {
  // Quando os objetos são passados direto no construtor, elas não terão visibilidade por padrão
  constructor(
    public address: string,
    public zipCode: string,
    public number?: number
  ) {}
}

export class User {
  name: string
  email: string
  address: Address
  active: boolean

  constructor(name: string, email: string, address: Address, active: boolean = false) {
    this.name = name
    this.email = email
    this.active = active
    this.address = address
  }
}

const address1 = new Address('Rua X', '75702-050', 18)
const user1 = new User('User 01', 'user1@email.com', address1)
console.log(user1)