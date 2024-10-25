// Namespace
namespace Veiculos {

    enum Cores{
        'Preto',
        'Branco',
        'Vermelho',
        'Amarelo',
        'Azul',
        'Prata'
    };
    // Utiliza o export para instânciar a classe fora do namespace
    export abstract class Carro {
        private nome:string;
        private motor:Motores.Motor;
        private cor:String;

        constructor(nome:string, motor:Motores.Motor, cor:Cores){
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        };

        // Método para ligar o motor
        public ligar(){
            this.motor.liga = true;
        };

        // Método para desligar o motor
        public desligar(){
            this.motor.liga = false;
        };

        // Método para retornar a cor do Carro
        public get minhaCor(){
            return this.cor;
        };

        // Método para retornar o nome do Carro
        public get meuNome(){
            return this.nome;
        };

        // Método para retornar se o Carro está ligado ou desligado
        public get estouLigado(){
            return (this.motor.liga?'Sim':'Não');
        };

        // Método para retornar a potência do Carro
        public get minhaPotencia(){
            return this.motor.potenciaMotor;
        };
    };

    export class CarroEsportivo extends Carro {
        constructor(nome:string, cor:Cores){
            super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), cor);
        };
    };

    export class CarroPopular extends Carro {
        constructor(nome:string, cor:Cores){
            super(nome, new Motores.Motor(3, 100), cor);
        };
    };

};

namespace Motores {

    export class Turbo {
        private potencia:number;

        constructor(potencia:number){
            this.potencia = potencia;
        };

        // Método para retornar o valor da potência
        public get pot(){
            return this.potencia;
        };
    };
    // Utiliza o export para instânciar a classe fora do namespace
    export class Motor {
        private ligado:boolean;
        private cilindros:number;
        private potencia:number;

        constructor(cilindros:number, potencia:number, turbo?:Turbo){
            this.potencia = potencia + (turbo ? turbo.pot : 0);
            this.ligado = false;
            this.cilindros = cilindros;
        };

        // Método para ligar o motor
        public set liga(ligado:boolean){
            this.ligado = ligado;
        };

        // Método para retornar se o motor está ligado ou desligado
        public get liga(){
            return this.ligado;
        };

        // Método para obter a potência do motor
        public get potenciaMotor(){
            return this.potencia;
        };
    };

};

const carro1 = new Veiculos.CarroEsportivo('Ferrari', 5);
const carro2 = new Veiculos.CarroPopular('Civic', 0);

carro1.ligar();
carro2.ligar();

console.log(`Nome: ${carro1.meuNome} | Cor: ${carro1.minhaCor} | Potência: ${carro1.minhaPotencia} | Ligado: ${carro1.estouLigado}`);
console.log('---------------------------------------------');
console.log(`Nome: ${carro2.meuNome} | Cor: ${carro2.minhaCor} | Potência: ${carro2.minhaPotencia} | Ligado: ${carro2.estouLigado}`);