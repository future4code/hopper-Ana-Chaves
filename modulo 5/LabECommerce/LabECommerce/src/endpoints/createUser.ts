import { Request, Response } from "express";
import { connection } from "../data/connection";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   let statusCode = 400
   try {
      

      const { name,email, password, } = req.body

      if (!name || !email || !password) {
         statusCode = 422
         throw new Error("'name', 'email' e 'password' são obrigatórios");
         
      }

      const id: string = Date.now().toString()

      const newUser: user = { id, name, email, password }

      await connection('labecommerce_users').insert(newUser)

      res.status(201).send("Usuário criado!")

   } catch (error:any) {
      res.status(statusCode).send(error.message)

   }
}