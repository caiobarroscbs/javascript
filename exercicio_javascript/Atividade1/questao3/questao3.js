// 3. Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.

let raioCircu = Number (prompt('Qual o tamanho do raio?'))

let areaCircu = raioCircu * raioCircu
let resultadoArea = areaCircu * 3.14

let periCircu = 3.14 * 2 
let resultadoPeri = periCircu * raioCircu

alert('A área da circunferencia é: ' + resultadoArea)
alert('O perimetro da circunferencia é: ' + resultadoPeri)