export class Address {
  // Quando os objetos são passados direto no construtor, elas não terão visibilidade por padrão
  constructor(
    public address: string,
    // readonly -> não permite mudar os valores, apenas fazer a leitura
    public readonly zipCode: string,
    public number?: number
  ) {}
}

const address1 = new Address('Rua X', '75702-050', 187)
console.log(address1.zipCode)