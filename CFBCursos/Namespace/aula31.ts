// Namespace
namespace Veiculos {
    // Utiliza o export para instânciar a classe fora do namespace
    export class Carro {
        public nome:string;
        public motor:Motores.Motor;

        constructor(nome:string){
            this.nome = nome;
            this.motor = new Motores.Motor(100);
        };
    };

};

namespace Motores {

    class Turbo {
        potencia:number;

        constructor(potencia:number){
            this.potencia = potencia;
        };
    };
    // Utiliza o export para instânciar a classe fora do namespace
    export class Motor {
        public potencia:number;

        constructor(potencia:number){
            this.potencia = potencia;
        };
    };

};

const carro1 = new Veiculos.Carro('Ferrari');
console.log(carro1.nome);
console.log(carro1.motor.potencia);