
import connection from "./connection";


const createTableUser = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS to_do_User(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            nickname VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL
            );
        `)

        console.log("Tabela User criada com sucesso")
    } catch (error:any) {
        console.log("Error ao criar tabela")
        console.log(error.sqlMessage)
    }
}

const createTableTask =async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS to_do_Task(
            id VARCHAR(255) PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            limitDate VARCHAR(255),
            status ENUM("to_do", "doing" , "done"),
            user_id VARCHAR(255),
            FOREIGN KEY (user_id) REFERENCES to_do_User(id)
            );
        `)

        console.log("Tabela Task criada com sucesso")

    } catch (error:any) {
        console.log("Error ao criar tabela")
        console.log(error.sqlMessage)
    }
}

createTableUser()
createTableTask()