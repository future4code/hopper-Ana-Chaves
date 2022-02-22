// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt('Digite a altura do retangulo')
  const largura = prompt('Digite a largura do retangulo')
  const area = altura * largura
  console.log(area)
  
}


// EXERCÍCIO 02
function imprimeIdade() {
  const anoatual = prompt("Qual o ano atual")
  const anodenascimento = prompt("Qual o seu ano de nascimento")
  const idade = anoatual - anodenascimento
  console.log(idade)

}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
  return imc
}
 const imcalculado = calculaIMC(85, 1.8)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome")
  const idade = prompt("Digite sua idade")
  const email = prompt("Digite seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite uma cor favorita")
  const cor2 = prompt("Digite outra cor favorita")
  const cor3 = prompt("Digite outra cor favorita")
  const coresfavoritas = [cor1 , cor2 , cor3]
  console.log(coresfavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const palavra = string.toUpperCase()
  return palavra 
  

}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const quantidade = custo / valorIngresso
  return quantidade

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanho1 = string1.length === string2.length
  return tamanho1

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const lista1 = array
  return lista1[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const lista2 = array
  const ultimoelemento = array.pop()
  return ultimoelemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const lista3 = array
  const troca = array.replaceAll("0" , "4")
  return troca

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const comparação = string1 === string2
  return comparação

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}