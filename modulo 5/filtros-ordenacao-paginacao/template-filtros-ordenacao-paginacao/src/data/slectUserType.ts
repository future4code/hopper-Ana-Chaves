import { connection } from "./connection";

export async function selectUserType (type:string):Promise<any> {
    const result = await connection("aula48_exercicio")
        .where( {type: type})

        return result
}