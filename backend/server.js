import express from "express";
import dotenv from 'dotenv'
// import { sql } from "./config/db";

dotenv.config()

const app = express();

console.log('My Port:', process.env.PORT)

// await function initDB(){
//     try {
//        await sql`CREATE TABLE IF NOT EXIST transactions(
//        id SERIAL PRIMARY KEY ,
//        user_id , 
//        title ,
//         amount ,
//        )`
//     } catch(){

//     }
// }

app.get("/", (req, res) => {
  res.send('Working now')
});

app.listen(5001, () => {
  console.log("Server started at port 5001");
});
 
