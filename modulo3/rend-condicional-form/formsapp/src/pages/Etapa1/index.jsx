import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
 width: 500px;
 margin-bottom: 30px;
 margin-top: 10px;
 padding: 20px;
 border : none;
 background-color: #E6E6E6;
 color: black;
 border-radius: 20px;
`
const Select = styled.select`
  width: 50%;
  margin-top: 10px;
  padding: 10px;
  background-color: #E6E6E6 ;

`
const H1 = styled.h1`
  text-align: center;
`
export class Etapa1 extends React.Component{
  render(){
    return (
      <div>
        <H1>ETAPA1 -DADOS GERAIS</H1>
          <form action="">
              <ol >
                  <li> Qual o seu nome? </li>
                  <Input type="text" placeholder="Nome" />
                  <li>Qual a sua idade?</li>
                  <Input  type="text" placeholder="Idade" />
                  <li> Qual o seu Email?</li>
                  <Input  type="text" placeholder="Email" />
                  <li>Qual a sua Escolaridade?</li>
                  <Select name="" id="">
                      <option value="">Ensino Médio Incompleto</option>
                      <option value="">Ensino Médio Completo</option>
                      <option value="">Ensino Superior Incompleto</option>
                      <option value="">Ensino Superior Completo</option>
                  </Select>
              </ol>
          </form>
      </div>
    )
  }  
}
