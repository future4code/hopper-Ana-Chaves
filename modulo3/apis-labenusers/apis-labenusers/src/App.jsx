import React from 'react'
import  axios from 'axios'

export default class App extends React.Component {
  state ={
    name:"" ,
    email:"" ,
  }
  componentDidMount = () =>{
    this.createusers()
  }

 createusers = () =>{
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users' , {
      headers:{
        "Authorization": 'ana-chaves-hooper'
      }
    }).then((resposta) =>{
      this.setState({name: resposta.data.result.list})
    }).cath((error)=>{
      alert(error.message)
    })
  }

  handlename= (e) =>{
    this.setState({name:e.target.value})
  }
  handleemail= (e) =>{
    this.setState({email:e.target.value})
  }

  
  render() {
    // const rendernomes = this.state.name.map((nomes)=>{
    //   return <p>{nomes.name}</p>
    // })
    return (
      <div>
        <div>
          <input type="text" placeholder="Nome" 
            value={this.state.name} 
            onChange={this.handlename}
          />
        </div>
          <input type="text" placeholder="E-mail" 
          value={this.state.email}
          onChange={this.handleemail}
          />
        <button>Criar Usuario</button>
       <div>
        <button>trocar de teala</button>
        </div>  
        <div>
          {/* <p>{rendernomes}</p> */}
        </div>
      </div>
    )
  }
}

