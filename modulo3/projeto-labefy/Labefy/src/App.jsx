import styled from "styled-components"
import { Container} from './Style'
import HOME from "./Pages/HOME"
import CriarPlaylist from "./Pages/CriarPlaylist"
import Nav from "./Components/Nav"
import { useState , useEffect } from 'react'

export default function App() {
  const[pag,setPag] = useState("lista")

  const handlepage = ()=> {
    setPag(pag === "cadastro" ? "lista" : "cadastro" )}
  // 
  
  // // const[tracks, setTracks] = useState = ([])
  // // const[modal, setModal] =useState("false")
  // // const[input , setInput] =({
  // //   nomeAdicionar: "",
  // //   artistaAdicionar:"",
  // //   urlAdicionar: ""
  // // })

  

  // const handleInput = (e) =>{
  //   e.preventDefault()
  //   setInput((prev) => ({
  //     ...prev,[e.target.value] : e.target.value
  //   }))
  // }

 
  // const handleDeletePlaylist = async(id) => {
  //   try {
  //     await api.delete(`/${id}`)
  //     alert("playlist deletada")
  //     hadleGetAllPlaylist()
  //   } catch (error) {
  //     console.log(error.playlists)
  //   }
  // }
  // // const handleGetTracks = async () =>{
  // //   try {
  // //     const response = await api.get(`/${id}/tracks`)
  // //     setTracks(response.data.result.tracks)
  // //   } catch (error) {
  // //     console.log(error.response)
  // //   }
  // // }
  // // const showModal = () =>{

  // // }

    return(
      <Container>
        <Nav/>
        {
          pag === "cadastro"
            ? <HOME filhoUm={handlepage} />  
            : <CriarPlaylist filhoDois={handlepage} />
        }
        
      </Container>
    )
  }