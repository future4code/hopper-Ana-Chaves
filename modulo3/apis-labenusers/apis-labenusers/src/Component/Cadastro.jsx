import axios from 'axios'
import React, { Component } from 'react'

export default class Cadastro extends Component {
  state={
    Name:"",
    Email:""
  }
  handleName = (e) =>{
    this.setState({Name:e.target.value})
  }
  handleEmail = (e) =>{
    this.setState({Email:e.target.value})
  }
  createUser = () => {
    const body = {
      "name": this.state.Name,
      "email":this.state.Email 
    }
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    
    axios.post( url , body , {
      headers:{
        "Authorization" : 'ana-chaves-hopper'
        }
      }).then(() => {
        alert("Usuario criado com sucesso")
      }).catch((err) => {
        alert("Algo errado")
        alert("Usuario criado com sucesso")
      }).finally(() =>{
        this.setState({Name: "" , Email: ""})
      })
    }

  render() {
    
    return (
      <div>
        <input type="text" placeholder='Nome' value={this.state.Name} onChange={this.handleName} />
        <input type="text" placeholder='E-mail' value={this.state.Email} onChange={this.handleEmail} />
        <button  onClick={this.createUser}>Criar Usuario</button>
      </div>
    )
  }
}
