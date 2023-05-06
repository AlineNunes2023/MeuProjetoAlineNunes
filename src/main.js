const numero = prompt("Digite um número");

const questao1 = document.querySelector("#questao1")
questao1.innerHTML = numero * 2

alert(numero)

let conta = parseInt(prompt("Qual o valor da conta?"));
let resultado = conta + (conta*0.10)

const questao2 = document.querySelector("#questao2")
questao2.innerHTML = resultado

alert(conta)

const conta2 = parseInt(prompt("Qual o valor total da conta?"));
const conta3 = parseInt(prompt("Qual a quantidade de clientes?"));
const resultado2 = conta2 / conta3

const questao3 = document.querySelector("#questao3")
questao3.innerHTML = resultado2 

alert(conta2)
alert(conta3)