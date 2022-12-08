import { connection } from "./connection"



const createTableUser = async () => {
   try {
      await connection.raw(`
         CREATE TABLE IF NOT EXISTS labecommerce_users (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );
      
      `)

      console.log("Tabela criada com sucesso")
      
   } catch (error:any) {
      console.log("Error ao criar tabela")
      console.log(error.sqlMessage)
   }
}
const createTableProduct = async () => {
   try {
      await connection.raw(`
         CREATE TABLE IF NOT EXISTS labecommerce_products (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         price DOUBLE NOT NULL,
         image_url VARCHAR(255) NOT NULL
      );
      
      `)

      console.log("Tabela criada com sucesso")
      
   } catch (error:any) {
      console.log("Error ao criar tabela")
      console.log(error.sqlMessage)
   }
}
const createTablePurchases = async () => {
   try {
      await connection.raw(`
         CREATE TABLE IF NOT EXISTS labecommerce_purchases (
         id VARCHAR(255) PRIMARY KEY,
         user_id VARCHAR(255),
         product_id VARCHAR(255),
         quantity DOUBLE NOT NULL,
         total_price DOUBLE NOT NULL,
         FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
         FOREIGN KEY (product_id) REFERENCES labecommerce_products(id)
      );
      
      `)

      console.log("Tabela criada com sucesso")
      
   } catch (error:any) {
      console.log("Error ao criar tabela")
      console.log(error.sqlMessage)
   }
}

createTablePurchases()
   

      
 

