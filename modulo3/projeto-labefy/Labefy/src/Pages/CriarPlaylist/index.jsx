import React from 'react'
import { useState , useEffect } from 'react'
import api from "../../Config/configApi"
import styled from 'styled-components'
import { Input , Buton} from './style'


export default function() {
  const[nome, setNome] = useState("")
  
 
  const handleCreatPlaylist = async () =>{
    const body = {
      name: nome
    }
    try{
      await api.post("/", body)
      alert("Criada com sucesso")
      handleGetAllPlaylist()
    }catch(error){
      if (error.response.data.message){
        alert(error.response.data.message)
      }
    } finally{
      setNome("")
    }
  }

  return (
    <div>
      <input type="text" placeholder='Nome da Playlist' onChange={e => setNome(e.target.value)} />
      <button onClick={handleCreatPlaylist}>Criar</button>

    </div>
  )
}
