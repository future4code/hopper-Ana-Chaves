import app from './app'
import moment from 'moment'
import {Request, Response} from 'express'
import connection from './connection'
import { v4 as generateId} from 'uuid'
import { TASK, Task, User } from './type'





app.post("/user" , async (req:Request, res:Response)=>{
    let errorCode = 400
    try {
        const {name, nickname, email} = req.body

        if (!name || !nickname || !email) {
            errorCode = 404
            throw new Error("Os campos name, nickname e email são obrigatórios");
        }

        const newUser: User = {
            id: generateId(),
            name,
            nickname,
            email
        }

        await connection.raw(`
            INSERT INTO to_do_User(id,name,nickname,email)
            VALUES("${newUser.id}", "${newUser.name}", "${newUser.nickname}", "${newUser.email}")
        `)

      
        res.status(201).send(newUser)

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

app.get("/user/:id", async (req:Request, res:Response)=>{
    let errorCode = 400
    try {
        const id = req.params.id

        const user = await connection.raw(`
            SELECT 
            u.id,
            u.nickname
            FROM to_do_User as u
            WHERE id = "${id}"
        `)

        if (user[0].length === 0) {
            errorCode = 404
            throw new Error("Usuario não encontrado");
        }

        res.status(200).send(user[0])

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

app.put("/user/edit/:id" , async (req:Request, res:Response)=>{
    let errorCode = 400
    try {
        const id = req.params.id
        const{name,nickname,email} = req.body

        if (!nickname ) {
            errorCode = 409
            throw new Error("O campo nickname de se preenchido");
        }

        const user = await connection.raw(`
            SELECT * FROM to_do_User
            WHERE id = "${id}"
        `)

        if (user[0].length === 0) {
            errorCode = 404
            throw new Error("Usuario não encontrado");
        }

        await connection.raw(`
            UPDATE to_do_User
            SET nickname = "${nickname}"
            WHERE id = "${id}"
        `)


        res.status(200).send("Alteração realizada com suscesso")
        
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

app.post("/task",async (req:Request, res:Response) => {
    let errorCode = 400
    try {
        const {title, description,limitDate,user_id} = req.body

        if (!title || !description || !limitDate) {
            errorCode = 409
            throw new Error("Os campos title e description e limiteDate são obrigatórios");
            
        }

        const newTask: Task = {
            title,
            description,
            limitDate: moment(limitDate, 'DD/MM/YYYY').format('YYYY/MM/DD'),
            id: generateId(),
            user_id,
            status: TASK.TO_DO,
            
        }

        await connection.raw(`
            INSERT INTO to_do_Task(title,description,limitDate,id,status,user_id)
            VALUES(  
                id = "${newTask.id}",
                title = "${newTask.title}", 
                description = "${newTask.description}",
                limitDate = "${newTask.limitDate}",
                status = "${newTask.status}",
                user_id = "${newTask.user_id}"
            );
        `)

        res.status(200).send(newTask)
        
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

app.get("/task/:id" ,async (req:Request, res:Response) => {
    let errorCode = 400
    try {
        const id = req.params

        const task = await connection.raw(`
            SELECT * FROM to_do_Task
            WHERE id = "${id}"
        `)

        if (task[0].length === 0) {
            errorCode = 404
            throw new Error("Usuario não encontrado");
        }

        res.status(201).send(task)


    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
    
})



