export class Address {
  constructor(
    public address: string,
    public zipCode: string,
    public number?: number
  ) {}
}

export class User {
  private name: string // public/protected/private
  private email: string
  private address: Address[] = []
  private active: boolean

  constructor(name: string, email: string, active: boolean = false) {
    this.name = name
    this.email = email
    this.active = active

    // this.validation() -> método que ficaria todas as validações
  }

  public getAddress(): Address[] {
    return this.address
  }

  public setAddress(newAddress: Address): void {
    this.address.push(newAddress)
  }

  public changeName(newName: string): void {
    if (newName.length < 3) throw new Error('Nome inválido.')
    
    this.name = newName
  }

  public getName(): string {
    return this.name
  }
}

const user1 = new User('User 1', 'user1@email.com')
console.log(user1.getName())
user1.changeName('newName')
console.log(user1.getName())