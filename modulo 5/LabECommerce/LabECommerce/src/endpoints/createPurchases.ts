import { Request, Response } from "express";
import { connection } from "../data/connection";
import { purches } from "../types";

export default async function createPurchases(req:Request, res:Response): Promise<void>{
    let statusCode = 400
    try {
        const {user_id, product_id, quantity} = req.body

        if (!user_id || !product_id || !quantity) {
            statusCode = 422
            throw new Error("'user_id', 'product_id' e 'quantity' são obrigatórios");
         }

         const id: string = Date.now().toString()

         const total_price = quantity // funcionalidade não concluida

         const newPurche:purches = {id, user_id, product_id, quantity, total_price}

         await connection('labecommerce_purchases').insert(newPurche)

         res.status(201).send("Compra registrada com sucesso")

    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }
}