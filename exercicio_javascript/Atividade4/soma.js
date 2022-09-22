// Crie um algoritmo para ler N números, some-os e faça a média entre os números
let nome = parseInt (prompt('Informe o nome do aluno'))

let num1 = parseInt(prompt('Informe a primeira nota de 0 à 10'))
let num2 = parseInt(prompt('Informe a segunda nota de 0 à 10'))
let num3 = parseInt(prompt('Informe a terceira nota de 0 à 10'))

let soma = (num1 + num2 + num3)/3

alert('A nota de ' + nome + ' foi: '+ soma)