import api from "../../Config/configApi"
import { useState , useEffect } from 'react'
import { Div , Title , Container , Li} from "./styles"
import Card from "../../Components/CardPlaylist"


export default function () {
  const[playlists, setPlaylists] = useState([])

useEffect(() => {
  handleGetAllPlaylist()
}, [])

const handleGetAllPlaylist = async () =>{
  try {
    const response = await api.get("/")
    setPlaylists(response.data.result.list)
  } catch (error) {
  console.log()  
  }
}
  return (
    <Container>
    <Title>Playlists</Title>
    <Div>
      {
        playlists.map((playlist) => {
          <Card titulo ={playlist.name} />
        })
      }
    
      {
        playlists.map((playlist) =>{
          return(
            <ul key= {playlist.id}>
              <Li><Card titulo={playlist.name}/></Li>
            </ul>
          )
        })
      }
    </Div>
    </Container>
  )
}


// {playlists.map ((playlist) =>{
//   return (
//     <div key = {playlist.id}>
//       <p>{playlist.name}</p>
//         <button onClick={()  =>{
//           handleDeletePlaylist(playlist.id)
//         }}>deletar</button>
//         <button onClick={() =>{
//           handleGetTracks(result.id)
//         }}>ver playlist</button>