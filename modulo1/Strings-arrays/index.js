/* ---------- Exercícios de interpretação de código------------------
1.
a.  undefined
b. null
c. 10
d. 3
e. [3,19, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, ]
f. 9

2. 
SUBA NUM ÔNABUS EM MIRROCOS

--------------Exercícios de escrita de código-------------------------*/

//1
const DadosDoUsuario =  prompt("Qual o seu nome?")
const DadosDoUsuario2 = prompt("Qual o seu email?")

console.log(`O e-mail ${DadosDoUsuario2} foi cadastrado com sucesso. Seja bem vinda(o) ${DadosDoUsuario}`)

//2
const ComidasPreferidas = [ "Batata", "Strogonof", "Churrasco", "Soverte", "Açai"] 

console.log(ComidasPreferidas)

console.log("Essas são minhas comidas preferidas:")
console.log(ComidasPreferidas[0])
console.log(ComidasPreferidas[1])
console.log(ComidasPreferidas[2])
console.log(ComidasPreferidas[3])
console.log(ComidasPreferidas[4])

const ComidadaPreferidadoUsuario = prompt("Qual a sua comida preferida?")
ComidasPreferidas[1] = ComidadaPreferidadoUsuario
console.log(ComidasPreferidas)

//3
const listadetarefas = []

const TarefasDoUsuario = prompt(" Digite uma tarefa que você vai realizar hoje.")
const TarefasDoUsuario1 = prompt(" Digite outra tarefa que você vai realizar hoje.")
const TarefasDoUsuario2 = prompt(" Digite outra tarefa que você vai realizar hoje.")

listadetarefas.push(TarefasDoUsuario)
listadetarefas.push(TarefasDoUsuario1)
listadetarefas.push(TarefasDoUsuario2)

console.log(listadetarefas)

const NumeroDaTarefa = prompt(`Digite o número de alguma tarefa que realizou sendo 0= ${listadetarefas[0]} , 1= ${listadetarefas[1]} e  2= ${listadetarefas[2]} `)
listadetarefas.splice(NumeroDaTarefa , 1)
console.log(listadetarefas)

//-------------- Desafio ------------------

//1
const frase = " Ola meu nome é Ana!"
const arrayFrase = frase.split("")
console.log(arrayFrase)
//2
const arrayPronto = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
const acharoAbacaxi = arrayPronto.indexOf("Abacaxi")
const TamanhoDoArray = arrayPronto.length
console.log(`O tamanho do array é ${TamanhoDoArray} e o índice do abacaxi é ${acharoAbacaxi}` )





