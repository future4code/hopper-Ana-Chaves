// const minhaString: string = 2  // Erro pois a variavel do tipo string só aceita valor do tipo string.

const meuNumero:number | string = 2  // para que aceite mais de um valor podemos utilizar o Union Type 

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: Cores
}

enum Cores {
    VERMELHO = "Vermelho" ,
    LARANJA = "Laranja" ,
    AMARELO = "Amarele" ,
    VERDE = "Verde" ,
    AZUL = "Azul" ,
    VIOLETA = "Violeta"
}

const Pessoa: Pessoa = {
    nome: "Ana" ,
    idade: 22,
    corFavorita: Cores.VERMELHO
}

console.log(Pessoa)
