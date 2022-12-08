import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function getAllUser (req: Request, res:Response): Promise <void>{
    let statusCode = 400
    
    try {
        const users = await connection('labecommerce_users')

        res.status(200).send(users)

    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }
}