import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function getAllPurchses(req:Request, res:Response): Promise<void>{
    let statusCode = 400
    try {

        const user_id = req.params

        const purchases = await connection('labecommerce_purchases')
        .where({user_id: `${user_id}`})

        // if (purchases.length === 0 ) {
        //     statusCode  = 404
        //     throw new Error("User not found");
            
        // }

        res.status(200).send(purchases)

    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }
}