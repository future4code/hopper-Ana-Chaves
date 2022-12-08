import express,{Request, Response} from "express";
import cors from "cors";
import connection from "./database/connection";
import { User } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/funcionarios" , async (req:Request, res:Response)=>{
  let errorCode = 400
  try {
    const search = req.query.search

    if(search) {
      const answer = await connection.raw(`
        SELECT * FROM Funcionarios
        WHERE name = "${search}";
      `)

      res.status(200).send(answer[0])
    }

    const answer = await connection.raw(`
      SELECT * FROM Funcionarios;
    `)

    res.status(200).send(answer[0])

  } catch (error:any) {
      res.status(errorCode).send(error.message)
  }
})

app.post("/funcionarios", async (req:Request, res:Response)=>{
  let errorCode = 400
  try {
    const {name , email} = req.body

    if (!name || !email) {
      errorCode = 409
      throw new Error("O name e email são obrigatorios");
    }

    if (typeof name || typeof email === "string") {
      errorCode = 422
      throw new Error("Nome e email precisam ser uma string");
    }

    if(name.lenght < 4 ){
      errorCode = 409
      throw new Error("Nome deve ter no minimo 4 letras");
    }

    if(!email.includes("@")){
      errorCode = 409
      throw new Error("E-mail invalido");
    }

    const createUser : User = {
      id: 5,
      name,
      email
    }

    await connection.raw(`
      INSERT INTO Funcionarios(id,name,email)
      VALUES("${createUser.id}","${createUser.name}","${createUser.email}")
    `)
    res.status(201).send(createUser)

  } catch (error:any) {
      res.status(errorCode).send(error.message)
  }
})

app.put("/funcionarios/:id", async (req:Request, res:Response)=>{
  let errorCode = 400
  try {
    const id = Number(req.params.id)
    const {name , email} = req.body

    const users = await connection.raw(`
      SELECT * FROM Funcionarios
      WHERE id = "${id}";
    `)

    if (users[0].lenght === 0) {
      errorCode = 404
      throw new Error("User não encontardo");
    }

    if (!email) {
      errorCode = 409
      throw new Error("O name e email são obrigatorios");
    }

    if(!email.includes("@")){
      errorCode = 409
      throw new Error("E-mail invalido");
    }

    await connection.raw(`
      UPDATE Funcionarios
      SET email = "${email}"
      Where id = ${id};
    `)

    res.status(200).send("Email alterado com sucesso")

    
  } catch (error:any) {
      res.status(errorCode).send(error.message)
  }
})

app.delete("/funcionarios/:id" , async (req:Request , res:Response)=>{
  let errorCode = 400
  try {
    const id = Number(req.params.id)

    const users = await connection.raw(`
      SELECT * FROM Funcionarios
      WHERE id = "${id}";
    `)

    if (users[0].lenght === 0) {
      errorCode = 404
      throw new Error("User não encontardo");
    }

    await connection.raw(`
      DELETE FROM Funcionarios
      WHERE id = ${id};
    `)

    res.status(200).send(" User excluido com sucesso")

    
  } catch (error:any) {
      res.status(errorCode).send(error.message)
  }
})

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});