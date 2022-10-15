import { connection } from "./connection";

export async function selectUserName(name:string):Promise<any> {
    const result = await connection("aula48_exercicio")
        .where("name", "LIKE", `${name}`);

        return result
}