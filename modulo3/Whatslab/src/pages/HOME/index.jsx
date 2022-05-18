import React, {useState} from 'react'
import { Card } from '../../Component/Card'
import styled from 'styled-components'
import { Imagemback } from '../../Component/assets'



const Escopo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height:800px;
  width: 30% ;
  margin: auto;
  justify-content:space-between;
  margin-top: 60px;
  border-radius: 70px; 
`
const Title = styled.h1`
position: relative;
bottom: 90vh;
`
const Button = styled.button`
  padding: 12px;
  border:none;
  border-radius: 5px;
   
`
const InputUser = styled.input`
  padding: 12px;
  border-radius: 5px;
  border:none; 
  
`
const InputMessage = styled.input`
  padding: 12px;
  border:none;
  border-radius: 5px;
`
const Input = styled.div`
  position: relative;
  bottom: 15vh;
  word-wrap: break-word;

`


function HOME() {
  const [user, setUser] = useState()
  const [message, setMessage] = useState()
  const [users, setUsers] = useState([])
  

function addUser(){
  const newUser = {
   name: user,
   menssagem: message,
   time: new Date().toLocaleTimeString("pt-br", {
     hour: '2-digit',
     minute: '2-digit',
   })
  }
  setUsers(prevState => [ ...prevState ,newUser  ])
}


  return (
    

    <Escopo>
      <Imagemback />
     
      <div>
      <Title> Whatslab</Title>
      </div>
      <div>
        
        {
        users.map(us => <Card  key={us.time} name={us.name}  menssagem={us.menssagem} time={us.time}/> )
      
        }
      </div>

      <Input>
        
      <InputUser 
        type="text" 
        placeholder="Usuario"
        onChange={e => setUser(e.target.value)}
      />
      <InputMessage
        type="text" 
        placeholder="Digite sua mensagem"
        onChange={e => setMessage (e.target.value)} 
      />
      <Button
        type='button'
        onClick={addUser}>
        Enviar
      </Button>

      
      </Input>
    
        
      
     
    </Escopo>

   
  )
}

export default HOME
