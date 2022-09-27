// Crie um algortimo que recebe informações de 15 produtos. Cada produto possui nome, marca, uma foto (link de uma imagem da internet), 
//  preço unitário e a quantidade de produtos em estoque. Ao receber essas informações dos produtos, imprima no HTML essas informações
//  de cada produto e o produto entre o preço e a quantidade de produtos em estoque (preço total).

    // objeto
    let produto = {
    nome: '',
    marca: '',
    img: '',
    preco: 0,
    qtdEstoque: 0
    }  


const produtos = []
// criar um loop 
for (let i = 1; i < 2; i++) {
   produto.nome = prompt(`Digite o nome do ${i}º produto`)
   produto.marca = prompt(`Digite a marca do ${i}º produto`)
   produto.img = prompt(`Digite a imagem do ${i}º produto`)
   produto.preco = prompt(`Digite o preço do ${i}º produto`)
   produto.qtdEstoque = prompt(`Digite a quantidade do ${i}º produto`)
   precoTotal = produto.preco * produto.qtdEstoque
   
   document.write(
   `<p> NOME: ${produto.nome} <p>
   <p> MARCA: ${produto.marca} <p>
   <p> IMAGEM:<img src="${produto.img}"> <p>
   <p> PREÇO: ${produto.preco} <p>
   <p> ESTOQUE: ${produto.qtdEstoque} <p>
   <p> TOTAL EM ESTOQUE: ${precoTotal} <p>`
   )
    
  
}

   


