import { connection } from "./connection";


export async function selectUserOrder (sort:string, order:string):Promise<any>{
    const result = await connection('aula48_exercicio')
        .orderBy(sort, order);

        return result
}