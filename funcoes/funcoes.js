/**
 * Funçoes são blocos de construçao fundamentais em javascript.Uma função e um procedimento de Javascript
 * -um conjunto de instruções que executa uma tarefa ou calcula um valor. para usar uma função,você deve
 * defini-la em algum lugar no escopo do qual você quiser chamá-la.
 */

/**
 * Parâmetros
 * 
 * São valores que passamos para as funções, para que elas utilizem esses valores dentro delas
 */

// passar um valor como parâmetro para mostrá-lo dentro do alert
// function cumprimentar(mensagem, repetir = 1) {
//    for (let i; i <= repetir; i++) 
//     alert(mensagem.toUpperCase())
// }

// function soma(num, num2) {
//     /**
//      * O return serve para enviar o resultado da execução daquela função
//      */
//     let result = num + num2
//     return result
// }

// function maiorValor(a, b) {
//    if (a > b) {
//     return a
//    } else {
//     return b
//    }
// }

// let resultado = soma(4, 7) //11
// console.log(`O valor da variável resultado é ${resultado}`) //11

// const num1 = parseInt(prompt('Informe o primeiro número'))
// const num2 = parseInt(prompt('Digite o segundo número'))
// alert(`O maior número entre esses é ${maiorValor(num1, num2)}`)

// cumprimentar('Olá, mundo')
// cumprimentar('Eu gosto muito do Javascript')
// cumprimentar('Javascript sola o C#')


/**
 * Criem uma função que gera o resultado de uma equação do segundo grau
 * 
 * ax² + bx + c = 0
 * 
 * delta = b² - 4ac
 * b = -b +- raíz de delta / 2a
 */

function equacaoSegundoGrau (a, b, c) {
    const delta = b ** 2 -4 * a * c         // potenciação (**)
    /**
     * Math é um objeto do Javascript que possui métodos para fazer cálculos matemáticos
     * mais complexos
     */
    const raizDelta = Math.sqrt(delta)
    const x1 = (-b + raizDelta) / (2 * a)
    const x2 = (-b - raizDelta) / (2 * a)

    return[x1, x2]
}

console.log(equacaoSegundoGrau(1, -1, -12)) // [-3, 4]