import express from "express";
import cookieparser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors)
app.use(cookieparser())

app.post("",(req,res)=>{
    res.cookie
})

app.listen(3000)