//------------------ Exercícios de interpretação de código------------------ 

/*1.a) 10 e 50
    b) A função será invocada e a operação irá acontecer mas não será exibido no console
      pois foi retirado o console.log

  2.a) A função formata o texto todo em minúsculo e verifica se tem o argumento citado (cenoura) no texto.
    b) eu gosto de cenoura - true
       cenoura é bom pra vista - true
       cenouras crescem na terra - false

*/   
 //------------------  Exercícios de escrita de código------------------ 

 //1.-----------

const nome = "Ana"
const idade = 21
const cidade = "João Monlevade"
const estudante = "estudante" 

 function apresentacao() {
   console.log( `E sou ${nome} , tenho ${idade} anos, moro em ${cidade} e sou ${estudante}. `)
   
 }
 
 apresentacao()

//  const imprimir = () =>   console.log( `E sou ${nome} , tenho ${idade} anos, moro em ${cidade} e sou ${estudante}. `)

// imprimir()

const NomeUsuario = prompt("Qual é o seu nome?")
const IdadeUuario = Number(prompt("Qual a sua idade?"))
const CidadeUsuario = prompt("Onde você mora?")
const profissão = prompt("Qual a sua profissão?")

const ApesentacaoDoUsuario = () => console.log( `Eu sou ${NomeUsuario} ,tenho ${IdadeUuario} anos, moro em ${CidadeUsuario} e sou ${profissão}.`)

ApesentacaoDoUsuario()

//2-------

const numero1 = Number(prompt("Digite um numero"))
const numero2 = Number(prompt("Digite outro número"))
const ReceberString = prompt("Digite uma frase")

const soma = (a, b) => a + b
  console.log(soma(numero1, numero2))

const NumerooMaior = (a,b) => a >= b
 console.log(NumerooMaior(numero1, numero2))

const VerificarPar = x => x % 2 === 0
 console.log(VerificarPar(numero1))

 const frase = (frases) => console.log(`${frases.toUpperCase()} , ${frases.length}`)


frase(ReceberString)

//3----------

const num1 = Number(prompt("Digite um número"))
const num2 = Number(prompt("Digite outro número"))

const operacoes = (a,b) => {
  const soma =  (a + b)
  const subtracao =  (a - b)
  const divisao =  (a / b)
  const multiplicacao =  (a * b)
    console.log(
      `Números inceridos: ${num1} e ${num2}
       Soma: ${soma}
       Diferença: ${subtracao}2
       Multiplicação: ${multiplicacao}
       Divisão: ${divisao}`
    )

}
operacoes(num1, num2)

//----------------Desafio-------------------

//1----
const recberumaparametro = (x) => console.log(x)
recberumaparametro(2)

const receberDoisParametros = (x, y) => soma = x + y
receberDoisParametros(2, 3)

//2-----






