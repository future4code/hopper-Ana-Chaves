import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
 width: 500px;
 margin-bottom: 30px;
 margin-top: 10px;
 padding: 20px;
 border : none;
 background-color: #E6E6E6 ;
 color: black;
 border-radius: 20px;
 
`
const Form = styled.form`
margin-left: 15%;
`

const H1 = styled.h1`
  text-align: center;
  
`

export class Etapa2 extends React.Component {
  render(){
    return (
      <div>
          <H1>ETAPA2 - INFORMAÇÕES DO ENSINO SUPERIOR</H1>
          <Form action="">
              <ol start="5">
                  <li>Qual curso?</li>
                  <Input type="text" />
                  <li>Qual a unidade de ensino?</li>
                  <Input type="text" />
              </ol>
          </Form>
      </div>
    )
  }
}
