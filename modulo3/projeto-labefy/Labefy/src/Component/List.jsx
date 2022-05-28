import React, { Component } from 'react'
import axios from 'axios'

export default class List extends Component {
  state={
    Lists:[]
  }


  getList= () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
      axios.get(url, {
        headers:{
          Authorization: "ana-chaves-hopper"
        }
      }).then((res) =>{
        this.setState({Lists:res.data})
      }).catch((err) =>{
        console.log(err.response)
      })
  }
  render() {
    
    return (
      <div>
        
        <h1>Playlist Criadas</h1>
        {
          this.state.Lists.map((listas) =>{
            return(
              <ul>
                <li>{listas.name}</li>
              </ul>
            )
          })
        }

      </div>
    )
  }
}
