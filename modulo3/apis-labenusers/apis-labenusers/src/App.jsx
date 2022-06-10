import React from 'react'
import  axios from 'axios'
import Cadastro from './Component/Cadastro'
import Listagem from './Component/Listagem'

export default class App extends React.Component {
 state = {
   handlePage:"cadastro",
 }

 changePage = () =>{
   this.setState({handlePage: this.state.handlePage === "cadastro" ? "listagem" : "cadastro"})
 }
  
  render() {
    return (
      <div>
        <button onClick={this.changePage}>Trocar de Tela</button>
        {
          this.state.handlePage ==="cadastro" ? <Cadastro /> : <Listagem />
        }
      </div>
    )
  }
}

