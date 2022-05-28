import React, { Component } from 'react'
import axios from 'axios'

export default class Creatlist extends Component {
  state={
    name:""
  }
  changeName = (e) =>{
    this.setState({name:e.target.value})
  }
  createPlaylist = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      "name": this.state.name
    }
      axios.post(url , body , {
        headers:{
          Authorization: "ana-chaves-hopper"
        }
      }).then(()=>{
        alert("Ok")
      }).catch(() =>{
        alert("ohno")
      })
  }
  render() {
    
    return (
      <div>
        <h1>Criar playlist</h1>
        <input type="text" placeholder='Nome' value={this.state.name} onChange={this.changeName} />
        <button onClick={this.createPlaylist}>Criar playlist</button>
      </div>
    )
  }
}
