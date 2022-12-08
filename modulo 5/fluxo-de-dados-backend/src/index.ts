import express, {Request, Response} from 'express'
import cors from 'cors'
import { v4 as generateId} from 'uuid'
import { produtos } from './data'
import Produto from './model/Produtos'


const app = express()

app.use(express.json())
app.use(cors())

//exercio 1
    app.get("/teste" , (req:Request, res:Response)=>{
        res.send(200).json("ok")
    })
//execicio 3 
    app.post("/produtos/create" , (req:Request, res:Response)=>{
       try{
        const {name, price} = req.body

        if(!name || !price){
            throw new Error("falta 'name' and/or 'price' ")
        }
        if(typeof name !== "string"){
            throw new Error("'name' deve ser uma string ")
        }
        if(typeof price !== "number"){
            throw new Error("'price' deve ser um number ")
        }
        if(price <= 0 ){
            throw new Error("'price' deve ser maior que 0 ")
        }

        const newProduct:Produto = {
            id: generateId(),
            name,
            price
        }

        produtos.push(newProduct)

        res.json(produtos)
      }catch(error:any){
        switch (error.message) {
            case "falta 'name' and/or 'price'":
                res.status(422)
                break;
            case "'name' deve ser uma string ":
                res.status(422)
                break;
            case "'price' deve ser um number":
                res.status(422)
                break;
            case "'price' deve ser maior que 0":
                res.status(422)
                break;
        
            default:
                res.status(500)
                
        }
        res.send(error.message || "Erro inesperado")
      }
    })
       
       

//exercicio 4
   app.get("/produtos" , (req:Request, res:Response)=>{
        return res.status(200).json(produtos)

   })     
//exercicio 5
   app.put("/produtos/edit", (req:Request, res:Response )=>{
    try{
        const price = req.body
        const id = req.params.id

        if (!price) {
            throw new Error("falta o 'price' ");
        }
        if (typeof price !== "number") {
            throw new Error("'price' deve ser um number");
        }
        if (price <= 0) {
            throw new Error("'price' deve ser maior que 0");
        }

        let productExists = false

        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].id === id) {
              produtos[i].price = price
              productExists = true
            }
          }

        if (!productExists) {
            throw new Error("Produto não encontrado")
         } 
    
        res.send(produtos)

    }catch(error:any){
        switch (error.message) {
            case "falta o 'price' ":
                res.status(422)
                break;
            case "'price' deve ser um number":
                res.status(422)
                break;
            case "'price' deve ser maior que 0":
                res.status(422)
                break;
            case "Produto não encontrado":
                res.status(404)
                break;
        
            default:
                res.status(500)
        }

        res.send(error.message || "Erro inesperado")
    }
 
   })

// exercício 6

app.delete("/products/delete", (req: Request, res: Response) => {
    try {
      const id = req.params.id
  
      let productExists = false
  
      for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id === id) {
          produtos.splice(i, 1)
          productExists = true
        }
      }
  
      if (!productExists) {
        throw new Error("Produto não encontrado")
      }
  
      res.send(produtos)
  
    } catch (error: any) {
      switch (error.message) {
        case "Produto não encontrado":
          res.status(404)
          break
        default:
          res.status(500)
      }
      
      res.send(error.message || "Erro inesperado")
    }
  })

app.listen(3003,() =>{
    console.log("Server is running in http://localhost:3003")
})