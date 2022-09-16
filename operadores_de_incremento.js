alert (' Código Funcionando!') // mostrar uma mensagem para o usuario
const nomeUsuario = prompt('Olá, usuário, qual o seu nome?') // mostra uma mensagem e recebe um valor+

let num = Number (prompt('Olá, ' + nomeUsuario + '. Digite algum número, por favor'))
console.log(typeof num) // typeof retorna o tipo do valor que a variavel armazena

// operadores de incremento
const sucessor = num +1
const antecessor = num -1

alert('O sucessor de ' + num + ' é ' + sucessor)
alert('O sucessor de ' + num + ' é ' + antecessor)