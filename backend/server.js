import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import userRouter from './src/routes/user.routes.js'
import { connectDB } from "./src/lib/db.js"

dotenv.config()
connectDB()
const app= express();
const PORT=process.env.PORT


app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
    origin:"*",
    methods:["POST","GET"],
    credentials:true
}))
app.use('/api/user',userRouter)


app.listen(PORT,()=>{
    console.log(`server at ${PORT}`)
})

