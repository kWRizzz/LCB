import express from "express";
import cookieparser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"
import userRouter from "./src/routes/auth.route.js"


dotenv.config()

const app = express()
const PORT= process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors)
app.use(cookieparser())

app.use("/api/user", userRouter)



app.post("",(req,res)=>{
    res.cookie
})

app.listen(PORT)