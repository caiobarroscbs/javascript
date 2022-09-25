/**
 *  Arrays ou Vetores é um tipo especial que te permite armazenar diversos valores
 *  em apenas um local
 */

// criando um Array
// let arr = new Array()
// let arr2 = new Array(5)
// let arr3 = [] // Mais usado

/**
 *  Cada valor de um array é separado por vírgula
 * 
 *  Dentro de um array eu posso ter varios tipos de dados (numeros, textos, valores booleanos)
 */

let arr = [10, 15, 9.8, 'Eu sou um texto dentro de um array', 'Olá, mundo', true, false, false]
console.log(arr[6])  //false
arr[6] = 'Outro texto'
console.log(arr[6]) // Outro texto
console.log(arr[8]) // undefined
arr[8] = 'Agora a posição 8 existe dentro de arr'