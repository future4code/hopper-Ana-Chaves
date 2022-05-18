import React from 'react'
import styled from 'styled-components'
import { Etapa1 } from '../Etapa1'
import { Etapa2 } from '../Etapa2'
import { Etapa3 } from '../Etapa3'
import { Final } from '../Final'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Button = styled.button`
  width: 20%;
  margin-bottom: 20px;
  padding: 20px;
  border:none;
  color: white;
  background-color: #EA4C89;
  border-radius: 20px;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9)
  }
`


class Home extends React.Component{
  state= {
    etapa: 1
  }
  
  renderizaEtapa = () =>{
    switch (this.state.etapa) {
      case 1:
        return <Etapa1/>
      case 2:
        return <Etapa2/>
      case 3:
        return <Etapa3/>
      case 4:
        return <Final/>
      default:
       
        break;
    }
  }
 
  irParaProximaEtapa = () =>{
   if (this.state.etapa >= 1 && this.state.etapa <=3 ) {
    this.setState({etapa: this.state.etapa +1})
   }
   
  }

  

  voltarEtapa = () => { // this.setState({etapa: this.state.etapa -1})
    if (this.state.etapa > 1 ) {
      this.setState({etapa: this.state.etapa -1})
    }
  }
  

  render(){
    return (
      
      <Div>
        {this.renderizaEtapa()}
        {this.state.etapa <= 3 ? 
        <>

          <Button onClick={this.irParaProximaEtapa}>Próxima Etapa</Button>
          <Button onClick={ this.voltarEtapa}>Voltar Etapa</Button>
        </> 
        :
         null }

        
      </Div>
    )
  }  
}
export default Home

