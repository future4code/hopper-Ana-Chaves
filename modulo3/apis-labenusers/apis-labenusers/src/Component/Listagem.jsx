import React, { Component } from 'react'
import axios from 'axios'

export default class Listagem extends Component {

  state = {
    userers : []
  }

  componentDidMount(){
    this.getUser()
  }

  getUser = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get( url , {
      headers:{
        Authorization: "ana-chaves-hopper"
      }
    }).then((res) => {
      this.setState({ userers:res.data})
    }).catch((err) =>{
      console.log(err.response)
    })
  }

  delUser = (id) =>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
      axios.delete( url, {
        headers:{
          Authorization: "ana-chaves-hopper"
        }
      }).then(()=>{
        alert("Usuario deletado")
        this.getUser()
      }).catch(() =>{
        alert("Algo de errado não está certo")
      })
    }
  render() {
    return (
      <div>
        <div>Listagem</div>
        {
          this.state.userers.map((user)=> {
            return (
              
              <ul key={user.id}>
                <li>{user.name}</li>
                <button onClick={() => this.delUser(user.id)}>Deletar</button>
              </ul>
            )
          })
        }
      </div>
    )
  }
}
