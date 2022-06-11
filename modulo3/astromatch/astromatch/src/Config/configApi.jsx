import axios from "axios"


export default axios.create({
  baseURL: "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person" ,
  headers:{
    Authorization: "ana-chaves-hooper"
  }
})
