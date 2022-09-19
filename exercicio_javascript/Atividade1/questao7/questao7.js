// 7. Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), ler um valor de temperatura em Fahrenheit e exibi-lo em Celsius

let tempFah = Number(prompt("Informe uma temperatura em Fahrenheit?"))

 
let tempCelsius = (tempFah - 32) * 5/9


alert("A temperatura em Celcius é: " + tempCelsius)