import { Request, Response } from "express";
import { connection } from "../data/connection";
import { product } from "../types";

export default async function createProduct(req: Request, res:Response): Promise<void>{
    let statusCode = 400
    try {
        const {name, price, image_url} = req.body

        if (!name || !price || !image_url) {
            statusCode = 422
            throw new Error("'name', 'price' e 'url' são obrigatórios");
         }

         const id: string = Date.now().toString()

         const newProduct: product = {id, name, price, image_url}

         await connection('labecommerce_products').insert(newProduct)

         res.status(201).send("Produto registrado com sucesso")

    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }

}