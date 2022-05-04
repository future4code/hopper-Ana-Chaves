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
  background-color: grey;

`
const Form = styled.form`
margin-left: 15%;
`
const H1 = styled.h1`
  text-align: center;
  font-size: 1.5em;
`

export class Etapa3 extends React.Component{
  render(){
    return (
      <div> 
          <h1>ETAPA3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
          <Form action="">
              <ol start={"7"}>
                  <li>Por que você não terminou o curso de graduação?</li>
                  <Input type="text" />
                  <li>Você fez algum curso complementar?</li>
                  <Input type="text" />
              </ol>
          </Form>
      </div>
    )
  }
}