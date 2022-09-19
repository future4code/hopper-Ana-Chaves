type Person = {
    id:any,
    name:string ,
    phone: number ,
    email: string ,
    website: string,
    post: Posts[]
}
type Posts = {
    id:any,
    title:string,
    body:string,
    userId:number,
}

export const users:Person[] =[ 
    {
        id: "aj213213" ,
        name: "Ana" ,
        phone: 31991559152 ,
        email: "anachaves@gmail.com" ,
        website: "anachaves.com",
        post:[{
            id: 1,
            title: "Primeiro post",
            body:"Ola tudo bem?",
            userId: 1
        }]
    },
    {
        id: "akl213213" ,
        name: "Fernando" ,
        phone: 3138516772,
        email: "Fernando@gmail.com" ,
        website: "fernando.com",
        post:[{
            id: 2,
            title: "Segundo post",
            body:"Estou bem e você?",
            userId: 2
        }]
    }
]

