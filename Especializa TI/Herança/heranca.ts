export class Address {
  constructor(
    public address: string,
    public zipCode: string,
    public number?: number
  ) {}
}

export class User {
  protected name: string
  private email: string
  private address: Address[] = []
  private active: boolean

  constructor(name: string, email: string, active: boolean = false) {
    this.name = name
    this.email = email
    this.active = active
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

  public getNumber(): number {
    return 123
  }
}

class Manager extends User {
  public getName(): string {
    return `Manager: ${this.name}`
  }

  public getNumber(): number {
    return 321
  }
}

class Admin extends User {
  public getName(): string {
    return `Admin: ${this.name} $`
  }

  public getNumber(): number {
    return 55342
  }
}

const manager1 = new Manager('Manager 1', 'manager1@email.com')
console.log(manager1.getName())
console.log(manager1.getNumber())

const admin1 = new Admin('Admin 1', 'admin1@email.com')
console.log(admin1.getName())
console.log(admin1.getNumber())