import express, { Request, Response } from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

type Extrato = {
    valor: number,
    data: Date,
    descrcao: string
}

type account = {
    name: string
    cpf: number
    dataDenascimento: Date
    saldo: number
    extrato?: Array<Extrato>
}

const clients:account[] =  []

app.post('/client/create' , (req:Request, res:Response)=>{
    let erroCode = 500
    try {
        const {name, cpf, dataDenascimento } = req.body
        
        const[day, month, year] = dataDenascimento.toString().split("/")

        const dataNascimento: Date = new Date(`${year}-${month}-${day}`)

        const dataMilisegundos: number = Date.now() - dataNascimento.getTime()

        const dataEmAnos: number = dataMilisegundos / 1000 /60 / 60 / 24 / 365

        if (dataEmAnos < 18) {
            erroCode = 406
            throw new Error("Sua Idade de ser maior que 18 anos");
        }

        const accountExists = clients.find(c=> c.cpf === cpf)

        if (accountExists) {
            erroCode = 409
            throw new Error("cpf já existe");
        }

        const newAccount = {
            name,
            cpf,
            dataDenascimento: new Date(dataDenascimento),
            saldo: 0,
            extrato: []
        }

        clients.push(newAccount)

        res.status(201).send(clients)
        
    } catch (error:any) {
        res.status(erroCode).send(error.message)
    }
} )

app.get("/client" , (req:Request , res:Response)=>{
    let erroCode= 500
    try {
        const name = req.params.name
        const cpf = Number(req.params.cpf)

        const nameExists = clients.find(c=> c.name === name)  
        const cpfExists = clients.filter(c=> c.cpf === cpf)

        if (!nameExists || !cpfExists) {
            erroCode = 404
            throw new Error("User not found");
        }

        res.status(200).send()

    } catch (error:any) {
        res.status(erroCode).send(error.message)
        
    }
})

app.put("/client/:cpf" , (req:Request, res:Response)=>{
    let errorCode= 500
    try {
        
    } catch (error:any) {
        res.status(errorCode).send(error.message)
        
    }
})
















app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})