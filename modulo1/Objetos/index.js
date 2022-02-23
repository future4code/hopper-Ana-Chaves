/* Exercícios de interpretação de código

    1.a) Matheus Nachtergaele
         Virginia Cavendish
         {canal: 'Globo', horario: '14h'}

    2.a) {nome: 'Juca', idade: 3, raca: 'SRD'}
         {nome: 'Juba', idade: 3, raca: 'SRD'}
         {nome: 'Jubo', idade: 3, raca: 'SRD'}
      
      b) A sintaxe de três pontos realiza uma cópia do objeto que for solicitado.
      
    3.a) false
         undefined
      
      b) Foi impresso no console os valores de backender que é false e undefined pois não existe altura 
         não foi declarada no objeto pessoa.     
                        
   */

 // Exercícios de escrita de código
 
    //1.a

            const pessoas = {
                nome:"Ana Júlia" ,
                apelido: ["Aninha" , "Julinha" ,"Anaju"]
               
            } 
                function apresentação(pessoas) {
                    const tudojunto = `Eu sou ${pessoas.nome}, mas pode me chamar de ${pessoas.apelido[0]},${pessoas.apelido[1]} ou ${pessoas.apelido[2]}. `
                    return tudojunto
            }

              console.log(apresentação(pessoas))

    //b 
            const novosapelidos = {
                ...pessoas,
                apelido:["Aj", "JU","AJC"]
            }

            console.log(apresentação(novosapelidos))

    //2.a
            const pessoa1 = {
                nome:"ana",
                idade:"22",
                profissão:"atoa"
            }            
            const pessoa2 = {
                nome:"julia",
                idade:"11",
                profissão:"dormir"
            }

                function array(pessoa1, pessoa2){
                    const tudojunto2 = [pessoa1.nome , pessoa1.nome , pessoa1.idade , pessoa1.profissão]
                    return tudojunto2
            }
                        console.log(array(pessoa1))
                        console.log(array(pessoa2))

    //3.
            const carrinho = []
            
            const compras1 = {
                nome:"Melancia" , 
                disponibilidade: true


            }
            const compras2 = {
                nome:"Laranja" ,
                disponibilidade: true

            }
            const compra3 = {
                nome:"Limão" ,
                disponibilidade:true

            }
                function fruteiro(compras1 , compras2 , compra3){
                    carrinho.push
                }

     // ESTOU TERMINANDO

            
            