//Exercícios de interpretação de código

//1. 
    // // O codigo está realizando um loop para ir somando os valores até o loop finalizar no <5 que será impresso no console
    //    o valor: 10
//2.
    // 19
    // 21
    // 23
    // 25
    // 27
    // 30

// Não pois o For...of vai mostrar os valores denntro de cada indice.

//3.
    // *
    // **
    // ***
    // ****
    
//- **Exercícios de escrita de código**

//1.

let Quantidadeanimais = Number(prompt("Quantos animais de estimção você tem?"))
nomesdospets = ""

if (Quantidadeanimais === 0) {
    console.log("Que pena você pode adotar um pete!")
} else{
    let nomesdospets = prompt("Qual o nome deles?")
    let TodosOsPets = [
        nomesdospets
    ]
    console.log(TodosOsPets)
        
}


//2.a)

let arrayoriginal = [ 1,2 ,3 ,4 ,5]
    
    for (let num  of arrayoriginal) {
                console.log(num)}
 
//b)

    for (let num2  of arrayoriginal) {
        num2 /= 10
         console.log(num2)}

//c)

    for (let num3 of arrayoriginal) {
        if (num3 % 2 === 0) {
            console.log(num3)}}

//d)


    for (let num4=0;num4 < arrayoriginal.length ; num4++) {
            console.log(`O elemento do índex ${num4} é ${arrayoriginal[num4]}`)}

//e)

let maiorNumero = 0
let menorNumero = 0

    function Valores(array) {
        for (let numero of array) {
            if (numero > maiorNumero) {
                maiorNumero = numero

                
            } else {
                menorNumero = numero
                
            }

            console.log(`Meu maior numero é ${maiorNumero} e meu menor número é ${menorNumero}`)
            
        }
  
}
let arrayteste  =  [10 , 20, 30]

Valores(arrayteste)













                
            
            
        
            
        








