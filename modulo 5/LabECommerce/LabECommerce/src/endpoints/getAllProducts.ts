import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function getAllProduct(req:Request, res:Response): Promise<void>{
    let statusCode = 400
    try {
        const products = await connection('labecommerce_products')

        res.status(200).send(products)

    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }
}