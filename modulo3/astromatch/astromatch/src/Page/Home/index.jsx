import axios from "axios"
import { useState , useEffect} from "react"
import api from "../../Config/configApi"

export default function Home() {
  const[perfil, setPerfil] = useState("")

  useEffect(() => {
    getPerfil()
  }, [])
  

  const getPerfil = async() =>{
   
      const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
      try {
        const response = await axios.get(url, {
        headers:{
          Autorization: 'ana-chaves-hoper'
        }
      })
        setPerfil(response)
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div>
      <h1>Home</h1>
     
    </div>
  )
}
