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
  // Um array do tipo Address
  address: Address[] = [] // Atribuindo um valor default, ou seja, um array vazio
  active: boolean

  constructor(name: string, email: string, active: boolean = false) {
    this.name = name
    this.email = email
    this.active = active
  }

  getAddress(): Address[] {
    return this.address
  }

  setAddress(newAddress: Address): void {
    this.address.push(newAddress)
  }
}

const address1 = new Address('Rua X', '75702-050', 187)
const user1 = new User('User 01', 'user1@email.com')
console.log(user1)
user1.setAddress(address1)
user1.setAddress(address1)
user1.setAddress(address1)
console.log(user1)