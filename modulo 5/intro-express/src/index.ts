import express, {request, Request, response, Response} from 'express'
import cors from 'cors'
import {users} from './data'
import { isPostfixUnaryExpression } from 'typescript'



const app = express()

app.use(express.json())
app.use(cors())


app.get("/users", (req:Request, res:Response )=>{
    const usuarios = users.map((user)=>{
        return user
    }).flat(1)
    res.status(200).send(usuarios)
 })

app.get("/users/post", (req:Request, res:Response )=>{
    const usuarios = users.map((user)=>{
        return user.post
    }).flat(1)
    res.status(200).send(usuarios)
 })

app.get("/users/filter", (req:Request, res:Response )=>{
    const userId = req.query.id

    if(!userId) {
        res.status(400).send("Id obrigatório")
    }
    
    const user = users.map((user)=>{
        return user.post
    }).flat(2)

    let posts

    users.forEach(user=>{
        if(user.id === userId){
            posts = user.post
        }
    })
    res.status(200).send(posts)
 })

//  app.delete("/user/delete", (req:Request, res:Response )=>{
//     const userId = request.query.userId
//     const postId = request.query.postId
    
//    if(!userId || !postId){
//     response.status(400).send("Id obrigatório")
//    }

//     const user = users.map((user)=>{
//         return user.post
//     }).flat(1)

//     user.forEach((user)=>{
//         if(user.id === userId){
//             user = user.filter((publi)=>{
//                 if(publi.id !== postId){
//                     return true
//                 }
//             })
//     })
    
//     res.send(user)
//  })


app.listen(3003, ()=>{
    console.log("Server is running in http://localhost:3003")
})