import React from 'react'
import styled from 'styled-components'


const H1 = styled.h1`
  text-align: center;
  font-size: 1.5em;
`

const P = styled.p`
 text-align: center;
`

export class Final extends React.Component{
  render(){
    return (
      <div>
          <H1>O FORMULARIO ACABOU</H1>
          <p>Muito obrigado por participar! Entraremos em contato</p>
      </div>
    )
  }
}

