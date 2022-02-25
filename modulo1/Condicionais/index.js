//Exercícios de interpretação de código

// 1.a) O código verifica se o resto da divisão por 2 é 0, se sim ele exibe no console passou no teste
// se não ele exibe não passou no teste.

//   b) Somente para números pares.

//   c) Somente para números ímpares

//  1.a) O codigo serve para mostrar o valor da fruta digitada pelo usuário.

//    b) Será impresso no console " O preço da fruta Maçã é 2.25"

//    c) Se retirar o break o js vai continuar lendo o código e vai parar no preco = 5
//       dessa forma irá imprimir no console o valor errado 5 e não 5.5 que é o correto.

//  3.a) Pediu para o usuário digitar um número prompt.

//     b) Esse número passou no teste. Não será exibido nenhuma mensagem pois terá um erro.

//     c) Sim pois a variável mensagem foi criada dentro da condição if sendo assim não foi declarada.

//Exercícios de escrita de código

// //1.
    const idade = Number(prompt("Qual a sua idade?"))
    
    if (idade >= 18 ) {
        console.log("Você pode dirigir")
    }
    else{
        console.log("Você não pode didrigir")
    }

// //2.
    const turno = prompt("Digite o turno em que você estuda, sendo M para matutino , V vespertino, N noturno")
    

        if (turno === "M" ) {
        console.log("Bom dia")
        
        }

        else if(turno === "V") {
            console.log("Boa tarde")
        }

        else {
            console.log("Boa noite")

        }

// //3.
    const turno1 = prompt("Digite o turno em que você estuda, sendo M para matutino , V vespertino, N noturno")

    switch (turno1) {
        case "M":
            console.log("Bom dia")
            break;

        case "v":
            console.log("Boa tarde")
            break;

        case "N":
            console.log("Boa noite")
            break;    

    
        default:
            break;
    }

    

// //4.
    const genero = prompt(" Qual o gênero do filme?")
    const preco1 = prompt("Qual o valor do ingresso?")
   
    if (genero === "fantasia" , preco1 <= 15) {
        console.log("Bom filme")
      
        
    } else {
        console.log("Escolha outro filme")
        
    }

// //Desafios

// //1.
    const genero = prompt(" Qual o gênero do filme?")
    const preco1 = prompt("Qual o valor do ingresso?")
    const lanchinho = prompt("Qual lanchinho você vai comprar?")

    if (genero === "fantasia" , preco1 <= 15) {
        console.log(`Bom filme,aproveite o seu ${lanchinho}.`)
      
        
    } else {
        console.log("Escolha outro filme")
        
    }

// //2.

//     const nome = prompt("Qual o seu nome?")
//     const Tipodejogo = prompt("Qual o tipo de jogo") 
//     const EtapaDoJogo = ("Qual a Etapa do jogo?")
//     const categoria = ("Qual a categoria?")
//     const quantidadedeingressos = ("Quantos ingressos vai querer")

//     const categoria1SF {


//     }



//     //Formatação

//     switch (Tipodejogo) {
//         case value:
            
//             break;
    
//         default:
//             break;
//     }

    
    
    
    
    
//     console.log(
//     `---Dados da Compra---
//     Nome do cliente: ${nome}
//     tipo de jogo: ${Tipodejogo}
//     Etapa do jogo: ${EtapaDoJogo}
//     Categoria: ${categoria}
//     Quantidade de Ingressos: ${quantidadedeingressos}
//     ---Valores---
//     Valor do ingresso:
//     Valor total:
    
    
    
//     `
    
//     )








    





