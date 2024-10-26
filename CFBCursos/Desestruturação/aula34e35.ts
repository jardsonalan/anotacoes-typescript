// Desestruturação
// Desestruturando Array de Numbers
let av:number[] = [10, 20, 30, 40];
let [aa, bb, cc, dd]=av;
// aa = 10
// bb = 20
// cc = 30
// dd = 40

// Desestruturando Array de Strings
let [color1, color2, color3, color4] = ['Verde', 'Amarelo', 'Azul', 'Branco'];
// color1 = Verde
// color2 = Amarelo
// color3 = Azul
// color4 = Branco

// Desestruturando Objecto
const obj = {
    cor1: 'Verde',
    cor2: 'Amarelo',
    cor3: 'Azul',
    cor4: 'Branco'
};
let {cor1, cor2, cor3, cor4} = obj;
// cor1 = Verde
// cor2 = Amarelo
// cor3 = Azul
// cor4 = Branco

// Valor padrão
let [num1=0, num2=0, num3=0] = [10, 20];
// num1 = 10
// num2 = 20
// num3 = 0

// Spread
let [nu1=0, nu2=0, ...nu3] = [10, 20, 30, 40, 50, 60, 70, 80, 90]; // (nu3) recebe os valores de 30 até 90
// nu1 = 10
// nu2 = 20
// nu3 = [30, 40, 50, 60, 70, 80, 90]

// Desestruturação de uma função
const fcores = () =>{
    return ['Verde', 'Amarelo', 'Azul', 'Branco'];
};
let [co1, co2, co3, co4] = fcores();
// co1 = Verde
// co2 = Amarelo
// co3 = Azul
// co4 = Branco

// Desestruturando com split
let texto:string = 'Curso de TypeScript';
let [...t] = texto.split(' ');
// t = ['Curso', 'de', 'TypeScript']
let [p1, p2, p3] = texto.split(' ');
// p1 = Curso
// p2 = de
// p3 = TypeScript