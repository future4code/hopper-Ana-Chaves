import { Request, Response } from "express"
import { selectUserType } from "../data/slectUserType"

export async function getAllUserType(
    req: Request,
    res: Response
 ): Promise<void>{
    let statusCode = 400
    try {
        let type = req.params.type as string

        if (!type) {
            type = "%"
        }

        const user = await selectUserType(type)

        res.status(200).send(user)

    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }
 }