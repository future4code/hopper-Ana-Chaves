import { Request, Response } from "express"
import { selectUserOrder } from "../data/selectUserOrder"


export const getAllOrder = async(req:Request, res: Response):Promise<any> =>{
    let statusCode = 500
    try {
        let sort = req.query.sort as string
        let order = req.query.order as string

        if (!sort || order) {
            statusCode = 409
            throw new Error("Os campos sort e order devem ser preenchidos!")
            
        }

        sort = sort.toLocaleLowerCase() === "name"? "name" : sort.toLocaleLowerCase() === "type"? "type" : "email"
        order = order.toLocaleUpperCase() === "DESC"? "DESC" : "ASC"

        const user = await selectUserOrder(sort, order)
            
        
        res.status(200).send(user)
        
    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }
}

