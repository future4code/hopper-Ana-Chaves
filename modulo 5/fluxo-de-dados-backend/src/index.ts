import express, {Request, Response} from 'express'
import cors from 'cors'
import { v4 as generateId} from 'uuid'
import { produtos } from './data'


const app = express()

app.use(express.json())
app.use(cors())

//exercio 1
    app.get("/teste" , (req:Request, res:Response)=>{
        res.send(200).json("ok")
    })
//execicio 3
    app.post("/produtos/create" , (req:Request, res:Response)=>{
        const {name, price} = req.body

        const newProduct = {
            id: generateId(),
            name,
            price
        }

        produtos.push(newProduct)

        return res.status(201).json(produtos)
    })
//exercicio 4
   app.get("/produtos" , (req:Request, res:Response)=>{
        res.status(200).json(produtos)
   })     
//exercicio 5
   app.put("/produtos/edit", (req:Request, res:Response ,)=>{
    const price = req.body
    const id = req.params.id

    // const newprice = produtos.id.find(produto=> produto.id === id)

    const newProduct = {

    }
   })

app.listen(3003,() =>{
    console.log("Server is running in http://localhost:3003")
})