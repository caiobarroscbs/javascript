// 6. Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.

let num1 = Number (prompt('Informe um número inteiro'))
let num2 = Number (prompt('Informe um número inteiro'))


let resultadoDiv = num1/num2
let restoDiv = num1 % num2 // %Resto

alert("o resultado é: " + resultadoDiv + " e o resto é: " + restoDiv)