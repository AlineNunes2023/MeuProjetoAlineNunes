console.log("teste")

const numero = prompt("Digite um número")

const questao1 = document.querySelector("#questao1")
questao1.innerHTML = numero * 2

let conta = parseInt(prompt("Qual o valor da conta?"))
let resultado = conta + (conta*0.10)

const questao2 = document.querySelector("#questao2")
questao2.innerHTML = resultado



