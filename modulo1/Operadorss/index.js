/*-------------------Exercícios de interpretação de código-------------------
1-------
Matheus Nachtergaele
Virginia Cavendish
canal: "Globo", horario: "14h"

2.----------
a) 	nome: "Juca", 
	idade: 3, 
	raca: "SRD"

    nome: "Juba", 
	idade: 3, 
	raca: "SRD"


	nome: "Jubo", 
	idade: 3, 
	raca: "SRD"

b) Os tres pontos faz uma copia do objeto. 

3----------
a) false
   undefined

b) Porque a altura não exeste no objeto pessoa.
*/
//-------------------Exercícios de escrita de código-------------------

//1----------

const pessoa = {
    nome: "Ana Júlia" ,
    apelidos: ["Aninha" , "Julinha" , "Anaju" ]
}

const ApresentandoObjeto = (x) => console.log(`Eu sou ${x.nome}, mas pode me chamar de: ${x.apelidos}`)
ApresentandoObjeto(pessoa)

const novoObjeto = {
    ...pessoa , 
    nome: "Ana Júlia" ,
    apelidos: ["Ana" , "Ju" , "Chaves"]
}

ApresentandoObjeto(novoObjeto)

//2----------

const objeto1 = {
    nome: "Ana",
    idade:21,
    profissão:"Estudante"
}

const objeto2 = {
    nome:"Julia",
    idade: 22 ,
    profissão: "Dev"
}

const retorno = (x) => {
    console.log(x.nome)
    console.log(x.nome.length)
    console.log(x.idade)
    console.log(x.profissão)
    console.log(x.profissão.length)
}

retorno(objeto2)

//3----------

const carrinho = []

const sacolao1 = {
    nome: "Melancia" ,
    disponibilidade: true 
}

const sacolao2 = {
    nome: "Maçã" ,
    disponibilidade: true 
}

const sacolao3 = {
    nome: "Abacaxi" ,
    disponibilidade: true 
}
 
const frutas =  (a, b, c) => {
    carrinho.push(a)
}

frutas(sacolao1)
frutas(sacolao2)
frutas(sacolao3)

console.log(carrinho)


//-------------------Desafio-------------------

//1---------

const PegarDadosDoUsuario = () =>{
const NomeUsuario  = prompt("Qual o seu nome?")
const IdadeUsuario = prompt("Qual a sua idade?")
const ProfissaoUsuario = prompt("Qual a sua profissão?")

console.log({ NomeUsuario , IdadeUsuario , ProfissaoUsuario })
}

PegarDadosDoUsuario()

//2---------

const filme = {
    nome:"Sherek" ,
    anodelançamento: 2002
}

const filme2 = {
    nome: "Sherek2" , 
    anodelançamento: 2003  
}

const filmes = (filmea, filmeb) => {
    const lacamento = filmea.anodelançamento < filmeb.anodelançamento
    const lacamento2 = filmea.anodelançamento === filmeb.anodelançamento
        console.log(` O primeiro filme foi laçado antes do segundo? ${lacamento} `)
        console.log(` O primeiro filme foi lançado no mesmo ano do segundo? ${lacamento2} `)

}

filmes(filme , filme2)

// //3-------------

// const invertersacolão = (frutas) => {
//     ...frutas , disponibilidade: ! frutas.disponibilidade}





