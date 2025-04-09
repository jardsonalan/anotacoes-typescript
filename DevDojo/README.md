# TypeScript - DevDojo
Anotações do curso de typescript do DevDojo.

## Instalação global
1. Verifique se você tem o node instalado em sua máquina:
    ```bash
    node --version
    ```
    Caso não tenha, procure a documentação oficial do node e faça a instalação.

2. Instale o typescript de forma global, executando o seguinte comando no terminal:
    ```bash
    npm install -g typescript
    ```

## Arquivo de configuração `ts-config`
Para criar o arquivo de configuração, execute o seguinte comando no terminal:
```bash
npx tsc --init
```

Dentro desse arquivo, podemos fazer várias alterações para informar como queremos utilizar o typescript.

## Compilação no modo `watch`
O watch é uma funcionalidade que permite monitorar alterações em arquivos de um projeto e recompilar o código automaticamente.

Execute o seguinte comando, dentro da pasta que se encontra o `ts.config`:
```bash
tsc -w
```

## Entendendo um pouco da linguagem
Este tópico irá apresentar alguns conceitos da linguagem TypeScript.
### Declarações de variáveis
---
| Tipos de declarações | Descrição |
| --- | --- |
| var | É tratado como variável global. |
| let | É utilizada, apenas, dentro do local que está declarada. |
| const | Não permite alterar os dados iniciais. |

### Tipos de variáveis
---
| Tipos | Valores recebidos | Exemplos |
| --- | --- | --- |
| String | `string` | const varStr: string |
| Number | `int`, `float` | const varNum: number |
| Boolean | `true`, `false` | const varBool: boolean |
| Void | `null`, `undefined` | const varVoid: void |
| Any | Recebe todos os valores. | const varAny: any |

### Funções
---
#### Declarando uma função:
Declaramos funções da seguinte maneira:
```ts
function nomeDaFuncao(): tipoDeRetorno {}
```
- tipoDeRetorno: `string`, `number`, `boolean`, `void`, entre outros.

**Observação:** O tipo `void` não precisa retorna nenhum valor, ao contrário dos outros tipos.

#### Paramêtros não obrigatórios:
Para criar um paramêtro não obrigatório, basta colocar uma **interrogação (?)**, antes dos dois pontos (:):
```ts
function nomeDaFuncao(parametro?: tipoDoParametro): tipoDeRetorno {}
```
- tipoDoParametro: `string`, `number`, `boolean`, `any`, entre outros.

#### Definindo valor padrão em um paramêtro:
Definimos um valor padrão em um paramêtro, colocando um **igual (=)** e em seguida, o **valor** que será utilizado, caso não seja passado nenhum valor na chamada da função:
```ts
function nomeDaFuncao(parametro: tipoDoParametro = valor): tipoDeRetorno {}
```

#### Função anônima:
São funções que não tem nome, colocamos elas diretamente em variáveis.
```ts
const nomeDaVariavel = function(parametro: tipoDoParametro): tipoDeRetorno {}
```

**Observação:** Ao contrário das funções normais, as funções anônimas só podem ser instanciadas, ou chamadas, após a criação da função.

#### Arrow Functions:
Assim como as funções anônimas, as arrow functions só podem ser instanciadas, ou chamadas, após a criação da função.
```ts
const nomeDaFuncao = (parametro: tipoDoParametro) => {}
```

- Retornando objetos com Arrow Functions:

    Caso deseje retornar um objeto utilizando Arrow Function, coloque as **chaves ({})** dentro de parênteses.

    **Exemplo:**
    ```ts
    const objectArrow = (name: string, surname: string) => ({
        name: name,
        surname: surname
    })
    ```

### Operadores de comparação
---
| Operadores | Significado |
| --- | --- |
| == | Igual |
| === | Igualdade restrita |
| != | Diferente |
| !== | Diferença restrita |
| > | Maior que |
| >= | Maior ou igual que |
| < | Menor que |
| <= | Menor ou igual que |

### Arrays
---
Podemos declarar arrays da seguinte maneira:
```ts
const nomeDoArray: tipoDoArray[] = []
```
Ou, utilizando generics:
```ts
const nomeDoArray: Array<tipoDoArray> = []
```
- tipoDoArray: `string`, `number`, `boolean`, entre outros.

### Tuplas
---
- Tem um tamanho pré-definido;
- Permite trabalhar diretamente com o tipo dos objetos.
```ts
const nomeDaTupla: [tiposDosObjetos]
```

- tiposDosObjetos: `string`, `number`, `boolean`, entre outros.

### Enum
---
- Permite trabalhar com os valores e posições dos elementos.

```ts
enum Dia{
    SEGUNDA=1, 
    TERCA,
    QUARTA
};

// Pega o valor que está em SEGUNDA // Retorno: 1
let dia: Dia = Dia.SEGUNDA;
```

**Observação:** Se um valor for atribuído a um elemento, como no elemento: **SEGUNDA**. Os próximos valores seguirão a sequência a partir dele.

Exemplo: SEGUNDA=1, TERCA=2, QUARTA=3...

Senão, a contagem irá começar a partir do 0.

### Casting
---
- Processo de substituição de tipos;
- Bastante utilizado em casos onde tipos incorretos são fornecidos por uma biblioteca.

```ts
let variavel1: any = 'sasa';

// Primeira forma
let stringLength: number = (<string> variavel1).length;

// Segunda forma
let stringLength: number = (variavel1 as string).length;
```

### Rest Parameter
---
- Deve ser o último argumento de uma função;
- Podemos passar vários valores, independente do tamanho;
- Colocamos **três pontos (...)**, antes do parâmetro, para definir ele como rest parameter.

```ts
function adicao2(valor1: string, ...valor2: number[]): void{
    let soma: number = 0;
    for (let i = 0; i < valor2.length; i++) {
        soma += valor2[i];
    }
    console.log(valor1+soma);
}

adicao2('A soma é: ', 1, 2, 4, 5);
```

### Interfaces
---
- A interface obriga a criar todos os atributos na criação do objeto.
#### Estrutura de uma interface:
```ts
interface nomeDaInterface {
    nomeDoAtributo: tipoDoAtributo;
}
```
- tipoDoAtributo: `string`, `number`, `boolean`, entre outros.

#### Extendendo uma interface:
- Para extender uma interface é obrigatório utilizar o `extends`.

```ts
interface Pessoa {
    nome: string;
}

// Interface Funcionario que herda os atributos passados na interface Pessoa
interface Funcionario extends Pessoa {
    salario: number;
}
```

#### Criando um objeto a partir de uma interface:
```ts
// Objeto do tipo Pessoa
let pessoa: Pessoa = {
    nome: 'Alan'
}

// Objeto do tipo Funcionario
let funcionario: Funcionario = {
    nome: 'Jardson Alan',
    salario: 2000
}
```

#### Adicionando novo atributo a uma interface:
- Para adicionar novos atributos em uma interface, basta apenas criá-la novamente com os novos atributos;
- Podemos utilizar **atributos opcionais** em uma interface, basta colocar uma **interrogação (?)**.

```ts
interface Pessoa {
    idade?: number;
}
```

#### Utilizando o tipo da interface em uma função:
```ts
function nomeDaFuncao(nomeDoParametro: nomeDaInterface): tipoDaFuncao {}
```
- tipoDaFuncao: `string`, `number`, `boolean`, `void` entre outros.

#### Definir um atributo que só pode ser modificado na criação do objeto:
- Uma vez definido esse valor, não pode ser mais alterado;
- Colocamos `readonly` antes do nome do atributo.
```ts
interface Gerente extends Funcionario {
    readonly bonus: number;
}
```

#### Observação:
- Se estivermos trabalhando com variáveis, onde os valores não podem ser alterados, utilizamos: `const`;
- Se estivermos trabalhando com atributos, interfaces ou classes, onde os valores não podem ser alterados, utilizamos: `readonly`.

### Classes
---
#### Declarando uma classe e atributos:
```ts
class Pessoa {
    nome: string
    constructor(nome: string) {
        this.nome = nome
    }
}
```

#### Criando métodos dentro de uma classe:
```ts
class Pessoa {
    ...
    print():void {}
}
```

**Observação:** Os três pontos (...), no "Criando métodos dentro de uma classe", indica apenas continuação da parte que está em "Declarando uma classe e atributos"

#### Herança:
- Assim como nas interfaces, utilizamos o `extends` para indicar que uma classe herda de outra.

```ts
class Funcionario extends Pessoa {
    constructor(nome: string) {
        super(nome)
    }
}
```

**Observação:** Utilizamos o **super()** para indicar que queremos acessar e chamar atributos ou métodos da classe pai.

#### Implementando interface em uma classe:
Para implementar uma interface em uma classe utilizamos **implements**:
```ts
class nomeDaClasse implements nomeDaInterface {}
```

#### Maneiras de instanciar classes:
```ts
// 1° Maneira:
let pessoa1 = new Pessoa('Jardson')

// 2° Maneira:
let pessoa2 = {nome: 'string'} as Pessoa

// 3° Maneira:
let pessoa3 = <Pessoa>{}
```

**Observação:** A terceira maneira é utilizada quando queremos apenas ter acesso aos atributos e métodos. Porém, utilize apenas quando for realmente necessário.

#### Polimorfismo:
```ts
let pessoa3: Pessoa = new Funcionario()
```

#### Modificadores de acesso:
| Tipos | Descrição |
| --- | --- |
| public | Pode ser acessado em qualquer lugar da aplicação. |
| protected | Só pode ser acessado pela classe pai ou filhas. |
| private | Só pode ser acessado dentro da própria classe. |

#### Métodos get e set:
| Métodos | Descrição |
| --- | --- |
| get | Serve para retornar o valor de um atributo. |
| set | Serve para modificar o valor de um atributo. |

### Generics
---
Utilizamos generics quando não sabemos o tipo que iremos receber dentro de uma função, mas ainda queremos trabalhar diretamente com o tipo seguro de dados.

Ou seja, o tipo que for definido na hora da chamada, será o tipo utilizado na execução.

Podemos utilizar generics em:
- Funções:
    - Utilizando **function**:

        ```ts
        function nomeDaFuncao<Generics>(parametro): tipoDeRetorno {}
        ```
    - Utilizando **Arrow Function**:

        ```ts
        let nomeDaFuncao = <Generics>(parametro): tipoDeRetorno => {}
        ```

- Interfaces:

    ```ts
    interface nomeDaInterface <Generics> {}
    ```

- Classes:

    ```ts
    class nomeDaClasse <Generics> {}
    ```

### Namespaces
---
- São módulos internos;
- São uma forma de encapsular o código e deixar o código mais organizado;
- Podemos colocar dentro de um namespace:
    - Variáveis;
    - Classes;
    - Funções;
    - Interfaces;
    - Entre outros...

#### Criando um namespace:
```ts
namespace nomeDoNamespace {
    let nomeDaVariavel: tipoDaVariavel = valor
    class nomeDaClasse {}
    function nomeDaFuncao(): tipoDeRetorno {}
    interface nomeDaInterface {}
}
```

#### Exportando classes ou variáveis:
Para exportar classes ou variáveis, basta colocar um **export** antes delas:
```ts
namespace nomeDoNamespace {
   export let nomeDaVariavel: tipoDaVariavel = valor
   export class nomeDaClasse {}
}
```

#### Importando classes ou variáveis:
Para importar a classe, ou variável, de outro arquivo, basta criar um **import** no arquivo que deseja importar:
```ts
import nomeQueDesejaUtilizarNoArquivo = nomeDoNamespace.nomeDaVariavelOuClasse
```

#### Colocando vários módulos em um único arquivo:
Esse comando serve para evitar que vários scripts sejam utilizados no arquivo HTML:

```bash
tsc --outFile local/nomeDoArquivoQueDesejaCriar local/arquivosQueDesejaColocar
```

### Módulos externos
---
O módulo externo é um pedaço reutilizável de código, que encapsula os detalhes da implementação e expõe como se fosse uma API pública.

Assim como os namespaces, os módulos externos podem ter tanto códigos, quanto declarações.

Eles existem para especificar e carregar dependências através de múltiplos arquivos externos.

**Observação:** Quando estamos utilizando módulos externos em um arquivo, ele irá se tornar módulo.

### Callback
---
É um estilo de programação funcional, aonde passamos uma função como um argumento de uma outra função.

**Exemplo:**
```ts
function nomeDaFuncao(parametro: tipoDoParametro, funcaoCallback: (argumento: tipoDoArgumento) => tipoDeRetornoDoCallback): tipoDeRetorno {
    // 1° Forma de chamar a função de callback:
    callback.call(this, valorArgumento)

    // 2° Forma de chamar a função de callback:
    callback.apply(this, valorArgumento)
    
    // 3° Forma de chamar a função de callback:
    callback(valorArgumento)
}
```

### Eventos
---
- Ações para colocar algumas animações em elementos no front-end;
- Eventos são divididos em duas partes:
    
    **Exemplo para explicar o Capturing e o Bubbling**
    ```html
    <div id="main">
        <h1>Who is your favorite character?</h1>
        <div id="parent">
            <div id="chield1">
                <button id="btn1">Jon Snow</button>
            </div>
            <div id="chield2">
                <button id="btn2">Tyrion Lannister</button>
            </div>
        </div>
    </div>
    ```
    **Observe a hierarquia:** main > parent > chield1 > ...

    - **Capturing:**
        
        O capturing acontece quando estamos descendo essa hierarquia, ou seja, começando de cima para baixo.

        ```ts
        let main = document.getElementById('main')

        main.addEventListener('click', ClickHandler.alertEventMain, true)
        ```
        O **true** indica para utilizar o capturing.

    - **Bubbling:**

        O bubbling acontece quando estamos subindo essa hierarquia, ou seja, começando de baixo para cima.

        ```ts
        let main = document.getElementById('main')

        main.addEventListener('click', ClickHandler.alertEventMain, false)
        ```
        O **false** indica para utilizar o bubbling.

### Encontrando elementos no DOM
---
| Tags | Descrição | Tipo de Retorno |
| --- | --- | --- |
| getElementById() | Pega um elemento específico através do seu ID(#). | HTMLElement |
| querySelector() | Pega um elemento específico através do seu ID(#) ou class(.). | Element ou HTMLDivElement |
| getElementsByTagName() | Pega um elemento específico através do nome da tag. | NodeListOf<HTMLDivElement> |
| querySelectorAll() | Pega mais de um elemento com base no ID(#) ou class(.). | NodeList |
| getElementsByName() | Pega um elemento específico através do seu name. | NodeList<HTMLElement> |

### Alterando elementos no DOM
---
| Tags | Descrição |
| --- | --- |
| innerHTML | Cria uma nova tag no HTML. |
| textContent | Adiciona um texto dentro da tag especificada. |
| appendChild() | Adiciona uma nova tag na última posição dos elementos filhos. |
| insertBefore() | Adiciona uma nova tag na primeira posição dos elementos filhos. |

### Requisições GET e POST - Ajax
---
#### Status Code:
| Código de status | Descrição |
| --- | --- |
| 0 | Quando não for inicilizado (Uninitialized). |
| 1 | Feito set up, mas não enviado. |
| 2 | Foi enviada (Sent). |
| 3 | Está navegando pela rede (In flight). |
| 4 | Foi completa (Complete). |

### Storage
---
#### Session Storage:
- Não tem expiração, ou seja, se não fecharmos a aba da aplicação, teremos uma sessão infinita;
- Tamanho máximo que podemos utilizar: 5Mb's.

##### Adicionando valores no Session Storage:
```ts
sessionStorage.setItem(key: string, value: string)
```
- key: Recebe uma chave para armazenar o valor;
- value: Recebe o valor que será armazenado na chave informada.

##### Pegando o valor das chaves no Session Storage:
```ts
console.log(sessionStorage.getItem(key))
```

##### Pegando o valor da chave armazenada no Session Storage, através de um loop:
```ts
for (let i = 0; i < sessionStorage.length; i++) {
    let element = sessionStorage.getItem(<string>sessionStorage.key(i))
    console.log(element)
}
```

##### Limpando uma chave específica no Session Storage:
```ts
sessionStorage.removeItem(key)
```

##### Limpando todo o Session Storage:
```ts
sessionStorage.clear()
```

##### Resumo:
| Funções | Descrição |
| --- | --- |
| setItem() | Serve para adicionar uma chave e um valor. |
| getItem() | Serve para pegar o valor armazenado em uma chave específica. |
| key() | Pega o nome de uma chave específica através do seu index. |
| removeItem() | Serve para remover o valor de uma chave específica. |
| clear() | Serve para limpar todo o Session Storage. |
| length | Retorna o tamanho do Session Storage. |

#### Local Storage:
- É exatamente a mesma coisa que o Session Storage;
- Tamanho máximo que podemos utilizar: 5Mb's;
- A única diferença é que não tem limite na data de expiração, ou seja, se fecharmos a aba, a sessão não desaparece.

##### Adicionando valores no Local Storage:
```ts
localStorage.setItem(key: string, value: string)
```
- key: Recebe uma chave para armazenar o valor;
- value: Recebe o valor que será armazenado na chave informada.

##### Pegando o valor das chaves no Local Storage:
```ts
console.log(localStorage.getItem(key))
```

##### Pegando o valor da chave armazenada no Local Storage, através de um loop:
```ts
for (let i = 0; i < localStorage.length; i++) {
    let element = localStorage.getItem(<string>localStorage.key(i))
    console.log(element)
}
```

##### Limpando uma chave específica no Local Storage:
```ts
localStorage.removeItem(key)
```

##### Limpando todo o Local Storage:
```ts
localStorage.clear()
```

##### Resumo:
| Funções | Descrição |
| --- | --- |
| setItem() | Serve para adicionar uma chave e um valor. |
| getItem() | Serve para pegar o valor armazenado em uma chave específica. |
| key() | Pega o nome de uma chave específica através do seu index. |
| removeItem() | Serve para remover o valor de uma chave específica. |
| clear() | Serve para limpar todo o Local Storage. |
| length | Retorna o tamanho do Local Storage. |

### Tratamento de Exceções
---
#### Exceções customizadas:
Para criar uma exceção customizada, devemos criar uma classe que implementará a interface **Error**.

**Exemplo:**
```ts
class ApplicationError implements Error {
    name: string = 'ApplicationError'
    
    constructor(public message: string) {
        if (typeof console !== undefined) {
            console.log(`Error: ${message}`)
        }
    }

    toString(): string {
        return `${this.name} : ${this.message}`
    }
}
```

**Observação:** Essa classe servirá como classe pai para outras subclasses que terão um tratamento especifíco para cada situação.

**Exemplo de uma classe filha de ApplicationError:**
```ts
class StringNotValidError extends ApplicationError {}
```

#### Lançando uma exceção customizada:
A função abaixo, apresenta uma verificação para ver se o valor do parâmetro **input** é igual a undefined, ou vazio. Caso seja, lançará a exceção **StringNotValidError**.

```ts
function doSomethingWithString (input: string): string {
    if (input === undefined || input === '') {
        throw new StringNotValidError(`The string ${input} is not valid`)
    }

    return input
}
```

**Observação:** Utilizamos o **throw new** para lançar exceções.

#### Capturando exceções:
- Para capturarmos uma exceção, utilizamos o **try** e o **catch**:

    ```ts
    try {
        let input = doSomethingWithString('')
    } catch (error) {
        console.log(`No action`)
    }
    ```

    **Observação:** No catch não podemos ter um tipo específico dentro dele, pois, irá gerar um erro de compilação.

- Caso queira utilizar um tratamento específico, teremos que utilizar **if/else if/else**:
    ```ts
    try {
        let input = doSomethingWithString('')
    } catch (error) {
        // Tratamento específico
        if (error instanceof ApplicationError) {
            console.log('No action inside if')
            throw error // Lançando a exceção novamente
        }
        console.log(`No action`)
    }
    ```

#### Quando utilizar typeof ou instanceof:
| Operadores | Descrição |
| --- | --- |
| typeof | Utilizamos para os tipos simples. |
| instanceof | Utilizamos para os tipos customizados. |

### Destruction (Desestruturação)
---
É uma forma de extrair valores, para dentro de variáveis, de dados que estão guardados dentro de objetos e arrays.

#### Desestruturação em objetos:
```ts
let person4 = {name: 'Jardson', lastname: 'Alan'}
let {name: name2, lastname: lastname2} = person4
```

#### Desestruturação em arrays:
```ts
let array = ['DevDojo', 'Awesomeness']
let [a, b] = array
```

#### Passando argumentos para funções utilizando desestruturação:
```ts
// Classe que será desestruturada
class Person4 {
    constructor (public name: string) {}
}

// Função que receberá o argumento através do destruction
function example2 ({name}): void {
    console.log(name)
}

// Argumento
example2(new Person4('Jardson'))
```

### For loops
---
#### Forma básica:
```ts
let array2 = ['DevDojo', 'Awesomeness']
for (let i = 0; i < array2.length; i++) {
    console.log(array2[i])
}
```

#### forEach:
- Não podemos utilizar:
    - break
    - continue
    - return

```ts
let array2 = ['DevDojo', 'Awesomeness']
array2.forEach((name) => {
    console.log(name)
})
```

#### For utilizando o operador (in):
- Em objetos:

    O (in) é utilizado para navegar dentro das propriedades de determinado objeto.
    ```ts
    let person5 = {name: 'Jardson', lastname: 'Alan'}
    for (let prop in person5) {
        console.log(prop)
    }
    ```

- Em arrays:
    - Se utilizarmos o (in) em um array, a função irá retornar o index;
    - O index retornado desse array é uma string.
    ```ts
    let array2 = ['DevDojo', 'Awesomeness']
    for (let prop in array2) {
        console.log(prop)
    }
    ```

#### For utilizando o operador (of):
O (of) é utilizado para retornar os valores que estão dentro de um array.
```ts
let array2 = ['DevDojo', 'Awesomeness']
for (let prop of array2) {
    console.log(prop)
}
```

### Maps
---
#### Formas de criar um map:
```ts
// 1º Forma
let nameAge = new Map<string, number>()
nameAge.set('Gon', 14)
nameAge.set('Killua', 14)

// 2º Forma
// Encadeamento de sets
let nameAge2 = new Map<string, number>().set('Gon', 14).set('Killua', 14)

// 3º Forma
let animeEpisodes = new Map<string, number>([
    ['DBZ', 200], ['FullMetal', 64]
])
```

#### Métodos para trabalhar com maps:
| Métodos | Descrição |
| --- | --- |
| get() | Serve para pegar um valor específico de uma determinada chave. |
| set() | Serve para adicionar chaves e valores dentro de um map. |
| has() | Verifica se existe determinada chave dentro de um map. |
| delete() | Serve para deletar uma chave específica e o valor atribuído a ela. |
| clear() | Serve para limpar um map. |
| size | Serve para saber se existe algum valor dentro de um map. |
| keys() | Utilizado para interar sobre as chaves de um map. |
| values() | Utilizado para interar sobre os valores de um map. |
| entries() | Utilizado para interar sobre as entradas de um map. |

#### Interando sobre as chaves de um map:
```ts
for (let key of animeEpisodes.keys()) {
    console.log(key)
}
```

#### Interando sobre os valores de um map:
```ts
for (let value of animeEpisodes.values()) {
    console.log(value)
}
```

#### Interando sobre as entradas de um map:
- Retorna em formato de array.

```ts
for (let entry of animeEpisodes.entries()) {
    console.log(`${entry[0]} | ${entry[1]}`)
}
```

#### Desestruturação de um map:
```ts
for (let [key, value] of animeEpisodes.entries()) {
    console.log(`${key} | ${value}`)
}
```

### Sets
---
#### Formas de criar um set:
```ts
// 1º Forma
let nameSet = new Set<string>()
nameSet.add('Jardson')

// 2º Forma
let nameSet2 = new Set<string>().add('Jardson').add('Alan')

// 3º Forma
let nameSet3 = new Set<string>(['Brenon', 'Sandy', 'DevDojo'])
```

#### Métodos para trabalhar com sets:
| Métodos | Descrição |
| --- | --- |
| add() | Serve para adicionar valores dentro de um set. |
| has() | Verifica se existe determinado elemento dentro de um set. |
| delete() | Deleta um elemento específico dentro de um set. |
| clear() | Serve para limpar o set. |
| size | Retorna o tamanho de um set. |

#### Formas de interar sobre os elementos de um set:
```ts
// 1º Forma
for (let aux of nameSet2) {
    console.log(aux)
}

// 2º Forma
nameSet2.forEach((value) => {
    console.log(value)
})
```

### Promises
---
As promessas são criadas passando uma função como parâmetro para o construtor Promise.

#### Exemplos de Promises:
```ts
function openFile(): Promise<string> {
    return new Promise((resolve, reject) => {
        // Abrindo um arquivo
        let isOpened: boolean = true
        if (isOpened) {
            resolve('Opened')
        }
        reject('Not Opened')
    })
}

function readFile(): Promise<string> {
    return new Promise((resolve, reject) => {
        // Lendo um arquivo
        let isOpened: boolean = true
        if (isOpened) {
            resolve('Read')
        }
        reject('Not Read')
    })
}

function deleteFile(): Promise<string> {
    return new Promise((resolve, reject) => {
        // Deletando um arquivo
        let isOpened: boolean = true
        if (isOpened) {
            resolve('Deleted')
        }
        reject('Not Deleted')
    })
}
```

#### Forma correta de encadeamento de Promises:
```ts
openFile()
    .then(() => readFile()
        .then(() => deleteFile()
            .then(() => console.log('Everything OK'))
            .catch((fromRejected) => console.log(fromRejected)))
        .catch((fromRejected) => console.log(fromRejected)))
    .catch((fromRejected) => console.log(fromRejected))
```
- **then:** sempre é executado quando não a erro na execução;
- **catch:** é executado quando algum erro acontece.

#### Utilizando o método (all):
- Utilizamos o **all()** quando precisamos executar todas as promises ao mesmo tempo, ou seja, quando não dependem uma da outra.

```ts
Promise.all([openFile(), readFile(), deleteFile()]).then().catch()
```

#### Utilizando o método (race):
- Utilizamos o método **race()** quando têm várias funções, porém, só queremos o resultado de uma delas;
- Ou seja, executa todas ao mesmo tempo, porém, quando tivermos o resultado de uma, irá ter o retorno no then ou no catch.

```ts
Promise.race([openFile(), readFile(), deleteFile()]).then().catch()
```

### Decorators:
---
São funções que conseguimos adicionar meta-dados à classes ou algum tipo de propriedade, até mesmo outras funções. Onde eles estão relacionados.

```ts
@course
class Person5 {
    name: string
}

function course(target: any) {
    Object.defineProperty(target.prototype, 'course', {value: () => 'TypeScript Aprendendo Junto: DevDojo'})
}

let person6 = new Person5()
console.log(person6.course())
```

#### Passando parâmetros dentro de um Decorators:
```ts
@Course({
    course: 'DevDojo Tutorials'
})

class Teacher {
    name: string
}

function Course(config: any) {
    return (target: any) => {
        Object.defineProperty(target.prototype, 'course', {value: () => config.course})
    }
}

let teacher = new Teacher()
console.log(teacher.course())
```