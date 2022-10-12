import { StringDecoder } from "string_decoder"

 export enum TASK {
    TO_DO = "to_do",
    DOING = "doing",
    DONE = "done"
}

export type User = {
    id: string,
    name:string,
    nickname:string,
    email:string
}

export type Task = {
    title: string,
    description: string
    limitDate:string
    id:string
    status: TASK
    user_id: string
}