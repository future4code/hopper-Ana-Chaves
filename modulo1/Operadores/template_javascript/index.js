// Exercícios de interpretação de código
/*   1.
       a false
       b false
       c true
       d boolean


     2.
        Ele não converteu o prompt para number dessa forma ele vai receber uma string e não um número
        ao fazer a operação soma como é uma string vai juntar os dois números e não vai realizar a 
        operação soma.
        exemplo :se ele receber dois números 2 e 2 vai retornar 22 . 

     3.   
        Para que o código realmente some ele terá que utilizar dessa maneira

        let primeiroNumero = Number(prompt("Digite um numero!"))
        let segundoNumero = Number(prompt("Digite outro numero!"))

        const soma = primeiroNumero + segundoNumero

        console.log(soma)
*/
// Exercicio de escrita de código
//    1.
        let idade1 = Number(prompt("Qual a sua idade"))
        let idadeAmigo =  Number(prompt("Qual a idade do sua ou seu melhor amigo?"))
        let resultado = idade1 >= idadeAmigo 

        console.log("Sua idade é maior do que do seu melhor amigo?" , resultado)

        let diferencadeIdade = idade1 - idadeAmigo

        console.log("A diferença de idade é:" , diferencadeIdade)

//    2.
        let numeropar = Number(prompt("Digite um número par"))
        let restodadivisao = numeropar % 2
        console.log(restodadivisao)

      /* O resto da divisão é sempre 0 
         Se o usuário digitar um número ímpar a divisão terá um resto*/

//    3.
        let idade4 = Number(prompt("Qual a sua idade"))
        let idadeMeses = idade4 * 12
        let idadeDias = idade4 * 365
        let idadeHoras = idade4 * 8760

        console.log(idadeMeses, idadeDias , idadeHoras)

//     4.
         let numero1 = Number(prompt("Digite um número"))
         let numero2 = Number(prompt("Digite outro número"))
         
         let operacao1 = numero1 >= numero2
         let operacao2 = numero1 === numero2
         let operacao3 = numero1 % numero2
         operacao3 = operacao3 === 0 
         let operacao4 = numero2 % numero1
         operacao4 = operacao4 === 0

         console.log(operacao1, operacao2 , operacao3, operacao4)



//----------------Desafio------------------
                