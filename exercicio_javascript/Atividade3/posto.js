/**
 * Um posto esta vendendo combustiveis com a seguinte tabela de descontos:

Alcool -> Até 25 litros, desconto de 2% por litros
          Acima de 25 litros, desconto de 4% por litro

Gasolina -> Até 25 litros, desconto de 3% por litros
          Acima de 25 litros, desconto de 5% por litro

Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustiveis (codificando
da seguinte forma: A-alcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se 
que o preço do litro da gasolina é R$ 2,70 e o preço do litro do alcool é R$ 1,90.
 */

const litro = parseFloat (prompt('Quantos litros foram vendidos?'))
const mensagem = `
Informe o tipo de combustivel:
a -> Álcool
g -> Gasolina
`
const tipoComb = prompt(mensagem)


if (tipoComb == 'a' && litro <= 25) {
    const precoFinal = litro * 1.86
    alert(`O preço final foi de: ${precoFinal} reais com 2% de desconto por litro`)
} else if (tipoComb == 'a' && litro >= 26) {
    const precoFinal = litro * 1.82
    alert(`O preço final foi de: ${precoFinal} reais com 4% de desconto por litro`)
} else if (tipoComb == 'g' && litro <= 25) {
    const precoFinal = litro * 2.61
    alert(`O preço final foi de: ${precoFinal} reais com 3% de desconto por litro`)
} else if (tipoComb == 'a' && litro >= 26) {
    const precoFinal = litro * 25.65
    alert(`O preço final foi de: ${precoFinal} reais com 5% de desconto por litro`)
}
