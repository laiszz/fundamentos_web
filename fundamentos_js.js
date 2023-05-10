// -----------------------------------------------
// Hello World

console.log("Hello World")

// -----------------------------------------------
// Declaração de variáveis

let nome = "Lais"   // Variável (modificável)  --  Semelhante a "var", mas local
const sobrenome = "Sales"   // Constante (não modificável)

console.log(nome + " " + sobrenome)

// -----------------------------------------------
// Soma simples

let numero1 = 30
let numero2 = 10

console.log(numero1 + numero2)

// -----------------------------------------------
// Uso de funções -- Pode retornar tipos diferentes!

function dividir(num1, num2){
    if (num2 === 0){
        return "Não é possível dividir por zero."    // Retorna uma string
    }
    
    return num1/num2    // Retorna um número
}

console.log(dividir(10, 5))

// -----------------------------------------------
// Arrow Function -- Parecido com a função Lambda do Java

const soma = (num1, num2) => num1 + num2

console.log(soma(1,2))    // Chamando a constante como se fosse uma função

// -----------------------------------------------
// Interpolação de string

function tabuada(num1){
    for (let contador = 1; contador <= 10; contador++){
        console.log(`${num1} x ${contador} = ${num1 * contador}`)    // Sem concatenação!
    }
}

tabuada(8)

// -----------------------------------------------
// Vetores

const nomes = ["Guilherme", "Laís", "Jamile"]

nomes.forEach(nome => console.log(nome))    // Impressão usando Arrow Function

// -----------------------------------------------