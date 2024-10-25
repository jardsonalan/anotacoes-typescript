// Namespace
namespace Veiculos {
    // Utiliza o export para instânciar a classe fora do namespace
    export abstract class Carro {
        public nome:string;
        public motor:Motores.Motor;

        constructor(nome:string){
            this.nome = nome;
            this.motor = new Motores.Motor(3, 100);
        };
    };

};

namespace Motores {

    class Turbo {
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