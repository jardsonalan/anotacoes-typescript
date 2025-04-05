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