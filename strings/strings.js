// Delimitação de Strings

const aspasSimples = 'olá, mundo'
console.log(aspasSimples)

// Caracteres de escape

const aspasDuplas = "Olá eu sou o \n Javascript. Eu sou melhor que o \n Python"
console.log(aspasDuplas)

const textoComCrase = `Olá eu sou o \n Javascript. 
Eu sou melhor que o \n Python`
console.log(textoComCrase)

// métodos das strings

const texto = 'O Javascript foi criado alguns anos após o Python. No entanto, o Javascript é bem mais bacana.'

console.log(texto)
console.log(texto.toUpperCase()) // Deixa todo o texto com a letra MAIUSCULA
console.log(texto.toLowerCase()) // Deixa todo o texto com a letra minuscula
console.log(texto.concat(' A linguagem C é a mãe de todas as linguagens.')) // Ele concatena com o texto
// console.log(texto[5], texto [17])
console.log(texto.substring(2, 12)) // Recorta o texto (pega uma parte do texto)
console.log(texto.replace('Javascript', 'Rust')) // substitui a primeira ocorrência da pesquisa
console.log(texto.replaceAll('Javascript' , 'Kotlin' ))

const html = '<!DOCTYPE html>\n<html></html>'
console.log(html.startsWith('<!DOCTYPE html>'))

console.log(html.endsWith('</body>'))

const mensagem = '              ola mundo'
console.log(mensagem)
console.log(mensagem.trim())

let senha = 'madmax'
console.log(senha.length)
console.log(senha.length >= 8)