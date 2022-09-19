// 1. Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perimetro//

let baseRetangulo = Number (prompt ("Qual a base do retângulo ?"))
let alturaRetangulo = Number (prompt ('Qual a altura do retângulo ?'))

let areaRetangulo = baseRetangulo * alturaRetangulo
let perimetroRetangulo = baseRetangulo*2 + alturaRetangulo*2

alert ('A área do retângulo é: ' + areaRetangulo)
alert ('O perimetro do retângulo é: ' + perimetroRetangulo)