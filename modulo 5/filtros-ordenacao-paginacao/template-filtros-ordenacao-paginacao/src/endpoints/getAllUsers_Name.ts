import { Request, Response } from "express"
import { selectUserName } from "../data/selectUserName"


export async function getAllUserName(
   req: Request,
   res: Response
): Promise<void> {
   try {
      let name = req.query.name as string

      if(!name){
         name = "%"
      }

      const user = await selectUserName(name)

      res.status(200).send(user)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}

