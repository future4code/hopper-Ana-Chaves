//Exercícios de interpretação de código
/* 1.
     será impresso na tela:
     10
     10 5
    
    2.
     será impresso na tela:
     10 10 10

    3.
     let p - HorasTrabalhadasPorDia
     let t - ValorrecebidoPorDia
*/


// Exercícios de escrita de código

//1.

const nome 
const idade 

console.log(typeof nome, idade) 

/* foi impresso o tipo undefined pois ainda não tem nenhum dado
armazenado nas variaveis dessa forma não tem um tipo definido*/ 



const Nome = prompt("Qual o seu nome")
const Idade = Number(prompt("Qual a sua idade"))

console.log(typeof Nome)
console.log(typeof Idade)

// agora como foi itroduzido dados nas variáveis foi definido um tipo que são eles string and number //

console.log("Olá" , Nome , "você tem" , Idade , "anos") */

//2.

let Idade = Boolean(prompt("Você tem mais de 18 anos"))
let Local = Boolean(prompt("Você está em casa"))
let Filhos = Boolean(prompt("Você tem filhos? "))

console.log("Você tem mais de 18 anos", Idade)
console.log("Você está em casa?" , Local)
console.log("Você tem filhos?", Filhos)


//3.

let a = 10
let b = 25

console.log("let a =" , a)
console.log("let b =" , b)

let c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)


//Desafio

let numero1 = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Digite outro número"))

let resultadosoma = numero1 + numero2
let resultadomultiplicacao = numero1 * numero2

console.log("O resultado da soma dos dois números são:" , resultadosoma)
console.log("O resultado da multiplicação dos dois números são:" , resultadomultiplicacao)