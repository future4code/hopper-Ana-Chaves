// Exercicio 1

// Para acessar os parametros utilizamos o process.argv

const nome = process.argv[2]
const idade = Number(process.argv[3])
console.log(`Olá ${nome} ! Você tem ${idade} anos`)
console.log(`Olá ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`)

function teste(nome) {
    if (nome = "") {
        console.log("Esperava um nome aqui")}
}
